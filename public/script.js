function itemTemplate(item){
 return `
 <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
  <span class="item-text">${item.text}</span>
  <div>
   <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
   <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
  </div>
 </li>
 `
}

//Initial Page Load Render
let ourHTML=items.map(function(item){
 return itemTemplate(item)
}).join('')
document.getElementById("item-list").insertAdjacentHTML("beforeend", ourHTML)

//Create Feature
let createField=document.getElementById("create-field")

document.getElementById("create-form").addEventListener("submit",function(e){
 e.preventDefault()
 if(createField.value.trim()==""){
  createField.focus()
  return
 }
 axios.post('/create-item',{text:createField.value.trim()}).then(function(response){
  //Create the html for new item
  document.getElementById("item-list").insertAdjacentHTML("beforeend",itemTemplate(response.data))
  createField.value=""
  createField.focus()
 }).catch(function(){
  console.log("Please try again")
 })
})

document.addEventListener("click",function(e){
//Delete Feature
if(e.target.classList.contains("delete-me")){
 if(confirm("Delete item permanently?")){
  axios.post('/delete-item',{id: e.target.getAttribute("data-id")}).then(function(){
   e.target.parentElement.parentElement.remove()
  }).catch(function(){
   console.log("Please try again")
  })
 }
}

 //Update Feature
 if(e.target.classList.contains("edit-me")){
  let userInput= prompt("Enter new list.", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
  if(userInput!==null && userInput.trim()!==""){
   userInput=userInput.trim()
   axios.post('/update-item',{text:userInput, id: e.target.getAttribute("data-id")}).then(function(){
    e.target.parentElement.parentElement.querySelector(".item-text").innerHTML=userInput
   }).catch(function(){
    console.log("Please try again")
   })
  }
 }
})