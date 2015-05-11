# salestax-api
salestax-api


# v2 docker

```sh
docker build -t salestax-api-v2 .
docker run -p 51000:51000 -e WEB_HOST=0.0.0.0 -e ACT_HOST=192.168.59.103 -d salestax-api-v2 node app.js
```

