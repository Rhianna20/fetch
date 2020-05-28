
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


function addtoList(){
    let newItem = document.getElementById('test')
    list.push(addToWallList())
    console.log(newItem)
}