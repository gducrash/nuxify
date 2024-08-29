export default function (videoTitle: string) {

    return videoTitle
        .replace(/\bFUI TU\b/g, 'FUIMOS')
        .replace(/\bFui Tu\b/g, 'Fuimos')
        .replace(/\bfui tu\b/gi, 'fuimos')

        .replace(/\bME ARREPIENTO\b/g, 'NOS ARREPENTIMOS')
        .replace(/\bMe Arrepiento\b/g, 'Nos Arrepentimos')
        .replace(/\bme arrepiento\b/gi, 'nos arrepentimos')

        .replace(/\bME HARTÉ\b/g, 'NOS HARTAMOS')
        .replace(/\bMe Harto\b/g, 'Nos Harto')
        .replace(/\bme harto\b/gi, 'nos harto')

        .replace(/\bYO NO SOY\b/g, 'NOSOTROS NO SOMOS')
        .replace(/\bYo No Soy\b/g, 'Nosotros No Somos')
        .replace(/\byo no soy\b/gi, 'nosotros no somos')

        .replace(/\bNO SOY\b/g, 'NO SOMOS')
        .replace(/\bNo Soy\b/g, 'No Somos')
        .replace(/\bno soy\b/gi, 'no somos')

        .replace(/\bYO ME\b/g, 'NOS')
        .replace(/\bYo Me\b/g, 'Nos')
        .replace(/\byo me\b/gi, 'nos')


        .replace(/\bYO FUERA\b/g, 'NOSOTROS FUERAMOS')
        .replace(/\bYo Fuera\b/g, 'Nosotros Fueramos')
        .replace(/\byo fuera\b/gi, 'nosotros fueramos')

        .replace(/\bME QUEDE\b/g, 'NOS QUEDAMOS')
        .replace(/\bME QUEDÉ\b/g, 'Nos Quedamos')
        .replace(/\bMe Quede\b/g, 'Nos Quedamos')
        .replace(/\bMe Quedé\b/g, 'nos quedamos')
        .replace(/\bme quede\b/gi, 'nos quedamos')
        .replace(/\bme quedé\b/gi, 'nos quedamos')

        .replace(/\bME VOY\b/g, 'NOS VAMOS')
        .replace(/\bMe Voy\b/g, 'Nos Vamos')
        .replace(/\bme voy\b/gi, 'nos vamos')

        .replace(/\bYO ERA\b/g, 'FUIMOS')
        .replace(/\bYo Era\b/g, 'Fuimos')
        .replace(/\byo era\b/gi, 'fuimos')

        .replace(/\bYO\b/g, 'NOSOTROS')
        .replace(/\bYo\b/g, 'Nosotros')
        .replace(/\byo\b/gi, 'nosotros')

        .replace(/\bMI\b/g, 'NUESTR@')
        .replace(/\bMi\b/g, 'Nuestr@')
        .replace(/\bmi\b/gi, 'nuestr@')

        .replace(/\bME\b/g, 'NOS')
        .replace(/\bMe\b/g, 'Nos')
        .replace(/\bme\b/g, 'nos')

        .replace(/\bMETÍ\b/g, 'METIMOS')
        .replace(/\bMetí\b/g, 'Metimos')
        .replace(/\bmetí\b/gi, 'metimos')

        .replace(/\bSOY\b/g, 'SOMOS')
        .replace(/\bSoy\b/g, 'Somos')
        .replace(/\bsoy\b/gi, 'somos')

        //Remplaza todas las terminaciones "ué" por "amos" que precedan con cualquier palabra/digito
        .replace(/\b\w{5,}UÉ/g, function(match){
            ///// console.log("ENTRE BRO")
            ///// console.log(match)
            ///// console.log(match.slice(0, -2) + 'AMOS')
            return match.slice(0, -2) + 'AMOS';
        })
        .replace(/\b\w{5,}ué/gi, function(match){
            ///// console.log("entre bro")
            ///// console.log(match)
            ///// console.log(match.slice(0, -2) + 'amos')
            return match.slice(0, -2) + 'amos';
        })

        .replace(/\bHE\b/g, 'HEMOS')
        .replace(/\bHe\b/g, 'Hemos')
        .replace(/\bhe\b/gi, 'hemos')

        .replace(/\bTUVE\b/g, 'TUVIMOS')
        .replace(/\bTuve\b/g, 'Tuvimos')
        .replace(/\btuve\b/gi, 'tuvimos')

        .replace(/\bHICE\b/g, 'HICIMOS')
        .replace(/\bHice\b/g, 'Hicimos')
        .replace(/\bhice\b/gi, 'hicimos')

        .replace(/\bREACCIONO\b/g, 'REACCIONAMOS')
        .replace(/\bReacciono\b/g, 'Reaccionamos')
        .replace(/\breacciono\b/gi, 'reaccionamos')

        .replace(/\bDESCUBRI\b/g, 'DESCUBRIMOS')
        .replace(/\bDescubri\b/g, 'Descubrimos')
        .replace(/\bdescubri\b/gi, 'descubrimos')
        .replace(/\bDESCUBRÍ\b/g, 'DESCUBRIMOS')
        .replace(/\bDescubrí\b/g, 'Descubrimos')
        .replace(/\bdescubrí\b/gi, 'descubrimos')

        .replace(/\bSOBREVIVO\b/g, 'SOBREVIVIMOS')
        .replace(/\bSobrevivo\b/g, 'Sobrevivimos')
        .replace(/\bsobrevivo\b/gi, 'sobrevivimos')
        .replace(/\bSOBREVIVI\b/g, 'SOBREVIVIMOS')
        .replace(/\bSobrevivi\b/g, 'Sobrevivimos')
        .replace(/\bsobrevivi\b/gi, 'sobrevivimos')
        .replace(/\bSOBREVIVÍ\b/g, 'SOBREVIVIMOS')
        .replace(/\bSobreviví\b/g, 'Sobrevivimos')
        .replace(/\bsobreviví\b/gi, 'sobrevivimos')

        .replace(/\bDESBLOQUEO\b/g, 'DESBLOQUEAMOS')
        .replace(/\bDesbloqueo\b/g, 'Desbloqueamos')
        .replace(/\bdesbloqueo\b/gi, 'desbloqueamos')

        .replace(/\bRIO\b/g, 'REIMOS')
        .replace(/\bRio\b/g, 'Reimos')
        .replace(/\brio\b/gi, 'reimos');

}