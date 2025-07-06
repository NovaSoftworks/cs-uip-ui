# -------- Stage 1: Build --------
FROM node:lts-alpine AS builder
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci 
COPY . .
RUN npm run build

# -------- Stage 2: Runtime --------
FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/build /app/build
COPY --from=builder /app/package.json /app/package.json
RUN npm install --omit=dev
RUN npm cache clean --force

EXPOSE 3000
RUN chown -R node /app
USER node
CMD ["node", "build/index.js"]


