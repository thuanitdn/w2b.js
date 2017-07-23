import store from './store.js';
import {isInObject, findByIndex} from './util.js';
import {innerHtml} from './innerHtml.js';
import {setDataElement} from './setDataElement.js';

export default class SetElement {
  constructor(obj) {
    this.initial(obj);
  }

  initial(obj) {
    let validate = this.validate(obj);
    if (!validate.isValid) {
      console.log("%c Key " + validate.keyReturn + " not found!", 'background: #d8252c; color: #fff');
      return false;
    }
    Object.keys(obj).map(function (objectKey) {
      setDataElement(store.element.set[objectKey], obj[objectKey]);
      innerHtml(store.element.get[objectKey], obj[objectKey]);
      store.scope[objectKey] = obj[objectKey];
    });
  }

  validate(obj) {
    let flag = true;
    let keyReturn;
    for (let key in obj) {
      if (!isInObject(store.scope, key)) {
        flag = false;
        keyReturn = key;
        break;
      }
    }
    return {isValid: flag, keyReturn: keyReturn};
  }
}