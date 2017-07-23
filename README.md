# W2b.js

Simplest for data-binding with key-value

Very small just only 1,3 kb for gzip size.
## Features

* 2 way data binding.
* Getter and Setter data.
* Auto binding html

## View demo 
https://thuanitdn.github.io/w2b.js/helloworld.html

## Getting started

1. Installing
  * Via bower:
    `bower install w2b`
  * Via npm:
    `comming soon`
2. To use W2b in your project, place the following code in the of your main HTML:

  `<script src="bower_components/w2b/lib/w2b.min.js"></script>`

## Getting started

* Just copy and paste the code below for your first w2b application.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="http://thuanitdn.github.com/w2b.min.js"></script>
    <script>
     var instance = new w2b({
                    name: 'model_name',
                  }, {
                    name: 'Thuan Le (ツゥアン)'
                });
    </script>
  </head>
  <body>
    Name:
    <input w2b-model="model_name" placeholder="Enter your name here" />
    <hr />
    <h1 >Hello <em w2b-bind="name"></em></h1>
    <h1 >こんにちわ <em w2b-bind="name"></em></h1>
    <h1 >Xin chào <em w2b-bind="name"></em></h1>
  </body>
</html>

```

## Document

**1. Constructor / initialize:**  `new w2b([attributes], [default value])`

when creating an instance, you can pass in the initial attributes(required) and default value(not required). It will be created an instance.

Example: 

```html
var instance= new w2b({
  title: 'm_title',
  description : 'm_description',
  checked: 'm_checked',
  radio: 'm_radio',
  single_selected: 'm_single_selected',
  multi_selected: 'm_multi_selected'
})
```

With default value:

```html
var instance= new w2b({
  title: 'm_title',
  description : 'm_description',
  checked: 'm_checked',
  radio: 'm_radio',
  single_selected: 'm_single_selected',
  multi_selected: 'm_multi_selected'
},{
  title: 'Thuan',
  description : 'Write a description',
  checked: true,
  radio: true,
  single_selected: 'a',
  multi_selected: 'b'
})
```

**2. Write html tag input:** Using w2b-model=[NAME_ATTRIBUTE] and w2b-bind=[KEY BINDING]

**TEXT**

```html
<input type="text" w2b-model="m_title" />
<br>
<span w2b-bind="title"></span>
```

**TEXTAREA**

```html
<textarea w2b-model="m_description"></textarea>
<br>
<span w2b-bind="description"></span>
```

**CHECKBOX AND RADIO**

checkbox with boolean value:

```html
<input type="checkbox" w2b-model="m_checked" />
<br>
<span w2b-bind="checked"></span>
```
radio with boolean value:

```html
<input type="radio" w2b-model="m_radio" />
<br>
<span w2b-bind="radio"></span>
```

**SELECT**

single select
```html
<select w2b-model="m_single_selected">
  <option value="a">A</option>
  <option value="b">B</option>
  <option value="c">C</option>
</select>
<span w2b-bind="single_selected"></span>
```

multiple select
```html
<select w2b-model="m_multi_selected" multiple>
  <option value="a">A</option>
  <option value="b">B</option>
  <option value="c">C</option>
</select>
<span w2b-bind="multi_selected"></span>
```

## Development mode
  * Having all the dependencies installed run `npm run dev`. This command will generate an non-minified version of your library and will run a watcher so you get the compilation on file change.

## LICENSE
  ```html
  The MIT License (MIT)
  
  Copyright (c) 2017 Thuan Le
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
