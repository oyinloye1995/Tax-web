# Use Node.js 20
FROM node:20-alpine

# Install bash for better script compatibility
RUN apk add --no-cache bash

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --no-cache

# Copy source code
COPY . .

# Build the application using npm script
RUN npm run build

# Expose port (Railway will set this)
EXPOSE 3000

# Start the application using npm script
CMD npm run preview -- --host --port ${PORT:-3000}