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
    `bower install w2b.js`
  * Via npm:
    `comming soon`
2. To use W2b in your project, place the following code in the of your main HTML:

  `<script src="bower_components/w2b.js/lib/w2b.min.js"></script>`

3. Just copy and paste the code below for your first w2b application.

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    Name:
    <input w2b-model="model_name" placeholder="Enter your name here" />
    <hr />
    <h1 >Hello <em w2b-bind="name"></em></h1>
    <h1 >こんにちわ <em w2b-bind="name"></em></h1>
    <h1 >Xin chào <em w2b-bind="name"></em></h1>
    <script src="https://thuanitdn.github.io/w2b.js/w2b.min.js"></script>
    <script>
     var instance = new w2b({
                    name: 'model_name',
                  }, {
                    name: 'Thuan Le (ツゥアン)'
                });
    </script>
  </body>
</html>

```

## Document  

See: https://thuanitdn.github.io/w2b.js/

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
