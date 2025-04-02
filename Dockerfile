# Use Node.js as the base image  
FROM node:18  

# Set the working directory inside the container  
WORKDIR /app  

# Copy package.json and package-lock.json to install dependencies  
COPY package*.json ./  

# Install dependencies  
RUN npm install  

# Copy the entire project directory to the container  
COPY . .  

# Expose the application's port  
EXPOSE 3000  

# Define the command to run the application  
CMD ["node", "server.js"]  
