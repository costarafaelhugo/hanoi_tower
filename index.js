// criar torres
const container = document.getElementById('container')


const torreUm = document.createElement('div')
torreUm.setAttribute('id', 'start')

const torreDois = document.createElement('div')
torreDois.setAttribute('id', 'offset')

const torreTres = document.createElement('div')
torreTres.setAttribute('id', 'end')

//"pendurar" torres no container"
container.appendChild(torreUm)
container.appendChild(torreDois)
container.appendChild(torreTres)




//criar discos na torre 1

const discoUm = document.createElement('div')
discoUm.setAttribute('id', "first")

const discoDois = document.createElement('div')
discoDois.setAttribute('id', "second")

const discoTres = document.createElement('div')
discoTres.setAttribute('id', "third")

const discoQuatro = document.createElement('div')
discoQuatro.setAttribute('id', "fourth")



//"pendurar discos na torre 1"
torreUm.appendChild(discoUm)
torreUm.appendChild(discoDois)
torreUm.appendChild(discoTres)
torreUm.appendChild(discoQuatro)


// adicionar handlers