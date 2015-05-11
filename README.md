# salestax-api
salestax-api


# v2 docker

```sh
docker build -t salestax-api-v1 .
docker run -p 51000:51000 -e WEB_HOST=0.0.0.0 -d salestax-api-v1 node app.js
```