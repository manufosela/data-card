# data-card

Lit-Element web component description

## Demo

```
<h2>Basic data-card Demo</h2>
<h3>Demo</h3>
<data-card></data-card>

```
<!---
```
<custom-element-demo>
  <template>
    <link rel="import" href="data-card.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<data-card></data-card>
```
## Attributes

* title (String): Card title.
* description(String): Card description.
* url (String): Url to show card information.
* icon (String): from *fa-icons* colection. 
* [group] (String): a organization/clasification mode
* [newtab] (Boolean): by default is false (target "_self"). When true, target is "_blank"
* [moreinfo] (String): URL with card's extra information. By default is empty. When url, fetch the contain and create a modal.


## Install
```
npm install data-card
```

## Use

```html
<html>
  <head>
    <script type="module" src="../data-card.js"></script>
  </head>
  <body>
    <data-card></data-card>
  </body>
</html>
```

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Build
```
$ npm run build
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

##Author
**user**

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details

## Generated

**generator-lit-element-base** - *yeoman npm package* - by [@manufosela](https://github.com/manufosela/generator-litelement-webcomponent)