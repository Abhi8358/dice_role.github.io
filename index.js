
let x = Math.floor(Math.random() * 6) + 1;
let y = Math.floor(Math.random()*6)+1;
let text="";
if(x>y){
    text="🚩 Player 1 win";
}
else if(y>x){
    text="🚩 Player 2 win";
}
else{
    text="Draw !";
}

const map=new Map();
map.set(1,"1.png");
map.set(2,"2.png");
map.set(3,"3.png");
map.set(4,"4.png");
map.set(5,"5.png");
map.set(6,"6.png");
//alert(map.get(x));
document.querySelector('#p_2_dice').setAttribute("src",map.get(y));
document.querySelector('#p_1_dice').setAttribute("src",map.get(x));
document.querySelector('#title').innerHTML=text;
