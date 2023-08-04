import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    link: "/",
  },
  {
    text: "随笔",
    icon: "note",
    prefix: "/note/",
    children: [
      { text: "随笔", link: "", icon: "note", activeMatch: "^/note/$" },
      {
        text: "诗集: 四季",
        children: ["spring/", "summer/"],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
