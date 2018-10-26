# PostCSS Safari Border Plugin [![Build Status][ci-img]][ci]

[PostCSS] plugin to solve problem when using border-radius + overflow: hidden + transform.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/azl397985856/postcss-safari-border-plugin.svg
[ci]:      https://travis-ci.org/azl397985856/postcss-safari-border-plugin

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-safari-border-plugin') ])
```

See [PostCSS] docs for examples for your environment.
