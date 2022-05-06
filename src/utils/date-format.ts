const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc);
export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
): string {
  return dayjs.utc(utcString).format(format);
}
