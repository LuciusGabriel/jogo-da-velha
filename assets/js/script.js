// Dados Iniciais
let square = {
    a1:'', a2:'', a3:'',
    b1:'', b2:'', b3:'',
    c1:'', c2:'', c3:'',
}
let player = ''
let warning = ''
let playing = false

reset()

// Eventos
document.querySelector('.reset').addEventListener('click', reset)


// Funções
function reset(){
    warning = ''

    let random = Math.floor(Math.random() * 2)

    if(random === 0){
        player = 'x'
    }else{
        player = 'o'
    }

    for(let i in square){
        square[i] = ''
    }

    playing = true

    renderSquare()
    renderInfo()
}

function renderSquare(){
    for(let i in square){
        console.log(`ITEM ${i}`)
        let item = document.querySelector(`div[data-item=${i}]`)
        item.innerHTML = square[i]

    }
}

function renderInfo(){
    document.querySelector('.vez').innerHTML = player
    document.querySelector('.resultado').innerHTML = warning
}
// 23:15

