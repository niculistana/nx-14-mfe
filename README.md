### NX 14 MFE

Example build orchestration using multiple nx 14 repos, docker, and netlify.

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

### Manually upload Nx output to Netlify
```sh
    cd somamission
    nx build about --configuration=production
    cd dist/apps/about/
    open .
    open https://app.netlify.com/drop
    # drag and drop files
    # store "Site ID" from: https://app.netlify.com/sites/my-deployed-site/settings/general
```

### Deploy using docker

Create volumes for quicker builds
```
    docker volume create mfe-npm-cache
    docker volume create mfe-yarn-cache
```


Modify orchestration environment variables

```sh
    touch .env.local
    # copy contents of sample-env.local .env.local to and modify values
    docker build --tag nx-builder .
    docker run --env-file .env.local -v mfe-npm-cache:/tmp/npm-cache -v mfe-yarn-cache:/tmp/yarn-cache --rm nx-builder
```

(Optional) Deploying other apps
1. Manually upload Nx output to Netlify
2. Update `.env.local`
```sh
    # ie:
    # modify .env.local to deploy another monorepo app, ie: catalog
    # DEPLOY_APP=haightfillmore
    # DEPLOY_ROUTE=catalog
    # CATALOG_SITE_ID=my-site-id
```
3. Deploy using docker 



### Modify Remotes
```js
// somamission/apps/shell/webpack.prod.config.js
  remotes: [
    [
      'about',
      'https//my-netlify-site.netlify.app/remoteEntry.mjs',
    ],
    // [
    //   'catalog',
    //   'https://my-netlify-site.netlify.app/remoteEntry.mjs',
    // ],
  ],
```

### Modify Shell RouterModule

```js
    RouterModule.forRoot(
      [
        {
          path: 'about',
          loadChildren: () =>
            import('about/Module').then((m) => m.RemoteEntryModule),
        },
        // {
        //   path: 'catalog',
        //   loadChildren: () =>
        //     import('catalog/Module').then((m) => m.RemoteEntryModule),
        // },
      ],
```

### Build and Serve 🍦
```sh
    cd somamission
    nx build shell --configuration=production
    nx serve shell --configuration=production --open
```
