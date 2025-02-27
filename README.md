# 创建项目

1. 克隆项目并初始化工程

```bash
# git clone 项目地址
# cd 项目目录
pnpx @modern-js/create@latest --no-need-install
# 安装依赖
pnpm i
```

2. 添加约定目录，并添加 .gitkeep 文件

- config/mock
- config/public
- shared
- src/components
- src/services
- src/styles
- src/utils

3. 修改默认生成的文件以及目录

- 在 src 目录上创建 styles 目录并把 index.css 移动到 src/styles 目录下，再修改为 global.scss 文件（删除默认生成的内容）

- 修改 src/routes/layout.tsx 内容

  ```tsx
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
  ```

- 修改 src/routes/page.tsx 内容

  ```tsx
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
  ```

4. 在 .gitignore 中添加 pnpm-lock.yaml 和 package-lock.json 以及 yarn.lock 提交忽略
