
fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall').then(response => response.json()).then(data => addToWallList(data))

function addToWallList(list){
    list.forEach(function (item){
        let list2 = document.createdElement('li')
        let updatedList = documentTextNode(item)
        list2.appendChild(updatedList)
        let currentList = document.getElementById('list')
        document.body.insertBefore(list2, currentList)
        console.log(item)
      
    })

} 
fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall' , {
   
method: "POST",
    body: JSON.stringify({
        message: "Test It"
    })
}).then(response => console.log(response. status))



function addtoList(){
    let item = document.getElementById('submitName')
    submitName.push(addToWallList())
}