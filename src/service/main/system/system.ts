import hyRequest from "../../index";
import { IDataType } from "@/service/types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getPageListData(url: string, queryParams: any): any {
  return hyRequest.post<IDataType>({
    url,
    data: queryParams
  });
}

export function deletePageData(url: string): any {
  return hyRequest.delete({
    url
  });
}
