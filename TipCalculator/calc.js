const billAmount = document.getElementById('bill').value;
const no_person = document.getElementById('person').value;


function tipamount(btn){
    var disp = (billAmount*btn)/100;
    document.getElementById('tip').value="$"+disp;
}
function total(btn){
    var tot = no_person*(billAmount*btn)/100;
    document.getElementById('total').value="$"+tot;
}
function reset(){
    document.getElementById('tip').value="$0.00";
    document.getElementById('total').value="$0.00";
    document.getElementById('bill').value="";
    document.getElementById('person').value="";
}