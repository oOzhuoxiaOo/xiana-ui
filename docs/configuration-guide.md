# 配置指南

## 项目配置详解

### 1. package.json 配置

#### 基本信息

```json
{
  "name": "xiana-ui", // npm包名，必须唯一
  "private": false, // false表示可以发布到npm
  "version": "1.0.0", // 语义化版本号
  "type": "module", // 使用ES模块语法
  "description": "A modern Vue 3 UI component library built with Tailwind CSS",
  "keywords": ["vue", "vue3", "ui", "components", "tailwindcss", "typescript"]
}
```

**为什么需要这些配置？**

- `name`：npm包的唯一标识符
- `private: false`：允许发布到npm仓库
- `type: "module"`：使用现代ES模块语法
- `keywords`：帮助用户在npm上搜索到你的包

#### 入口文件配置

```json
{
  "main": "./dist/index.js", // CommonJS格式，Node.js默认
  "module": "./dist/index.mjs", // ES模块格式，现代打包工具
  "types": "./dist/index.d.ts" // TypeScript类型定义
}
```

**为什么需要多个入口？**

- `main`：兼容旧版本的Node.js和打包工具
- `module`：现代打包工具优先使用ES模块
- `types`：为TypeScript提供类型支持

#### 导出配置

```json
{
  "exports": {
    ".": {
      // 默认导出
      "import": "./dist/index.mjs", // ES模块导入
      "require": "./dist/index.js", // CommonJS导入
      "types": "./dist/index.d.ts" // 类型定义
    },
    "./style": "./dist/style.css", // 样式文件
    "./components/*": {
      // 按需导入
      "import": "./dist/components/*.mjs",
      "require": "./dist/components/*.js",
      "types": "./dist/components/*.d.ts"
    }
  }
}
```

**为什么需要exports？**

- 支持多种导入方式
- 按需导入减少打包体积
- 更好的类型支持

#### 依赖配置

```json
{
  "peerDependencies": {
    // 对等依赖
    "vue": "^3.5.0",
    "tailwindcss": "^3.4.0"
  },
  "dependencies": {
    // 运行时依赖
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    // 开发依赖
    "@vitejs/plugin-vue": "^6.0.0",
    "vite": "^7.0.0",
    "typescript": "~5.8.3"
  }
}
```

**依赖分类说明：**

- `peerDependencies`：用户需要自己安装的依赖
- `dependencies`：组件库运行时需要的依赖
- `devDependencies`：只在开发时需要的依赖

### 2. Vite配置详解

#### 开发配置 (vite.config.ts)

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [
    vue(), // 处理Vue单文件组件
    {
      name: "raw-loader", // 自定义插件
      transform(code, id) {
        if (id.includes("?raw")) {
          return {
            code: `export default ${JSON.stringify(code)}`,
            map: null,
          };
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 路径别名
      "@docs": path.resolve(__dirname, "./docs"),
    },
  },
});
```

**插件说明：**

- `vue()`：处理 `.vue` 文件
- `raw-loader`：支持 `?raw` 查询，用于文档中显示源代码

#### 库构建配置 (vite.lib.config.ts)

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      // 生成TypeScript声明文件
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // 库入口
      name: "XianaUI", // 全局变量名
      fileName: (format) => `index.${format === "es" ? "mjs" : "js"}`,
    },
    rollupOptions: {
      external: [
        // 外部依赖，不打包
        "vue",
        "tailwindcss",
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
      ],
      output: {
        globals: {
          // 全局变量映射
          vue: "Vue",
          "class-variance-authority": "cva",
          clsx: "clsx",
          "tailwind-merge": "twMerge",
        },
      },
    },
    cssCodeSplit: false, // CSS不分割，合并到一个文件
  },
});
```

**关键配置说明：**

1. **external配置**：

   ```typescript
   external: ["vue", "tailwindcss", "class-variance-authority"];
   ```

   - 这些依赖不会被打包进库中
   - 用户需要自己安装这些依赖
   - 避免版本冲突和重复打包

2. **globals配置**：

   ```typescript
   globals: {
       vue: 'Vue',
       'class-variance-authority': 'cva',
   }
   ```

   - 为UMD格式提供全局变量名
   - 支持在浏览器中直接使用

3. **cssCodeSplit: false**：
   - 将所有CSS合并到一个文件
   - 便于用户引入样式

### 3. TypeScript配置

#### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**重要配置说明：**

- `target: "ES2020"`：编译目标版本
- `module: "ESNext"`：使用最新的模块语法
- `strict: true`：启用严格模式
- `noEmit: true`：不生成输出文件（由Vite处理）

### 4. Tailwind CSS配置

#### tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  prefix: "tw-", // 类名前缀
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... 更多颜色
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

**关键配置说明：**

- `prefix: "tw-"`：避免与用户项目的Tailwind类名冲突
- `darkMode: ["class"]`：支持暗色模式
- `content`：指定需要扫描的文件
- `extend`：扩展主题配置

### 5. 构建和发布流程

#### 构建脚本

```json
{
  "scripts": {
    "dev": "vite --port 8080", // 开发服务器
    "build": "vue-tsc -b && vite build", // 构建应用
    "build:lib": "vite build --config vite.lib.config.ts", // 构建库
    "preview": "vite preview", // 预览构建结果
    "docs:dev": "vitepress dev docs", // 文档开发
    "docs:build": "vitepress build docs", // 构建文档
    "docs:preview": "vitepress preview docs", // 预览文档
    "type-check": "vue-tsc --noEmit", // 类型检查
    "lint": "eslint src --ext .vue,.js,.ts,.jsx,.tsx", // 代码检查
    "format": "prettier --write src" // 代码格式化
  }
}
```

#### 发布流程

1. **构建库**：`npm run build:lib`
2. **类型检查**：`npm run type-check`
3. **测试**：确保所有功能正常
4. **发布**：`npm publish`

### 6. 常见问题解答

#### Q: 为什么使用peerDependencies？

A: 避免版本冲突，让用户使用自己的Vue和Tailwind版本。

#### Q: 为什么需要external配置？

A: 减小库体积，避免重复打包，让用户使用自己的依赖版本。

#### Q: 为什么使用prefix？

A: 避免与用户项目的Tailwind类名冲突。

#### Q: 如何支持按需导入？

A: 通过exports配置和rollup的代码分割实现。

#### Q: 如何生成类型文件？

A: 使用vite-plugin-dts插件自动生成TypeScript声明文件。
