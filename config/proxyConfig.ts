import type { ProxyOptions } from 'vite'

// 一般为0（正常项目为0即可满足，也不需要配置多套代理） 可能在需要调试时切换到vpn环境 考虑到政府相关项目api和vpn复杂的情况
const proxyOptionIndex = 0
type type_proxyOption = {
  dev: ProxyOptions
  pro: ProxyOptions
}
// 代理配置 运行时会根据proxyOptionIndex来对proxyOptionIndex=0的配置进行覆盖修正
const proxyOptions: Record<type_proxyOption> = [
  // 默认代理proxyOptionIndex=0
  {
    dev: {
      // PR云外网代理
      '/mode-dev/msscreen': {
        target: 'https://pryun.vip',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^/mode-dev'), '/scjg-api'),
        // rewrite: (path) => path.replace(new RegExp('^/mode-dev'), '/dev-scjg-api'), // 连接到正式环境中 需要登录
      },
      // 中台api
      '/mode-dev/zt-api': {
        target: 'https://gzmh.zhrc.cdhtscjg.cn:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^/mode-dev/zt-api'), '/mode-dev/zt-api2'),
      },
      // 城运数据中枢
      '/mode-dev/sjzs-api': {
        target: 'https://gxzs.cdyoue.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^/mode-dev/sjzs-api'), ''),
      },
    },
    pro: {
      // PR云外网代理
      '/mode-pro/msscreen': {
        target: 'https://pryun.vip',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^/mode-pro'), '/scjg-api'),
      },
      // 中台api
      '/mode-pro/zt-api': {
        target: 'https://gzmh.zhrc.cdhtscjg.cn:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^/mode-pro/zt-api'), '/mode-pro/zt-api2'),
      },
      // 城运数据中枢
      '/mode-pro/sjzs-api': {
        target: 'https://gxzs.cdyoue.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^/mode-pro/sjzs-api'), ''),
      },
    },
  },
  // 第二套代理 proxyOptionIndex=1 时启用
  {
    dev: {
      // 本地连接 (vpn直连 需要开启vpn)
      '/mode-dev/msscreen': {
        target: 'http://172.34.123.205:8200',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^/mode-dev/msscreen'), '/msscreen'),
      },
      // 中台api (vpn直连 需要开启vpn)
      '/mode-dev/zt-api': {
        target: 'http://172.34.123.244:27808',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^/mode-dev/zt-api'), ''),
      },
    },
    pro: {
      // 本地连接 (vpn直连 需要开启vpn)
      '/mode-pro/msscreen': {
        target: 'http://172.34.123.205:8300',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^/mode-pro/msscreen'), '/msscreen'),
      },
      // 中台api (vpn直连 需要开启vpn)
      '/mode-pro/zt-api': {
        // target: 'http://172.34.123.244:27806',
        target: 'http://172.34.123.244:27808',

        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp('^/mode-pro/zt-api'), ''),
      },
    },
  },
]

// 处理代理
export const proxyOptionsInit = (baseUrl = 'dev') => {
  try {
    // 默认的代理使用0项
    let def_proxyOption = proxyOptions[0]
    let obj = def_proxyOption[baseUrl]
    // 开始目标代理替换
    if (proxyOptionIndex > 0) {
      const target_proxyOption = proxyOptions[proxyOptionIndex]
      if (!target_proxyOption) {
        return
      }
      // 使用 target_proxyOption 修正 def_proxyOption

      // if (!outer_net_proxy) {
      //   let obj_vpn = proxyOptionsForVpn[baseUrl]
      //   obj = { ...obj, ...obj_vpn }
      // }
    }
    return obj
  } catch (error) {
    console.warn('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;padding:16px 0;', `------->Breathe:代理配置有误proxyOptionIndex`, proxyOptionIndex, error)
  }
}
