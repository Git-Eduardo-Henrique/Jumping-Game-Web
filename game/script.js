const mario = document.querySelector("img.mario")
const pipe = document.querySelector("img.pipe")
const clounds = document.querySelector("img.clounds")

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
        const pipeposition = pipe.offsetLeft // puxa o valor da posição do cano
        const marioposition = window.getComputedStyle(mario).bottom.replace("px", "")

        if (pipeposition <= 120 && Number(marioposition) < 80 && pipeposition > 0){
            pipe.style.animation = "none"
            pipe.style.left = `${pipeposition}px`

            mario.style.animation = "mariodeath 1s linear"
            mario.style.bottom = `${marioposition}px`

            mario.src = "images/game-over.png"
            mario.style.width = "5%"
            mario.style.marginLeft = "50px"

            clounds.style.animation = "none"
            setTimeout(
                () => { mario.style.display = "none"} , 1000
            )
            
            clearInterval(loop)
        }
    },
    1
)
document.addEventListener("keydown", jump) /* executa a função caso aperte uma tecla */