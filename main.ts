let posX = 1
let posY = 1
let Direction2 = 1
let liste = [0, 1, 0]
let liste_de_textes = ["a", "b", "c"]
basic.forever(function () {
    basic.pause(100)
    led.unplot(posX, posY)
    posX += Direction2
    posY += Direction2
    if (posX >= 4) {
        let liste_de_nombres: number[] = []
        Direction2 += liste_de_nombres[1]
    } else if (posY == 0) {
        Direction2 += liste[4]
    }
    led.plot(posX, posY)
})
