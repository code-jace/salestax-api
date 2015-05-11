# salestax-api
salestax-api

# v1 docker

```sh
docker build -t salestax-api-v1 .
docker run -p 51000:51000 -e WEB_HOST=0.0.0.0 -e ACT_HOST=192.168.59.103 -d salestax-api-v1 node app.js
```



