
   
    const childNameInput = document.getElementById("child_name");
    const parentNameInput = document.getElementById("parent_name");
    const errorChild = document.getElementById("error_child_name");
    const errorParent = document.getElementById("error_parent_name");
    function validateName(input, errorElement) {
        const name = input.value.trim();
        const allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";

        if (name === "") {
            errorElement.textContent = "This field is required";
        }
        else if (name.length < 2) {
            errorElement.textContent = "Name must be at least 2 letters";
        }
        else {
            let ok = true;
            for (let i = 0; i < name.length; i++) {
                if (allowed.includes(name[i]) === false) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                errorElement.textContent = "";
            } else {
                errorElement.textContent = "Only English letters are allowed";
            }
        }
    }
   childNameInput.addEventListener("input", function() { validateName(childNameInput, errorChild); });
    parentNameInput.addEventListener("input", function() { validateName(parentNameInput, errorParent); });

    const emailInput = document.getElementById("email");
    const errorEmail = document.getElementById("error_email");
    
    function validateEmail() {
        const email = emailInput.value.trim();
        if (email === "") {
            errorEmail.textContent = "Email is required";
        }
        else if (email.includes("@") && email.includes(".") && email.length >= 5) {
            errorEmail.textContent = "";
        }
        else {
            errorEmail.textContent = "Please enter a valid email address";
        }
    }
      emailInput.addEventListener("input", function() { validateEmail(); });

    const ageInput = document.getElementById("age");
    const errorAge = document.getElementById("error_age");
    function validateAge() {
        const value = ageInput.value;

        if (value === "") {
            errorAge.textContent = "Age is required";
        }
        else if (isNaN(value) || value.includes(".")) {
            errorAge.textContent = "Please enter numbers only";
        }
        else if (value < 3 || value > 12) {
            errorAge.textContent = "Age must be between 3 and 12 years";
        }
        else {
            errorAge.textContent = "";
        }
    }
  
     ageInput.addEventListener("input", function() { validateAge(); });
         
    const favouriteBoxes = document.getElementsByName("favourite");
    const errorFavourite = document.getElementById("error_favourite");
     function validateFavourite() {
        let anyChecked = false;

        for (let i = 0; i < favouriteBoxes.length; i++) {
            if (favouriteBoxes[i].checked) {
                anyChecked = true;
                break;
            }
        }

        if (anyChecked) {
            errorFavourite.textContent = "";
        } else {
            errorFavourite.textContent = "Please select at least one favourite subject";
        }
    }
       
      
    const messageInput = document.getElementById("message");
    const errorMessage = document.getElementById("error_message");

    function validateMessage() {
        const text = messageInput.value.trim();
        const length = text.length;

        if (text === "") {
            errorMessage.textContent = "Message is required";
        }
        else if (length < 10) {
            errorMessage.textContent = "Message must be at least 10 characters";
        }
        else if (length > 255) {
            errorMessage.textContent = "Message cannot exceed 255 characters (current: " + length + ")";
        }
        else {
            errorMessage.textContent = ""; 
        }
    }

    

   
    messageInput.addEventListener("input", function() {
        validateMessage();
    });
    function submitForm() {
    
    validateName(childNameInput, errorChild);
    validateName(parentNameInput, errorParent);
    validateEmail();
    validateAge();
    validateFavourite();
    validateMessage();

    
    if (
        errorChild.textContent || 
        errorParent.textContent || 
        errorEmail.textContent || 
        errorAge.textContent || 
        errorFavourite.textContent || 
        errorMessage.textContent
    ) {
        return; 
    }

   
    alert("Thank you! Your message has been sent successfully.\nWe will contact you soon!");
}

   
    
   

   
     
  
   
   
   
