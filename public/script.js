function toggle() {
  //var color = window.getComputedStyle(
  // document.querySelector('.element'), ':before'
  // ).getPropertyValue('color')
  const togStyle = window
    .getComputedStyle(document.querySelector("input"), ":checked")
    .getPropertyValue("background-color");
  console.log("this is toggle", togStyle);
}
