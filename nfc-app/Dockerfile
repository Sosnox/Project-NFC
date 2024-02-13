# Use official Node.js LTS (Long Term Support) image as base
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build Next.js app for production
RUN npm run build

# Expose the port Next.js app runs on
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "start"]
