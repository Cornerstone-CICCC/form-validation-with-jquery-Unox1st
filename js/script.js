$(document).ready(function () {

  $("#myForm").validate({
    rules: {
      firstName: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      },
      confirmPassword: {
        required: true,
        equalTo: "[name='password']"
      }
    },

    messages: {
      firstName: "Enter at least 2 characters",
      email: "Enter a valid email",
      password: "Minimum 6 characters",
      confirmPassword: "Passwords must match"
    },

    highlight: function (element) {
      $(element).css("border", "2px solid red");
    },

    unhighlight: function (element) {
      $(element).css("border", "1px solid #ccc");
    },

    submitHandler: function (form) {
      alert("✅ Successfully Registered!");
      form.submit();
    }
  });

});