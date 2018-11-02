AFRAME.registerComponet('clickColor', {

  init: function() {
    const marker = document.querySelector("#{marker}");
    const object = document.querySelector("#{box}");
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    marker.addEventListener('click', function(evt){
      if (marker.object3D.visible == true && evt.detail.cursorE1){
        const intersectedElement = evt && evt.detail && evt.detail.intersectedE1;
        if (object && intersectedElement === object){
          lastIndex = (lastIndex +1) % COLORS.length;
          box.setAttribute('material', 'color', COLORS[lastIndex]);
          console.log('I was clicked at: ', evt.detail.intersection.point);
        }

    });
  }
});
