AFRAME.registerComponet('clickColor', {

  init: function() {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function(evt)) {
      lastIndex = (lastIndex +1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('Iwaas clicked at: ', evt.detail.intersection.point);
    });
  }
});
