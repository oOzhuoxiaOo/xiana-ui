# 使用示例

## 1. 安装组件库

```bash
npm install xiana-ui
```

## 2. 在Vue项目中使用

### 完整导入
```vue
<template>
  <div>
    <Button variant="default" size="default">
      点击我
    </Button>
  </div>
</template>

<script setup>
import { Button } from 'xiana-ui'
import 'xiana-ui/style'
</script>
```

### 按需导入
```vue
<template>
  <div>
    <Button variant="destructive" size="lg">
      删除
    </Button>
  </div>
</template>

<script setup>
import { Button } from 'xiana-ui/components/button'
import 'xiana-ui/style'
</script>
```

## 3. 配置Tailwind CSS

在你的 `tailwind.config.js` 中：

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/xiana-ui/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 4. 使用工具函数

```vue
<template>
  <div :class="buttonClass">
    自定义按钮
  </div>
</template>

<script setup>
import { cn, buttonVariants } from 'xiana-ui'

const buttonClass = cn(
  buttonVariants({ variant: 'outline', size: 'sm' }),
  'custom-class'
)
</script>
```

## 配置说明

### package.json 配置解释

1. **exports 字段**：
   - 支持多种导入方式
   - 按需导入减少打包体积
   - 类型安全支持

2. **peerDependencies**：
   - 避免版本冲突
   - 用户使用自己的Vue和Tailwind版本

3. **files 字段**：
   - 指定发布到npm的文件
   - 只包含必要的文件

### vite.lib.config.ts 配置解释

1. **external 配置**：
   - 不打包外部依赖
   - 减小库体积
   - 避免重复打包

2. **globals 配置**：
   - 为UMD格式提供全局变量名
   - 支持浏览器直接使用

3. **cssCodeSplit: false**：
   - 将所有CSS合并到一个文件
   - 便于用户引入样式

### 构建流程

1. **开发时**：`npm run dev`
   - 启动开发服务器
   - 热重载支持

2. **构建库**：`npm run build:lib`
   - 使用专门的库配置
   - 生成多种格式文件

3. **发布**：`npm publish`
   - 发布到npm仓库
   - 用户可以通过npm安装 