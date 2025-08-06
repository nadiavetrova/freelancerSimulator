// // game.js

// let stats = {
//   energy: 100,
//   time: 8,
//   money: 0,
//   deadline: 0,
// };

// const actions = {
//   code: { energy: -20, time: -2, money: +50, deadline: +1, message: "Ты поработал как герой!" },
//   memes: { energy: +10, time: -1, money: 0, deadline: +1, message: "Ты вдохновился мемами." },
//   sleep: { energy: +40, time: -3, money: 0, deadline: +1, message: "Ты хорошо выспался." },
//   yoga: { energy: +20, time: -2, money: 0, deadline: +1, message: "Йога — отличный выбор!" },
//   ignore: { energy: -10, time: -2, money: 0, deadline: +2, message: "Ты проигнорировал всё. Хмм..." },
// };

// function doAction(actionName) {
//   const action = actions[actionName];

//   if (!action) return;

//   stats.energy += action.energy;
//   stats.time += action.time;
//   stats.money += action.money;
//   stats.deadline += action.deadline;

//   // Ограничения
//   if (stats.energy < 0) stats.energy = 0;
//   if (stats.energy > 100) stats.energy = 100;
//   if (stats.time < 0) stats.time = 0;

//   // Обновим интерфейс
//   updateStats();
//   document.getElementById("result").textContent = action.message;

//   // Условия поражения
//   if (stats.energy === 0) {
//     document.getElementById("result").textContent = "У тебя закончилась энергия. Отдыхай!";
//     disableButtons();
//   } else if (stats.deadline >= 5) {
//     document.getElementById("result").textContent = "Дедлайн провален! 😱";
//     disableButtons();
//   } else if (stats.time === 0) {
//     document.getElementById("result").textContent = "День закончился. Ждём завтра...";
//     disableButtons();
//   }
// }

// function updateStats() {
//   document.getElementById("energy").textContent = stats.energy;
//   document.getElementById("time").textContent = stats.time;
//   document.getElementById("money").textContent = stats.money;
//   document.getElementById("deadline").textContent = stats.deadline;
// }

// function disableButtons() {
//   document.querySelectorAll("button").forEach(btn => btn.disabled = true);
// }




function firstSlideInit() {
  const BTN = document.querySelector('.firstSlideBTN');
  const firstSlide = document.querySelector('.firstSlide');
  const secondSlide = document.querySelector('.secondSlide')

  BTN.addEventListener('click', nextSlide);

  function nextSlide(e) {
    const target = e.target;

    const isBtn = target.tagName = 'BUTTON';
    if (isBtn) {
      firstSlide.style.display = 'none';
      secondSlide.style.display = 'flex';
    }
  }
}

firstSlideInit()


function secondSlideInit() {
  const secondSlide = document.querySelector('.secondSlide');
  const secondSlideBTN = document.querySelector('.secondSlideBTN');
  const inputName = document.getElementById('secondSlideInputName');
  const errorMessage = document.querySelector('.secondSlideError');
  const nextSlideCharacter = document.querySelector('.characterSelection_box');
  secondSlideBTN.addEventListener('click', nextSlide);

  function nextSlide() {
    if (inputName.value === '') {
      errorMessage.classList.remove('hide')
      errorMessage.classList.add('active')
    }

    if (inputName.value !== '') {
      secondSlide.style.display = 'none';
      nextSlideCharacter.style.display = 'block';
    }
  }

  inputName.addEventListener('input', function () {
    if (inputName.value !== '') {
      errorMessage.classList.add('hideError');
      errorMessage.classList.remove('activeError');
    }
  });
}

secondSlideInit()

