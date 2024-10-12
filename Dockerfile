# Stage 1: Build Stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of your application code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Production Stage
FROM node:18-alpine

# Set environment variable
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
