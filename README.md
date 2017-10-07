[![npm](https://img.shields.io/npm/dm/prevent-touch.svg)]()
[![npm](https://img.shields.io/npm/dt/prevent-touch.svg)]()
[![npm](https://img.shields.io/npm/v/prevent-touch.svg)]()

# <a href="https://github.com/dj10dj100/preventTouch">jQuery prevent-touch</a>
===========

Hover states on mobile devices can be tricky and this is just another module designed to help with building touch ready interfaces with web technologies .

This plugin is designed to help with preventing the initial navigation on a href when there is a hover state applied with css. Unique I know, but these things happen...
Also, there is plenty of other ways to solve the problems this could solve, not using `<a>` tags with css state etc.

This is a jQuery plugin, so there is a hard dependency on jQuery being available in the current scope. 


```javascript
import 'prevent-touch';
```
--------------------
Basic Example
--------------------

``` html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

<a class="test" href="#tested">preventTouch</a>
<a class="test" href="#tested">preventTouch</a>
<a class="test" href="#tested">preventTouch</a>
<a class="test" href="#tested">preventTouch</a>
<a class="test" href="#tested">preventTouch</a>
```

```javascript
	$('.test').preventTouch({
		ios : true
	});
```

All elements with <b>.test</b> class will need to be pressed twice for the navigation to happenon an ios device.

--------------------
## Options
--------------------

<b> You can spec what devices to make the plugin run on if needs be </b>

```javascript
$('.test').preventTouch({
    ios : true,
    android : true,
    blackberry : true,
    windows : true,
    opera : true,
    any : true
});
```
