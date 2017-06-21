/* init Masonry after all images have been loaded */
var grid = document.querySelector('.grid');
var msnry;

imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  msnry = new Masonry( grid, {
  	isFitWidth: true,
    itemSelector: '.grid-item',
    columnWidth: '.grid-item'
  });
});