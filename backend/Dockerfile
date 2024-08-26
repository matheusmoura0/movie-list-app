FROM node:16-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN touch src/database.sqlite && \
    chmod 666 src/database.sqlite

EXPOSE 5000

CMD ["node", "src/app.js"]
