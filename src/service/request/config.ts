// 开发环境： development
// 生产环境： production
// 测试环境

let BASE_URL = "/";
const BASE_TIMEOUT = 5000;

if (process.env.NODE_ENV === "production") {
  BASE_URL = "/api";
} else if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api";
} else {
  BASE_URL = "/api";
}

export { BASE_URL, BASE_TIMEOUT };
