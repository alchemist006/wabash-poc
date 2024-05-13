# Use node image with specified version
FROM node:18.2.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5000 for the JSON server
EXPOSE 5000

# Copy the start script
COPY start.sh /app/start.sh

# Make start script executable
RUN chmod +x /app/start.sh

# Start the server and then the app
CMD ["/app/start.sh"]