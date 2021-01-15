background = document.getElementsByTagName("body")[0]
var i = 0;

setInterval(function(){
    i++;
    if(i == 1){
        background.style = "background-image: url(pictures/promo_01.png)"
        console.log(i);
    }else if(i == 2){
        background.style = "background-image: url(pictures/promo_04.png)"
        console.log(i);
    }else if(i == 3){
        background.style = "background-image: url(pictures/promo_hidden_dreams.png)"
        console.log(i);
    }else if(i == 4){
        background.style = "background-image: url(pictures/Promo_5.png)"
        console.log(i);
        i=0;
    }
}, 3000);
