# snowpack-primevue-peerdeps-bug

Purpose of this repo is to reproduce an interoperability bug between `snowpack` and `primevue` where Vue is loaded twice. This causes some well-known problems when components reference slots from other components.

_Note: This can happen to any dependencies that don't properly list `vue` in `peerDependencies`_

## Steps to reproduce

```
nvm install 14
npm install
npm run start-no-cache
```

When the app starts, you'll notice the primevue `<Card>` component doesn't render properly. You will see logs like this in the browser console:

![image](https://user-images.githubusercontent.com/1867809/137525921-c1e9dc4f-feb1-476b-bf02-c8001b7a4578.png)

## Steps to fix

Add the following stanza to `node_modules/primevue/package.json`:

```json
"peerDependencies": {
  "vue": "3.1.5"
}
```

Then, reload the application:

```
npm run start-no-cache
```

The console errors should be gone and the card component renders properly.
