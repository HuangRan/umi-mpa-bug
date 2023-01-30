import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'yarn',
  mpa:{
    getConfigFromEntryFile:true,
    entry:{
      index:[
        '@/pages/index.tsx',
        {
          context:{title:'首页'}
        }
      ]
    },
  }
});
