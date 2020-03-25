
function PasswordValidator(password1, password2)
{
  var password1 = document.getElementById('input1').value;
	var password2 = document.getElementById('input2').value;
  var n= password1.length;

if (n>=8&&password1==password2)
{
  alert("Password validated!");
}

else if (password1!=password2)
{
  alert("Invalid! Passwords don't match.");
}

else if (n<8)
{
  alert ("Invalid! Password must contain at least 8 characters.");
}
}
