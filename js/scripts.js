"use strict";var submitBtn=document.querySelector("#submit_btn"),nameInput=document.querySelector("#input_name"),emailInput=document.querySelector("#input_email"),text=document.querySelector("#textMessage");submitBtn.addEventListener("click",function(e){e.preventDefault(),sendMail(getValue())});var sendMail=function(e){fetch("http://localhost:3010/mail/send/piter",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then(function(e){return console.log("Mail send status: ",e.status)})},getValue=function(){return{name:nameInput.value,email:emailInput.value,message:text.value}};