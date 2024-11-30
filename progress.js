document.addEventListener('DOMContentLoaded', function() {
  var progressBar = document.getElementById('progress');
  var progressContainer = document.getElementById('progress-bar');

  function updateProgressBar() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight;
    var winHeight = window.innerHeight;
    var scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    progressBar.style.width = scrollPercent + '%';
  }

  window.addEventListener('scroll', updateProgressBar);

  // Initial update
  updateProgressBar();
});