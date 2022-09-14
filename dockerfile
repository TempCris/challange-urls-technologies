FROM node:16.4.2-alpine

# Create app directory
WORKDIR /backend-src

#Environment variables
ENV NODE_ENV=production
ENV PORT=4000
ENV DEBUG=app:prod

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

COPY config ./config
COPY .git ./.git

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Copy app from src to dist
RUN npm run build

EXPOSE 4000

CMD [ "node", "./dist/index.js" ]

# Image command:
# docker build -t graphql_stackoverflow_image .

# Create container:
# docker run --name graphql-stackoverflow-container -p 4000:4000 -d --restart unless-stopped graphql_stackoverflow_image
