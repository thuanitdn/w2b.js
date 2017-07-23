'use strict';
import store from './store.js';
import {innerHtml} from './innerHtml.js';
import {setDataElement} from './setDataElement.js';
export default class Boot {

  constructor(attrs, default_value) {
    this.defaultValue = default_value;
    this.initial(attrs);
  }

  initial(attrs) {
    const self = this;
    Object.keys(attrs).map(function (objectKey) {
      store.element['set'][objectKey] = document.querySelectorAll('[w2b-model~="' + attrs[objectKey] + '"]');
      store.element['get'][objectKey] = document.querySelectorAll('[w2b-bind~="' + objectKey + '"]');
      if (typeof self.defaultValue[objectKey] != "undefined") {
        store.scope[objectKey] = self.defaultValue[objectKey];
        store.scopeDefault[objectKey] = self.defaultValue[objectKey];
        setDataElement(store.element.set[objectKey], self.defaultValue[objectKey]);
        innerHtml(store.element.get[objectKey], self.defaultValue[objectKey]);
      }
      else {
        store.scope[objectKey] = null;
        store.scopeDefault[objectKey] = null;
      }
    });
    this.watcher();
  }

  watcher() {
    const self = this;
    Object.keys(store.element.set).map(function (objectKey) {
      let lng = store.element.set[objectKey].length;
      for (let index in store.element.set[objectKey]) {
        if (index < lng) {
          let type = store.element.set[objectKey][index].type;
          if (type == 'text' || type == 'textarea') {
            // on input text or text area
            store.element.set[objectKey][index].oninput = function () {
              self.setDataStore(objectKey, this.value);
            }
          }
          else if (type == "select-one" || type == 'select-multiple') {
            store.element.set[objectKey][index].onchange = function () {
              self.setDataStore(objectKey, this.value);
            }
          }
          else if (type == 'checkbox' || type == "radio") {
            store.element.set[objectKey][index].onchange = function (e) {
              self.setDataStore(objectKey, e.target.checked);
            }
          }
        }
      }
    });
  }

  setDataStore(objectKey, value) {
    innerHtml(store.element.get[objectKey], value);
    store.scope[objectKey] = value;
  }
}
