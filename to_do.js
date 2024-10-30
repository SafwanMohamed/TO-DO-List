let i=1
let task=document.querySelector(".tasks")
let input=document.querySelector("form")
let input_text=document.querySelector(".input")
let add=document.querySelector(".add")




if(!window.localStorage.getItem("counter"))
window.localStorage.setItem("counter",0)
let counter=window.localStorage.getItem("counter")

// function for clear all
let clear=document.querySelector(".clear")
clear.onclick=function(e){
    window.localStorage.clear()
    window.location.reload()
}
//   window.localStorage.clear()
// function 1 
input.onsubmit=function(){
counter=String((Number(counter)+1))
      window.localStorage.setItem(`${counter}-task`,input_text.value)
      window.localStorage.setItem("counter",counter)
}

// function 2 add
for(let i=1;i<15;i++)
{
    if(window.localStorage.getItem(`${i}-task`))
    {
    document.querySelector("h3").style.display="block"
    document.querySelector("button").style.display="block"
    let mission=document.createElement("div")
    mission.textContent=`${window.localStorage.getItem(`${i}-task`)}`
    mission.className="div_task"
    task.appendChild(mission)

    let divo=document.createElement("div")
    divo.className="buttons"
    mission.appendChild(divo)

    let edit=document.createElement("button")
    edit.textContent="edit"
    edit.className="edit"
    edit.id=`${i}`
    divo.appendChild(edit)

    let btn=document.createElement("button")
    btn.textContent="delete"
    btn.className="btn"
    btn.id=`${i}`
    divo.appendChild(btn)

    mission.appendChild(divo)
    }
    
}

// function 3 delete
let btn=document.querySelectorAll(".btn")


btn.forEach(e => {
    e.addEventListener("click",function(){
        window.localStorage.removeItem(`${e.id}-task`)
        window.location.reload()
    })
});

// function 4 edit
let edit=document.querySelectorAll(".edit")
edit.forEach(e => {
    e.addEventListener("click",function(){
        input_text.value=window.localStorage.getItem(`${e.id}-task`)
        input.onsubmit=function(){
            window.localStorage.setItem(`${e.id}-task`,input_text.value)
        }
        
    })
});
