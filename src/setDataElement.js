const setDataElement= (o, v)=>{
  var lng= o.length;
  for (let index in o) {
    if (index < lng) {
      o[index].value = v;
    }
  }
};

export {setDataElement}