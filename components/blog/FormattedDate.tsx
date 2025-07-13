"use client";

import { formatDate } from "@/lib/date-utils";

interface FormattedDateProps {
  date: number | string | Date;
  className?: string;
}

export default function FormattedDate({ date, className }: FormattedDateProps) {
  return (
    <time className={className} dateTime={new Date(date).toISOString()}>
      {formatDate(date)}
    </time>
  );
}
