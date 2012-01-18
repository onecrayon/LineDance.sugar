# LineDance.sugar

LineDance.sugar provides a small number of actions for working with the current line or lines, commonly requested by people moving from NetBeans or similar IDEs. LineDance.sugar currently includes:

* Delete Line(s) `command shift K`
* Duplicate Line(s) `command shift D`
* Duplicate Line(s) Upwards `command shift option D`

Note that the shortcuts used are not the same as in NetBeans, because its keybindings for similar actions are already in use in Espresso.

## Installation

**Requires Espresso 2.0+**

The easiest way to install LineDance.sugar currently is directly from GitHub:

    cd ~/Library/Application\ Support/Espresso/Sugars
    git clone git://github.com/onecrayon/LineDance.sugar.git

Relaunch Espresso, and a new "Line Dance" submenu will be available in your Actions menu. You can then update the Sugar when necessary by running the following command:

    cd ~/Library/Application\ Support/Espresso/Sugars/LineDance.sugar
    git pull

Alternately, you can [download the Sugar](https://github.com/onecrayon/LineDance.sugar/zipball/master), decompress it, rename the resulting folder `LineDance.sugar`, and double click to install it.

## Development

LineDance.sugar is written entirely in XML and JavaScript using Espresso's [JavaScript API](http://wiki.macrabbit.com/index/JavaScriptActions/). To discover how I'm doing things or tweak its behavior to fit your own needs, right click the Sugar in the Finder and choose Show Package Contents or fork this project and go to town.

You can also [let me know](http://onecrayon.com/about/contact/) if you have any feedback, requests, or run across any problems.

## MIT License

"Delete Line" was originally ported by [Pete Schaffner](https://github.com/peteschaffner) from [minimalweb's](https://github.com/minimalweb) Espresso 1 implementation, both of which are also released under the MIT license.

Copyright (c) 2012 Ian Beck

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
