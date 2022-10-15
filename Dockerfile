# This is a Docker file for Fragments back-end

# Node version might be changed and it needs to be updated here
FROM node:18.9.0

# Metadta using LABLE "key=value" pairs for our image
LABEL miantainer="Rad Eshghi <Reshghi@myseneca.ca>"
LABEL description="Fragments node.js microservice"

# We'll provide default values, but they can be overridden at 
#runtime using the --env, -e or --env-file flags

# We default to use port 8080 in our service
ENV PORT=8080

# Reduce npm spam when installing within Docker
# https://docs.npmjs.com/cli/v8/using-npm/config#loglevel
ENV NPM_CONFIG_LOGLEVEL=warn

# Disable colour when run inside Docker
# https://docs.npmjs.com/cli/v8/using-npm/config#color
ENV NPM_CONFIG_COLOR=false

# Use /app as our working directory
WORKDIR /app

# Copy the package.json and package-lock.json files into the working dir (/app)
COPY package*.json ./

# Copy src to /app/src/
COPY ./src ./src

# Copy our HTPASSWD file
COPY ./tests/.htpasswd ./tests/.htpasswd

# Install node dependencies defined in package-lock.json
RUN npm install

# Start the container by running our server
CMD npm start

# We run our service on port 8080
EXPOSE 8080


