'use strict';
import Boot from './boot.js';
import SetElement from './setElement';
import store from './store.js';
import {isObject} from './util.js';

const w2b = (attrs, default_value) => {
  new Boot(attrs, default_value);
};

w2b.prototype.get = (attrs) => {
  if (attrs) {
    return store.scope[attrs];
  }
  return store.scope;
};

w2b.prototype.set = (obj) => {
  if(!isObject(obj)){
    console.log('%c Must be an object! ', 'background: #d8252c; color: #fff');
    return false;
  }
  new SetElement(obj);
};

export default w2b

