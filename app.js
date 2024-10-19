// document.getElementById("root").innerHTML = "Ola mundo";


var arrApi = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//console.log(arrApi);


function buttons(params) {
    //console.log(`inicio ${params}`);
    
    const newBtns = document.getElementById("root");
    let array = params
    //console.log(`depois arr ${array}`);
    
    for (let index = 0; index < array.length; index++) {
        let btn = document.createElement("button");
        btn.id = `btn${index + 1}`;
        btn.className = "buttons";
        //console.log(index);
        newBtns.appendChild(btn);   
    }
    document.getElementById('btn1').innerText = "Play"
    document.getElementById('btn1').setAttribute("value", "Play");
    console.log(document.getElementById('btn1'));
}

buttons(arrApi);

