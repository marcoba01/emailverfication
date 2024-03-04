const email_1 = document.querySelector("#email_1");
         const email_2 = document.querySelector("#email_2");
         const errorText = document.querySelector(".error-text");
         const btn = document.querySelector("button");
         const emailError = document.querySelector("#email-error");
         
         function active(){
           if(validateEmail(email_1.value)){
             btn.removeAttribute("disabled", "");
             btn.classList.add("active");
             email_2.removeAttribute("disabled", "");
           }else{
             btn.setAttribute("disabled", "");
             btn.classList.remove("active");
             email_2.setAttribute("disabled", "");
           }
         }
         btn.onclick = function(){
           if(email_1.value != email_2.value || !validateEmail(email_2.value)){
             errorText.style.display = "block";
             errorText.classList.remove("matched");
             errorText.textContent = "Error! Confirm Email Not Match or Invalid Email";
             emailError.style.display = "block";
             emailError.textContent = "Invalid Email Address";
             return false;
           }else{
             errorText.style.display = "block";
             errorText.classList.add("matched");
             errorText.textContent = "Nice! Confirm Email Matched";
             emailError.style.display = "block";
             emailError.textContent = "Invalid Email Address";
             return false;
           }
           };
         function active_2(){
           if(email_2.value != ""){
             // showBtn.style.display = "block";
             // showBtn.onclick = function(){
             //   if((email_1.type == "text") && (email_2.type == "text")){
             //     email_1.type = "email";
             //     email_2.type = "email";
             //     this.textContent = "Hide";
             //     this.classList.add("active");
             //   }else{
             //     email_1.type = "text";
             //     email_2.type = "text";
             //     this.textContent = "Show";
             //     this.classList.remove("active");
             //   }
             // }
           }else{
             // showBtn.style.display = "none";
           }
         }
         function validateEmail(email) {
           const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return re.test(String(email).toLowerCase());
         }
         var email = document.forms['form']['email'];
         var email_error = document.getElementById( 'email-error' );
         function validated(){
          if(email.value.length < 9){
            email.style.border = "1px solid red";
            email_error.style.display = "block";
            email.focus();
            return false;
          }
         }