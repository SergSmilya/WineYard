ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine3.18

RUN apk add --no-cache curl

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 3000

HEALTHCHECK --interval=5s --timeout=3s --retries=2 \
  CMD curl -f http://localhost:3000/health || exit 1

CMD [ "npm", "run", "dev" ] 