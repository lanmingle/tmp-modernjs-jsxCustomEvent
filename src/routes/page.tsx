// 注释：jsxCustomEvent 在 rspack 中必须放到最顶部才会编译进来，如果在 webpack 中则不需要

/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';

import { Helmet } from '@modern-js/runtime/head';

export default function RootPage() {
  return (
    <>
      <Helmet>
        <title>首页</title>
      </Helmet>
      <h1>你好！</h1>
      <micro-app
        name="subapp"
        url="https://jd-opensource.github.io/micro-app/"
        default-page="/"
        onCreated={(e: CustomEvent) => console.log('subapp - MainApp micro-app元素被创建', e)}
        onBeforemount={(e: CustomEvent) => console.log('subapp - MainApp 即将渲染', e)}
        onMounted={(e: CustomEvent) => console.log('subapp - MainApp 已经渲染完成', e)}
        onUnmount={(e: CustomEvent) => console.log('subapp - MainApp 已经卸载', e)}
        onError={(e: CustomEvent) => console.log('subapp - MainApp 加载出错', e)}
      />
    </>
  );
}
