a = 1



// 1.
export {
    a
}

import {a} from "*.js"

// 2.

export let b=2

import {b} from "*.js"
// 3.
export function sum() {

}

export class person {

}
import {sum, person} from "*.js"
// 4.默认,一个js只能有一个

let c = 'c'
export  default c

// c的别名c_bak
import c_bak from "*.js"


5.
export let d = 1
export let e = 2

import * as info from '*.js'

info.d
info.e