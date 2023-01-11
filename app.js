
// variables :
let btn = document.getElementsByClassName("grid-item")
let screen = document.querySelector(".screen");
let string = "";
console.log(screen)

// box mouvement :
let box = document.querySelector(".container");
box.addEventListener("mousemove", (e) => {
    let Bwidth = box.offsetWidth;
    let Bheight = box.offsetHeight;
    let centerX = box.offsetLeft + Bwidth / 2;
    let centerY = box.offsetTop + Bheight / 2;
    let eventX = e.clientX - centerX;
    let eventY = e.clientY - centerY;
    let rotateX = (10 * eventY) / (Bheight / 2);
    let rotateY = (-1 * 10 * eventX) / (Bwidth / 2);
    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})

box.addEventListener("mouseenter", () => {
    box.style.transition = "all 0.05s ease";
})

box.addEventListener("mouseleave", () => {
    box.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
    box.style.transition = "all 0.6s ease"
})



// logic : 
Array.from(btn).forEach((element) => {
    element.addEventListener("click", (e) => {
        let val = e.target.innerHTML;
        if ( val == "="){
            string = eval(string)
            screen.innerText = string
        }
        else if(val == "C"){
            string = "";
            screen.innerText = string
        }
        else{
            string += val
            screen.innerText = string
        }
    })
})




