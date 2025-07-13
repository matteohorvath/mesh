"use client";

import Link from "next/link";
import { blogConfig } from "@/lib/blog-config";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  showNext: boolean;
}

export default function Pagination({ page, showNext }: PaginationProps) {
  const currentPage = page;
  const showPrev = currentPage > 1;

  return (
    <div className="flex justify-between items-center mt-8 mb-8">
      <div className="flex-1">
        {showPrev && (
          <Link
            href={
              currentPage - 1 === 1
                ? blogConfig.path
                : `${blogConfig.path}/page/${currentPage - 1}`
            }
          >
            <Button variant="outline" className="group">
              <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Previous
            </Button>
          </Link>
        )}
      </div>

      <div className="flex-1 text-center">
        <span className="text-sm text-muted-foreground">
          Page {currentPage}
        </span>
      </div>

      <div className="flex-1 flex justify-end">
        {showNext && (
          <Link href={`${blogConfig.path}/page/${currentPage + 1}`}>
            <Button variant="outline" className="group">
              Next
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
