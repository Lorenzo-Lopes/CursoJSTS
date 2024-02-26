function formatoIMG(altura, largura){
    if (altura<largura) console.log('a imagem esta em modo paisagem.')
    if (largura<altura) console.log(' a imagem esta em modo retrado')
}
let altura = 10800
let largura = 1920

formatoIMG(altura,largura);