import {isArray} from './util.js';
const setDataElement = (o, v) => {
  const lng = o.length;
  for (let index in o) {
    const type = o[index].type;
    if (index < lng) {
      //for multiple select
      if (type == 'select-multiple') {
        if (!isArray(v)) {
          console.log('%c Default value of select multiple must be an array! ', 'background: #d8252c; color: #fff');
          return false;
        }
        v.map((v2) => {
          let len = o[index].options.length;
          let opt;
          for (let i = 0; i < len; i++) {
            opt = o[index].options[i];
            if (opt.value == v2) {
              opt.selected= true;
            }
          }
        });
      }
      else {
        o[index].value = v;
      }
    }
  }
};

export {setDataElement}