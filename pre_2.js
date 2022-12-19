let cantidad 
let moneda 
let monedas = [
    {
        type: "dolar" , 
        value: 316 
    }, 
    {
        type: "euro" , 
        value: 330 
    },
    {
        type: "real" , 
        value: 32 
    },
    {
        type: "yen" , 
        value: 1.2
    },
    {
        type: "libra" , 
        value: 332
    }

]


function currency_change (){
    var amount = document.getElementById("amount").value;
    var currency_type = document.getElementById("currency_type").value;
    const objet_currency = monedas.find((moneda) => moneda.type === currency_type)
    console.log ("moneda seleccionada:" , currency_type)
    change_process(amount, objet_currency.value)
    return 
}


function change_process (amount, currency_value){
    resultado = parseFloat(amount / currency_value)
    console.log("cantidad = ", amount);
    console.log ("el cambio es", resultado.toFixed(2))  
    if (amount <= 0){
        alert("La cantidad seleccionada es 0");
    }
    return 
    

}

