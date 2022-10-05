
  const modalWindow = document.querySelectorAll('.modal');
  const open = document.querySelectorAll('.carousel__modal');
  const close = document.querySelectorAll('.close');
  const arrows = document.querySelectorAll('.slick-arrow');


  open.forEach((e, i) => {
    e.addEventListener('click', ()=>{ 
      modalWindow[i].style.cssText = 'top: 0';
      arrows.forEach(el => el.style.cssText = 'visibility: hidden')
    });
  }); 

  close.forEach((e, i) => {
    e.addEventListener('click', (e)=>{ 
      modalWindow[i].style.cssText = 'top: 120%';
      arrows.forEach(el => el.style.cssText = 'visibility: inherit')
    });
  }); 


