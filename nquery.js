function _(yhg){
  let self = document.querySelector(yhg);
  self.text = function (text){
    if (text) {
      self.innerText = text;
      return self;
    }
    return self.innerText;
  }
  self.html = function (){
    return self.innerHTML;
  }
  
  self.css = function (styles){
    for(let key in styles){
      self.style[key] = styles[key];
    }
    return self;
  }
  
  self.on = function(event,funcname){
    self.addEventListener(event,funcname);
    return self;
  }
  
  self.onclick = function (){
    self.onclick;
    return self;
  }
  
  return self;
}