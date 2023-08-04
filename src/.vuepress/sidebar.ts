import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "intro",
    "slides",
  ],
  "/demo/": "structure",
  "/note/": [
    "",
    {
      text: "春之诗",
      icon: "flower",
      prefix: "spring/",
      collapsible: true,
      children: ["", "catalog", "1", "2", "3"],
    },
    {
      text: "夏之歌",
      icon: "leaf",
      prefix: "summer/",
      collapsible: true,
      children: ["", "1", "2", "3"],
    },
  ],

});
