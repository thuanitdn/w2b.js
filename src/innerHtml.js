const innerHtml= (o, v)=>{
  var lng= o.length;
  for (let index in o) {
    if (index < lng) {
      o[index].innerHTML = v;
    }
  }
};

export {innerHtml}