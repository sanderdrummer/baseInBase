declare function require(string): string;
require('../style/main.less');

import test = require('./test');
import modal = require('./components/modal/ctrl');


// var navigation = new Template.Template();
// document.write(test());
var modals = modal;
