# Vue 3 + Typescript + Rollup + Storybook

This template should help get you started developing with Vue 3 and Typescript in Vite.
The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Create stories with Typescript

You can write stories with JavaScript or Typescript alike as both your dev server and storybook server allow it. Start writing stories with [this introduction](https://storybook.js.org/docs/react/writing-stories/introduction)


## Scripts

```js
yarn // installs packages
yarn build // "rollup --config rollup.config.ts --configPlugin typescript"
yarn storybook // start-storybook -p 6006
yarn build:storybook // build-storybook
```


```
.
├── LICENSE
├── README.md
├── package.json
├── public
├── src
│   ├── stories
│   │   ├── index.ts
│   │   ├── rtButton
│   │   │   ├── rtButton.vue
│   │   │   ├── rtButton.stories.ts
│   │   ├── assets
│   │   │   ├── code-brackets.svg
├── tsconfig.json
├── vite.config.ts
└── yarn.lock
```
