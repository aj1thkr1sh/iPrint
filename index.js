let defaultColour = 'blue';

// Returs iPrint printer
module.exports.iPrinter = function(value,colour=defaultColour){

  colour = colour.toLowerCase();

  if(value == 'iPrintDefaultColor'){
    defaultColour = colour;
    return;
  }

  var style = '';
  switch(colour){
    //foreground
    case 'blue':
      style+='\x1b[34m';
    break;
    case 'black':
      style += '\x1b[30m';
    break;
    case 'red':
      style += '\x1b[31m';
    break;
    case 'green':
      style += '\x1b[32m';
    break;
    case 'yellow':
      style += '\x1b[33m';
    break;
    case 'magenta':
      style += '\x1b[35m';
    break;
    case 'cyan':
      style += '\x1b[36m';
    break;
    case 'white':
      style += '\x1b[37m';
    break;


    //background

    case 'bgblack':
      style += '\x1b[40m';
    break;

    case 'bgred':
      style += '\x1b[41m';
    break;

    case 'bggreen':
      style += '\x1b[42m';
    break;

    case 'bgyellow':
      style += '\x1b[43m';
    break;

    case 'bgblue':
      style += '\x1b[44m';
    break;

    case 'bgmagenta':
      style += '\x1b[45m';
    break;

    case 'bgcyan':
      style += '\x1b[46m';
    break;

    case 'bgwhite':
      style += '\x1b[47m';
    break;

  }

  style += '%s\x1b[0m';

  console.log(style,value);
}
