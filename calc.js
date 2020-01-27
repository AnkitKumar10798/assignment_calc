var calc=(function(){
    var x=17;
    var y=29;
    
       
     return{
    addition: function addition(){
       return (x+y);
    },
    subtraction: function subtraction(){
        return (x-y);
     },

    product: function product(){     
    return (x*y);
     },
    divide: function divide(){
     return(x/y);
                   
    }
    }
   }
   )();
   console.log (calc.addition());
   console.log(calc.subtraction());
   console.log(calc.product());
   console.log(calc.divide());
   