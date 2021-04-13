# Electron 11 + TypeScript 4.0 + Vite 2 + React 17 + Tailwind 2 + twstyled starter

Blazing fast Electron starter including

- [x] `Vite` for next generation frontend tooling
- [x] `Typescript`
- [x] `ESBuild` for building all assets including the main process
- [x] `React` as the front end framework
- [x] `Tailwind CSS` for styling without templates
- [x] `twstyled` tailwind compiler for no PostCSS processing and full-featured CSS in JS
- [x] `Framer Motion` for animation transitions
- [x] `React fast refresh` for hot module reloading
- [x] `electron-builder` and `electron-notarize` for distribution release
- [x] Zero dependency on Vue, tsc or styled-components, emotion or other runtime CSS in JS (but supports all the same API)

Configured with best practices.

## Installation

`yarn`

## Development

`yarn dev`

## Build

`yarn build`

## Release

Add any configuration to the `build` section of `package.json`, add an `.env-secrets.json` file in the `.config` folder with any environment secrets that you need for your publisher, and then run 

`yarn publish`
