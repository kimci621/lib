import "./lib/lib";

$(".tester").listenerAdd('mouseover', function () {
  this.click();
});

$(".tester").listenerAdd('click', function () {
  console.log(this);
  this.setAttribute('ok', 'yes');
});