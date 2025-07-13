import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export default buildConfig({
  admin: {
    components: {},
    importMap: {
      baseDir: import.meta.url,
    },
  },
  collections: [
    {
      slug: "posts",
      labels: {
        singular: "Blog Post",
        plural: "Blog Posts",
      },
      access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "slug",
          label: "Slug",
          type: "text",
          required: true,
          unique: true,
          admin: {
            description: "URL-friendly version of the title",
          },
        },
        {
          name: "excerpt",
          label: "Excerpt",
          type: "textarea",
          admin: {
            description: "Short description of the blog post",
          },
        },
        {
          name: "content",
          label: "Content",
          type: "richText",
          required: true,
        },
        {
          name: "publishedAt",
          label: "Published Date",
          type: "date",
          admin: {
            date: {
              pickerAppearance: "dayAndTime",
            },
          },
        },
        {
          name: "author",
          label: "Author",
          type: "text",
          defaultValue: "mesh team",
        },
        {
          name: "tags",
          label: "Tags",
          type: "text",
          hasMany: true,
          admin: {
            description: "Comma-separated tags",
          },
        },
        {
          name: "status",
          label: "Status",
          type: "select",
          options: [
            {
              label: "Draft",
              value: "draft",
            },
            {
              label: "Published",
              value: "published",
            },
          ],
          defaultValue: "draft",
        },
      ],
    },
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "mongodb://localhost:27017/mesh-blog",
  }),
  editor: lexicalEditor(),
  plugins: [],
  secret: process.env.PAYLOAD_SECRET || "your-secret-key",
  typescript: {
    outputFile: "payload-types.ts",
  },
});
