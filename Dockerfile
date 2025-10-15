# Use Node.js 20 (not Alpine to avoid permission issues)
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --no-cache

# Install vite globally and serve for static file serving
RUN npm install -g vite serve

# Copy source code
COPY . .

# Build the application using global vite
RUN vite build

# Expose port (Railway will set this)
EXPOSE 3000

# Start using serve which is more reliable for production
CMD serve -s dist -l $PORT