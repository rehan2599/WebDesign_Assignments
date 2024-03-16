$(document).ready(function() {
    
    $('#loginBtn').prop('disabled', true);

    
    $('input').on('input', function() {
        var inputId = $(this).attr('id');
        validateField(inputId);
    });

    
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        var isValidForm = true;

       
        $('input').each(function() {
            var inputId = $(this).attr('id');
            if (!validateField(inputId)) {
                isValidForm = false;
            }
        });

       
        if (isValidForm) {
            var username = $('#username').val().trim();
            window.location.href = "calculator.html?username=" + username;
        }
    });

    function validateField(inputId) {
        var isValid = true;
        var errorMessage = '';

        
        $('#' + inputId + 'Error').text('').hide();

        
        switch (inputId) {
            case 'email':
                var email = $('#email').val().trim();
                if (email === '') {
                    isValid = false;
                    errorMessage = 'Email is required';
                } else if (!validateEmail(email)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid northeastern email';
                }
                break;
            case 'username':
                var username = $('#username').val().trim();
                if (username === '') {
                    isValid = false;
                    errorMessage = 'Username is required';
                } else if (!validateUsername(username)) {
                    isValid = false;
                    errorMessage = 'Username must contain only letters, numbers, or underscores';
                } else if (username.length < 6 || username.length > 20) {
                    isValid = false;
                    errorMessage = 'Username must be between 6 and 20 characters';
                }
                break;
            case 'password':
                var password = $('#password').val();
                if (password === '') {
                    isValid = false;
                    errorMessage = 'Password is required';
                } else if (password.length < 8 || password.length > 20) {
                    isValid = false;
                    errorMessage = 'Password must be between 8 and 20 characters';
                } else if (!validatePassword(password)) {
                    isValid = false;
                    errorMessage = 'Password must contain at least one letter, one number, and one special character';
                }
                break;
            case 'confirmPassword':
                var password = $('#password').val();
                var confirmPassword = $('#confirmPassword').val();
                if (confirmPassword === '') {
                    isValid = false;
                    errorMessage = 'Please confirm password';
                } else if (password !== confirmPassword) {
                    isValid = false;
                    errorMessage = 'Passwords do not match';
                }
                break;
        }

        
        if (!isValid) {
            $('#' + inputId + 'Error').text(errorMessage).show();
        }

       
        var allFieldsFilled = $('#email').val().trim() !== '' && 
                              $('#username').val().trim() !== '' && 
                              $('#password').val() !== '' && 
                              $('#confirmPassword').val() !== '';
        $('#loginBtn').prop('disabled', !allFieldsFilled);

        return isValid;
    }

    function validateEmail(email) {
        
        return /^[^\s@]+@northeastern\.edu$/.test(email);
    }

    function validateUsername(username) {
        
        return /^[a-zA-Z0-9_]+$/.test(username);
    }

    function validatePassword(password) {
        
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    }
});
