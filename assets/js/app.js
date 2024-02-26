
let Participante;
let Compurador;
function aleatoria(){
    return Math.floor(Math.random()*3)
}
Participante = prompt ("elija: 1 - piedra. 2 - papel, 3- tijera")
Compurador = aleatoria();

if(Participante === Compurador){
    alert ("Empate 🫸🫸🫸")
}
else if (Participante ==1 && Compurador==3){
    alert("Ganaste 🎉🎉🎉")

}
else if (Participante ==2 && Compurador==1){
    alert("Ganaste 🎉🎉🎉")
}
else if (Participante ==3 && Compurador==2){
    alert("Ganaste🎉🎉🎉")

}

else {
    alert("oh no ¡Perdiste!😢😥 intentalo nuevamente.")

}
