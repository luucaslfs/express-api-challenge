FROM node:19

WORKDIR /app

COPY package*.json yarn.lock ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
