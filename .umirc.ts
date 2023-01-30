import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'yarn',
  mpa:{
    getConfigFromEntryFile:true,
    layout:'@/layouts',
    template:'templates/default.html',
    entry:{
      p1:{describe:'p1'},
      p2:{describe:'p2'}
    },
  }
});
