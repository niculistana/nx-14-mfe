### Deploy using docker

```sh
touch .env.local
# copy contents of sample-env.local .env.local to and modify values
docker volume create mfe-npm-cache
docker volume create mfe-yarn-cache
docker build --tag nx-builder .
docker run --env-file .env.local -v mfe-npm-cache:/tmp/npm-cache -v mfe-yarn-cache:/tmp/yarn-cache --rm nx-builder
```
