let formElement = document.querySelector(".formSection form")

let userData = []
formElement.addEventListener("submit", (event)=>{

    let userName = event.target.userName.value;
    let userEmail =  event.target.userEmail.value;
    let userPhone= event.target.userPhone.value;

    console.log(userName, userEmail, userPhone)


    let userObject = {
        userName,
        userEmail,
        userPhone
    }

    

    let checkMyEmail = userData.find((item)=> item.userEmail==userEmail)

    if(checkMyEmail)
    {
        alert("Added")
    }
    else {
        userData.push(userObject)
        storeDataintable()
    }

    event.target.reset()

    event.preventDefault()
})

let tableBody=document.querySelector("#tableBody")
let storeDataintable=()=>{

    let tableRow=''
    userData.forEach((items, index)=> {
        tableRow += `
             <tr>
                    <td>${index+1}</td>
                    <td>${items.userName}</td>
                    <td>${items.userEmail}</td>
                    <td>${items.userPhone}</td>
                    <td>
                        <button data-id=${index}>Delete</button>
                    </td>
                </tr>
                `
    })

    tableBody.innerHTML=tableRow
    console.log(tableRow)
}


tableBody.addEventListener('click', (e)=>{
    if(e.target.tagName=="BUTTON"){
        if(confirm("Are You Sure Want to Delete?")){
            let delID = e.target.getAttribute("data-id")
            userData.splice(delID, 1)
            storeDataintable()
        }
    }
})