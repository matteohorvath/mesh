import api from "../notion-api";

export async function getPostBlocks(id: string) {
  try {
    const pageBlock = await api.getPage(id);
    return pageBlock;
  } catch (error) {
    console.error("Error fetching post blocks:", error);
    return null;
  }
}
