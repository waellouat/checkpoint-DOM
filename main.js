let btndel = document.querySelectorAll('.btn-delete');
for ( let i = 0 ; i<btndel.length ; i++ ){
    btndel[i].addEventListener('click',function(){
        btndel[i].parentElement.parentElement.remove()
    })
}

let btnplus = document.getElementsByClassName('btn-plus');
for (let i=0 ; i < btnplus.length ; i++){

    btnplus[i].addEventListener('click',function(){
        btnplus[i].previousElementSibling.innerText ++;
    })
}

let btnminus = document.getElementsByClassName('btn-moins');
for (let i=0 ; i < btnminus.length ; i++){

    btnminus[i].addEventListener('click',function(){
        if ( btnminus[i].nextElementSibling.innerText>0)
        btnminus[i].nextElementSibling.innerText -- ;
    })
}

let heart = document.getElementsByClassName('fas fa-heart');

for ( let i=0 ; i<heart.length ; i++){
    heart[i].addEventListener('click',function(){
        if ( heart[i].style.color === 'grey'){
        heart[i].style.color = 'red'}
        else {
            heart[i].style.color = 'grey'
    }
    })
}
