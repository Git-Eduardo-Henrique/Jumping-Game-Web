const mario = document.querySelector("img.mario")
const pipe = document.querySelector("img.pipe")
const clounds = document.querySelector("img.clounds")
const point = document.querySelector("span.points")
const hipoint = document.querySelector("span.hipoints")

var points = 0
var hipoints = 0
var int_points = 0

const jump = (event) =>{ /* muda a classe da imagem para realizar a animação */

    if (event.keyCode === 32){
        mario.classList.add('mario-jump')

        setTimeout( /* remove a classe dps de um tempo */
            () => {
                mario.classList.remove('mario-jump')
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
        const marioposition = window.getComputedStyle(mario).bottom.replace("px", "") // puxa o valor do bottom

        if (pipeposition <= 120 && Number(marioposition) < 80 && pipeposition > 0){
            pipe.style.animation = "none"
            pipe.style.left = `${pipeposition}px`

            mario.style.animation = "mariodeath 1s linear"
            mario.style.bottom = `${marioposition}px`

            mario.src = "images/game-over.png"
            mario.style.width = "5%"
            mario.style.marginLeft = "50px"

            clounds.style.animation = "none"
            clounds.style.left = `${cloundsposition}px`

            setTimeout(
                () => { mario.style.display = "none"} , 1000
            )
            
            clearInterval(loop)
        }
    },
    1
)

document.addEventListener("keydown", jump) /* executa a função caso aperte uma tecla */