// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const chat = () => import("@/views/main/story/chat/chat.vue");
export default {
  path: "/main/story/chat",
  name: "chat",
  component: chat,
  children: []
};
