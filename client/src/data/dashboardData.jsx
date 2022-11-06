export const dataDashBoard= {
html:[
{
   question:" Q1. What is the purpose of the `<track>` tag, and when should it be used?",
   indice:'',
   responses:[
   {value:false,response:"The `<track>` tag is used for specifying subtitles. It is typically applied as a child of the `<audio>` and `<video>` tags."},
   {value:false,response:"The `<track>` tag is used for specifying subtitles. It is typically applied as a child of the `<video>` tag."},
   {value:false,response:"The `<track>` tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the `<video>` tag."},
   {value:true, response:"The `<track>` tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the `<audio>` and `<video>` tag."}
    ]
},
{
   question:"Q2. What are the best examples of void elements?",
   indice:'',
   responses:[
   {value:false,response:`<link><meta><title>`},
   {value:true,response:`<br><base><source>`},
   {value:false,response:`<input><br><p>`},
   {value:false, response:`<area><embed><strong>`}
    ]
},
{
   question:"Q3. In HTML5, which tag or tags embed a webpage inside of a webpage?",
   indice:'',
   responses:[
   {value:false,response:`<iframe>, <frame>, and <frameset>`},
   {value:false,response:`<frame>`},
   {value:true,response: `<iframe>`},
   {value:false, response:`<frame> and <frameset>`}
    ]
},
{
   question:"Q4. Where do `<header>` and `<footer>` tags typically occur?",
   indice:'',
   responses:[
   {value:false,response:"as children of `<body>, <article>, <aside>, and <section>` tags"},
   {value:true,response:"as children of `<body>, <article>, and <section>` tags"},
   {value:false,response: "as children of `<body>, <article>, <aside>, <nav>, and <section>` tags"},
   {value:false, response:"as children of `<body>, <article>, <table>, and <section>` tags"}
    ]
},
{
   question:"Q5. What is the best way to apply bold styling to text?",
   indice:'',
   responses:[
   {value:true,response: `<strong>`},
   {value:false,response:"Use CSS."},
   {value:false,response:`<bold>`},
   {value:false, response:`<b>`}
    ]
},
{
   question:"Q6. When is the `<link>` tag used?",
   indice:'',
   responses:[
   {value:false,response: "when linking style sheets, JavaScript, and icons for mobile apps"},
   {value:true,response:"when linking style sheets, favicons, and preloading assets"},
   {value:false,response:"when linking one webpage to another"},
   {value:false, response:"when linking style sheets, external URLs, and favicons"}
    ]
},
{
   question:"Q7. What should fill the two blanks in the HTML code below?",
   indice:`
<address ______ _____>
  <span itemprop="streetAddress">6410 Via Real</span><br />
  <span itemprop="addressLocality">Carpinteria</span>,
  <span itemprop="addressRegion">CA</span>
  <span itemprop="addressCode">93013</span>
</address>
`,
   responses:[
   {value:true,response: '`itemscope` `itemtype="http://schema.org/PostalAddress"`'},
   {value:false,response:'`itemsref="http://schema.org/PostalAddress"` `itemid="address"`'},
   {value:false,response:'`itemscope` `itemref="http://schema.org/PostalAddress"`'},
   {value:false, response:'`itemid="address"` `itemtype="http://schema.org/PostalAddress"`'}
    ]
},
{
   question:"Q8. When should you use the `<aside>` element?",
   indice:'',
   responses:[
   {value:true,response: "when the content can be removed without detracting from the page's message"},
   {value:false,response:"for anything you want to move to the side, like a pull quote box, a sidebar, or an image with text wrapping around it"},
   {value:false,response:"for anything in parentheses"},
   {value:false, response:"for anything in a sidebar"}
    ]
},
{
   question:"Q9. With which tags is the `<source>` element associated?",
   indice:'',
   responses:[
   {value:false,response: `<svg>, <picture>, <audio>, and <video>`},
   {value:true,response:`<picture>, <audio>, and <video>`},
   {value:false,response:"It is interchangeable with the `src` attribute, so any element which uses `src` may use `<source>`"},
   {value:false, response:`<audio> and <video>`}
    ]
},
{
   question:"Q10. What is NOT a valid attribute for the `<textarea>` element?",
   indice:'',
   responses:[
   {value:false,response: "readonly"},
   {value:true,response:"max"},
   {value:false,response:"form"},
   {value:false, response:"spellcheck"}
    ]
},
{
   question:"Q11. What is the best way to code the sample shown?",
   indice:'![Sample text](images/ss-2.png?raw=true)',
   responses:[
   {value:false,response: 
`
<details>
  <summary>Parmesan Deviled Eggs</summary>
  <p>
    These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
  </p>
</details> `},
   {value:false,response:
`
<h4>▸ Parmesan Deviled Eggs</h4>
<p>
  These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
</p>
`},
   {value:true,response:
`<details open>
  <summary>Parmesan Deviled Eggs</summary>
  <p>
    These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
  </p>
</details>`
},
   {value:false, response:
`
<details>
  <h4>▸ Parmesan Deviled Eggs</h4>
  <p>
    These delectable little bites are made with organic eggs, fresh Parmesan, and chopped pine nuts.
  </p>
</details>
`}
    ]
},
{
   question:"Q12. What is the purpose of the `<samp>` element?",
   indice:'',
   responses:[
   {value:false,response: "It connects the web browser to a SA-MP server."},
   {value:false,response:"It identifies enclosed text as a sampler or an example."},
   {value:true,response:"It identifies sample output from a computer program."},
   {value:false, response:"It uses a simple application messaging protocol to connect the browser to a texting device."}
    ]
},
{
   question:"Q13. When should you use `<ol>` and `<ul>` elements?",
   indice:'',
   responses:[
   {value:true,response:"Use `<ul>` when you want a bulleted list and `<ol>` when you want a numbered list."},
   {value:false,response:"Use `<ul>` when you have a list of items in which the order of the items matters. Use `<ol>` when you have a list of items that could go in any order."},
   {value:false,response:"Use `<ol>` when you want a bulleted list and `<ul>` when you want a numbered list."},
   {value:false, response:"Use `<ol>` when you have a list of items in which the order of the items matters. Use `<ul>` when you have a list of items that could go in any order."}
    ]
},
{
   question:"Q14. What is the difference between the post and get methods in a form?",
   indice:'',
   responses:[
   {value:false,response:"post is used for sending information to the server. get is used for retrieving form information from the server."},
   {value:false,response:"get is used for sending information to the server. post is used for retrieving form information from the server."},
   {value:false,response:"With get, data is included in the form body when send to the server. With post, the data goes through the URL."},
   {value:true, response:"With post, data is included in the form body when send to the server. With get, the data goes through the URL."}
    ]
},
{
   question:"Q15. What is the difference between the `<div>` and `<span>` tags?",
   indice:'',
   responses:[
   {value:true,response:"`<div>` is used where a generic block-level tag is needed, while `<span>` is used where a generic inline tag is needed."},
   {value:false,response:"`<div>` is used for major divisions on a page, while `<span>` is used to span across columns."},
   {value:false,response:"`<div>` is the industry-standard default tag, but you could use `<span>` if you prefer."},
   {value:false, response:"`<div>` is used where a generic inline tag is needed, while `<span>` is used where a generic block-level tag is needed."}
    ]
},
],
javascript:[
 {
   question:"Q1.Which operator returns true if the two compared values are not equal?",
   indice:'',
   responses:[
   { response : `<>`, value:false},
   { response : `~`, value:false},
   { response : `==!`, value:false},
   { response : `!==`, value:true},
    ]
 },

{
   question:"Q2. How is a forEach statement different from a for statement?",
   indice:'',
   responses:[
   { response : "Only a for statement uses a callback function.", value:false},
   { response : "A for statement is generic, but a forEach statement can be used only with an array.", value:true},
   { response : "Only a forEach statement lets you specify your own iterator.", value:false},
   { response : "A forEach statement is generic, but a for statement can be used only with an array.", value:false},
    ]
 },

{
   question:"Q3. Review the code below. Which statement calls the addTax function and passes 50 as an argument? How would you use this function to find out how much tax should be paid on $50?",
   indice:`
  function addTax(total) {
  return total * 1.05;
   }`,
   responses:[
   { response : "addTax = 50;", value:false},
   { response : "return addTax 50;", value:true},
   { response : "addTax(50);", value:true},
   { response : "addTax 50;", value:false},
    ]
 },
 {
   question:"Q4. Which statement is the correct way to create a variable called rate and assign it the value 100?",
   indice:'',
   responses:[
   { response : `let rate = 100;`, value:true},
   { response : `let 100 = rate;`, value:false},
   { response : `100 = let rate;`, value:false},
   { response : `rate = 100;`, value:false},
    ]
 },


{
   question:' Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?',
   indice:'',
   responses:[
   { response : `var student = new Person();`, value:true},
   { response : `var student = construct Person;`, value:false},
   { response : `var student = Person();`, value:false},
   { response : `var student = construct Person();`, value:false},
    ]
 },

{
   question:"Q6. When would the final statement in the code shown be logged to the console? When would 'results shown' be logged to the console?",
   indice:`
   let modal = document.querySelector('#result');
   setTimeout(function () {
   modal.classList.remove('hidden');
   }, 10000);
   console.log('Results shown');`,
   responses:[
   {response: "after 10 second",value:false},
   {response: "after results are received from the HTTP request",value:false},
   {response:"after 10000 seconds",value:false},
   {response:"immediately",value:true}

    ]
 },
{
   question:'Q7. Which snippet could you add to this code to print "food" to the console?',
   indice:`
  class Animal {
   static belly = [];
   eat() {
    Animal.belly.push('food');
   }
  }
 let a = new Animal();
 a.eat();
 console.log(/* Snippet Here */); //Prints food`,
   responses:[
   {value:false,response: `a.prototype.belly[0]`},
   {value:false,response: `Object.getPrototype0f (a).belly[0]`},
   {value:true,response:`Animal.belly[0]`},
   {value:false,response: `a.belly[0]`}

    ]
 },
{
   question:"Q8. You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?",
   indice:`
for (var i = 1; i <= 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 10000);
}`,
   responses:[
   {value:false,response: `
  for (var i = 1; i <= 4; i++) {
   (function (i) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(j);
}`},
   {value:false,response: `
for (var i = 1; i <= 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}`},
   {value:true,response:`
for (var i = 1; i <= 4; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(i);
}`},
   {value:false,response: `
for (var j = 1; j <= 4; j++) {
  setTimeout(function () {
    console.log(j);
  }, j * 1000);
}`}

    ]
 },
{
   question:"Q9. How does a function create a closure?",
   indice:'',
   responses:[
   {response: "It reloads the document whenever the value changes.",value:false},
   {response: "It returns a reference to a variable in its parent scope.",value:true},
   {response:"It completes execution without returning",value:false},
   {response:" It copies a local variable to the global scope.",value:false}

    ]
 },
{
   question:"Q10. Which statement creates a new function called discountPrice?",
   indice:'',
   responses:[
   {value:true,response: `
let discountPrice = function (price) {
  return price * 0.85;
};`},
   {value:false,response: `
let discountPrice(price) {
  return price * 0.85;
};`},
   {value:false,response:`
let function = discountPrice(price) {
  return price * 0.85;
};`},
   {value:false,response: `
discountPrice = function (price) {
  return price * 0.85;
};`}

    ]
 },
{
   question:"Q11. What is the result in the console of running the code shown?",
   indice:`
 var Storm = function () {};
 Storm.prototype.precip = 'rain';
 var WinterStorm = function () {};
 WinterStorm.prototype = new Storm();
 WinterStorm.prototype.precip = 'snow';
 var bob = new WinterStorm();
 console.log(bob.precip);`,
   responses:[
   {response: "Storm()",value:false},
   {response: "undefined",value:false},
   {response:"rain",value:false},
   {response:"snow",value:true}

    ]
 },
{
   question:"Q12. You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?",
   indice:'',
   responses:[
   {response: `/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/`,value:false},
   {response: `${/\d\d:\d\d:\d\d/}`,value:true},
   {response:`/[0-9]+:[0-9]+:[0-9]+/`,value:false},
   {response:`/ : : /`,value:false}

    ]
 },
{
   question:"Q13. What is the result in the console of running this code?",
   indice:`
   'use strict';
function logThis() {
  this.desc = 'logger';
  console.log(this);
}
new logThis();
`,
   responses:[
   {response: `undefined`,value:false},
   {response: `window`,value:false},
   {response:`{desc: "logger"}`,value:true},
   {response:`function`,value:false}

    ]
 },
{
   question:"Q14. How would you reference the text 'avenue' in the code shown?",
   indice:`let roadTypes = ['street', 'road', 'avenue', 'circle'];`,
   responses:[
   {response: `roadTypes.2`,value:false},
   {response: `roadTypes[3]`,value:false},
   {response:`roadTypes.3`,value:false},
   {response:`roadTypes[2]`,value:true}

    ]
 },
{
   question:"Q15. What is the result of running this statement?",
   indice:`console.log(typeof 42);`,
   responses:[
   {response: `'float'`,value:false},
   {response: `'value'`,value:false},
   {response: `'number'`,value:true},
   {response:`'integer'`,value:false}

    ]
 },
{
   question:"Q16. Which property references the DOM object that dispatched an event?",
   indice:``,
   responses:[
   {response:`self`,value:false},
   {response: `object`,value:false},
   {response:`target`,value:true},
   {response:`source`,value:false}

    ]
 },
{
   question:"Q17. You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?",
   indice:`
function addNumbers(x, y) {
  if (isNaN(x) || isNaN(y)) {
  }
}`,
   responses:[
   {response:`exception('One or both parameters are not numbers')`,value:false},
   {response:`catch('One or both parameters are not numbers')`,value:false},
   {response:`error('One or both parameters are not numbers')`,value:false},
   {response:`throw('One or both parameters are not numbers')`,value:true}

    ]
 },
{
   question:"Q18. Which method converts JSON data to a JavaScript object?",
   indice:``,
   responses:[
   {response:`JSON.fromString();`,value:false},
   {response:`JSON.parse()`,value:true},
   {response:`JSON.toObject()`,value:false},
   {response:`JSON.stringify()`,value:false}

    ]
 },
{
   question:"Q19. When would you use a conditional statement?",
   indice:``,
   responses:[
   {response:"When you want to reuse a set of statements multiple times.",value:false},
   {response:"When you want your code to choose between multiple options.",value:true},
   {response:"When you want to group data together.",value:false},
   {response:"When you want to loop through a group of statement.",value:false}

    ]
 },

],
css:[
 {
   question:"Q1. Among these selectors which selector has the highest specificity ranking for selecting the anchor link element?",
   indice:`css
ul li a
a
.example a
div a`
,
   responses:[
   { response : `.example a`, value:false},
   { response : `div a`, value:false},
   { response : `a`, value:false},
   { response : `ul li a`, value:true},
    ]
 },
{
 question:'Q2. Using an attribute selector, how would you select an `<a>` element with a "title" attribute?',
indice:"",
responses:[
   {value:true,response: `a[title]{...}`},
   {value:false,response:`a > title {...}`},
   {value:false,response:`a.title {...}`},
   {value:false,response:`a=title {...}`}
]
},
{
question: "Q3. What is the CSS selector for an `<a>` tag containing the title attribute?",
indice:"",
   responses:[
      {value:true,response:`a[title]`},
      {value:false,response:`a > title`},
      {value:false,response:`a=title`},
      {value:false,response:`a.title`}
]
},
{
question: "Q4. CSS grid and flexbox are now becoming a more popular way to create page layouts. However, floats are still commonly used, especially when working with an older code base, or if you need to support older browser version. What are two valid techniques used to clear floats?",
indice:  "",
 responses:[
{value:false,response:'Use the "clearfix hack" on the floated element and add a float to the parent element.'},
{value:false,response:'Use the overflow property on the floated element or the "clearfix hack" on either the floated or parent element.'},
{value:false,response:'Use the "clearfix hack" on the floated element or the overflow property on the parent element.'},
{value:true,response:'Use the "clearfix hack" on the parent element or use the overflow property with a value other than "visible."'}
]
},
{
question:"Q5. What element(s) do the following selectors match to?",
indice:
`css
1) .nav {
  ...;
}
2) nav {
  ...;
}
3) #nav {
  ...;
}
`,
   responses:[
{value:false,response:
  `markdown
  1. An element with an ID of "nav"
  2. A nav element
  3. An element with a class of "nav"
  `
},  
{value:false,response:
  `markdown
      They all target the same nav element.
  `
},  
{value:true,response:
  `markdown
  1. An element with an class of "nav"
  2. A nav element
  3. An element with a id of "nav"
  `
},  
{value:false,response:
  `markdown
  1. An element with an class of "nav"
  2. A nav element
  3. An div with a id of "nav"
  `
}
]
},
{
question: "Q6. When adding transparency styles, what is the difference between using the opacity property versus the background property with an `rgba()` value?",
indice:"",
responses:[
   {value:false,response:"Opacity specifies the level of transparency of the child elements. Background with an `rgba()` value applies transparency to the background color only."},
   {value:false,response:"Opacity applies transparency to the background color only. Background with an `rgba()` value specifies the level of transparency of an element, as a whole, including its content."},
   {value:true,response:"Opacity specifies the level of transparency of an element, including its content. Background with an `rgba()` value applies transparency to the background color only."},
   {value:false,response:"Opacity applies transparency to the parent and child elements. Background with an `rgba()` value specifies the level of transparency of the parent element only."}
]
},
{
question: "Q7. What is true of block and inline elements? (_Alternative_: Which statement about block and inline elements is true?)",
indice: "", 
 responses:[
   {value:false,response:"By default, block elements are the same height and width as the content container between their tags; inline elements span the entire width of its container."},
   {value:true,response: "By default, block elements span the entire width of its container; inline elements are the same height and width as the content contained between their tags."},
   {value:false,response:"A `<nav>` element is an example of an inline element. `<header>` is an example of a block element."},
   {value:false,response:" A `<span>` is an example of a block element. `<div>` is an example of an inline element."}
]
},
{
question: "Q8. CSS grid introduced a new length unit, fr, to create flexible grid tracks. Referring to the code sample below, what will the widths of the three columns be?",
indice:
`css
.grid {
  display: grid;
  width: 500px;
  grid-template-columns: 50px 1fr 2fr;
}
`
,
   responses:[
      {value:false,response:"The first column will have a width of 50px. The second column will be 50px wide and the third column will be 100px wide."},
      {value:true,response:" The first column will have a width of 50px. The second column will be 150px wide and the third column will be 300px wide."},
      {value:false,response:" The first column will have a width of 50px. The second column will be 300px wide and the third column will be 150px wide."},
      {value:false,response:" The first column will have a width of 50px. The second column will be 500px wide and the third column will be 1000px wide."}
]
},
{

question: "Q9. If the width of the container is 500 pixels, what would the width of the three columns be in this layout?",
indice:
`.grid { display: grid; grid-template-columns: 50px 1fr 2fr; }`,
   responses:[
      {value:true,response:"50px, 150px, 300px"},
      {value:false,response:"50px, 200px, 300px"},
      {value:false,response:"50px, 100px, 200px"},
      {value:false,response:" 50px, 50px, 100px"}
]
},
{

question: "Q10. What is the line-height property primarily used for?",
indice:"",
responses:[
{value:true,response:"to control the height of the space between two lines of content"},
{value:false,response:"to control the height of the space between heading elements"},
{value:false,response:"to control the height of the character size"},
{value:false,response:"to control the width of the space between characters"},
]
},
{
question: "Q11. Three of these choices are true about class selectors. Which is NOT true?",
indice: "", 
responses:[
   {value:false,response:"Multiple classes can be used within the same element."},
   {value:false,response:"The same class can be used multiple times per page."},
   {value:false,response:"Class selectors begin with a leading period"},
   {value:true,response:"Classes can be used multiple times per page but not within the same element."}
]
},
{

question: "Q12. What is not true about class selectors?",
indice:'',
 responses:[
{value:true,response:"Only one class value can be assigned to an element."},
{value:false,response:" An element can have multiple class value."},
{value:false,response:"Class selectors are marked with a leading period."},
{value:false,response:"More than one element can have the same class value."},
]
},
{

question: "Q13. There are many properties that can be used to align elements and create page layouts such as float, position, flexbox and grid. Of these four properties, which one should be used to align a global navigation bar which stays fixed at the top of the page?",
indice: "",  
responses:[
   {value:true,response:"position"},
   {value:false,response:" flexbox"},
   {value:false,response:" grid"},
   {value:false,response:" float"}
]
},
{
question: "Q14. In the shorthand example below, which individual background properties are represented?",
indice:
`css
background: blue url(image.jpg) no-repeat scroll 0px 0px;
`
,
   responses:[
   {value:true,response:
  `css
  background-color: blue;
  background-image: url(image.jpg);
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: 0px 0px;
  `
   },
   {value:false,response:
  `css
  background-color: blue;
  background-img: url(image.jpg);
  background-position: no-repeat;
  background-scroll: scroll;
  background-size: 0px 0px;
  `
   },
   {value:false,response:
  `css
  background-color: blue;
  background-src: url(image.jpg);
  background-repeat: no-repeat;
  background-wrap: scroll;
  background-position: 0px 0px;
  `
   },
   {value:false,response:
  `css
  background-color: blue;
  background-src: url(image.jpg);
  background-repeat: no-repeat;
  background-scroll: scroll;
  background-position: 0px 0px;
  `
   }
]
},
{
question: "Q15. In this example, according to cascading and specificity rules, what color will the link be?",
indice:`css
.example {
  color: yellow;
}
ul li a {
  color: blue;
}
ul a {
  color: green;
}
a {
  color: red;
}

html
<ul>
  <li><a href="#" class="example">link</a></li>
  <li>list item</li>
  <li>list item</li>
</ul>
`
,
   responses:[
      {value:false,response:'green'},
      {value:true,response:'yellow'},
      {value:false,response:'blue'},
      {value:false,response:'red'}
]
},
{
question: "Q16. When elements overlap, they are ordered on the z-axis (i.e., which element covers another). The z-index property can be used to specify the z-order of overlapping elements. Which set of statements about the z-index property are true?",
indice: "", 
responses:[
{value:true,response:'Larger z-index values appear on top of elements with a lower z-index value. Negative and positive numbers can be used. z-index can only be used on positioned elements.'},
{value:false,response:'Smaller z-index values appear on top of elements with a larger z-index value. Negative and positive numbers can be used. z-index must also be used with positioned elements.'},
{value:false,response:'Larger z-index values appear on top of elements with a lower z-index value. Only positive numbers can be used. z-index must also be used with positioned elements.'},
{value:false,response:'Smaller z-index values appear on top of elements with a larger z-index value. Negative and positive numbers can be used. z-index can be used with or without positioned elements.'}
]
},
{

question: "Q17. When elements within a container overlap, the z-index property can be used to indicate how those items are stacked on top of each other. Which set of statements is true?",
indice:"",
   responses:[
   {value:true,response:
  `markdown
  1. Larger z-index values appear on top elements with a lower z-index value.
  2. Negative and positive number can be used.
  3. z-index can be used only on positioned elements.
  `
   },
  {value:false,response:
  `markdown
  1. Smaller z-index values appear on top of elements with a larger z-index value.
  2. Negative and positive numbers can be used.
  3. z-index can be used with or without positioned elements.
  `
  },
  {value:false,response:
  `markdown
  1. Smaller z-index values appear on top of elements with a larger z-index value.
  2. Negative and positive number can be used.
  3. z-index must also be used with positioned elements.
  `
  },
  {value:false,response:
  `markdown
  1. Larger z-index values appear on top of elements with a lower z-index value.
  2. Only positive number can be used.
  3. z-index must also be used with positioned elements.
  `
  }
]
},
{

question: "Q18. What is the difference between the following line-height settings?",
indice:
`css
line-height: 20px;
line-height: 2;
`   
,responses:[
   {value:true,response:"The value of 20px will set the line-height to 20px. The value of 2 will set the line-height to twice the size of the corresponding font-size value."},
   {value:false,response:"The value of 20px will set the line-height to 20px. The value of 2 is not valid."},
   {value:false,response:"The value of 20px will set the line-height to 20px. The value of 2 will default to a value of 2px."},
   {value:false,response:"The value of 20px will set the line-height to 20px. The value of 2 will set the line-height to 20% of the corresponding font-size value."}
]
},
{
question:" Q19. In the following example, what color will paragraph one and paragraph two be? (_Alternative_: In this example, what color will paragraphs one and two be?)",
indice:
`html
<section>
  <p>paragraph one</p>
</section>

<p>paragraph two</p>


css
section p {
  color: red;
}
section + p {
  color: blue;
}
`
,responses:[
   {value:false,response:"Paragraph one will be blue, paragraph two will be red."},
   {value:false,response:"Both paragraphs will be blue."},
   {value:true,response:"Paragraphs one will be red, paragraph two will be blue."},
   {value:false,response:"Both paragraphs will be red."}
]
},
{
question:"Q20. What are three valid ways of adding CSS to an HTML page?",
indice:"",  
 responses:[
   {value:false,response:
  `markdown
  1. External; CSS is written in a separate file.
  2. Inline; CSS is added to the <head> of the HTML page.
  3. Internal; CSS is included within the HTML tags.
  `
   },
  {value:false,response:
  `markdown
  1. External; CSS is written in a separate file and is linked within the <header> element of the HTML file.
  2. Inline; CSS is added to the HTML tag.
  3. Internal; CSS is included within the <header> element of the HTML file.
  `
},
  {value:false,response:
  `markdown
  1. External; CSS is written in a separate file and is linked within the <head> element of the HTML file.
  2. Internal; CSS is included within the <header> element of the HTML file.
  3. Inline; CSS is added to the HTML tag.
  `
},
  {value:true,response:
  `markdown
  1. External; CSS is written in a separate file and is linked within the <head> element of the HTML file.
  2. Inline; CSS is added to the HTML tag.
  3. Internal; CSS is included within the <head> element of the HTML file.
  `
}
]
}
]
}
