# Use Node.js 20
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --no-cache

# Copy source code
COPY . .

# Build the application using node directly
RUN node node_modules/.bin/vite build

# Expose port (Railway will set this)
EXPOSE 3000

# Start the application
CMD node node_modules/.bin/vite preview --host --port ${PORT:-3000}