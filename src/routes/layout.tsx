import type { AppConfig, RuntimeContext } from '@modern-js/runtime';
import { Helmet } from '@modern-js/runtime/head';
import { Outlet } from '@modern-js/runtime/router';

import microApp from '@micro-zoe/micro-app';

import '@/styles/global.scss';

export const config = (): AppConfig => {
  return {};
};

export const init = (context: RuntimeContext) => {
  console.log('MainApp RootLayout init', context);
  microApp.start({
    lifeCycles: {
      created: (e: CustomEvent) => {
        console.log('MainApp microApp created', e);
      },
      beforemount: (e: CustomEvent) => {
        console.log('MainApp microApp beforemount', e);
      },
      mounted: (e: CustomEvent) => {
        console.log('MainApp microApp mounted', e);
      },
      unmount: (e: CustomEvent) => {
        console.log('MainApp microApp unmount', e);
      },
      error: (e: CustomEvent) => {
        console.log('MainApp microApp error', e);
      },
    },
  });
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
