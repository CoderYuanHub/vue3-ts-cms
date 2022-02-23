// 开发环境： development
// 生产环境： production
// 测试环境

let BASE_URL = "/";
const BASE_TIMEOUT = 5000;

if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://152.136.185.210:5000";
} else if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://123.207.32.32:8000";
} else {
  BASE_URL = "http://localhost";
}

export { BASE_URL, BASE_TIMEOUT };
