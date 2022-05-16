import YYRequest from "@/service";

enum DashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  addressGoodsSale = "/goods/address/sale"
}

export function getCategoryGoodsCount(): any {
  return YYRequest.get({
    url: DashboardAPI.categoryGoodsCount
  });
}

export function getCategoryGoodsSale(): any {
  return YYRequest.get({
    url: DashboardAPI.categoryGoodsSale
  });
}

export function getCategoryGoodsFavor(): any {
  return YYRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  });
}

export function getAddressGoodsSale(): any {
  return YYRequest.get({
    url: DashboardAPI.addressGoodsSale
  });
}
