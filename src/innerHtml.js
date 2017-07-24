const innerHtml= (o, v)=>{
  const lng= o.length;
  for (let index in o) {
    if (index < lng) {
      o[index].innerHTML = v;
    }
  }
};

export {innerHtml}