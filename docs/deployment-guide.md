# 部署指南

## 概述

本指南将帮助你：

1. 发布组件库到npm
2. 部署文档站点到GitHub Pages
3. 设置自动化部署流程

## 第一步：准备GitHub仓库

### 1. 创建GitHub仓库

1. 访问 [GitHub](https://github.com)
2. 点击 "New repository"
3. 仓库名：`xiana-ui`
4. 选择 "Public"
5. 不要初始化README（我们已经有本地文件）

### 2. 推送代码到GitHub

```bash
# 初始化git仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: Vue 3 UI component library"

# 添加远程仓库（替换为你的GitHub用户名）
git remote add origin https://github.com/你的用户名/xiana-ui.git

# 推送到main分支
git push -u origin main
```

## 第二步：设置GitHub Pages

### 1. 启用GitHub Pages

1. 进入你的GitHub仓库
2. 点击 "Settings" 标签
3. 在左侧菜单找到 "Pages"
4. 在 "Source" 部分选择 "GitHub Actions"

### 2. 配置仓库设置

更新 `package.json` 中的仓库信息：

```json
{
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

### 3. 推送更改

```bash
git add .
git commit -m "Update repository information"
git push
```

## 第三步：设置npm发布

### 1. 创建npm账户

1. 访问 [npmjs.com](https://www.npmjs.com)
2. 注册账户
3. 验证邮箱

### 2. 登录npm

```bash
npm login
```

输入你的npm用户名、密码和邮箱。

### 3. 设置npm token（用于GitHub Actions）

1. 访问 [npm token页面](https://www.npmjs.com/settings/tokens)
2. 点击 "Generate new token"
3. 选择 "Automation"
4. 复制生成的token

### 4. 在GitHub中设置secret

1. 进入你的GitHub仓库
2. 点击 "Settings" 标签
3. 在左侧菜单找到 "Secrets and variables" → "Actions"
4. 点击 "New repository secret"
5. Name: `NPM_TOKEN`
6. Value: 粘贴你的npm token

## 第四步：发布第一个版本

### 1. 本地测试

```bash
# 构建库
pnpm build:lib

# 检查生成的文件
ls dist/
```

确保生成了以下文件：

- `index.js` (CommonJS)
- `index.mjs` (ES模块)
- `index.d.ts` (类型定义)
- `xiana-ui.css` (样式文件)

### 2. 创建发布标签

```bash
# 创建并推送标签
git tag v1.0.0
git push origin v1.0.0
```

### 3. 手动发布（可选）

如果你想手动发布而不是使用GitHub Actions：

```bash
npm publish
```

## 第五步：验证部署

### 1. 检查npm包

```bash
# 查看包信息
npm view xiana-ui

# 安装并测试
npm install xiana-ui
```

### 2. 检查GitHub Pages

1. 等待GitHub Actions完成
2. 访问 `https://你的用户名.github.io/xiana-ui`
3. 确认文档站点正常显示

## 第六步：持续部署

### 1. 更新版本

当你需要发布新版本时：

```bash
# 更新版本号
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# 推送更改和标签
git push
git push --tags
```

### 2. 自动化流程

- 推送代码到main分支 → 自动部署文档到GitHub Pages
- 推送版本标签 → 自动发布到npm

## 第七步：测试安装

### 1. 创建测试项目

```bash
# 创建新的Vue项目
npm create vue@latest test-xiana-ui
cd test-xiana-ui

# 安装依赖
npm install

# 安装你的组件库
npm install xiana-ui
```

### 2. 测试组件

在 `src/App.vue` 中：

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

## 常见问题

### 1. npm发布失败

**问题**：`npm ERR! 403 Forbidden - PUT https://registry.npmjs.org/xiana-ui - You must be logged in to publish packages.`

**解决**：

```bash
npm login
npm publish
```

### 2. GitHub Pages不显示

**问题**：页面显示404或空白

**解决**：

1. 检查GitHub Actions是否成功
2. 确认仓库设置中的Pages配置
3. 等待几分钟让部署生效

### 3. 样式不生效

**问题**：组件显示但没有样式

**解决**：

1. 确保引入了样式文件：`import 'xiana-ui/style'`
2. 确保配置了Tailwind CSS
3. 检查content路径是否包含组件库

### 4. 类型错误

**问题**：TypeScript报错

**解决**：

1. 确保安装了TypeScript
2. 检查tsconfig.json配置
3. 确保导入了类型定义

## 最佳实践

### 1. 版本管理

- 使用语义化版本号
- 在发布前充分测试
- 更新CHANGELOG.md

### 2. 文档维护

- 保持文档与代码同步
- 提供完整的使用示例
- 及时更新API文档

### 3. 自动化

- 使用GitHub Actions自动化部署
- 设置代码质量检查
- 配置自动测试

### 4. 监控

- 监控包下载量
- 关注用户反馈
- 及时修复问题

## 下一步

1. **添加更多组件**：根据需求扩展组件库
2. **完善文档**：添加更多示例和API文档
3. **添加测试**：编写单元测试和集成测试
4. **性能优化**：优化包大小和加载速度
5. **社区建设**：收集用户反馈，改进组件库
