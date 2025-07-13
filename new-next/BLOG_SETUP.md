# Blog Setup Guide with PayloadCMS

This guide will help you set up and configure the blog functionality that has been added to your mesh website using PayloadCMS.

## 🚀 What's Been Added

Your website now includes:
- **PayloadCMS 3.0** integration with Next.js
- **Blog collection** with rich text content
- **Blog listing page** at `/blog`
- **Individual blog post pages** at `/blog/[slug]`
- **Admin interface** for content management
- **API routes** for data fetching
- **Navigation update** with blog link

## 📋 Prerequisites

Before you can use the blog functionality, you need to set up:

1. **MongoDB Database** (required for PayloadCMS)
2. **Environment Variables**

## 🔧 Setup Steps

### 1. Database Setup

PayloadCMS requires a MongoDB database. You have several options:

#### Option A: Local MongoDB
```bash
# Install MongoDB locally
brew install mongodb/brew/mongodb-community
brew services start mongodb-community
```

#### Option B: MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string

#### Option C: Railway (Recommended for development)
1. Go to [Railway](https://railway.app)
2. Create a new project
3. Add a MongoDB service
4. Copy the connection string

### 2. Environment Variables

Create a `.env.local` file in your project root:

```env
# Database
DATABASE_URL=mongodb://localhost:27017/mesh-blog
# For Atlas: mongodb+srv://username:password@cluster.mongodb.net/mesh-blog
# For Railway: mongodb://username:password@host:port/database

# PayloadCMS
PAYLOAD_SECRET=your-secret-key-here
NEXT_PUBLIC_PAYLOAD_URL=http://localhost:3000

# Generate a secret key with:
# openssl rand -base64 32
```

### 3. First Run

```bash
# Install dependencies (if not already done)
npm install

# Start the development server
npm run dev
```

### 4. Access the Admin Interface

1. Go to `http://localhost:3000/admin`
2. Create your first admin user
3. Log in to the admin panel

## 📝 Creating Your First Blog Post

1. **Access Admin**: Go to `http://localhost:3000/admin`
2. **Navigate to Posts**: Click on "Blog Posts" in the sidebar
3. **Create New Post**: Click "Add New"
4. **Fill in the details**:
   - **Title**: Your blog post title
   - **Slug**: URL-friendly version (e.g., "my-first-post")
   - **Excerpt**: Short description
   - **Content**: Rich text content
   - **Author**: Author name (defaults to "mesh team")
   - **Tags**: Comma-separated tags
   - **Published Date**: When to publish
   - **Status**: Set to "Published" to make it live

5. **Save**: Click "Save" to create the post

## 🎨 Blog Features

### Blog Listing Page (`/blog`)
- Shows all published blog posts
- Responsive grid layout
- Post cards with title, excerpt, author, date, and tags
- Automatic sorting by publish date (newest first)

### Individual Blog Post (`/blog/[slug]`)
- Full blog post content
- Rich text rendering
- Author and publish date
- Tag display
- Back to blog navigation

### Admin Interface (`/admin`)
- Content management dashboard
- Rich text editor with Lexical
- Draft/Published status
- Post scheduling
- Tag management

## 🔧 Customization

### Styling
The blog uses Tailwind CSS classes. You can customize:
- Colors and fonts in `tailwind.config.ts`
- Layout in blog page components
- Card styles in `components/blog-post-card.tsx`

### Content Structure
Modify the blog post schema in `payload.config.ts`:
```typescript
// Add new fields to the posts collection
{
  name: 'featuredImage',
  label: 'Featured Image',
  type: 'upload',
  relationTo: 'media', // You'd need to add a media collection
},
```

### Rich Text Rendering
The blog uses Lexical for rich text. For advanced rendering:
1. Install `@payloadcms/richtext-lexical`
2. Configure custom components in `payload.config.ts`
3. Update `components/blog-content.tsx` for custom rendering

## 🚀 Deployment

### Environment Variables for Production
Make sure to set these environment variables in your production environment:
- `DATABASE_URL`: Your production MongoDB connection string
- `PAYLOAD_SECRET`: A secure secret key
- `NEXT_PUBLIC_PAYLOAD_URL`: Your production URL

### Build Command
```bash
npm run build
```

### Vercel Deployment
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

## 📊 API Endpoints

The blog provides these API endpoints:
- `GET /api/posts` - List all published posts
- `GET /api/posts/[id]` - Get specific post
- `POST /api/posts` - Create new post (admin only)

## 🔒 Security & Access

### Admin Access
- Admin interface is protected by PayloadCMS authentication
- Only authenticated users can create/edit posts
- Public API endpoints only show published posts

### Content Moderation
- Posts have "Draft" and "Published" status
- Only "Published" posts appear on the public blog
- Scheduling support with `publishedAt` field

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check your `DATABASE_URL` in `.env.local`
   - Ensure MongoDB is running
   - Verify network connectivity

2. **Admin Login Issues**
   - Clear browser cache
   - Check `PAYLOAD_SECRET` environment variable
   - Try creating a new admin user

3. **Build Errors**
   - Run `npm run generate:types` to generate TypeScript types
   - Check for TypeScript errors in your code

4. **Rich Text Not Rendering**
   - Lexical content needs proper parsing
   - Check `components/blog-content.tsx` for rendering logic

### Need Help?
- Check the [PayloadCMS documentation](https://payloadcms.com/docs)
- Join the [PayloadCMS Discord](https://discord.gg/payloadcms)
- Review the [Next.js documentation](https://nextjs.org/docs)

## 🎯 Next Steps

1. **Create your first blog post**
2. **Customize the styling** to match your brand
3. **Add more fields** like featured images or categories
4. **Set up email notifications** for new posts
5. **Add search functionality**
6. **Implement RSS feed**
7. **Add commenting system**

Happy blogging! 🎉 