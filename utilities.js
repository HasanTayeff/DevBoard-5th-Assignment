
function convertingString(id){
    const string = document.getElementById(id).innerText;
    const convertedString = parseInt(string);
    return convertedString;
    

}


function inputByValueAndId(id, value){
    document.getElementById('remained-task').innerText = value;
    document.getElementById('total-assigned').innerText = value

}

