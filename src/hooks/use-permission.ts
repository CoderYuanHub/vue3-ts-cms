import { useStore } from "@/store";
// 判断按钮的权限
export function usePermission(pageName: string, handleName: string): boolean {
  const store = useStore();
  const { permission } = store.state.login;
  const verifyPermission = `system:${pageName}:${handleName}`;
  return !!permission.find((item) => item === verifyPermission);
}
