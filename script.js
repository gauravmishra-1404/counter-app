const inc = document.querySelector("#increment")
const dec = document.querySelector("#decrement")
const count = document.querySelector("#count")
const reset = document.querySelector("#reset")
const auto = document.querySelector("#auto")
let counter = 0;
let autoMode = false;
let timer = null;
inc.addEventListener('click',(e)=>{
    counter=counter+1;
    count.innerText = counter;
})

dec.addEventListener('click',(e)=>{
    if(counter>0){
        counter--;
        count.innerText = counter;
    }
})

reset.addEventListener('click',(e)=>{
    counter=0;
    count.innerText = counter;
})

auto.addEventListener('click',()=>{
    if(!autoMode){
        autoMode = true;
        inc.classList.add("disable")

        dec.classList.add("disable")

        reset.classList.add("disable")

        auto.classList.add("autoStyle")

        timer = setInterval(() => {
            counter = counter+1;
            count.innerText = counter;
        }, 1000);
    }
    else {
        if(timer){
            clearInterval(timer)
        }
        autoMode = false;
        inc.classList.remove("disable")

        dec.classList.remove("disable")

        reset.classList.remove("disable")

        auto.classList.remove("autoStyle")

       counter = 0;
       count.innerText = counter;

    }
})