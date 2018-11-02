AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");

		const box = document.querySelector('#box');
		const sphere = document.querySelector("#sphere");

        box.addEventListener('click', function(ev){
            if (animatedMarker.object3D.visible == true && ev.detail.cursorEl) {
				//change color when clicked
				box.setAttribute("color", "blue");
				//scale up when clicked
				/*
                const scale = entity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);

                // every click, we make our model grow in size
                entity.setAttribute('scale', scale);
				*/
            }
		});
		sphere.addEventListener('click', function (ev) {
			if (animatedMarker.object3D.visible == true && ev.detail.cursorEl) {
				//change color when clicked
				sphere.setAttribute("color", "red");
				//scale up when clicked
				/*
                const scale = entity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);

                // every click, we make our model grow in size
                entity.setAttribute('scale', scale);
				*/
			}
		});
}});
