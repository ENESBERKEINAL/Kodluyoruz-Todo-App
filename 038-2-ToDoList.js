const addButtonDom = document.querySelector("#liveToastBtn")
const wholeListDom = document.querySelector("#list")
let liCreatedDom 
addButtonDom.addEventListener('click', createNewToDoElement)

const toastBtnDom = document.querySelectorAll('.toast')
const errorToast = document.querySelector(".error")
const successToast = document.querySelector(".success") 

const getIdFromFunc = () => {  return document.querySelector("#list").childElementCount + 1 }

setAllElementToStorage()
function setAllElementToStorage() {
    
    document.querySelectorAll('.goals').forEach(( item ) => {
        localStorage.setItem(item.getAttribute('id'),item.innerHTML)
    })
}



getAllElementFromStorage()

function getAllElementFromStorage(){
//TODO use arrays instead of using key value matching in localstorage, might make reindex or use simply arrays
    for(let i =1; i <= 100; i++){

        let newLiElementDom = document.createElement('li')

        newLiElementDom.setAttribute('id',`${getIdFromFunc()}`)
        newLiElementDom.setAttribute('role','alert')
        newLiElementDom.classList.add('goals')
        if(localStorage.getItem(i) === null )
            continue
        newLiElementDom.innerHTML = localStorage.getItem(i)
        
        wholeListDom.appendChild(newLiElementDom)
        console.log(localStorage.getItem(i))
    }

}





const createCloseButtonAndAppendTheParent = (liDomElement) => {

    let spanCreateDom = document.createElement('SPAN')
    spanCreateDom.innerHTML = "&#10006"
    spanCreateDom.classList.add('close')
    liDomElement.appendChild(spanCreateDom)

}

function createNewToDoElement() {

    liCreatedDom = document.createElement('li')
    liCreatedDom.innerHTML= getInputElement()
    liCreatedDom.setAttribute('id',`${getIdFromFunc()}`)
    
    liCreatedDom.setAttribute('role','alert')

    if(!(   (liCreatedDom.innerHTML == 'undefined') || (liCreatedDom.innerHTML == ' ')   )){
        
        wholeListDom.appendChild(liCreatedDom)
        liCreatedDom.getAttribute('id')
        localStorage.setItem(liCreatedDom.getAttribute('id'),liCreatedDom.innerHTML)
        $(".success").toast("show")

    }else{
        $(".error").toast("show")
    }

    createCloseButtonAndAppendTheParent(liCreatedDom)

    emptyInputBox()
}

let listDom = document.querySelector(".customClass")
listDom.addEventListener("click", function(ev){
    if(ev.target.tagName === 'LI'){

        ev.target.classList.toggle('checked')

    }else if(ev.target.tagName === 'SPAN'){
        let itemId = ev.target.parentElement.getAttribute('id')
        localStorage.removeItem(itemId)
        ev.target.parentElement.remove()
    }
    console.log(ev.target.tagName)
},false)

function getInputElement(){
if (document.querySelector("#task").value) { 
    return document.querySelector("#task").value } else{
    $(".error").toast("show")
    return undefined
}
}

const emptyInputBox = () => document.querySelector("#task").value = ""

function stripTags (element) {
    return element.replace(/(<([^>]+)>)/gi, "");
  }


for(let index=0; index < document.querySelector("#list").childElementCount; index++ ){

    let liDomElement = document.querySelectorAll('.goals')
    createCloseButtonAndAppendTheParent(liDomElement[index])

}


