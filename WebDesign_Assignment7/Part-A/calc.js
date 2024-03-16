$(document).ready(function() {
    $("#num1error").hide();
    $("#num2error").hide();
    let error = true;
    $("#num1").keyup(function() {
        validatenumber('#num1', '#num1error');
    });
    $("#num2").keyup(function() {
        validatenumber('#num2', '#num2error');
    });

    const validatenumber = (numInput, errorId) => {
        const inputValue = $(numInput).val();
        if (inputValue.length === 0) {
            $(errorId).show();
            $('#answer').val(" ");
            error = false;
            return false;
        } else {
            $(errorId).hide();
        }
    };

    document.getElementById('username').innerHTML = localStorage.getItem("textvalue");

    $('button').on('click', (event) => {
        const n1 = $('#num1').val();
        const n2 = $('#num2').val();

        if (n1.length === 0 || n2.length === 0) {
            validatenumber('#num1', '#num1error');
            validatenumber('#num2', '#num2error');
            error = false;
            return false;
        } else {
            $('#num1error').hide();
            $('#num2error').hide();
        }

        const performOperation = (operation) => {
            switch (operation) {
                case "Add":
                    $('#answer').val(parseFloat(n1) + parseFloat(n2));
                    break;
                case "Subtract":
                    $('#answer').val(parseFloat(n1) - parseFloat(n2));
                    break;
                case "Multiply":
                    $('#answer').val(parseFloat(n1) * parseFloat(n2));
                    break;
                case "Divide":
                    $('#answer').val(parseFloat(n1) / parseFloat(n2));
                    if (n1 == 1 && n2 == 0) {
                        $('#answer').attr('placeholder', "Not a Number")
                    }
                    break;
                default:
                    break;
            }
        };

        performOperation(event.target.id);
    });
});
