FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

RUN echo "TEST: $TEST"

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY app/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY app/app.js .
COPY app/router.js .

EXPOSE 5000

CMD [ "npm", "start" ]
