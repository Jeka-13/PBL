FROM nginx:stable-alpine

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY . /home/salieri

EXPOSE 9000