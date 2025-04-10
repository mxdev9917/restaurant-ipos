# Step 1: Build React app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json (if available) first to install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of your app
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve app using Nginx
FROM nginx:alpine

# Copy the build output to the Nginx server
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
