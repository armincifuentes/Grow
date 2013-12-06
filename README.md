#Grow 1.0
Grow is a microtemplating plugin for jQuery, which tries to close a wee-bit the gap between front-end coding and MVC, by separating template files and content.

##How it works
Grow loads a HTML template file and then fills it with contents from a JS Object. The newly generated HTML is then injected into the desired element as many times as required.

##First steps
Grow requires jQuery, so be sure to include it in your sites code before proceeding. Then just add the Grow source, and you're good to go!

    <head>
  	  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
  	  <script type="text/javascript" src="js/jquery.grow.js"></script>
  	</head>



##Prepare your template files
Grow searches and replaces incidences of your terms for you. We use a very simple syntax to pick these terms out of the HTML and to be shure not to replace anything you don't want replaced. Just use the tag **<@fieldname\>** ("fieldname" being whatever you want to call your field) wherever you want a placeholder. As an example, here is the HTML Template used in this demo:

  	<section class="comment">
  	 <img src="<@photo>" alt="<@name>" />
  	 <h2><a href="<@uri>" target="_blank"><@name></a></h2>
  	 <p><@comment></p>
  	</section>

##Setup Grow
Grow works on the element you want to be expandable, the one you want to insert the new elements into. In this demo, I setup the comments wrapper with Grow, to put there the new elements.

  	$('aside').grow({
  	  	templateURL: 'templates/comments.html',
  	  	cache: false,
  	  	animation: 'slide',
  	  	speed: 1000
  	});

#Make it Grow!
Now everything is ready at last! Now you just got to give Grow the fields and its values coded in a JS Object, and tell it where do you want to insert the new element, whether its at the end or at the beginning of the wrapper.

  	var data = {
  	  name: 'John Appleseed',
  	  photo: 'http://lorempixel.com/60/60/people',
  	  uri: 'http://www.google.com',
  	  comment: 'Nice little plugin!'
  	}
  	
  	$('aside').grow('prepend', data);

Note how the field names and the template tag names are the same! Grow will then scan your template and replace all of the field names with their respective value, and put the resulting new element into the parent.

##Options
For its first version, Grow has a little set of options to help you fit it best for your needs. If you think you have a good idea for a new feature, just say so at the Github project page.

Option | Type | Description | Default value
---|---|---|---
templateURL | String | The relative path to the template file you want to use for each element. | ''
cache | Boolean | Whether or not use the cache to load the template. Useful if you have dynamically generated templates. | true
animation | String | Which animation use when inserting the new element. Possible values are **slide**, **fade** or **none**, which use $slideDown(), .fadeIn() and nothing, respectively. | 'fade'
speed | Integer | Speed in miliseconds at which the animation runs. | 300
afterInsert | Function | Callback function to run after the element gets injected. | function () {}
beforeInsert | Function | Callback function to run before the element gets injected. | function () {}


##Methods
There are two methods implemented in grow: 'append' and 'prepend'. They just tell Grow where to put the new element: at the end or at the beginning, respectively. They both require a JS Object as a parameter, which should include the data to be used:
  
    // Insert new element at the beginning of 'aside'
  	$('aside').grow('prepend', data);
  	
  	// Insert new element at the end of 'aside'
  	$('aside').grow('append', data); 