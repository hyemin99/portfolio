/* 현재 시간(시계) - index.html, contact.html 공용
   동작 줄이기 설정을 켠 사용자에게는 1초마다 갱신하지 않고 한 번만 표시합니다. */
(function () {
	'use strict';

	var target = document.getElementById('clock');
	if (!target) return;

	var week = ['일', '월', '화', '수', '목', '금', '토'];

	function pad(n) {
		return n < 10 ? '0' + n : n;
	}

	function render() {
		var d = new Date();
		target.textContent =
			(d.getMonth() + 1) + '월 ' + d.getDate() + '일 ' + week[d.getDay()] + '요일' +
			'\u00A0 \u00A0' +
			pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
	}

	render();

	var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (!reduceMotion) {
		setInterval(render, 1000);
	}
})();
