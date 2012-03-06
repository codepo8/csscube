/*
  csscube by Christian Heilmann
  Homepage: http://thewebrocks.com/demos/cubes/
  Copyright (c)2012 Christian Heilmann
  Code licensed under the BSD License:
  http://wait-till-i.com/license.txt
*/
(function(){
var docelm = document.documentElement,
    testprops = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective',  
                 'OPerspective', 'msPerspective'],
    i = testprops.length, 
    canperspective = false,
    cubes = document.querySelectorAll( '.cubecontainer' ),
    sides = [ 'front', 'left', 'back', 'right', 'top', 'bottom' ],
    nav = out = side = all = t = null;

while( i-- ) {
  if ( docelm.style[ testprops[ i ] ] !== undefined ) {
    docelm.className += ' perspective';
    canperspective = true;
    break;
  }
}

if( canperspective ) {
  i = cubes.length;
  while( i-- ) {
    nav = document.createElement( 'nav' );
    cubes[i].insertBefore( nav, cubes[i].firstChild );
    all = sides.length;
    out = '<ul>';
    for ( j = 0; j < all; j++ ) {
      side = cubes[i].querySelector( '.cube .' + sides[j] );
      if( side ) {
        out += '<li><button data-trigger="' + side.className + '">' + 
                side.getAttribute( 'data-label' ) +
               '</button></li>';
      }
    }
    out += '</ul>';
    nav.innerHTML = out;
    cubes[i].addEventListener( 'click', function(evt) {
      t = evt.target;
      if ( t.tagName === 'BUTTON' && t.getAttribute('data-trigger') ) {
        t.parentNode.parentNode.parentNode.parentNode
        .querySelector('.cube').className = 'cube '+
        t.getAttribute('data-trigger');
      }  
    }, false);
  }
}
})();