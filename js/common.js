//requestAnimFrame 封装，可以兼容所有浏览器
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
            };
})();

function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

function norm(value, min, max) {
  return (value - min) / (max - min);
}

function lerp(norm, min, max) {
  return (max - min) * norm + min;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function map(value, sourceMin, sourceMax, destMin, destMax) {
  return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
}
function getCirclePoint(x, y, radius, angle) {
    var radian = (angle / 180) * Math.PI;
  
    return {
      x: x + radius * Math.cos(radian),
      y: y + radius * Math.sin(radian)
    }
}
function distance(x1, y1, x2, y2, dx, dy) {
	var x = Math.abs(x1 - x2);
	var y = Math.abs(y1 - y2);
	if (x < dx && y < dy) {
		return true;
	}
	return false;
}