# Shakerr

Want to decide between seemingly undecidable options but unsure what to do?
Don't worry! Just fire up your browser, open the application at
https://shakerr.pages.dev, input the options, and shake it!

Demonstration of Shakerr's answer to life's meaning:

![](./demo.gif)

(I'm recording my desktop screen, where I click to pick an option; shaking on a
mobile device should yield the similar effect)

## Why?

I wanted something like this and it does not exist ~~or I did not bother
researching what are the options and decided that creating an application for
myself is better~~.

## Development

Make sure that `node` and `npm` is ready on your machine:

```shell
node --version
# v18.18.2
npm --version
# 9.8.1
```

Install dependencies:

```shell
npm install
```

Run the development server:

```shell
npx vite dev
```

Run the development server and allow LAN access for mobile device testing:

```shell
npx vite dev --host 0.0.0.0
```
