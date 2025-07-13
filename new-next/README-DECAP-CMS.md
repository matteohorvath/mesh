# Decap CMS Configuration Guide

## Overview

Your Next.js site is now configured with [Decap CMS](https://decapcms.org/docs/intro/) for content management. This guide will help you complete the setup.

## Files Created

- `app/admin/page.tsx` - Admin interface page
- `public/admin/index.html` - Static admin interface
- `public/admin/config.yml` - CMS configuration
- `content/blog/` - Blog posts directory
- `content/pages/` - Pages directory

## Authentication Setup

### Option 1: GitHub Authentication (Recommended)

1. **Create a GitHub OAuth App**:
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Click "New OAuth App"
   - Fill in:
     - Application name: `Your Site Name CMS`
     - Homepage URL: `https://your-domain.com`
     - Authorization callback URL: `https://your-domain.com/admin/`

2. **Update config.yml**:
   ```yaml
   backend:
     name: github
     repo: your-username/your-repo-name
     branch: main
   ```

3. **For Netlify hosting** (easiest):
   - Deploy to Netlify
   - Go to Site settings > Identity
   - Enable Identity service
   - Add GitHub as external provider using your OAuth app credentials

### Option 2: Local Development

For local development, you can use the test backend:

```yaml
# In public/admin/config.yml
backend:
  name: test-repo
```

This allows you to test the CMS interface without authentication.

## Configuration Options

### Blog Collection

The blog collection is configured with these fields:
- **Title**: Post title
- **Date**: Publication date
- **Image**: Featured image (optional)
- **Description**: Post excerpt
- **Author**: Post author
- **Tags**: Post tags (list)
- **Draft**: Draft status
- **Body**: Markdown content

### Pages Collection

For additional pages like About, Contact, etc.

### Media Management

- Images are stored in `public/images/`
- Accessible at `/images/` URL path
- Supported formats: JPG, PNG, GIF, WebP

## Usage

1. **Access CMS**: Navigate to `/admin` on your site
2. **Create Posts**: Click "Blog Posts" → "New Blog Post"
3. **Edit Content**: Click on existing posts to edit
4. **Preview**: Use the preview panel to see changes
5. **Publish**: Save to commit changes to your repository

## Customization

### Adding New Fields

Edit `public/admin/config.yml` to add new fields:

```yaml
fields:
  - { label: "SEO Title", name: "seo_title", widget: "string", required: false }
  - { label: "Categories", name: "categories", widget: "select", options: ["tech", "design", "business"] }
```

### Custom Widgets

Available widgets:
- `string` - Text input
- `text` - Textarea
- `markdown` - Markdown editor
- `image` - Image upload
- `date` - Date picker
- `datetime` - Date and time picker
- `boolean` - Checkbox
- `select` - Dropdown
- `list` - Array of items
- `relation` - Reference to other collections

### Editorial Workflow

Enable content approval workflow:

```yaml
# In config.yml
publish_mode: editorial_workflow
```

This creates three states: Draft, In Review, Ready.

## Next Steps

1. **Update config.yml** with your GitHub repository details
2. **Set up authentication** using one of the methods above
3. **Deploy your site** to your hosting provider
4. **Test the CMS** by creating a new blog post
5. **Customize fields** and collections as needed

## Troubleshooting

- **CMS not loading**: Check browser console for errors
- **Authentication issues**: Verify OAuth app settings
- **File not saving**: Check repository permissions
- **Images not displaying**: Verify media folder paths

## Resources

- [Decap CMS Documentation](https://decapcms.org/docs/intro/)
- [Configuration Reference](https://decapcms.org/docs/configuration-options/)
- [Widget Reference](https://decapcms.org/docs/widgets/)
- [GitHub Authentication](https://decapcms.org/docs/github-backend/) 