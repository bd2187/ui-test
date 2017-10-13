var buttonModule = function() {
  // Select button elements
  var counterButton = document.querySelector('.counter');
  var resetButton = document.querySelector('.reset');

  function counterEvent() {
    return counterButton.addEventListener('click', () => {
      // Add one to counter button's number
      counterButton.textContent++;

      // if button's text content is 5, disable counter button
      if (counterButton.textContent == 5) {
        counterButton.disabled = true;
      }
    });
  }

  function resetEvent() {
    // reset counter button
    return resetButton.addEventListener('click', () => {
      counterButton.textContent = 0;
      counterButton.disabled = false;
    });
  }

  return {
    resetEvent,
    counterEvent
  };
};

var colorModule = function() {
  // Select first column
  var columnOne = document.querySelector('#col-1');

  const colorEvent = () => {
    /*
      Add event listener to columnOne and invoke changeColor with the
      event as its argument
    */
    return columnOne.addEventListener('click', event => changeColor(event));
  };

  function changeColor(n) {
    const colorText = n.target;
    const colorID = n.target.id;

    /*
      If element's text color is equal to the element's id,
      change text color to black, otherwise, utilize colorID
      as text color.
    */
    return colorText.style.color === colorID
      ? (colorText.style.color = '#000')
      : (colorText.style.color = colorID);
  }

  return { colorEvent };
};

// Invoke events
const buttons = buttonModule();
const colors = colorModule();

const { colorEvent } = colors;
const { resetEvent, counterEvent } = buttons;

counterEvent();
resetEvent();
colorEvent();
