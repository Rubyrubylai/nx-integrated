# Stage 1: Install dependencies for apps/server
FROM node:lts-alpine as deps

WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package.json .
COPY package-lock.json .

RUN npm ci

# Stage 2: Install dependencies for root package.json
FROM node:lts-alpine as root_deps

WORKDIR /root

RUN apk add --no-cache python3 make g++

COPY ../../package.json .
COPY ../../package-lock.json .

RUN npm ci

# Stage 3: Build the application
FROM node:lts-alpine as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=root_deps /root/node_modules ./node_modules
COPY . .

RUN npm run build

# Stage 4: Run the application
FROM node:lts-alpine as runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD ["node", "dist/apps/server/main.js"]
