 function validateForm() {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');
            const submitButton = document.getElementById('submitButton');

            let isNameValid = false;
            let isEmailValid = false;
            let isPasswordValid = false;

            // Validate Name
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name cannot be empty.';
                nameError.style.color="red"
                nameInput.style.borderColor="red"
                isNameValid = false;
            } 
            else {
                nameError.textContent = '';
                nameError.textContent ="vaild"
                nameError.style.color="green"
                nameInput.style.borderColor="green"
                isNameValid = true;
            }

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address.';
                emailError.style.color="red"
                emailInput.style.borderColor="red"
                isEmailValid = false;
            } 
            else {
                emailError.textContent = '';
                emailError.textContent="valid"
                emailError.style.color="green"
                emailInput.style.borderColor="green"

                isEmailValid = true;
                
            }

            // Validate Password
            if (passwordInput.value.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters long.';
                passwordError.style.color="red"
                passwordInput.style.borderColor="red"
                isPasswordValid = false;
            }
             else {
                passwordError.textContent = '';
                passwordError.textContent="valid"
                passwordError.style.color="green"
                passwordInput.style.borderColor="green"
                isPasswordValid = true;
            }

            // Enable/Disable Submit Button
            if (isNameValid && isEmailValid && isPasswordValid) {
                submitButton.disabled = false;
                submitButton.style.cursor="pointer"
                submitButton.style.backgroundColor="#66FF00"
            } 
            else {
                submitButton.disabled = true;
        }

      }

        