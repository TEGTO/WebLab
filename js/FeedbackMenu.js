//Feedback menu
currentPopupInterval =undefined;
function popupFeedbackShow() {
    if(typeof currentPopupInterval !== 'undefined')
    { clearInterval(currentPopupInterval);}
   
    var popup = document.getElementById("popupFeedback");
    var opacity = Number(window.getComputedStyle(popup)
    .getPropertyValue("opacity"));
   popup.style.visibility = "visible";
    currentPopupInterval= setInterval(function() {
          
        if (opacity < 1) {
            opacity = opacity + 0.02;
            popup.style.opacity = opacity;
        } 
        else {
            clearInterval(currentPopupInterval);
         
        }
    }, 10);
   
  }

  function popupFeedbackHide() {
    
    if(typeof currentPopupInterval !== 'undefined')
    { clearInterval(currentPopupInterval);}
    var popup = document.getElementById("popupFeedback");
    var opacity = Number(window.getComputedStyle(popup)
    .getPropertyValue("opacity"));
   
    currentPopupInterval= setInterval(function() {
          
        if (opacity >0) {
            opacity = opacity - 0.03;
            popup.style.opacity = opacity;
        } 
        else {
            clearInterval(currentPopupInterval);
           popup.style.visibility = "hidden";
           
        }
    }, 10);
   
  }

  function setDefaulttate(element)
  {
    element.style.backgroundColor= "white";
    element.style.background = "white";

  }
  function setErrorState(element)
  {
    element.style.backgroundColor= "red";
    element.style.background = "#FFCECE";
    IsValid =false;
  }

    IsValid = true;
    const emailRegex =  new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);

  function checkTextFields() {
    IsValid = true;
    fields = [];
    fields.push(document.getElementById('name'),document.getElementById('phone-number'), document.getElementById('email'));
    emptyFields = fields.filter(element => element.value=="");
    notEmptyFields = fields.filter(element => element.value!="");
    emptyFields.forEach(element => setErrorState(element));
    notEmptyFields.forEach(element => setDefaulttate(element));
    if(!emailRegex.test(document.getElementById('email').value))
     setErrorState(document.getElementById('email'));
  
    if (IsValid)
    {
        document.getElementById("error").style.color= "black";
        document.getElementById("error").innerText ="Відправлено.";
        
    }
    else
    {
        document.getElementById("error").style.color= "red";
        document.getElementById("error").innerText =
          "Заповніть будь ласка всі поля правильно.";
    }
   

  }
