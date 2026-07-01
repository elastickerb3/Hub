async function sleep(sekunden){
    let time = new Promise(resolve => setTimeout(resolve, sekunden * 1000))
    return time
}

let parent = document.querySelector("body")

document.addEventListener("mousemove", async event =>{
    let y = event.y;
    let x = event.x;
    let Div = document.createElement("div");
    Div.id = "trail";
    Div.style = "z-index:5;"+ "left:"+x+"px;" + "top:"+y+"px;"

    parent.appendChild(Div)
    await sleep(0.5)
    Div.remove()
})