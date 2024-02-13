# Dockerfile in lifebrary directory
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy local code to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]