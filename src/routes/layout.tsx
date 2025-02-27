import type { AppConfig, RuntimeContext } from '@modern-js/runtime';
import { Helmet } from '@modern-js/runtime/head';
import { Outlet } from '@modern-js/runtime/router';

import '@/styles/global.scss';

export const config = (): AppConfig => {
  return {};
};

export const init = (context: RuntimeContext) => {
  return {};
};

export default function RootLayout() {
  return (
    <>
      <Helmet titleTemplate="%s | 例子" />
      <div className="size-full">
        <Outlet />
      </div>
    </>
  );
}
