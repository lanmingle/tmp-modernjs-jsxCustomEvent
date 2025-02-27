import { Helmet } from '@modern-js/runtime/head';

export default function RootPage() {
  return (
    <>
      <Helmet>
        <title>首页</title>
      </Helmet>
      <h1>你好！</h1>
    </>
  );
}
