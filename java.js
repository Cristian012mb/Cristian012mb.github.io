const manos = document.getElementById('manos')
const cristian = document.getElementById('cristian')
const juanja = document.getElementById('juanja')
const palacio = document.getElementById('palacio')


window.addEventListener("scroll", function(){
    console.log(window.scrollY);
    let pos = window.scrollY;
      if (pos >= 147) {
        manos.style.opacity = 1;
        manos.style.transitionDuration = '3s';  
      }

      if (pos >= 1216) {
        manos.style.opacity = 0;
        manos.style.transitionDuration = '3s';
      }

      if (pos >= 1637) {
        cristian.style.opacity = 1;
        cristian.style.transitionDuration = '3s';
        
        
      }
      if (pos < 1637) {
        cristian.style.opacity = 0;
        cristian.style.transitionDuration = '3s';    
      }
      if (pos >= 1637) {
        juanja.style.opacity = 1;
        juanja.style.transitionDuration = '3s';
        
        
      }
      if (pos < 1637) {
        juanja.style.opacity = 0;
        juanja.style.transitionDuration = '3s';    
      }
      if (pos >= 1637) {
        palacio.style.opacity = 1;
        palacio.style.transitionDuration = '3s';
        
        
      }
      if (pos < 1637) {
        palacio.style.opacity = 0;
        palacio.style.transitionDuration = '3s';    
      }

    })