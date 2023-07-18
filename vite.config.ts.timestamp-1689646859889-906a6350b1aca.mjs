// vite.config.ts
import { defineConfig, loadEnv } from "file:///C:/Users/70434/Desktop/pryun-admin/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/70434/Desktop/pryun-admin/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///C:/Users/70434/Desktop/pryun-admin/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/70434/Desktop/pryun-admin/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///C:/Users/70434/Desktop/pryun-admin/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var proxyOptions = {
  // 开发环境
  development: {
    "/api-admin-dev": {
      target: "https://api.pryun.vip",
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp("^/api-admin-dev"), "")
    }
  },
  // 生产环境
  production: {
    "/api-admin-pro": {
      target: "https://api.pryun.vip",
      changeOrigin: true,
      rewrite: (path) => path.replace(new RegExp("^/api-admin-pro"), "")
    }
  }
};
var vite_config_default = defineConfig(({ mode }) => {
  const { VITE_BASE_URL = "" } = loadEnv(mode, "./");
  const base = VITE_BASE_URL ? `/${VITE_BASE_URL}/` : "";
  const outDir = `dist_${VITE_BASE_URL}`;
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    base,
    build: { outDir },
    server: {
      host: "0.0.0.0",
      // 暴露本地服务到局域网
      proxy: proxyOptions[mode]
    },
    resolve: {
      alias: {
        "@": "/src/"
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw3MDQzNFxcXFxEZXNrdG9wXFxcXHByeXVuLWFkbWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw3MDQzNFxcXFxEZXNrdG9wXFxcXHByeXVuLWFkbWluXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy83MDQzNC9EZXNrdG9wL3ByeXVuLWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXHJcblxyXG4vLyBcdTRFRTNcdTc0MDZcdTkxNERcdTdGNkVcclxuY29uc3QgcHJveHlPcHRpb25zID0ge1xyXG4gIC8vIFx1NUYwMFx1NTNEMVx1NzNBRlx1NTg4M1xyXG4gIGRldmVsb3BtZW50OiB7XHJcbiAgICAnL2FwaS1hZG1pbi1kZXYnOiB7XHJcbiAgICAgIHRhcmdldDogJ2h0dHBzOi8vYXBpLnByeXVuLnZpcCcsXHJcbiAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZShuZXcgUmVnRXhwKCdeL2FwaS1hZG1pbi1kZXYnKSwgJycpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIFx1NzUxRlx1NEVBN1x1NzNBRlx1NTg4M1xyXG4gIHByb2R1Y3Rpb246IHtcclxuICAgICcvYXBpLWFkbWluLXBybyc6IHtcclxuICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9hcGkucHJ5dW4udmlwJyxcclxuICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoJ14vYXBpLWFkbWluLXBybycpLCAnJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcclxuICBjb25zdCB7IFZJVEVfQkFTRV9VUkwgPSAnJyB9ID0gbG9hZEVudihtb2RlLCAnLi8nKVxyXG5cclxuICBjb25zdCBiYXNlID0gVklURV9CQVNFX1VSTCA/IGAvJHtWSVRFX0JBU0VfVVJMfS9gIDogJydcclxuXHJcbiAgY29uc3Qgb3V0RGlyID0gYGRpc3RfJHtWSVRFX0JBU0VfVVJMfWBcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgdnVlKCksXHJcbiAgICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICAgIH0pLFxyXG4gICAgICBDb21wb25lbnRzKHtcclxuICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgICBiYXNlLFxyXG4gICAgYnVpbGQ6IHsgb3V0RGlyIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgaG9zdDogJzAuMC4wLjAnLCAvLyBcdTY2QjRcdTk3MzJcdTY3MkNcdTU3MzBcdTY3MERcdTUyQTFcdTUyMzBcdTVDNDBcdTU3REZcdTdGNTFcclxuICAgICAgcHJveHk6IHByb3h5T3B0aW9uc1ttb2RlXSxcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiAnL3NyYy8nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1MsU0FBUyxjQUFjLGVBQWU7QUFDeFUsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBR3BDLElBQU0sZUFBZTtBQUFBO0FBQUEsRUFFbkIsYUFBYTtBQUFBLElBQ1gsa0JBQWtCO0FBQUEsTUFDaEIsUUFBUTtBQUFBLE1BQ1IsY0FBYztBQUFBLE1BQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLElBQUksT0FBTyxpQkFBaUIsR0FBRyxFQUFFO0FBQUEsSUFDbkU7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUVBLFlBQVk7QUFBQSxJQUNWLGtCQUFrQjtBQUFBLE1BQ2hCLFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQSxNQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxJQUFJLE9BQU8saUJBQWlCLEdBQUcsRUFBRTtBQUFBLElBQ25FO0FBQUEsRUFDRjtBQUNGO0FBR0EsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxFQUFFLGdCQUFnQixHQUFHLElBQUksUUFBUSxNQUFNLElBQUk7QUFFakQsUUFBTSxPQUFPLGdCQUFnQixJQUFJLG1CQUFtQjtBQUVwRCxRQUFNLFNBQVMsUUFBUTtBQUV2QixTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixXQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxNQUNuQyxDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxNQUNuQyxDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxJQUNBLE9BQU8sRUFBRSxPQUFPO0FBQUEsSUFDaEIsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUEsTUFDTixPQUFPLGFBQWEsSUFBSTtBQUFBLElBQzFCO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
