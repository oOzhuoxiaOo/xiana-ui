#!/bin/bash

# Xiana UI 部署设置脚本

echo "🚀 开始设置 Xiana UI 部署..."

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 检查必要的文件
echo "📋 检查必要文件..."

required_files=(
    "package.json"
    "vite.lib.config.ts"
    "src/index.ts"
    "README.md"
    "LICENSE"
    ".github/workflows/deploy.yml"
    ".github/workflows/publish.yml"
)

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ 缺少文件: $file"
        exit 1
    fi
done

echo "✅ 所有必要文件都存在"

# 构建库
echo "🔨 构建组件库..."
pnpm build:lib

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

echo "✅ 构建成功"

# 检查生成的文件
echo "📦 检查生成的文件..."
if [ ! -f "dist/index.js" ] || [ ! -f "dist/index.mjs" ] || [ ! -f "dist/index.d.ts" ]; then
    echo "❌ 构建文件不完整"
    exit 1
fi

echo "✅ 构建文件完整"

# 构建文档
echo "📚 构建文档..."
pnpm docs:build

if [ $? -ne 0 ]; then
    echo "❌ 文档构建失败"
    exit 1
fi

echo "✅ 文档构建成功"

# 检查Git状态
echo "🔍 检查Git状态..."
if ! git status --porcelain | grep -q .; then
    echo "✅ 工作目录干净"
else
    echo "⚠️  有未提交的更改"
    echo "请提交更改后再继续"
    exit 1
fi

echo ""
echo "🎉 设置完成！"
echo ""
echo "下一步："
echo "1. 创建GitHub仓库"
echo "2. 推送代码到GitHub"
echo "3. 设置GitHub Pages"
echo "4. 设置npm token"
echo "5. 发布第一个版本"
echo ""
echo "详细步骤请查看 docs/deployment-guide.md" 