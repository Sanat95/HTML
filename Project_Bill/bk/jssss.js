
document.write("TEST");
 var x =document.getElementById("quantityCappucino").val();
function calculatePrice()
{
    //select data
    var cappuccino = 3.00;
    var espresso = 2.25;
    var latte = 2.50;
    var iced = 2.50;

    var quantityCappuccino = $("#quantityCappucino").val();
    var quantityEspresso =  $("#quantityEspresso").val();
    var quantityLatte =  $("#quantityLatte").val();
    var quantityIced = $("#quantityIced").val();

    //calculate final cost
    var total = (quantityCappuccino * cappuccino) + (quantityEspresso * espresso) + (quantityLatte * latte) + (quantityIced * iced);

    console.log(total);
    //print value to orderTotal
    $("#orderTotal").val(total);
}