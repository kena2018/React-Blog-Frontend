# -------- Stage 1: Build the App --------
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Normalize all build outputs to /build
RUN mkdir -p /app/build && \
    if [ -d "dist" ]; then \
        mv dist/* build/; \
    elif [ -d "public" ] && [ ! -d "build" ]; then \
        cp -r public/* build/; \
    elif [ -d "build" ]; then \
        echo "Build folder already exists"; \
    else \
        echo "No known build output folder (dist/build/public) found!" && exit 1; \
    fi
# -------- Stage 2: Serve with Nginx --------
FROM nginx:alpine

# Copy custom nginx config for SPA routing
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the unified /build output
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default web port
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]