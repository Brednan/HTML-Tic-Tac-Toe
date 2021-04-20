var isInUse = false

const textValue = () =>{
    var x = document.getElementById("inputVal").value
    return(x)
}
const createElements = (input) =>{
    var encryption = encrypt(input)
    if(isInUse === false){
        if(encryption.length === 9){
            for(var i = 0; i <= 9; i++){
                if(encryption[i] === "1"){
                    createX()
                    isInUse = true
                }
                else if(encryption[i] === "2"){
                    createO()
                    isInUse = true
                }
            }
    
        }
    }

}
const encrypt = (list) =>{
    const array = []    
    for(var i = 0; i <= 9; i++){

        if(list.substring(i-1, i) === "a"){
            array.push("1")
        }
        else if(list.substring(i-1, i) === "b"){
            array.push("2")
        }
        else if(list.substring(i -1, i) ==="c"){
            array.push("2")
        }
        else if(list.substring(i-1, i) === "d"){
            array.push("1")
        }
        else if(list.substring(i-1, i) === "e"){
            array.push("2")
        }
        else if(list.substring(i-1, i) === "f"){
            array.push("1")
        }
        else if(list.substring(i-1, i) === "g"){
            array.push("2")
        }
        else if(list.substring(i-1, i) === "h"){
            array.push("1")
        }
        else if(list.substring(i-1, i) === "j"){
            array.push("2")
        }
        else if(list.substring(i-1, i) === "k"){
            array.push("1")
        }
        else if(list.substring(i-1, i) === "l"){
            array.push("2")
        }
        else if(list.substring(i-1, i) === "m"){
            array.push("1")
        }
        else if(list.substring(i-1, i) === "n"){
            array.push("2")
        }
        else if(list.substring(i-1, i) === "o"){
            array.push("1")
        }
        else if(list.substring(i-1, i) === "p"){
            array.push("2")
        }
        else if(list.substring(i-1, i) === "q"){
            array.push("1")
        }
        else if(list.substring(i-1, i) === "r"){
            array.push("2")
        }
        else if(list.substring(i-1, i) === "s"){
            array.push("1")
        }
        else if(list.substring(i-1, i) === "t"){
            array.push("2")
        }
        else if(list.substring(i-1, i) === "u"){
            array.push("1")
        }
        else if(list.substring(i-1, i) === "v"){
            array.push("2")
        }
        else if(list.substring(i-1, i) === "w"){
            array.push("1")
        }
        else if(list.substring(i-1, i) === "x"){
            array.push("2")
        }
        else if(list.substring(i-1, i) === "y"){
            array.push("1")
        }
        else if(list.substring(i-1, i) === "z"){
            array.push("2")
        }
    }
    return array
}

const createX = () =>{
    const outputGrid = document.getElementById("OutputGrid")
    const xIMG = document.createElement("img")
    xIMG.src = "./images/X.png"
    xIMG.className = "ximg"
    outputGrid.appendChild(xIMG)
}
const createO = () =>{
    const outputGrid = document.getElementById("OutputGrid")
    const Oimg = document.createElement("img")
    Oimg.src = "./images/O.png"
    Oimg.className = "oimg"
    outputGrid.appendChild(Oimg)
}

const clearGrid = () => {
    const outputGrid = document.getElementById("OutputGrid")
    document.getElementById("inputText").value = null
    for(var i = 0; i <= 9; i++){
        if(outputGrid.hasChildNodes()){
            outputGrid.removeChild(outputGrid.childNodes[0])
        }
    }
    isInUse = false
}
