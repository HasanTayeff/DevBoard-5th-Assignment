document.getElementById('next').addEventListener('click', function(event){
    window.location.href = 'back.html';
})


document.getElementById("clear-history").addEventListener('click', function (event) {
    const removeComment =  document.getElementById('activity-log-comment');
 
    removeComment.innerText = "";
 
 
 })
 
 let today = new Date();
 let day = today.toLocaleDateString('en-US', { weekday: 'long' });
 document.getElementById('day').textContent = day;
 
 let date = today.toLocaleDateString();
 document.getElementById('date').textContent = date; 
 
 
 document.getElementById('change-theme').addEventListener('click', function() {
     let changeBody = document.getElementById('change-body-color');
     const colors = ['#A8DADC', '#457B9D', '#F1FAEE', '#2A9D8F', '#EAE2B7'];
     let randomColor = colors[Math.floor(Math.random() * colors.length)];
    
     changeBody.style.backgroundColor = randomColor;
 
 
   });