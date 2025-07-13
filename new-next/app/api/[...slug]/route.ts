import { NextRequest } from "next/server";
import { getPayload } from "payload";
import config from "../../../payload.config";

export async function GET(request: NextRequest) {
  const payload = await getPayload({ config });

  // Extract the slug from the URL
  const segments = request.url.split("/api/")[1]?.split("/");

  if (!segments || segments.length === 0) {
    return Response.json({ error: "Invalid API endpoint" }, { status: 400 });
  }

  const collection = segments[0];
  const id = segments[1];

  try {
    if (id) {
      // Get single item
      const result = await payload.findByID({
        collection,
        id,
      });
      return Response.json(result);
    } else {
      // Get collection
      const result = await payload.find({
        collection,
      });
      return Response.json(result);
    }
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const payload = await getPayload({ config });

  const segments = request.url.split("/api/")[1]?.split("/");
  if (!segments || segments.length === 0) {
    return Response.json({ error: "Invalid API endpoint" }, { status: 400 });
  }

  const collection = segments[0];
  const body = await request.json();

  try {
    const result = await payload.create({
      collection,
      data: body,
    });
    return Response.json(result);
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: "Failed to create data" }, { status: 500 });
  }
}
