FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

# Change ownership of npm cache directory (if needed)
RUN npm config set cache /usr/src/app/.npm-cache --global

#RUN npm install
RUN npm install && echo "npm install completed" || echo "npm install failed"

RUN ls -la
RUN ls -la node_modules

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]