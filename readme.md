# iPrint
Hi, cosole.log(value);
is cool but it is very large syntax to type.
And,  
how cool if you have to just do type
```
  iPrint('Hi');
```
and adding color to the console?

## Here you are!

iPrint is the cool console logger.

iPrint gives color to your "console"!


## Command Line Usage
For NPM
```
  npm install iprint
```
or
```
  npm i iprint
```
# Example
```

  var iPrint = require('iPrint').iPrinter;

  iPrint('Hi, everyone');

  iPrint('Hi everyone - Magenta Color','magenta');

  iPrint('Hi, everyone - Blue Background','bgblue');

  iPrint('iPrintDefaultColor','cyan'); // Changes default output color from 'blue' to 'cyan'

  iPrint('Hi, default color changed form blue to cyan');

```

## General Syntax

Just type as follow

1. To just print the string (default color is blue)
```
    iPrint(value);
```
2. To add color to your string
```
    iPrint(value,colorValue);
```
3. To add background color to your string
```
    iPrint(value,backgroundColorValue);
```
4. To change default color to your string
```
    iPrint('iPrintDefaultColor',colorValue);
```
  'iPrintDefaultColor' is strict notation of changing the default color of output string.

  Here after output's default color will be changed.

# Color Values
```
    iPrint(value,colorValue);
```
  1. colorValue = 'blue'
  2. colorValue = 'red'
  3. colorValue = 'green'
  4. colorValue = 'yellow'
  5. colorValue = 'cyan'
  6. colorValue = 'white'
  7. colorValue = 'black'
  8. colorValue = 'magenta'

# Background Color Values
  ```
      iPrint(value,backgroundColorValue);
  ```
  1. colorValue = 'bgblue'
  2. colorValue = 'bgred'
  3. colorValue = 'bggreen'
  4. colorValue = 'bgyellow'
  5. colorValue = 'bgcyan'
  6. colorValue = 'bgwhite'
  7. colorValue = 'bgblack'
  8. colorValue = 'bgmagenta'
