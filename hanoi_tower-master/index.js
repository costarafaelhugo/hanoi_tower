var inicio = "";

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

// //criar discos na torre 1
for (let i = 3; i >= 0; i--) {
    let disco = document.createElement("div");
    disco.setAttribute("id", "disco" + i);
    disco.setAttribute("class", "disco" + i);

    disco.setAttribute("name", i);
    torreUm.appendChild(disco);

}


//movimentar discos
movimentaDisco = function(event) {
    let movimenta;
    let inicial;
    let destino;
    let discoTemp;
    let discoMov;
    let valorAndado;
    let valTemp;

    if (inicio == "") {
        inicio = event.currentTarget.id;
    } else {
        movimenta = event.currentTarget.id;
        inicial = document.getElementById(inicio);
        destino = document.getElementById(movimenta);
        if (inicial.childElementCount > 0) {
            discoMov = inicial.lastElementChild;
            valorAndado = parseInt(discoMov.getAttribute("name"));
            if (destino.childElementCount > 0) {
                discoTemp = destino.lastElementChild;
                valTemp = parseInt(discoTemp.getAttribute("name"));
                if (valTemp > valorAndado)
                    document.getElementById(movimenta).appendChild(discoMov);
                if (torreTres.childElementCount === 4)
                    alert('venceu')
            } else {

                document.getElementById(movimenta).appendChild(discoMov);
            }
        }
        inicio = "";
    }


    console.log("inicio:", inicio);
}


torreUm.addEventListener('click', movimentaDisco);
torreDois.addEventListener('click', movimentaDisco);
torreTres.addEventListener('click', movimentaDisco);