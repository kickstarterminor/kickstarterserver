# Build stage
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# 👇 THIS IS THE FIX
RUN npx prisma generate

RUN npm run build

# Runtime stage
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

# 👇 Copy generated prisma client too
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=build /app/node_modules/@prisma ./node_modules/@prisma

COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma

EXPOSE 8001
CMD ["node", "dist/src/main.js"]
