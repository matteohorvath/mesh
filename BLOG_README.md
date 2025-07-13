# Blog Implementation

This directory contains a complete blog implementation using Notion as a CMS and Next.js with the app router.

## Features

- **Notion CMS Integration**: Uses Notion databases as the content management system
- **Dynamic Routing**: Support for `/blog`, `/blog/[slug]`, `/blog/page/[page]`, `/blog/search`, and `/blog/tag/[tag]`
- **Search Functionality**: Full-text search through blog posts
- **Tag Filtering**: Filter posts by tags
- **Pagination**: Paginated blog post listings
- **Responsive Design**: Mobile-friendly UI using Tailwind CSS
- **Static Generation**: Pre-rendered pages for better performance

## Setup

1. **Environment Variables**: Create a `.env.local` file with:
   ```
   NOTION_PAGE_ID=your_notion_page_id_here
   NOTION_ACCESS_TOKEN=your_notion_access_token_here
   ```

2. **Notion Database Setup**: Create a Notion database with the following properties:
   - `Title` (Title property)
   - `Slug` (Text property) 
   - `Status` (Select property with "Published" option)
   - `Type` (Select property with "Post" and "Page" options)
   - `Date` (Date property)
   - `Summary` (Text property)
   - `Tags` (Multi-select property)

3. **Install Dependencies**: The required dependencies are already added to package.json

## File Structure

```
app/
├── blog/
│   ├── page.tsx                 # Main blog listing page
│   ├── [slug]/
│   │   └── page.tsx            # Individual blog post page
│   ├── page/
│   │   └── [page]/
│   │       └── page.tsx        # Paginated blog listing
│   ├── search/
│   │   └── page.tsx            # Search page
│   └── tag/
│       └── [tag]/
│           └── page.tsx        # Tag filtering page

components/
└── blog/
    ├── BlogPost.tsx            # Blog post list item
    ├── BlogSearch.tsx          # Search component
    ├── FormattedDate.tsx       # Date formatting component
    ├── NotionRenderer.tsx      # Notion content renderer
    ├── Pagination.tsx          # Pagination component
    ├── Post.tsx                # Individual post component
    └── Tags.tsx                # Tag filtering component

lib/
├── blog-config.ts              # Blog configuration
├── date-utils.ts               # Date utilities
├── notion-api.ts               # Notion API client
├── notion.ts                   # Main notion exports
└── notion/
    ├── getAllPosts.ts          # Fetch all posts from Notion
    ├── getAllPageIds.ts        # Get page IDs from collection
    ├── getAllTagsFromPosts.ts  # Extract tags from posts
    ├── filterPublishedPosts.ts # Filter published posts
    ├── getPageProperties.ts    # Get page properties
    └── getPostBlocks.ts        # Get post content blocks
```

## Usage

1. **Navigate to Blog**: Visit `/blog` to see the blog listing
2. **View Individual Posts**: Click on any post to view the full content
3. **Search Posts**: Use the search page at `/blog/search`
4. **Filter by Tags**: Click on tags to filter posts
5. **Pagination**: Use pagination controls to navigate through posts

## Configuration

The blog configuration can be modified in `blog.config.js`:

- `postsPerPage`: Number of posts per page (default: 7)
- `sortByDate`: Sort posts by date (default: true)
- `path`: Blog path prefix (default: "/blog")
- Other styling and metadata options

## Navigation

The blog has been integrated into the main site navigation. A "Blog" link is available in the navigation menu that redirects to the blog section.

## Styling

The blog uses the existing design system with:
- Tailwind CSS for styling
- Consistent with the main site's design
- Dark theme support
- Responsive design principles
- Notion content rendering with proper styling 