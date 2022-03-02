class LocalCache {
  // 设置缓存
  setCache(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  // 获取缓存值
  getCache(key: string): any {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }
  // 移除key缓存
  deleteCache(key: string): void {
    window.localStorage.removeItem(key);
  }
  // 清空缓存
  clearCache(): void {
    window.localStorage.clear();
  }
}

export default new LocalCache();
