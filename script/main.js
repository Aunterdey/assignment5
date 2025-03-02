// document.getElementById("first-btn")
// .addEventListener("click",function(event){
//     event.preventDefault();
//  alert("Board update successfully")})

//  document.getElementById("first-btn2")
// .addEventListener("click",function(event){
//     event.preventDefault();
//  alert("Board update successfully")})
  
//  document.getElementById("first-btn3")
//  .addEventListener("click",function(event){
//      event.preventDefault();
//   alert("Board update successfully")})

//   document.getElementById("first-btn4")
//   .addEventListener("click",function(event){
//       event.preventDefault();
//    alert("Board update successfully")})


//    document.getElementById("first-btn5")
//    .addEventListener("click",function(event){
//        event.preventDefault();
//     alert("Board update successfully")})

//    document.getElementById("first-btn6")
//    .addEventListener("click",function(event){
//        event.preventDefault();
//     alert("Board update successfully")})


document.getElementById("Discover")
.addEventListener("click",function(event){
event.preventDefault();  
window.location.href = "./question.html"
})


document.getElementById("back-btn")
.addEventListener("click",function(event){
event.preventDefault();

window.location.href = "./index.html";
});
// // const clearHistoryBtn = document.getElementById("clear-history-btn");
// // const logs = document.getElementById("logs-container");

// // clearHistoryBtn.addEventListener("click",() => {
// //     logs.innerHTML = '' ;
// // });



// document.addEventListener("DOMContentLoaded", function() {

//     const completeBtn = document.querySelector('.btn');
//     const counter = document.querySelector('.counter');
//     const clearHistoryBtn = document.querySelector('.clear-btn');
//     const activityLogContainer = document.querySelector('.activity-container');

//     completeBtn.disabled = false;

//     completeBtn.addEventListener('click', function() {
//       alert("Board update successfully");

//       completeBtn.disabled = true;

//       counter.textContent = parseInt(counter.textContent) + 1;

//       activityLogContainer.innerHTML = `<div>You have complete the task at ${new Date().toLocaleTimeString()}</div>`;
//     });

//     clearHistoryBtn.addEventListener('click', function() {
//       activityLogContainer.innerHTML = '';

//       completeBtn.disabled = false;
//     });

//   });



document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn-completed');
    const counter = document.querySelector('.counter');
    const clearHistoryBtn = document.querySelector('.clear-btn');
    const activityLogContainer = document.querySelector('.activity-container');

    buttons.forEach(button => {
        button.disabled = false;

        button.addEventListener('click', function() {
            alert("Board update successfully");

            button.disabled = true;

            
            counter.textContent = parseInt(counter.textContent) + 1;

            
            activityLogContainer.innerHTML = `<div>You have completed the task at ${new Date().toLocaleTimeString()}</div>`;
        });
    });

    clearHistoryBtn.addEventListener('click', function() {
        activityLogContainer.innerHTML = ''; 
        buttons.forEach(button => button.disabled = false); 
    });
});