jQuery.extend(jQuery.roundabout_shape,
{
	rotator: function(r, a, t) {
		return {/*x: Math.sin(r + a), 
			y:  (Math.sin(r + 3*Math.PI/2 + a) / 8) * t, 
			z: (Math.cos(r + a) + 1) / 2,
			scale: ((Math.sin(r + Math.PI/2 + a) / 2) + 0.5)/2 */
x: Math.sin(r + a),
                        y: Math.sin((2 + t) * r),
                        z: (Math.cos(r + a) + 1) / 2,
                        scale: ((Math.sin(r + Math.PI/2 + a) / 2) + 0.5)/2
		}
	}
});
