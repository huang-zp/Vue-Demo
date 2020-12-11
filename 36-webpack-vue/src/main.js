import {sum, mul} from "./js/mathUtils";

console.log(sum(10, 20));

console.log(mul(10, 20));


// commonJS语法导入css
require('./css/normal.css')

require('./css/spec.less')
document.writeln('<h2>hello</h2>')


import Vue from 'vue'
// import App from './vue/app'

import App from './vue/appp'
new Vue({
    el: '#app',
    template: '<App></App>',
    components: {
        App
    }
})