const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.side-bar');
const videobox = document.querySelector('.video-container');
const filters = document.querySelector('.filter')
const subscribersection = document.querySelector('.subscribar-section');

menu.addEventListener("click", () => {

  sidebar.classList.toggle('small-sidebar')
  videobox.classList.toggle('bigvideobox')
  filters.classList.toggle('bigvideobox')
  subscribersection.classList.toggle('subhide')

})


//scrolling
window.addEventListener('DOMContentLoaded', (event) => {
  const filters = document.querySelector('.filter')
  filters.addEventListener('wheel', (event) => {
    event.preventDefault();
    filters.scrollLeft += event.deltaY;
  });
});


























