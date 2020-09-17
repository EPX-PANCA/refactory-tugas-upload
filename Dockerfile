FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json .

# If you are building your code for production
# RUN npm ci --only=production
RUN npm install

# Bundle app source
COPY . ./

RUN echo "start"
ENV CLOUDINARY_CLOUD_NAME=dg6l4c6kf
ENV CLOUDINARY_API_KEY=899967328296132
ENV CLOUDINARY_API_SECRET=kMPj3P_rfMn4dAJW4Xb5f0qg0X0
ENV PORT=3000
ENV SECRET=rahasia
ENV GMAIL_USERNAME=tesseq6@gmail.com
ENV GMAIL_PASSWORD=sensor
ENV DB_USERNAME=root
ENV DB_PASSWORD=password
ENV DB_HOST=mysql-app
ENV DB_NAME=simple_wms

# RUN npx sequelize-cli db:migrate
# RUN npx sequelize-cli db:seed:all

COPY --chown=node:node . .



EXPOSE 3000
RUN echo "Run on Port 3000"

CMD [ "npm", "start" ]