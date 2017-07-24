const isObject= (o)=>{
  return o instanceof Object;
};

const isInObject= (obj, attrs) =>{
  let flag= false;
  for (let key in obj) {
    if(attrs == key){
      flag=true;
      break;
    }
  }
  return flag;
};

const isArray= (arr) =>{
  return Array.isArray(arr);
};

export {isObject, isInObject, isArray}