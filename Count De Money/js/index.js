function initialize(){
    total = document.getElementById("total");
    amount = document.getElementsByClassName("amount");
    amountCtr = [0, 0, 0, 0, 0];
    money = 0;
}

function add(value, index){
    if(amountCtr[index] + value >= 0){
        amountCtr[index] += value;
        amount[index].innerHTML = amountCtr[index];
    }
    
    if(index == 4)
        money += value;
    else{
        if(index == 0)
            money += (value/100);
        if(index == 1)
            money += ((5/100) * value);
        if(index == 2)
            money += ((10/100) * value);
        if(index == 3)
            money += ((25/100) * value);
    }
    display();
}

function display(){
    total.innerHTML = money.toFixed(2);
}