document.addEventListener('DOMContentLoaded', function() {
  const bundleOptions = document.querySelectorAll('.bundle-option');
  
  // Handle clicking on any part of the bundle box 
  bundleOptions.forEach(function(option) {
    option.addEventListener('click', function() {

      bundleOptions.forEach(function(opt) {
        opt.classList.remove('expanded');
      });

      // Open the clicked box
      option.classList.add('expanded');
    });
  });
});
