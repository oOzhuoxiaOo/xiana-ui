# 一步步配置指南

## 第一步：理解项目结构

你的项目结构如下：

```
xiana-ui/
├── src/                    # 源代码
│   ├── components/         # 组件
│   ├── lib/               # 工具函数
│   └── index.ts           # 入口文件
├── docs/                  # 文档
├── package.json           # 项目配置
├── vite.config.ts         # 开发配置
├── vite.lib.config.ts     # 库构建配置
└── tailwind.config.js     # Tailwind配置
```

## 第二步：检查当前配置

### 1. 检查package.json

```bash
# 查看当前配置
cat package.json
```

确保以下配置正确：

- `"private": false` - 允许发布
- `"main"`, `"module"`, `"types"` - 入口文件
- `"exports"` - 导出配置
- `"peerDependencies"` - 对等依赖

### 2. 检查构建配置

```bash
# 查看库构建配置
cat vite.lib.config.ts
```

确保external配置包含所有外部依赖。

## 第三步：构建和测试

### 1. 安装依赖

```bash
pnpm install
```

### 2. 开发测试

```bash
# 启动开发服务器
pnpm dev
```

在浏览器中访问 `http://localhost:8080` 测试组件。

### 3. 构建库

```bash
# 构建库
pnpm build:lib
```

检查 `dist/` 目录是否生成了以下文件：

- `index.js` (CommonJS)
- `index.mjs` (ES模块)
- `index.d.ts` (类型定义)
- `style.css` (样式文件)

### 4. 类型检查

```bash
# 检查TypeScript类型
pnpm type-check
```

## 第四步：文档构建

### 1. 启动文档开发

```bash
# 启动文档开发服务器
pnpm docs:dev
```

访问 `http://localhost:5173` 查看文档。

### 2. 构建文档

```bash
# 构建文档
pnpm docs:build
```

## 第五步：本地测试

### 1. 创建测试项目

```bash
# 创建测试目录
mkdir test-xiana-ui
cd test-xiana-ui

# 初始化Vue项目
npm create vue@latest
# 选择需要的功能

# 安装依赖
npm install

# 安装你的组件库（本地链接）
npm link ../xiana-ui
```

### 2. 测试组件库

在测试项目中创建测试文件：

```vue
<template>
  <div>
    <h1>测试 Xiana UI</h1>
    <Button variant="default" size="default"> 测试按钮 </Button>
  </div>
</template>

<script setup>
import { Button } from "xiana-ui";
import "xiana-ui/style";
</script>
```

### 3. 运行测试

```bash
npm run dev
```

## 第六步：发布准备

### 1. 更新版本号

```bash
# 使用npm version更新版本
npm version patch  # 补丁版本 1.0.0 -> 1.0.1
npm version minor  # 次要版本 1.0.0 -> 1.1.0
npm version major  # 主要版本 1.0.0 -> 2.0.0
```

### 2. 更新package.json信息

编辑 `package.json`：

```json
{
  "name": "xiana-ui",
  "version": "1.0.0",
  "description": "A modern Vue 3 UI component library built with Tailwind CSS",
  "author": "你的名字",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/你的用户名/xiana-ui.git"
  },
  "homepage": "https://你的用户名.github.io/xiana-ui",
  "bugs": {
    "url": "https://github.com/你的用户名/xiana-ui/issues"
  }
}
```

### 3. 创建README.md

````markdown
# Xiana UI

A modern Vue 3 UI component library built with Tailwind CSS.

## Installation

```bash
npm install xiana-ui
```
````

## Usage

```vue
<template>
  <Button variant="default" size="default"> Click me </Button>
</template>

<script setup>
import { Button } from "xiana-ui";
import "xiana-ui/style";
</script>
```

## Documentation

Visit [documentation](https://你的用户名.github.io/xiana-ui) for more information.

````

## 第七步：发布到npm

### 1. 登录npm
```bash
npm login
````

### 2. 发布包

```bash
npm publish
```

### 3. 验证发布

```bash
# 检查包是否发布成功
npm view xiana-ui
```

## 第八步：持续维护

### 1. 开发新功能

```bash
# 创建新组件
mkdir src/components/ui/new-component
touch src/components/ui/new-component/NewComponent.vue
touch src/components/ui/new-component/index.ts
```

### 2. 更新入口文件

编辑 `src/index.ts`：

```typescript
// 导出新组件
export { NewComponent } from "./components/ui/new-component";
```

### 3. 更新文档

在 `docs/components/` 中创建新组件的文档。

### 4. 发布新版本

```bash
npm version patch
npm publish
```

## 常见问题解决

### 1. 构建失败

```bash
# 清理缓存
rm -rf node_modules
rm -rf dist
pnpm install
pnpm build:lib
```

### 2. 类型错误

```bash
# 检查类型
pnpm type-check
```

### 3. 样式不生效

确保在用户项目中：

1. 安装了Tailwind CSS
2. 配置了content路径包含组件库
3. 引入了样式文件

### 4. 组件不显示

检查：

1. 是否正确导入组件
2. 是否正确引入样式
3. 是否有控制台错误

## 最佳实践

### 1. 版本管理

- 使用语义化版本号
- 在发布前测试所有功能
- 更新CHANGELOG.md

### 2. 文档维护

- 为每个组件编写文档
- 提供使用示例
- 保持文档与代码同步

### 3. 测试

- 编写单元测试
- 在不同项目中测试
- 测试不同Vue和Tailwind版本

### 4. 性能优化

- 使用按需导入
- 优化包大小
- 减少依赖数量

## 下一步

1. **添加更多组件**：根据需求添加常用组件
2. **完善文档**：添加更多示例和API文档
3. **添加测试**：编写单元测试和集成测试
4. **优化性能**：优化构建配置和包大小
5. **社区建设**：收集用户反馈，改进组件库
