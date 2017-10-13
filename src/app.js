var buttonModule = function() {
  // Select button elements
  var counterButton = document.querySelector('.counter');

  function counterEvent() {
    return counterButton.addEventListener('click', () => {
      // Add one to counter button's number
      counterButton.textContent++;

      /*
        If button's text content is 5, set counter button's
        display to none and display "Success!".
      */
      if (counterButton.textContent == 5) {
        var successEl = document.querySelector('.success');
        var columnTwo = document.querySelector('#col-2');
        var para = document.createElement('p');
        var textNode = document.createTextNode('Success!');

        para.appendChild(textNode);
        counterButton.style.display = 'none';
        successEl.appendChild(para);
      }
    });
  }

  return {
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
const { counterEvent } = buttons;

counterEvent();
colorEvent();
