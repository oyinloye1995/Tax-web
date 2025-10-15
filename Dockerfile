# Use Node.js 20
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies and make sure npx has proper permissions
RUN npm ci --no-cache && \
    chmod +x node_modules/.bin/*

# Copy source code
COPY . .

# Build the application using npx explicitly
RUN npx vite build

# Expose port (Railway will set this)
EXPOSE 3000

# Start the application
CMD npx vite preview --host --port ${PORT:-3000}