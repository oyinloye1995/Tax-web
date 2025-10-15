# Use Node.js 20 (not Alpine to avoid permission issues)
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --no-cache

# Install vite globally to avoid permission issues
RUN npm install -g vite

# Copy source code
COPY . .

# Build the application using global vite
RUN vite build

# Expose port (Railway will set this)
EXPOSE 3000

# Start the application using global vite with proper port binding
CMD vite preview --host 0.0.0.0 --port $PORT