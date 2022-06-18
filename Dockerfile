FROM node:16-buster-slim AS development

RUN npm install -g  pnpm

WORKDIR /opt/project

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install -r
COPY . .


FROM node:16-buster-slim AS production

USER node

WORKDIR /opt/project

COPY --from=development --chown=root:root /opt/project/node_modules ./node_modules

COPY . .