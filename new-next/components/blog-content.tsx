import { ReactNode } from "react";

interface BlogContentProps {
  content: any; // PayloadCMS rich text content
  className?: string;
}

export default function BlogContent({
  content,
  className = "",
}: BlogContentProps) {
  if (!content) return null;

  // For now, render as simple HTML
  // In a real implementation, you'd want to properly parse Lexical content
  if (typeof content === "string") {
    return (
      <div
        className={`prose prose-lg max-w-none ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Handle Lexical rich text format
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {/* Rich text content rendering would go here */}
      <p>Rich text content will be rendered here once properly configured</p>
    </div>
  );
}
