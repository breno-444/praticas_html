function calcular() {

    let numero1 = parseInt(document.querySelector("#primeiro-valor").value);
    let numero2 = parseInt(document.querySelector("#segundo-valor").value);
    let resultado = numero1 + numero2;

    document.querySelector("#resultado").value = resultado;
      
}
