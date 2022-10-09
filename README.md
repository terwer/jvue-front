# jvue-front
Next version for jvue-front using [nuxt3](https://github.com/nuxt/framework) which supports Metaweblog API.

We will start develop after Nuxt3 **stabe** release,please wait...

See also:[https://github.com/element-plus/element-plus-nuxt-starter/issues/46](https://github.com/element-plus/element-plus-nuxt-starter/issues/46)

## Install
```bash
dnf install npm
# apt install nom
npm i -g n
sudo n stable

npm i -g yarn
npm i -g vercel
npm i -g pm2
```
## Init
```bash
yarn
```

## Set up environment variables

Copy the .env.example file in this directory to .env (which will be ignored by Git):

```bash
cp .env.example .env
```

and change the config, the file maybe like this:

```properties
# setting for Siyuan-Note
SIYUAN_API_URL=
SIYUAN_AUTH_TOKEN=

# setting for WordPress
WORDPRESS_API_URL=https://wordpress-host/xmlrpc.php
WORDPRESS_USERNAME=
WORDPRESS_PASSWORD=

# set wordpress as default
DEFAULT_TYPE=wordpress
```

## Dev

```bash
yarn dev
```

or

```bash
yarn vdev
```

## Deploy

```bash
pm2 start pm2.json
```

```bash
pm2 stop pm2.json
```