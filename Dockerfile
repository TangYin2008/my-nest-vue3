# Copyright (c) 2024 tong<admin>
# 
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT

# 第一个阶段 - 构建基础镜像
ARG NODE_VERSION=18

# Build
FROM node:${NODE_VERSION}-alpine as builder

USER node

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

RUN npm install --registry=https://registry.npmmirror.com

COPY --chown=node:node . .

# for prisma
RUN npm run generate
RUN npm run build

FROM node:${NODE_VERSION}-alpine as prod

USER node

WORKDIR /home/node/app

ENV NODE_ENV=production

# install prod dependencies
COPY --chown=node:node --from=builder /home/node/app/package*.json ./
RUN npm install --production --registry=https://registry.npmmirror.com

COPY --chown=node:node --from=builder /home/node/app/node_modules/.prisma/client ./node_modules/.prisma/client
COPY --chown=node:node --from=builder /home/node/app/dist/ ./dist/

CMD [ "node", "dist/main.js" ]