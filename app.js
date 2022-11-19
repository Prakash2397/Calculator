(function(){
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let equalbtn=document.querySelector('.btn-equal');
    let clear=document.querySelector('.btn-clear');

    screen.value='0';
    

    //To select which button is pressed and et value to input box
    buttons.forEach(function(button){
        
        button.addEventListener('click',function(e){
            
            let value=e.target.dataset.num;
            screen.value +=value;
        })
    });
    //To check the text box is empty or not if emty means clearing text box to none else means setting  arithmetric operation
    equalbtn.addEventListener('click',function(e){
        if(screen.value ===''){
            screen.value ="0";
        }else{
            let answer=eval(screen.value);
            screen.value=answer;
        }
    })
    //To clear the text box
    clear.addEventListener('click',function(e){
        screen.value ="";

    })


})();