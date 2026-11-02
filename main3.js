let dollar=document.getElementById('dollar');
let frank=document.getElementById('frank');

dollar.onkeyup=function(){
    frank.value = dollar.value * 1420;
}

frank.onkeyup=function(){
    dollar.value = frank.value / 1420;
}
let after=doucument.getElementById('after');
let before=doucument.getElementById('before');
let append=doucument.getElementById('append');
let content=doucument.getElementById('content');
let container=doucument.getElementById('container');


container.style.backgroundColor='#ffa';
container.style.height='50px';

after.onclick=function(){
    container.after(content);
}

before.onclick=function(){
    container.before(content);
}
append.onclick=function(){
    container.apeend(content);r
}
