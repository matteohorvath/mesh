import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { blogConfig } from "./blog-config";

// Initialize dayjs plugins only once
let initialized = false;
if (!initialized) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  initialized = true;
}

export function formatDate(
  date: number | string | Date,
  format = "MMM DD, YYYY",
) {
  return dayjs(date)
    .tz(blogConfig.timezone || "UTC")
    .format(format);
}

export function formatDatetime(date: number | string | Date) {
  return dayjs(date)
    .tz(blogConfig.timezone || "UTC")
    .format("YYYY-MM-DD HH:mm:ss");
}
