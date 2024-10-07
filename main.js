'use strict';

{
  const hamburger = document.getElementById('hamburger');
  const border1 = document.getElementById('border1');
  const border2 = document.getElementById('border2');
  const border3 = document.getElementById('border3');
  const menu = document.getElementById('menu');
  const mask = document.getElementById('mask');
  const lists = document.querySelectorAll('#menu ul li');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    border1.classList.toggle('show');
    border2.classList.toggle('show');
    border3.classList.toggle('show');
    menu.classList.toggle('show');
    mask.classList.toggle('show');
  });

  mask.addEventListener('click', () => {
    border1.classList.toggle('show');
    border2.classList.toggle('show');
    border3.classList.toggle('show');
    menu.classList.toggle('show');
    mask.classList.remove('show');
  });

  lists.forEach((list) => {
    list.addEventListener('click', () => {
      border1.classList.toggle('show');
      border2.classList.toggle('show');
      border3.classList.toggle('show');
      menu.classList.toggle('show');
      mask.classList.toggle('show');
    });
  });


  const target1 = document.querySelector('main .about .about-content .about-text .about-img');
  const target2 = document.querySelector('main .corporate .corporate-cimg img');
  const target3 = document.querySelector('main .corporate .corporate-content .corporate-ecore .corporate-ecore-img');
  const target4 = document.querySelector('main .corporate .corporate-content .corporate1 .corporate-text .corporate-img');
  const target5 = document.querySelector('main .corporate .corporate-content .corporate2 .corporate-text .corporate-img');
  const target6 = document.querySelector('main .corporate .corporate-content .corporate3 .corporate-text .corporate-img');
  const target7 = document.querySelector('main .corporate-all .corporate4 .corporate-text .corporate-img');
  const target8 = document.querySelector('main .contact .contact-cimg img');
  const target9 = document.querySelector('main .message .message-content .message-text .message-img');
  const target10 = document.querySelector('main .recruit-about');
  const target11 = document.querySelector('#btns');
  const target12 = document.querySelector('main .ecore-environment .ecore-environment-content .ecore-environments .ecore-environment1 img');
  const target13 = document.querySelector('main .ecore-environment .ecore-environment-content .ecore-environments .ecore-environment2 img');
  const target14 = document.querySelector('main .ecore-about');
  const target15 = document.querySelector('main .recruit-about .recruit-about-content');
  const target16 = document.querySelector('main .recruit-support .recruit-support-content .recruit-support-support1');
  const target17 = document.querySelector('main .recruit-support .recruit-support-content .recruit-support-support2');
  const target18 = document.querySelector('main .ecore-about .ecore-about-content .ecore-about-title');
  const target19 = document.querySelector('main .ecore-about .ecore-about-content .ecore-about-maintext .ecore-about-maintext1-1');
  const target20 = document.querySelector('main .ecore-about .ecore-about-content .ecore-about-maintext .ecore-about-maintext1-2');
  const target21 = document.querySelector('main .ecore-trouble .ecore-trouble-content .ecore-troubles .ecore-trouble1');
  const target22 = document.querySelector('main .ecore-trouble .ecore-trouble-content .ecore-troubles .ecore-trouble2');
  const target23 = document.querySelector('main .ecore-trouble .ecore-trouble-content .ecore-troubles .ecore-trouble3');
  const target24 = document.querySelector('main .ecore-merit .ecore-merit-content .ecore-merits .ecore-merit-merit:nth-child(1) .ecore-merit-merit-img');
  const target25 = document.querySelector('main .ecore-merit .ecore-merit-content .ecore-merits .ecore-merit-merit:nth-child(2) .ecore-merit-merit-img');
  const target26 = document.querySelector('main .ecore-merit .ecore-merit-content .ecore-merits .ecore-merit-merit:nth-child(3) .ecore-merit-merit-img');
  const target27 = document.querySelector('main .ecore-merit .ecore-merit-content .ecore-merits .ecore-merit-merit:nth-child(4) .ecore-merit-merit-img');
  const target28 = document.querySelector('main .ecore-merit .ecore-merit-content .ecore-merits .ecore-merit-merit:nth-child(5) .ecore-merit-merit-img');

  const target30 = document.querySelector('main .ecore-feature .ecore-feature-content .ecore-feature1 .ecore-feature1-p');
  const target31 = document.querySelector('main .ecore-feature .ecore-feature-content .ecore-feature1 .ecore-feature1-y');
  const target32 = document.querySelector('main .ecore-feature .ecore-feature-content .ecore-feature3 .ecore-feature3-p');
  const target33 = document.querySelector('main .ecore-feature .ecore-feature-content .ecore-feature3 .ecore-feature3-y');
  const target34 = document.querySelector('main .ecore-haccp .ecore-haccp-content .ecore-haccp-position .ecore-haccp-y');
  const target35 = document.querySelector('main .ecore-haccp .ecore-haccp-content .ecore-haccp-position .ecore-haccp-after');
  const target36 = document.querySelector('main .ecore-flow .ecore-flow-content dl dt:nth-child(1) .ecore-flow-img');
  const target37 = document.querySelector('main .ecore-flow .ecore-flow-content dl dt:nth-child(3) .ecore-flow-img');
  const target38 = document.querySelector('main .ecore-flow .ecore-flow-content dl dt:nth-child(5) .ecore-flow-img');
  const target39 = document.querySelector('main .ecore-flow .ecore-flow-content dl dt:nth-child(7) .ecore-flow-img');

  let windowWidth = window.innerWidth;

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition1 = target1.getBoundingClientRect().top;

    if (targetItemPosition1 < targetPosition) {
      target1.style.opacity = '1';
      target1.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition2 = target2.getBoundingClientRect().top;

    if (targetItemPosition2 < targetPosition) {
      target2.classList.add('show');
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition3 = target3.getBoundingClientRect().top;

    if (targetItemPosition3 < targetPosition) {
      target3.style.opacity = '1';
      target3.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition4 = target4.getBoundingClientRect().top;

    if (targetItemPosition4 < targetPosition) {
      target4.style.opacity = '1';
      target4.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition5 = target5.getBoundingClientRect().top;

    if (targetItemPosition5 < targetPosition) {
      target5.style.opacity = '1';
      target5.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition6 = target6.getBoundingClientRect().top;

    if (targetItemPosition6 < targetPosition) {
      target6.style.opacity = '1';
      target6.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition7 = target7.getBoundingClientRect().top;

    if (targetItemPosition7 < targetPosition) {
      target7.style.opacity = '1';
      target7.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition8 = target8.getBoundingClientRect().top;

    if (targetItemPosition8 < targetPosition) {
      target8.classList.add('show');
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition9 = target9.getBoundingClientRect().top;

    if (targetItemPosition9 < targetPosition) {
      target9.style.opacity = '1';
      target9.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 1 / 5;
    let targetItemPosition10 = target10.getBoundingClientRect().top;

    if (targetItemPosition10 < targetPosition) {
      target11.classList.add('show');
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 1 / 5;
    let targetItemPosition10 = target10.getBoundingClientRect().top;

    if (targetItemPosition10 >= targetPosition) {
      target11.classList.remove('show');
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition12 = target12.getBoundingClientRect().top;

    if (targetItemPosition12 < targetPosition) {
      target12.classList.add('show');
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition13 = target13.getBoundingClientRect().top;

    if (targetItemPosition13 < targetPosition) {
      target13.classList.add('show');
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 1 / 5;
    let targetItemPosition14 = target14.getBoundingClientRect().top;

    if (targetItemPosition14 < targetPosition) {
      target11.classList.add('show');
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 1 / 5;
    let targetItemPosition14 = target14.getBoundingClientRect().top;

    if (targetItemPosition14 >= targetPosition) {
      target11.classList.remove('show');
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 7 / 10;
    let targetItemPosition15 = target15.getBoundingClientRect().top;

    if (targetItemPosition15 < targetPosition) {
      target15.style.opacity = '1';
      target15.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition16 = target16.getBoundingClientRect().top;

    if (targetItemPosition16 < targetPosition) {
      target16.style.opacity = '1';
      target16.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition17 = target17.getBoundingClientRect().top;

    if (targetItemPosition17 < targetPosition) {
      target17.style.opacity = '1';
      target17.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 4 / 5;
    let targetItemPosition18 = target18.getBoundingClientRect().top;

    if (targetItemPosition18 < targetPosition) {
      target18.style.opacity = '1';
      target18.style.transform = 'translate(-50%, 0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition19 = target19.getBoundingClientRect().top;

    if (targetItemPosition19 < targetPosition) {
      target19.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition20 = target20.getBoundingClientRect().top;

    if (targetItemPosition20 < targetPosition) {
      target20.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition21 = target21.getBoundingClientRect().top;

    if (targetItemPosition21 < targetPosition) {
      target21.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition22 = target22.getBoundingClientRect().top;

    if (targetItemPosition22 < targetPosition) {
      target22.style.opacity = '1';
    }
  });


  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition23 = target23.getBoundingClientRect().top;

    if (targetItemPosition23 < targetPosition) {
      target23.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition24 = target24.getBoundingClientRect().top;

    if (targetItemPosition24 < targetPosition) {
      target24.style.opacity = '1';
      target24.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition25 = target25.getBoundingClientRect().top;

    if (targetItemPosition25 < targetPosition) {
      target25.style.opacity = '1';
      target25.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition26 = target26.getBoundingClientRect().top;

    if (targetItemPosition26 < targetPosition) {
      target26.style.opacity = '1';
      target26.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition27 = target27.getBoundingClientRect().top;

    if (targetItemPosition27 < targetPosition) {
      target27.style.opacity = '1';
      target27.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition28 = target28.getBoundingClientRect().top;

    if (targetItemPosition28 < targetPosition) {
      target28.style.opacity = '1';
      target28.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition30 = target30.getBoundingClientRect().top;

    if (targetItemPosition30 < targetPosition) {
      target30.style.opacity = '1';
      target30.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 7 / 8;
    let targetItemPosition31 = target31.getBoundingClientRect().top;

    if (targetItemPosition31 < targetPosition) {
      target31.style.opacity = '1';
      target31.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition32 = target32.getBoundingClientRect().top;

    if (targetItemPosition32 < targetPosition) {
      target32.style.opacity = '1';
      target32.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 7 / 8;
    let targetItemPosition33 = target33.getBoundingClientRect().top;

    if (targetItemPosition33 < targetPosition) {
      target33.style.opacity = '1';
      target33.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition34 = target34.getBoundingClientRect().top;

    if (targetItemPosition34 < targetPosition) {
      target34.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition35 = target35.getBoundingClientRect().top;

    if (targetItemPosition35 < targetPosition) {
      target35.style.opacity = '1';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition36 = target36.getBoundingClientRect().top;

    if (targetItemPosition36 < targetPosition) {
      target36.style.opacity = '1';
      target36.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition37 = target37.getBoundingClientRect().top;

    if (targetItemPosition37 < targetPosition) {
      target37.style.opacity = '1';
      target37.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition38 = target38.getBoundingClientRect().top;

    if (targetItemPosition38 < targetPosition) {
      target38.style.opacity = '1';
      target38.style.transform = 'translateY(0)';
    }
  });

  window.addEventListener('scroll', () => {
    let targetPosition = window.innerHeight * 3 / 4;
    let targetItemPosition39 = target39.getBoundingClientRect().top;

    if (targetItemPosition39 < targetPosition) {
      target39.style.opacity = '1';
      target39.style.transform = 'translateY(0)';
    }
  });


  const questions = document.querySelectorAll('main .recruit-question .recruit-questions dl div dt');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      question.parentNode.classList.toggle('show');

      questions.forEach(el => {
        if (question !== el) {
          el.parentNode.classList.remove('show');
        }
      });
    });
  });

  const ecoreQuestions = document.querySelectorAll('main .ecore-question .ecore-question-content .ecore-questions dl div dt');

  ecoreQuestions.forEach(ecoreQuestion => {
    ecoreQuestion.addEventListener('click', () => {
      ecoreQuestion.parentNode.classList.toggle('show');

      ecoreQuestions.forEach(el => {
        if (ecoreQuestion !== el) {
          el.parentNode.classList.remove('show');
        }
      });
    });
  });
}