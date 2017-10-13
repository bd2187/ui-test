var buttonModule = function() {
  var counterButton = document.querySelector('.counter');
  var resetButton = document.querySelector('.reset');

  function counter() {
    return counterButton.addEventListener('click', () => {
      counterButton.textContent++;

      if (counterButton.textContent == 5) {
        counterButton.disabled = true;
      }
    });
  }

  function reset() {
    return resetButton.addEventListener('click', () => {
      counterButton.textContent = 0;
      counterButton.disabled = false;
    });
  }

  return {
    reset,
    counter
  };
};

const buttons = buttonModule();
const { reset, counter } = buttons;
counter();
reset();
