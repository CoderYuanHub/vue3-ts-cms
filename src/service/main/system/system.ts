/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import hyRequest from "../../index";
import { IDataType } from "@/service/types";

export function getPageListData(url: string, queryParams: any): any {
  return hyRequest.post<IDataType>({
    url,
    data: queryParams
  });
}

export function deletePageData(url: string): any {
  return hyRequest.delete<IDataType>({
    url
  });
}

export function createPageData(url: string, data: any): any {
  return hyRequest.post<IDataType>({
    url,
    data
  });
}

export function editPageData(url: string, data: any): any {
  return hyRequest.patch<IDataType>({
    url,
    data
  });
}
