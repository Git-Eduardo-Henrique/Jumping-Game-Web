const mario = document.querySelector("img.mario")
const pipe = document.querySelector("img.pipe")

const jump = () =>{ /* muda a classe da imagem para realizar a animação */

    mario.classList.add('jump')

    setTimeout( /* remove a classe dps de um tempo */
        () => {
            mario.classList.remove('jump')
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

            mario.style.animation = "none"
            mario.style.bottom = `${marioposition}px`

            mario.src = "images/game-over.png"
            mario.style.width = "75px"
            mario.style.marginLeft = "50px"

            clearInterval(loop)
        }
    },
    1
)
document.addEventListener("keydown", jump) /* executa a função caso aperte uma tecla */