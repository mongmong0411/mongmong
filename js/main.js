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
  const consultForm = document.getElementById('consult-form');
  const formSuccess = document.getElementById('form-success');

  if (consultForm) {
    consultForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = consultForm.querySelector('.btn-submit');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 신청 중...';

      const formData = new FormData(consultForm);
      const payload = {
        name: formData.get('name') || '',
        phone: formData.get('phone') || '',
        consult_type: formData.get('consult_type') || '전화 상담',
        region: formData.get('region') || '',
        preferred_time: formData.get('preferred_time') || '',
        message: formData.get('message') || '',
        status: '신규'
      };

      fetch('tables/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (!res.ok) throw new Error('요청 실패');
          return res.json();
        })
        .then(function () {
          consultForm.style.display = 'none';
          if (formSuccess) formSuccess.classList.add('show');
        })
        .catch(function (err) {
          console.error('상담 신청 오류:', err);
          alert('상담 신청 중 문제가 발생했습니다. 전화(1588-9999)로 문의해 주세요.');
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        });
    });
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
