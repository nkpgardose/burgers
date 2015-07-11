# burgers
Check **burgers** kitchen sink [here](http://nkpgardose.github.io/burgers)
> my collection of burgers that use style modifiers. Easy to apply burger because we :heart: :hamburger:

### Install
```
$ git clone git@github.com:nkpgardose/burgers.git
$ cd burgers
$ bower install
$ open index.html
```

### Usage
```html
<!-- Easy to apply. Vanilla burger -->
<div class="burger" role="button">
    <div class="burger-layer"></div>
    <div class="burger-layer"></div>
    <div class="burger-layer"></div>
</div>
```

### Adding modifiers
Use modifiers for your desired burger behavior.

```html
<!-- toggles burger to close symbol when click event occur in bouncy effect -->
<div class="burger burger--bouncy js-burger" role="button">
    <div class="burger-layer -top"></div>
    <div class="burger-layer -mid"></div>
    <div class="burger-layer -bot"></div>
</div>
...
<script src="js/burgers.js" type="text/javascript" charset="utf-8"></script>
```

### List of modifiers
* bouncy ```.burger--bouncy```
* back ```.burger--back```
* forward ```.burger--forward```
* chrome ```.burger--chrome```
* real with cheese ```.burger--realWithCheese```

## License

MIT © [Neil Kim Gardose](https://github.com/nkpgardose)
