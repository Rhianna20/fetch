
fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(data => addToWallList(data))

function addToWallList(list){
    list.forEach(function (element){
        let list2 = document.createElement('li')
        let updatedList = document.createTextNode(element)
        list2.appendChild(updatedList)
        let currentList = document.getElementById('list')
        document.body.insertBefore(list2, currentList)

    })

} 
const submitIt = document.getElementById('submitIt')
submitIt.onsubmit()
function addToList(){
   document.getElementById('submitIt').onsubmit()
}


fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall' , {
    method: "POST",
    body: JSON.stringify({
    data: submitIt
      })
    }).then(response => console.log(response.status))