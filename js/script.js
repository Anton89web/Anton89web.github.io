
  const modalWindow = document.querySelectorAll('.modal');
  const open = document.querySelectorAll('.carousel__modal');
  const close = document.querySelectorAll('.close');


  open.forEach((e, i) => {
    e.addEventListener('click', ()=>{ 
      modalWindow[i].style.cssText = 'top: 0';
    });
  }); 

  close.forEach((e, i) => {
    e.addEventListener('click', (e)=>{ 
      if(e.target == e || e.target !== e)
      modalWindow[i].style.cssText = 'top: 120%';
    });
  }); 


