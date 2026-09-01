// =========================================================
// 시니어영어방문학습 - main.js
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---------- 모바일 메뉴 토글 ----------
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    // 메뉴 링크 클릭 시 자동 닫기
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  // ---------- FAQ 아코디언 ----------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', function () {
      const isActive = item.classList.contains('active');

      // 다른 항목 닫기 (한 번에 하나만 열림)
      faqItems.forEach(function (other) {
        other.classList.remove('active');
        other.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ---------- 상담 신청 폼 열기 / 스크롤 ----------
  const consultFormWrap = document.getElementById('consult-form-wrap');
  const openConsultBtns = document.querySelectorAll('[data-open-consult]');

  openConsultBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const consultSection = document.getElementById('consult');
      if (consultSection) {
        consultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (consultFormWrap) {
        consultFormWrap.classList.add('open');
        const nameInput = document.getElementById('name');
        setTimeout(function () {
          if (nameInput) nameInput.focus({ preventScroll: true });
        }, 500);
      }
    });
  });

  // ---------- 상담 신청 폼 제출 ----------
  // 현재는 백엔드 연동 전이라 실제 데이터 저장은 이루어지지 않으며,
  // 화면 확인용으로 제출 완료 화면만 보여줍니다.
  // 실 운영 전환 시 이 부분을 실제 접수 방식(이메일 발송 서비스, 폼 연동 등)으로 교체해야 합니다.
  const consultForm = document.getElementById('consult-form');
  const formSuccess = document.getElementById('form-success');

  if (consultForm) {
    consultForm.addEventListener('submit', function (e) {
      e.preventDefault();
      consultForm.style.display = 'none';
      if (formSuccess) formSuccess.classList.add('show');
    });
  }

  // ---------- 스크롤 위치에 따른 내비게이션 활성 표시 ----------
  const navLinks = mainNav ? Array.from(mainNav.querySelectorAll('a[href^="#"]')) : [];
  const observedSections = navLinks
    .map(function (link) { return document.getElementById(link.getAttribute('href').slice(1)); })
    .filter(Boolean);

  if (navLinks.length && observedSections.length && 'IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    observedSections.forEach(function (section) { sectionObserver.observe(section); });
  }

  // ---------- 헤더 스크롤 시 배경 강조 ----------
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        header.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

});
