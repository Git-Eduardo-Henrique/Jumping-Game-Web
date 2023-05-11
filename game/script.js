const mario = document.querySelector("img.mario")
const pipe = document.querySelector("img.pipe")
const clounds = document.querySelector("img.clounds")
const point = document.querySelector("span.points")

var points = 0

const jump = () =>{ /* muda a classe da imagem para realizar a animação */

    mario.classList.add('mario-jump')

    setTimeout( /* remove a classe dps de um tempo */
        () => {
            mario.classList.remove('mario-jump')
        },
        500
    )
}

const loop = setInterval( // cria um loop 
    ()=>{
        // almenta a pontuação
        points += 0.1
        point.innerHTML = `${Number.parseInt(points)} points`

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