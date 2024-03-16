$(document).ready(function () {

  // Validating Username
  $("#usercheck").hide();
  let usernameError = true;
  $("#usernames").keyup(function () {
      validateUsername();
      checkFormValidity();
  });

  let validateUsername = () => {
      let usernameValue = $("#usernames").val();
      if (usernameValue.length == "") {
          $("#usercheck").show();
          $("#usercheck").html("Please fill Username");
          usernameError = false;
          return false;
      } else if (usernameValue.length < 3 || usernameValue.length > 10) {
          $("#usercheck").show();
          $("#usercheck").html("Length of username must be between 3 and 10 characters");
          usernameError = false;
          return false;
      } else if (!/^[a-zA-Z0-9]+$/.test(usernameValue)) {
          $("#usercheck").show();
          $("#usercheck").html("Username can only contain letters and numbers");
          usernameError = false;
          return false;
      } else {
          $("#usercheck").hide();
          usernameError = true;
      }
  };

  // Validate Email
  $("#emailvalid").hide();
  let emailError = true;
  $("#email").keyup(function () {
      validateEmail();
  });

  let validateEmail = () => {
      let emailValue = $("#email").val();
      if (emailValue.length == "") {
          $("#emailvalid").show();
          $("#emailvalid").html("Please fill Email");
          emailError = false;
          return false;
      } else if (!/^[\w-\.]+@northeastern\.edu$/.test(emailValue)) {
          $("#emailvalid").show();
          $("#emailvalid").html("Please enter a valid Northeastern email address");
          emailError = false;
          return false;
      } else {
          $("#emailvalid").hide();
          emailError = true;
      }
  };

  // Validate Password
  $("#passcheck").hide();
  let passwordError = true;
  $("#password").keyup(function () {
      validatePassword();
  });

  let validatePassword = () => {
      let passwordValue = $("#password").val();
      if (passwordValue.length == "") {
          $("#passcheck").show();
          $("#passcheck").html("Please fill Password");
          passwordError = false;
          return false;
      } else if (passwordValue.length < 8 || passwordValue.length > 15) {
          $("#passcheck").show();
          $("#passcheck").html("Password must be between 8 and 15 characters");
          passwordError = false;
          return false;
      } else if (!/[a-z]/.test(passwordValue)) {
          $("#passcheck").show();
          $("#passcheck").html("Password must contain at least one lowercase letter");
          passwordError = false;
          return false;
      } else if (!/[A-Z]/.test(passwordValue)) {
          $("#passcheck").show();
          $("#passcheck").html("Password must contain at least one uppercase letter");
          passwordError = false;
          return false;
      } else if (!/\d/.test(passwordValue)) {
          $("#passcheck").show();
          $("#passcheck").html("Password must contain at least one digit");
          passwordError = false;
          return false;
      } else if (!/[!@#$%^&*()_+]/.test(passwordValue)) {
          $("#passcheck").show();
          $("#passcheck").html("Password must contain at least one special character");
          passwordError = false;
          return false;
      } else {
          $("#passcheck").hide();
          passwordError = true;
      }
  };

  // Validate Confirm Password
  $("#confirmPassCheck").hide();
  let confirmPassError = true;
  $("#confirmPassword").keyup(function () {
      validateConfirmPassword();
  });

  let validateConfirmPassword = () => {
      let passwordValue = $("#password").val();
      let confirmPasswordValue = $("#confirmPassword").val();
      if (confirmPasswordValue.length == "") {
          $("#confirmPassCheck").show();
          $("#confirmPassCheck").html("Please fill Confirm Password");
          confirmPassError = false;
          return false;
      } else if (passwordValue !== confirmPasswordValue) {
          $("#confirmPassCheck").show();
          $("#confirmPassCheck").html("Passwords do not match");
          confirmPassError = false;
          return false;
      } else {
          $("#confirmPassCheck").hide();
          confirmPassError = true;
      }
  };

  // function checkFormValidity() {
  //   if (!usernameError && !emailError && !passwordError && !confirmPassError) {
  //       $("#submitbtn").prop("disabled", false);
  //   } else {
  //       $("#submitbtn").prop("disabled", true);
  //   }
  // }

  // Submit checks
  $("#submitbtn").click(function (event) {
      validateUsername();
      validateEmail();
      validatePassword();
      validateConfirmPassword();

      if (!usernameError || !emailError || !passwordError || !confirmPassError) {
          event.preventDefault();
      } else {
          window.location.href = "/Part-A/calculator.html";
      }
  });
});