function characterSelectionInit() {
  const userNameInput = document.querySelector('.userName');
  const boy = document.querySelector("#boy");
  const girl = document.querySelector("#girl");
  const nextSlideBtn = document.querySelector('.characterSlideBTN');
  const characterSelection = document.querySelector('.characterSelection_box');
  const instructionsSection = document.querySelector('.instructionsSection_box');
  const characterSlideError = document.querySelector('.characterSlideError');
  const bubble = document.getElementById("playerPhrase");

  let selectedCharacter = localStorage.getItem('selectedCharacter');

  // Показать фразу
  function showPhrase(text) {
    bubble.textContent = text;
    bubble.classList.remove("hidden");
  }

  // Применить визуальное состояние по выбранному персонажу
  function applyCharacter(character) {
    if (character === 'boy') {
      boy.classList.add('characterImgBoy');
      girl.classList.remove('characterImgGirl');
      showPhrase(`${userNameInput.value}, я готов кодить хоть на картошке! Главное — дедлайны не жмут.`);
    } else if (character === 'girl') {
      girl.classList.add('characterImgGirl');
      boy.classList.remove('characterImgBoy');
      showPhrase(`${userNameInput.value}, у меня в голове порядок, в коде — красота. Погнали!`);
    }
  }

  // Сохранить выбор в localStorage и применить визуально
  function selectCharacter(character) {
    selectedCharacter = character;
    localStorage.setItem('selectedCharacter', character);
    applyCharacter(character);
  }

  // Навешиваем события на выбор персонажа
  boy.addEventListener("click", () => selectCharacter('boy'));
  girl.addEventListener("click", () => selectCharacter('girl'));

  // Переход на следующий слайд
  nextSlideBtn.addEventListener('click', () => {
    if (selectedCharacter) {
      characterSelection.style.display = 'none';
      instructionsSection.style.display = 'block';
    } else {
      characterSlideError.classList.remove('hide');
      characterSlideError.classList.add('active');
    }
  });

  // При загрузке страницы применить сохранённый выбор
  if (selectedCharacter) {
    applyCharacter(selectedCharacter);
  }

  console.log("Выбран персонаж:", selectedCharacter);





















  // const orders = [
  //   { text: "Сделать лендинг — 100$", money: 100, energy: -10, xp: 5 },
  //   { text: "Правки на сайте — 50$", money: 50, energy: -5, xp: 3 },
  //   { text: "Добавить форму обратной связи — 30$", money: 30, energy: -3, xp: 2 }
  // ];

  // let currentIndex = 0;
  // let money = 0;
  // let energy = 100;
  // let xp = 0;

  // const orderText = document.getElementById('currentOrder');
  // const acceptBtn = document.getElementById('acceptBtn');
  // const skipBtn = document.getElementById('skipBtn');
  // const progressBar = document.getElementById('progressBar');
  // const progress = document.querySelector('.progress');
  // const moneyDisplay = document.getElementById('money');
  // const energyDisplay = document.getElementById('energy');
  // const xpDisplay = document.getElementById('xp');

  // function loadOrder() {
  //   if (currentIndex < orders.length) {
  //     orderText.textContent = orders[currentIndex].text;
  //   } else {
  //     orderText.textContent = "Заказы закончились!";
  //     acceptBtn.disabled = true;
  //     skipBtn.disabled = true;
  //   }
  // }

  // acceptBtn.addEventListener('click', () => {
  //   progressBar.classList.remove('hidden');
  //   progress.style.width = '0%';

  //   setTimeout(() => {
  //     progress.style.width = '100%';
  //   }, 10);

  //   setTimeout(() => {
  //     const order = orders[currentIndex];
  //     money += order.money;
  //     energy += order.energy;
  //     xp += order.xp;

  //     moneyDisplay.textContent = money;
  //     energyDisplay.textContent = energy + '%';
  //     xpDisplay.textContent = xp + '%';

  //     currentIndex++;
  //     progressBar.classList.add('hidden');
  //     loadOrder();
  //   }, 2000);
  // });

  // skipBtn.addEventListener('click', () => {
  //   currentIndex++;
  //   loadOrder();
  // });

  // loadOrder();

}

characterSelectionInit();



function informationsInit() {
  const instructionsBTN = document.querySelector('.instructionsBTN');
  const instructionsText = document.querySelector('.instructionsText');
  const character = document.querySelector('.character');

  const texts = [
    `Панель характеристик: <br>
💰 Деньги — зарабатываешь на жизнь. <br>
⚡ Энергия — без неё не поработаешь. Следи за уровнем! <br>
📈 Опыт — с каждым заказом ты становишься круче. <br>
⏳ День X — показывает, сколько дней ты уже фрилансишь.`,
    `🎯 Что дальше? <br>
Набери опыта, энергии и денег — и переходи к новым уровням: <br>
Учись <br>
Прокачивай скиллы <br>
Получай крутые отзывы <br>
Стань профи!`,
    `` // последний шаг, пустой текст
  ];

  let current = 0;
  instructionsBTN.addEventListener('click', function () {
    if (current < texts.length) {
      instructionsText.innerHTML = texts[current];
      current++;

      if (current === texts.length) {
        this.textContent = 'Начать!';
        // Показываем персонажа
        if (character) {
          if (localStorage.getItem('selectedCharacter') === 'girl') {
            character.src = 'img/girl_1.png';
          } else {
            character.src = 'img/boy_1.png';
          }
          character.style.display = 'block';
        }
      }
    }
  });
}

informationsInit();