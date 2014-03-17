jQuery preventTouch
===========
<p>v1.0</p>
<p>@Author Daniel Jenkins</p>
<p>@Licence : Open source, go for it.</p>

I ran into a problem recently - hover states on mobile devices. We've all built those awesome html dropdowns that work so nicely with "mouseover" or even mobile menus with pure html & css wizadry. 

Well what happens when you need to use a touch enabled device for these or have a sub navigation on that HTML markup? You click the parent element and oopsy, the browsers already moved to that page. Never allowing the user to open up that juicy sub-navigation.

This plugin solves that..

--------------------
Basic Example
--------------------


	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="preventTouch.js"> </script>

	<a class="test" href="#tested">preventTouch</a>
	<a class="test" href="#tested">preventTouch</a>
	<a class="test" href="#tested">preventTouch</a>
	<a class="test" href="#tested">preventTouch</a>
	<a class="test" href="#tested">preventTouch</a>


	```javascript
		$(document).ready(function(){
			$('.test').preventTouch({
					ios : true
			});
		});
	```

All elements with .test class will need to be pressed twice on an ios device.

--------------------
Options v1.0
--------------------

<b> For window resizing </b>

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
