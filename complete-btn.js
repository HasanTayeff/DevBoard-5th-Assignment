let buttons = document.getElementsByClassName('complete-btn-loop');

for(let button of buttons){
    button.addEventListener('click', function(event){
    
    event.target.setAttribute('disabled', true)
    const remainedTask = convertingString('remained-task');
    const totalAssigned = convertingString('total-assigned');
    

    if(remainedTask && totalAssigned){
        alert('Board Updated Successfully')
        
            const sumAdd = totalAssigned  + 1;
            const sumMinus = remainedTask - 1;
            document.getElementById('remained-task').innerText = sumMinus;
            document.getElementById('total-assigned').innerText = sumAdd;

            const time = new Date().toLocaleTimeString('en-BN')

            const box = event.target.parentNode.parentNode.querySelector('.title-showcase').innerText

     
            const activityLog = document.getElementById('activity-log-comment');
            const activityLogCreatePara = document.createElement("p")
            activityLogCreatePara.innerText = ` You have completed the task ${box} at ${time}
            `

            activityLog.appendChild(activityLogCreatePara);
            activityLogCreatePara.classList.add('activity-log-class')


            let allCompleted = true;
            for (let btn of buttons) {
                if (!btn.disabled) {
                    allCompleted = false;
                    
                }
            }

            if (allCompleted) {
                setTimeout(() => {
                    alert('Congrates. You have completed all the tasks');
                }); 
            }
            
        
    }

    
    })
    

}










