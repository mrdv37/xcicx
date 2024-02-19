## Screenshot

![screenshot](/screenshot.png)

## Workflow

Note: The following assumes you already have a working WordPress site.

Clone this repo to the `yoursite.com/wp-content/plugins/` directory.

Install dependencies:

```sh
composer install
npm install
```

Dev:

```sh
npm start
```

Activate the `xcicx` plugin at `yoursite.com/wp-admin/plugins.php`.

Search for `Compound Interest Calculator` Block in your Block Editor library and place it anywhere on your site.

(Optional) Build WordPress plugin .ZIP file (in root) for distribution:

```sh
npm run plugin-zip
```
