
function trycatch_handler(process, comment) {
  return function() {
    try {
      return process.apply(this, arguments);
    }catch(e) {
      console.log('error factor is : ', e);
      if(comment == null) {
        console.log('exception catched in : ', process);
      }else {
        console.log(comment);
      }
    }
  }
}
