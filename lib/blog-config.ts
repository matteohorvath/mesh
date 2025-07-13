import BLOG from "../blog.config.js";

// Create a deep copy to prevent extensibility issues
const blogConfig = JSON.parse(JSON.stringify(BLOG));

export { blogConfig };
export const config = blogConfig;
export const clientConfig = blogConfig;

export default blogConfig;
