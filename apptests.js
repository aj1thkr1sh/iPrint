var iPrint = require('./index').iPrinter;

iPrint('Hi, everyone');

iPrint('Hi everyone - Magenta Color','magenta');

iPrint('Hi, everyone - Blue Background','bgblue');

iPrint('iPrintDefaultColor','cyan'); // Changes default output color from 'blue' to 'cyan'

iPrint('Hi, default color changed form blue to cyan');

a = 10
b=20

iPrint('Hi, everyone - Blue Background','bgred');
iPrint('Hi, default color changed form blue to cyan'+`${a+b}`);
