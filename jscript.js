
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

function addtoList(){
    let newItem = document.getElementById('test')
    list.push(addToWallList())
    console.log(newItem)
}
const ul = document.querySelector(lists)
const url = 'https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall'







