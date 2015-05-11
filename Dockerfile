FROM node:0.10
ADD . /
RUN npm install
EXPOSE 51000

