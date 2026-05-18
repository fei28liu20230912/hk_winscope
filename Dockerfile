FROM node:24-bookworm

WORKDIR /app
EXPOSE 8080

# 关键：设置环境变量，告诉 pnpm 这是在自动化环境（CI）中运行，别问我要不要删目录
ENV CI=true

# 复制源码
COPY . .

# 安装 pnpm 并安装依赖
# CI=true 会自动跳过互动确认，且 pnpm 默认不会使用 frozen-lockfile（如果锁文件不匹配）
RUN npm install -g pnpm && \
    pnpm install --config.ignoreScripts=false

# 构建生产版本
RUN pnpm run build:prod

# 使用 http-server 托管
RUN npm install -g http-server

CMD ["http-server", "dist/prod", "-p", "8080", "--cors"]
