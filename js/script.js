function hover(num) {
  if(event.keyCode === 13 ) {
    let elements = document.querySelectorAll('.col');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.MozTransform = 'scale(1)';
      elements[i].style.WebkitTransform = 'scale(1)';
      elements[i].style.MsTransform = 'scale(1)';
      elements[i].style.transform = 'scale(1)';
    };

    elements[num-1].style.MozTransform = 'scale(1.2)';
    elements[num-1].style.WebkitTransform = 'scale(1.2)';
    elements[num-1].style.MsTransform = 'scale(1.2)';
    elements[num-1].style.transform = 'scale(1.2)'; 
  };

  navigation(num, '.col', 4);    
};         
    
function navigation(pos, id, count) {
  if(event.keyCode === 39) {
    if (pos === count) {
      pos = 0;
      document.querySelectorAll(id)[pos].focus();
    };

    if (pos >= 1) {
      pos++;
      document.querySelectorAll(id)[pos-1].focus();
    };  
  }; 
};

function call(current) {
  if(event.keyCode === 13) currentText(current);
  navigation(current, '.dot', 3);   
};

function currentText (current) {
  const texts = [
    { autor: "John Doe",
      text: '"Suspendisse tempor turpis odio, sit amet cursus leo consequat non. Maecenas lacinia faucibus enimqui interdum dolor pulvinar vitae."'},
    { autor: "Jonny Doe",
      text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni quod illum perspiciatis facere totam reprehenderit libero."'},
    { autor: "Johnathan Doe",
      text: '"Voluptates magni quod illum perspiciatis facere totam reprehenderit libero iusto numquam facilis quo nam asperiores expedita, lorem."'},
  ];

  document.querySelector('#text').innerHTML=texts[current-1].text;
  document.querySelector('#autor').innerHTML=texts[current-1].autor;
  const dots = document.querySelectorAll('#dot');
    
  for(let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('white');
  };    
  dots[current-1].classList.add('white');
};

