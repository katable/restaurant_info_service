FROM node:6.14.4-alpine
RUN mkdir -p /app /data/db
WORKDIR /app
COPY . /app
RUN npm install
RUN node database/seed.js
EXPOSE 3001
CMD npm start
