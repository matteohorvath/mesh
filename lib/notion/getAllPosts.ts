/* eslint-disable @typescript-eslint/no-explicit-any */
import { blogConfig } from "../blog-config";
import { idToUuid } from "notion-utils";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import api from "../notion-api";
import getAllPageIds from "./getAllPageIds";
import getPageProperties from "./getPageProperties";
import filterPublishedPosts from "./filterPublishedPosts";

dayjs.extend(utc);
dayjs.extend(timezone);

interface GetAllPostsOptions {
  includePages?: boolean;
}

export async function getAllPosts({
  includePages = false,
}: GetAllPostsOptions = {}) {
  const notionPageId = process.env.NOTION_PAGE_ID;
  if (!notionPageId) {
    console.error("NOTION_PAGE_ID environment variable is not set");
    return [];
  }

  const id = idToUuid(notionPageId);

  try {
    const response = await api.getPage(id);

    const collection = Object.values(response.collection)[0]?.value;
    const collectionQuery = response.collection_query;
    const block = response.block;
    const schema = collection?.schema;

    const rawMetadata = block[id].value;

    // Check Type
    if (
      rawMetadata?.type !== "collection_view_page" &&
      rawMetadata?.type !== "collection_view"
    ) {
      console.log(`pageId "${id}" is not a database`);
      return [];
    }

    // Construct Data
    const pageIds = getAllPageIds(collectionQuery);
    const data = [];

    for (let i = 0; i < pageIds.length; i++) {
      const pageId = pageIds[i];
      const properties =
        (await getPageProperties(pageId, block as any, schema)) || {};

      // Add fullwidth to properties
      properties.fullWidth =
        block[pageId].value?.format?.page_full_width ?? false;

      // Convert date (with timezone) to unix milliseconds timestamp
      const dateProperty = properties.date as any;
      properties.date = (
        dateProperty?.start_date
          ? dayjs.tz(dateProperty.start_date, blogConfig.timezone || "UTC")
          : dayjs(block[pageId].value?.created_time)
      ).valueOf();

      data.push(properties);
    }

    // Remove all the items that don't meet requirements
    const posts = filterPublishedPosts({ posts: data, includePages });

    // Sort by date
    if (blogConfig.sortByDate) {
      posts.sort((a, b) => (b.date as number) - (a.date as number));
    }

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
