let btndelete=document.querySelectorAll(`.btn-delete`)
for(let i=0;i<btndelete.length;i++){
    btndelete[i].addEventListener(`click`,function(){
   btndelete[i].parentElement.parentElement.remove()     
    })
}
let boutonplus=document.getElementsByClassName(`btn-plus`);
for(let i=0;i<boutonplus.length;i++){
    boutonplus[i].addEventListener(`click`,function(){
        boutonplus [i].previousElementSibling.innerText ++;
    }
    )
}
let btnmoins=document.getElementsByClassName(`btn-moins`);
for (let i=0;i<btnmoins.length;i++){
btnmoins[i].addEventListener(`click`,function(){
    if(btnmoins[i].nextElementSibling.innerText>0)
    btnmoins[i].nextElementSibling.innerText --;
}
)
}
let heart=document.getElementsByClassName(`fas fa-heart`);
for(let i=0;i<heart.length;i++){
    
}