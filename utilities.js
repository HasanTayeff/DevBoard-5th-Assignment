// document.getElementById('completed-btn-1').addEventListener('click', function(event){
//     const com = document.getElementById('completed-btn-1')
//     ReducingValue (com)
//     console.log(sumMinus)


// })
function convertingString(id){
    const string = document.getElementById(id).innerText;
    const convertedString = parseInt(string);
    return convertedString;
    

}


function inputByValueAndId(id, value){
    document.getElementById('remained-task').innerText = value;
    document.getElementById('total-assigned').innerText = value

    

}

