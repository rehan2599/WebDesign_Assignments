$(document).ready(function() {
    
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');

    // Display username
    $('#username').text(username);

    
    $('.operation').click(function() {
        var operation = $(this).attr('id');
        calculateResult(operation);
    });

    const calculateResult = (operation) => {
        var num1 = $('#num1').val();
        var num2 = $('#num2').val();

        
        var num1Valid = validateInput(num1, $('#num1Error'));
        var num2Valid = validateInput(num2, $('#num2Error'));

        if (!num1Valid || !num2Valid) {
            return;
        }

       
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        var result = 0;

        switch(operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    console.log("error divide")
                    $('#resultError').text('Cannot divide by zero').css('color', 'red');
                    return;
                }
                result = num1 / num2;
                break;
        }

        $('#result').val(result.toFixed(2)).css('color', 'black');
        $('#resultError').text('');
        console.log("error")
    };

    const validateInput = (input, errorField) => {
        // Null check
        if (input.trim() === '') {
            errorField.text('This field is required').css('color', 'red');
            return false;
        }

        // Number check
        if (!$.isNumeric(input)) {
            errorField.text('Please enter only numbers').css('color', 'red');
            return false;
        }

        // Clear error message if input is valid
        errorField.text('');
        return true;
    };

    // Display error message below the field
    $('input[type="text"]').on('input', function() {
        var inputId = $(this).attr('id');
        var errorId = inputId + 'Error';
        validateInput($(this).val(), $('#' + errorId));
    });
});
