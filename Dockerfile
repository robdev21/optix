# From a node base image
FROM node:12

# Set port for server
EXPOSE 5252

# node_modules install via NPM
ENV NPM_CONFIG_LOGLEVEL error
WORKDIR /app
COPY ./package*.json ./
RUN npm install

# Copy all resources
COPY ./ ./

# Build React app
RUN npm run build-react

# Build node server
RUN npm run build-server

# Set run command for container
CMD ["npm", "run", "start-server"]