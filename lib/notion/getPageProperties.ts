/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTextContent, getDateValue } from "notion-utils";
import api from "../notion-api";

interface BlockValue {
  value?: {
    properties?: Record<string, any>;
    format?: {
      page_full_width?: boolean;
    };
    created_time?: number;
  };
}

interface Block {
  [id: string]: BlockValue;
}

interface Schema {
  [key: string]: {
    type?: string;
    name?: string;
  };
}

interface User {
  id?: string;
  first_name?: string;
  last_name?: string;
  profile_photo?: string;
}

async function getPageProperties(id: string, block: Block, schema: Schema) {
  const rawProperties = Object.entries(block?.[id]?.value?.properties || {});
  const excludeProperties = ["date", "select", "multi_select", "person"];
  const properties: Record<string, any> = {};

  for (let i = 0; i < rawProperties.length; i++) {
    const [key, val] = rawProperties[i];
    properties.id = id;

    if (schema[key]?.type && !excludeProperties.includes(schema[key].type!)) {
      properties[schema[key].name!] = getTextContent(val);
    } else {
      switch (schema[key]?.type) {
        case "date": {
          const dateProperty = getDateValue(val);
          if (dateProperty) {
            delete (dateProperty as any).type;
            properties[schema[key].name!] = dateProperty;
          }
          break;
        }
        case "select":
        case "multi_select": {
          const selects = getTextContent(val);
          if (selects && selects.length > 0) {
            properties[schema[key].name!] = selects.split(",");
          }
          break;
        }
        case "person": {
          const rawUsers = (val as any)?.flat() || [];
          const users: User[] = [];

          for (let i = 0; i < rawUsers.length; i++) {
            if (rawUsers[i]?.[0]?.[1]) {
              const userId = rawUsers[i][0];
              try {
                const res = (await api.getUsers(userId)) as any;
                const resValue =
                  res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value;
                const user: User = {
                  id: resValue?.id,
                  first_name: resValue?.given_name,
                  last_name: resValue?.family_name,
                  profile_photo: resValue?.profile_photo,
                };
                users.push(user);
              } catch (error) {
                console.error("Error fetching user:", error);
              }
            }
          }
          properties[schema[key].name!] = users;
          break;
        }
        default:
          break;
      }
    }
  }

  return properties;
}

export default getPageProperties;
