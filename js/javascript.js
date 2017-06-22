// init Masonry
var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  	isFitWidth: true,
    itemSelector: '.grid-item',
    columnWidth: '.grid-item'
});

imagesLoaded( grid ).on( 'progress', function() {
	// layout Masonry after each image loads
	msnry.layout();
});