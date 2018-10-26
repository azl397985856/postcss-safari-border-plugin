# PostCSS Safari Border Plugin [![Build Status][ci-img]][ci]

[postcss]: https://github.com/postcss/postcss
[ci-img]: https://travis-ci.org/azl397985856/postcss-safari-border-plugin.svg
[ci]: https://travis-ci.org/azl397985856/postcss-safari-border-plugin

[PostCSS] plugin to solve problem when using border-radius + overflow: hidden + transform.

for more info, please visit https://bugs.webkit.org/show_bug.cgi?id=98538

also, here is a [gist](https://gist.github.com/agantelin/1c7b32d47e7aabf2654c7d70afa07ad7)

## What it does

```css
.foo {
    overflow: hidden;
    border-radius: 10px;
}
```

```css
.foo {
    overflow: hidden;
    border-radius: 10px;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
}
```

## Usage

```js
postcss([require("postcss-safari-border-plugin")]);
```

See [PostCSS] docs for examples for your environment.
