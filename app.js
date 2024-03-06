let buttons= document.querySelectorAll('button');
let input = document.querySelector('#output');
display = "";

arrconv = Array.from(buttons);

arrconv.forEach((btn) => {
    btn.addEventListener("click", (e)=>{
      if(e.target.innerHTML == 'DEL'){
        display = display.substring(0, display.length - 1); 
        input.value = display;
      } else if (e.target.innerHTML == 'AC'){
        display ="";
        input.value= display;
      }else if ( e.target.innerHTML == '='){
        display = eval(display);
        input.value = display; 
      } else{
          display += e.target.innerHTML;
          input.value=display; 

      }
       
        // console.log(e.target.innerHTML);
        
    });
    
});
