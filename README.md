### NX 14 MFE

Example build orchestration using multiple nx 14 repos, docker, and netlify

### MFE structure
haightfillmore/
├─ apps/
│  ├─ cart/ * mysite.com/cart
│  ├─ catalog/ * mysite.com/catalog
│  ├─ shell/
somamission/
├─ apps/
│  ├─ about/ * mysite.com/about
│  ├─ shell/ * mysite.com/
Dockerfile

### Deploy using docker

```sh
touch .env.local
# copy contents of sample-env.local .env.local to and modify values
docker volume create mfe-npm-cache
docker volume create mfe-yarn-cache
docker build --tag nx-builder .
docker run --env-file .env.local -v mfe-npm-cache:/tmp/npm-cache -v mfe-yarn-cache:/tmp/yarn-cache --rm nx-builder
```
