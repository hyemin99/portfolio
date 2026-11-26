/* =========================================================
   접근성 보강 스크립트
   - common.js / main.js 보다 뒤에서 로드하세요.
   ========================================================= */
$(function () {
	'use strict';

	var $burger = $('#hamburger');
	var $menu = $('#sidemenu-container');
	// 메뉴가 열려 있는 동안 뒤쪽 콘텐츠는 키보드/스크린리더에서 제외
	var backgroundSel = 'header, #main, footer, .scroll-ani, .top-btn, #bottom-nav';

	function menuOpen() {
		return $menu.hasClass('open');
	}

	function syncMenu() {
		var open = menuOpen();
		$burger.attr({
			'aria-expanded': open ? 'true' : 'false',
			'aria-label': open ? '전체 메뉴 닫기' : '전체 메뉴 열기'
		});
		$(backgroundSel).prop('inert', open);
	}

	// 1. role="button" 요소를 Enter / Space 키로 실행
	$(document).on('keydown', '[role="button"]', function (e) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			this.click();
		}
	});

	// 2. 햄버거 메뉴: 상태 동기화 + 열리면 첫 링크로 포커스 이동
	$burger.on('click', function () {
		// common.js 의 토글 처리가 끝난 뒤 상태를 읽는다
		setTimeout(function () {
			syncMenu();
			if (menuOpen()) {
				setTimeout(function () {
					$menu.find('a').first().trigger('focus');
				}, 420); // 메뉴 fade 시간(400ms) 이후
			}
		}, 0);
	});

	// 3. Esc 로 메뉴 닫고 햄버거 버튼으로 포커스 복귀
	$(document).on('keydown', function (e) {
		if (e.key === 'Escape' && menuOpen()) {
			$burger[0].click();
			$burger.trigger('focus');
		}
	});

	// 4. 맨 위로 버튼: 이동 후 본문 시작점으로 포커스 이동
	$('.go-top').on('click', function () {
		var main = document.getElementById('main');
		if (main) {
			main.focus({ preventScroll: true });
		}
	});

	syncMenu();
});
