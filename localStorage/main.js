
let wisdoms = []

$('#clear').click(function(){
    localStorage.clear()
})

$('#add').click(function(){
    wisdoms.push({text: $('#input').val(), id:wisdoms.length})
    $('#input').val('')
    render()
    if(wisdoms.length%2 == 0){
        localStorage.wisdom = JSON.stringify(wisdoms)
    }
})

const render = function(){
    $('#list').empty()
    let element = ""
    for (const wisdom of wisdoms) {
        element+=`<div><button id=${wisdom.id} class=delete >x</button><p>${wisdom.text}</p></div>`  
        $('#list').on('click', `#${wisdom.id}`, function(){
            const storage = getWisdomFromLocalStorage()
            for (let i=0; i<storage.length; i++) {
                if(storage[i].id == this.id){
                    storage.splice(i, 1)
                    break
                }
            }
            wisdoms = storage
            localStorage.wisdom = JSON.stringify(wisdoms)
            render()
        })
    }
$('#list').append(element)
}

const initPage = function(){
    wisdoms = getWisdomFromLocalStorage()
    render()
}

const getWisdomFromLocalStorage = function(){
    return JSON.parse(localStorage.getItem('wisdom')) || []
}


initPage()
