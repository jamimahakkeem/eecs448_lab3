var index=1;

showSlides (index);

function nextSlide (n)
{
showSlides (index += n);

}

function showSlides (n)
{

  var slide = document.getElementsByClassName("Slides");

if (n>slide.length)
{
  index=1;
}
if (n<1)
{
  index=slide.length;
}

for (var i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";

}

slide[index-1].style.display = "block";
}
