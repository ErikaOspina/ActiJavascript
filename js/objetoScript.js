

let items = localStorage.getItem('itemList')
items = items ? JSON.parse(items) : []
showItem()

function addItem() {
    let nomItem = document.getElementById('nom').value
    let descriptionItem = document.getElementById('description').value
    let valuItem = document.getElementById('valu').value

    if(nomItem && descriptionItem && valuItem){
        items.push({ 'nombreArticulo': nomItem, 'descripArticulo': descriptionItem, 'valorArticulo': valuItem })
        showItem()
    }
}

function showItem() {
    document.getElementById('nom').value = ''
    document.getElementById('description').value = ''
    document.getElementById('valu').value = ''

    let html = ''
    items.forEach((elemt, index) => {
        html += `<div class="col-4 mb-3"> ${elemt.nombreArticulo} </div>`
        html += `<div class="col-4 mb-3"> ${elemt.descripArticulo} </div>`
        html += `<div class="col-2 mb-3">   ${elemt.valorArticulo} </div>`
        html += `<div class="col-2"> <a href="#" class="btn btn-danger" onclick="deleteItem(${index})"> X </a> </div>`
    });

    localStorage.setItem('itemList', JSON.stringify(items))
    document.getElementById('items').innerHTML = html
}

function deleteItem(item) {
    items.splice(item, 1)
    showItem()
}
