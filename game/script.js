const player = document.querySelector("img.player")
const pipe = document.querySelector("img.pipe")
const clounds = document.querySelector("img.clounds")
const point = document.querySelector("span.points")
const hipoint = document.querySelector("span.hipoints")

var points = 0
var hipoints = 0
var int_points = 0

const jump = (event) =>{ /* muda a classe da imagem para realizar a animação */

    if (event.keyCode === 32){
        player.classList.add('mario-jump')

        setTimeout( /* remove a classe dps de um tempo */
            () => {
                player.classList.remove('mario-jump')
            },
            500
        )
    }
}

const loop = setInterval( // cria um loop 
    ()=>{
        // almenta a pontuação
        points += 0.1
        int_points = Number.parseInt(points).toString().padStart(7, "0")
        point.innerHTML = `${int_points} points`

        if (hipoints < points){
            hipoint.innerHTML = `HI ${int_points}`
        } 

        // resto

        const pipeposition = pipe.offsetLeft // puxa o valor da posição do cano
        const cloundsposition = window.getComputedStyle(clounds).left.replace("px", "")
        const playerposition = window.getComputedStyle(player).bottom.replace("px", "") // puxa o valor do bottom

        if (pipeposition <= 120 && Number(playerposition) < 80 && pipeposition > 0){
            pipe.style.animation = "none"
            pipe.style.left = `${pipeposition}px`

            player.style.animation = "mariodeath 1s linear"
            player.style.bottom = `${playerposition}px`

            player.src = "images/game-over.png"
            player.style.width = "5%"
            player.style.marginLeft = "50px"

            clounds.style.animation = "none"
            clounds.style.left = `${cloundsposition}px`

            setTimeout(
                () => { player.style.display = "none"} , 1000
            )
            
            clearInterval(loop)
        }
    },
    1
)

document.addEventListener("keydown", jump) /* executa a função caso aperte uma tecla */