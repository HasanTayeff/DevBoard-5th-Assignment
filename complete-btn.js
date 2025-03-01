// function ReducingValue (){
//     const remainedTask = document.getElementById('remained-task').innerText;
//     const convertedRemainedTask = parseInt(remainedTask);
//     let sumMinus = convertedRemainedTask - 1;
//     sumMinus = document.getElementById('remained-task').innerText;
//     return sumMinus;
// } 

// document.getElementById('completed-btn-1').addEventListener('click', function(event){
//     event.preventDefault();
//     const remainedTask = convertingString('remained-task');
//     const totalAssigned = convertingString('total-assigned');
//     const sumAdd = totalAssigned  + 1;
//     const sumMinus = remainedTask - 1;
//     document.getElementById('remained-task').innerText = sumMinus;
//     document.getElementById('total-assigned').innerText = sumAdd;
//     // inputByValueAndId('remained-task', sumAdd);
    
//     // inputByValueAndId('total-assigned', sumMinus);
  
    

// })
// document.getElementById('completed-btn-1').addEventListener('click', function(event){
    
    
//     const remainedTask = convertingString('remained-task');
//     const totalAssigned = convertingString('total-assigned');
//     // const activityLog = document.getElementById('activity-log-comment');
//     // const activityLogCreate = document.createElement('p');
//     // activityLog.appendChild(activityLogCreate);
    



//     if(remainedTask && totalAssigned){
//         alert('Thsnk');
       
//             const sumAdd = totalAssigned  + 1;
//             const sumMinus = remainedTask - 1;
//             document.getElementById('remained-task').innerText = sumMinus;
//             document.getElementById('total-assigned').innerText = sumAdd;

//             const disa = document.getElementById('completed-btn-1')
            
       


//     }
    

//     // inputByValueAndId('remained-task', sumAdd);
    
//     // inputByValueAndId('total-assigned', sumMinus);
  
    

// })













// complete-btn-loop

let buttons = document.getElementsByClassName('complete-btn-loop');

for(let button of buttons){
    button.addEventListener('click', function(event){
    
    event.target.setAttribute('disabled', true)
    const remainedTask = convertingString('remained-task');
    const totalAssigned = convertingString('total-assigned');
    

    if(remainedTask && totalAssigned){
        alert('The Task is submitted, thank you!')
        
            const sumAdd = totalAssigned  + 1;
            const sumMinus = remainedTask - 1;
            document.getElementById('remained-task').innerText = sumMinus;
            document.getElementById('total-assigned').innerText = sumAdd;

            const time = new Date().toLocaleTimeString('en-BN')

            const box = event.target.parentNode.parentNode.querySelector('.title-showcase').innerText
            // console.log(box)

     
            const activityLog = document.getElementById('activity-log-comment');
            const activityLogCreatePara = document.createElement("p")
            activityLogCreatePara.innerText = ` You have completed the task ${box} at ${time}
            `

            activityLog.appendChild(activityLogCreatePara);
            activityLogCreatePara.classList.add('activity-log-class')
        
    }
    
    })

}


document.getElementById("clear-history").addEventListener('click', function (event) {
   const removeComment =  document.getElementById('activity-log-comment');

   removeComment.innerText = "";


})

let today = new Date();
let day = today.toLocaleDateString('en-US', { weekday: 'long' });
document.getElementById('day').textContent = day;

let date = today.toLocaleDateString();
document.getElementById('date').textContent = date; 












