function Change (input1, input2, input3)
{
var rectangle =document.getElementById("rectangle");
var input1 = document.getElementById ("color1").value;
var input2 = document.getElementById ("width").value;
var input3 = document.getElementById ("color2").value;

rectangle.style.borderColor= input1;
rectangle.style.borderWidth= input2;
rectangle.style.backgroundColor= input3;
}
