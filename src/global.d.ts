declare interface Window {
  __MICRO_APP_ENVIRONMENT__: string | undefined;
  __MICRO_APP_NAME__: string | undefined;
  __MICRO_APP_PUBLIC_PATH__: string | undefined;
  __MICRO_APP_BASE_ROUTE__: string | undefined;
  __MICRO_APP_BASE_APPLICATION__: string | undefined;
  rawWindow: Window | undefined;
  rawDocument: Document | undefined;
  mount: () => void;
  unmount: () => void;
}
declare namespace JSX {
  interface IntrinsicElements {
    'micro-app': any;
  }
}
