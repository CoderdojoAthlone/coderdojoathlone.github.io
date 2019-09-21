---
layout:       article
lang:         en
parent:       web-resources
breadcrumb:   true
permalink:    /en/resources/web-resources/tutorial-interval-timer/
ref:          web-developer-tools
title:        (Tutorial) Interval timer
author:       Marc Raffalli
description:  Learn how to implement an interval timer from scratch using plain simple JavaScript methods.
tags:         event handler, time interval, css grid, input validation (basic)
keywords:     addEventListener, application, clearInterval, css grid, event handler, form, getElementById, getElementById, Math.max, Math.min, setInterval, syntax, tick, time interval, tutorial, validation
code:         true
---

You should have a minimum understanding of HTML / CSS / JS and preferably completed the recommended courses on Codecademy.  

The application built is a sport interval timer.
It allows to plan exercise intervals and rest time.

<img class="img-fluid" src="{{'assets/posts/2019-08-12-tutorial-interval-timer/app-interval-timer.png' | relative_url}}"/>

Things to do:
- A `settings form` is capturing the timer settings (`count`, `duration`, `enable break` and `break duration`)
    - Fields for `count`, `duration` and `break duration` are of type number
    - Toggling `enable break` shows/hides the input for `break duration`
    - The checkbox `enable break` is set to false and disabled when `count` is equal to `1`
    - The fields values are set to some default values when the app loads
- A `status panel` is showing:
    - The `time elapsed` in the current interval
    - The number of `intervals done`
    - The total `count of intervals`
    - The type of the current interval rest / exercise
    - Displays a message "Finish!" when the timer ends
- A set of `controls buttons` to `start`, `pause` and `stop` the timer
    - The `start` button disables the `settings form`, starts the timer and updates the `status panel` 
    - The `pause` button pauses the timer... (logic so far :D)
    - The `stop` button resets the timer to the values set in the `settings form` and updates the `status panel`

---

<div class="text-center">
<a href="/assets/posts/2019-08-12-tutorial-interval-timer/" target="_blank" style="font-size: 1.8rem">DEMO</a>
</div>

---

### Key parts

This tutorial will cover:
- How to execute JS code when the page is loaded
- How to write an *Immediately Invoked Function Expression* (IIFE)
- How to write a ternary expression
- How to add an event listener for button clicks, field input, etc
- How to execute a function at a regular interval
- How to safely set text inside an element
- How to convert a number in a string into a number e.g. `'123'` into `123` and apply minimal validation
- How to get the smallest / biggest value in a set of numbers with `Math.min()` / `Math.max()`

All these parts will be described first to allow you to give a try and implement your own version.

How to style an application is not on the scope of this tutorial but the part of CSS used are explained. 
For more information about CSS grid or flexbox have a look at these fantastic articles:
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) 
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) 


**How to execute JS code when the page is loaded**
```js
window.addEventListener('load', () => {
  // code executed when the page is loaded
});
```

**How to write an *Immediately Invoked Function Expression* (IIFE)**
```js
(() => {  
// code executed automatically
})();
```

Read more on
[this article](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174). 

**How to write a ternary expression**

A ternary expression is written as `condition ? when true : when false`.

```js
const color = timer.isFinished ? 'green' : 'red';
```

**How to add an event listener for button clicks, field input, etc**
```html
<button id="theButton">Start</button>
<input id="theInput"/>
```
```js
document.getElementById('theButton').addEventListener('click', () => {
  // code executed when the user clicks on the button
});

document.getElementById('theInput').addEventListener('input', () => {
  // code executed when the user types in the input
});
```

**How to execute a function at a regular interval**
```js
setInterval(() => {
  // code executed at intervals of at least 1 second
}, 1000); // note: these are milliseconds (1s/1000) 
```
The function `setInterval` does not give an accurate interval, the code is executed at intervals of at least 1 second.
It means it will usually takes longer than 1s before the function is called.
Improving the accuracy is not be addressed in the tutorial but feel free to ask one of the web mentors.  

Read the MDN official documentation about
[setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) and
[clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval).

**How to safely set text inside an element**
```html
<div id="theElement"></div>
```
```js
document.getElementById('theElement').textContent = 'The text content';
```

Setting text using the `textContent` property is safe and prevents potential 
[Cross-site scripting (XSS)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)
attacks.

Read the MDN official documentation about
[textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) and
[innerHTML security risk](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations).

**How to convert a number in a string into a number e.g. `'123'` into `123` and apply minimal validation**
```js
parseInt('123'); // 123 as number
parseInt('aaa'); // NaN Not A Number (invalid user input)

// NaN can be tested with isNaN()
isNaN(parseInt('123')); // false
isNaN(parseInt('aaa')); // true
```

**How to get the smallest / biggest value in a set of numbers with `Math.min()` / `Math.max()`**

While very simple, these functions are great to reduce the clutter and make your code more readable.

```js
const biggest = Math.max(-1, 1, 30, 2); // 30
const smallest = Math.min(-1, 1, 30, 2); // -1
```

Combined together, it allows to bind a value between a min and a max in one line, that rocks! \m/ (>_<) \m/

```js
const boundBetween5and15 = Math.max(5, Math.min(aNumber, 15))
```
Don't hesitate to use the console and break this expression step by step.

Read the MDN official documentation about
[Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) and
[Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max).

### Getting Started

#### Initial setup

The whole application is implemented using 3 files to keep the demo simpler:
- `index.css` 
- `index.html`
- `interval-timer-app.js`

However, feel free to name them differently but don't forget to update the path.
 
Start by creating a folder with:

`index.css` 
```css
html,
body {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  font-size: 1rem;
  padding: 1rem;

  background-color: #023;
  color: #E4E5E6;
  overflow: auto;
}
```

`index.html`

The HTML will load the stylesheet and the JS file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./index.css">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Interval timer - Coderdojo Athlone</title>
</head>
<body>
  <!--  App markup goes here  -->
  <script src="./interval-timer-app.js"></script>
</body>
</html>
```

`interval-timer-app.js`

Note the use of IIFE (see above), not mandatory but good practice

```js
(() => {
  window.addEventListener('load', onLoad);

  function onLoad() {
    // code executed when the page is loaded 
  }

  <!--  App JS code goes here  -->

})();
```

#### Markup and styles

Let's first implement a basic version of the UI, with basic styles.
The purpose is to have a clear idea of what needs to be done when implementing the JS logic.

Note: all the markup goes in the `index.html` under `<!--  App markup goes here  -->`.

All elements referenced by JS have an `id` attribute.
ID are not the best ways to access the elements for larger apps.
ID must be unique and they cause issues with reusability and scalability (things we don't worry about in this tutorial).

##### Settings form

The input type is set to `"number"` to only allow numbers related characters e.g. `1`, `2`, `3`, `-`, etc.

Note: this does not prevent the user to enter an invalid number.
`123`, `-123` and `-1-2-3` are all accepted.

```html
<div class="settings-form">
  <div class="form-line">
    <label for="intervalCountInput">Interval count:</label>
    <input type="number" id="intervalCountInput" min="1">
  </div>
  <div class="form-line">
    <label for="intervalDurationInput">Interval duration:</label>
    <input type="number" id="intervalDurationInput" min="1">
  </div>
  <div class="form-line">
    <label for="enableBreakInput">Enable break:</label>
    <input type="checkbox" id="enableBreakInput">
  </div>
  <div class="form-line" id="breakDurationInputLine">
    <label for="breakDurationInput">Break duration:</label>
    <input type="number" id="breakDurationInput" min="1">
  </div>
</div>
```

```css
.form-line {
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
}

.form-line:last-of-type {
  margin: 0;
}

.form-line label {
  flex-grow: 1;
  padding-right: .5rem;
}

.form-line input[type="number"] {
  width: 60px;
  text-align: right;
  font-size: 1rem;
}
```

##### Controls buttons

```html
<div class="timer-controls">
  <button id="startBtn">Start</button>
  <button id="pauseBtn">Pause</button>
  <button id="stopBtn">Stop</button>
</div>
```

```css
.timer-controls {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  padding: 2rem;
  background-color: #356;
}

.timer-controls button {
  font-size: 1rem;
  margin: 0 1rem;
}

#startBtn {
  color: #1f9136;
  font-weight: bold;
}

#stopBtn {
  color: #990000;
}
```

##### Status Panel

The status panel is split in two different areas, 
`timer-overview` will display the `time elapsed` in the current interval and `timer-additional-info` some secondary information.

```html
<div class="timer-status">
  <div class="timer-overview">
    <div id="timeOverviewMessage">Finish!</div>

    <div class="box" id="elapsedInIntervalBox">
      <header>&nbsp;</header>
      <span id="elapsedInInterval"></span>s
    </div>

    <div class="box" id="elapsedInBreakIntervalBox">
      <header>Break time</header>
      <span id="elapsedInBreakInterval"></span>s
    </div>
  </div>

  <div class="timer-additional-info">
    <!--  Information about interval  -->
    <div class="box left-align">
      <header>Intervals</header>
      <div id="intervals"></div>
    </div>
    <div class="box">
      <header>Intervals done</header>
      <div id="intervalsDone"></div>
    </div>
    <div class="box">
      <header>Intervals remaining</header>
      <div id="intervalsRemaining"></div>
    </div>

    <!--  Information about time  -->
    <div class="box left-align">
      <header>Total time</header>
      <span id="totalTime"></span>s
    </div>
    <div class="box">
      <header>Total time elapsed</header>
      <span id="totalTimeElapsed"></span>s
    </div>
    <div class="box">
      <header>Total time remaining</header>
      <span id="totalTimeRemaining"></span>s
    </div>
  </div>
</div>
```

```css
.timer-status header {
  color: #888;
  margin-bottom: .5rem;
  font-size: 1rem;
}

.timer-status .box.left-align {
  text-align: left;
}

.timer-overview .box {
  flex: 0 0 50%;
  margin-bottom: 1rem;
}

.timer-overview {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.timer-overview .box {
  text-align: center;
  font-size: 1.5rem;
}

#timeOverviewMessage,
#elapsedInInterval,
#elapsedInBreakInterval {
  font-size: 3rem;
}

#timeOverviewMessage,
#elapsedInBreakIntervalBox {
  display: none;
}

#timeOverviewMessage {
  text-align: center;
  flex: 1;
  margin-bottom: 1rem;
}

.timer-additional-info {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 0 -1rem;
}

.timer-additional-info .box {
  text-align: right;
  flex: 1 0 33%;
  padding: 1rem;
  margin-bottom: .5rem;
  box-sizing: border-box;
}
```

##### Layout

So far you should have the main components of the applications, let's improve the layout a bit.
Place all the components directly inside a `div` with `class="main-container"`:

```html
<div class="main-container">
  <div class="timer-status">...</div>
  <div class="timer-controls">...</div>
  <div class="settings-form">...</div>
</div>
```
*Note: the order is not relevant.* 
  
We will use the CSS `grid` to apply a simple layout.
Have a look at the following rules in the link in the "Key parts" section at the start and try to set you own layout:
- `grid-gap` applies a gap between the component on the inner side
- `grid-template-columns` declares the grid columns and their size
- `grid-template-areas` declares the areas arrangement, grouped by rows
- `grid-area` declares an area, must be used inside the selector for the specified area

```css
.main-container {
  display: grid;
  grid-gap: 2rem;
  grid-template-areas: "status" "controls" "settings";
  margin-bottom: 1rem;
}

.timer-status {
  grid-area: status;
}

.timer-controls {
  grid-area: controls;
}

.settings-form {
  grid-area: settings;
}
```

The block above will stack the components as 3 rows with a gap of 2rem in between.
This layout is specially suitable for phones where the screen is narrow.

For larger screens, you need to add CSS media queries (`@media`) to define when to rearrange the layout.

```css
@media only screen and (min-width: 768px) {
  .main-container {
    grid-template-columns: repeat(2, calc(50% - 2rem / 2));
    grid-template-areas: "status status" "settings controls";
  }
}
```

The block above will set 2 columns, and the width.
The expression for the width may seem complicated but let's explain it in details:
- `calc()` is a CSS utility to perform calculations e.g. `100% - 10px`, very powerful!
- `50%` the width of one column as there are 2
- `2rem / 2` is the grid gap value divided between the two columns.  
  It can be simplified by `1rem` (but wanted to remind to take in account the gap in the measure of the cell)

Finally, add `max-width` and `margin` to the previous block in order to center the grid and set a maximum width.

```css
.main-container {
  max-width: 960px;
  margin: 0 auto;
}
```

#### Javascript!

Implementing the logic can be challenging when many parts are involved.
The following sections cover how to implement each part progressively in understandable chunks. 

Note: all the JS code goes in the `interval-timer-app.js`.

##### Modeling the timer's data

One of the simplest things (and probably the best) to start with is your data. 
You need to think what needs to be stored and what can be re-calculated.

*Example:*

- Time elapsed
- Time remaining
- Total time

On the list above, one of the information is redundant, it can be calculated from the 2 others.

The data stored in the *timer settings* and the *current timer* will be set as follow: 

**timer**:
- `totalTimeElapsed`:  {number}
- `elapsedInInterval`: {number}
- `intervalsDone`:     {number}
- `isBreak`:           {boolean}
- `isFinished`:        {boolean}

Arguably, we could also remove `isFinished` because we can calculate its value with `totalTimeElapsed` and `total time`.

**timerSettings**:
- `intervalCount`:    {number}
- `intervalDuration`: {number}
- `enableBreak`:      {boolean}
- `breakDuration`:    {number}

The data will be stored into objects accessible anywhere in the scope of our app:
- Create a function to set the `timer` default values.

- Create a function to set the `timerSettings`, it should set all properties with the passed arguments.
  In order for this function to be more convenient to use, it should set the default value when an argument is missing.
  Javascript has a very convenient way to declare a default value.
- Update `onLoad()` to call the functions defined above to initialize the default values.

Add the following to `interval-timer-app.js`:

```js
let
  timer,
  timerSettings;

function resetTimer() {
  timer = {
    totalTimeElapsed: 0,
    elapsedInInterval: 0,
    intervalsDone: 0,
    isBreak: false,
    isFinished: false
  };
}

function setTimerSettings(
  intervalCount = timerSettings.intervalCount,          // declare argument with default value if undefined
  intervalDuration = timerSettings.intervalDuration,
  enableBreak = timerSettings.enableBreak,
  breakDuration = timerSettings.breakDuration
) {
  timerSettings = {
    intervalCount,
    intervalDuration,
    enableBreak,
    breakDuration
  };
}

function onLoad() {
  setTimerSettings(5, 10, true, 5);
  resetTimer();
  // ...
}

// rest of the code
``` 

Read more about the syntax used above:
[property shorthand](http://es6-features.org/#PropertyShorthand),
[default parameter values](http://es6-features.org/#DefaultParameterValues).

##### Accessing the elements

The application accesses the elements based on their ID using `document.getElementById('theId')`.
Remember **ID must be unique**.

The element references will be stored into objects accessible anywhere in the scope of our app:
- Create a function to store the references of all elements in the `settings form`.
- Create a function to store the references of all `controls buttons`.
- Create a function to store the references of all elements in the `status panel`.
- Update `onLoad()` to call the functions defined above to initialize the reference objects.

```js
let
  formSettingsFields,
  timerControlsButtons,
  statusPanel;

function initializeTimerSettingsForm() {
  formSettingsFields = {
    intervalCount: document.getElementById('intervalCountInput'),
    intervalDuration: document.getElementById('intervalDurationInput'),
    enableBreak: document.getElementById('enableBreakInput'),
    breakDuration: document.getElementById('breakDurationInput'),
  };
}

function initializeTimerControls() {
  timerControlsButtons = {
    start: document.getElementById('startBtn'),
    pause: document.getElementById('pauseBtn'),
    stop: document.getElementById('stopBtn')
  };
}

function initializeStatusPanel() {
  statusPanel = {
    timeOverviewMessage: document.getElementById('timeOverviewMessage'),

    elapsedInIntervalBox: document.getElementById('elapsedInIntervalBox'),
    elapsedInBreakIntervalBox: document.getElementById('elapsedInBreakIntervalBox'),
    elapsedInInterval: document.getElementById('elapsedInInterval'),
    elapsedInBreakInterval: document.getElementById('elapsedInBreakInterval'),

    intervalsDone: document.getElementById('intervalsDone'),
    intervalsRemaining: document.getElementById('intervalsRemaining'),
    intervals: document.getElementById('intervals'),

    totalTimeElapsed: document.getElementById('totalTimeElapsed'),
    totalTimeRemaining: document.getElementById('totalTimeRemaining'),
    totalTime: document.getElementById('totalTime'),
  };
}

function onLoad() {
  // ...
  initializeTimerSettingsForm();
  initializeTimerControls();
  initializeStatusPanel();
}
``` 

##### Adding event handlers

An event, in the term of JS, is when something occurs on the page. e.g. user interaction `click`, `scroll`, etc.   
An event handler is the function which is be called in response to an event.
  
**Remember**: the reference to the element must be set before calling `addEventListener`
e.g. call `addEventListener` after initializing the reference object.

The logic of the event handler will be implemented further down. 
The goal is to make sure the events are properly triggered, use a `console.log()` or a breakpoint to check.  

###### Controls

- Update the `initializeTimerControls` to add event handlers for `start`, `pause` and `stop`.

```js
function initializeTimerControls() {
  // ...
  timerControlsButtons.start.addEventListener('click', startTimer);
  timerControlsButtons.pause.addEventListener('click', pauseTimer);
  timerControlsButtons.stop.addEventListener('click', stopTimer);
}

function startTimer() {
  console.log('start button clicked');
}

function pauseTimer() {
  console.log('pause button clicked');
}

function stopTimer() {
  console.log('stop button clicked');
}
```

###### Form

- Update the `initializeTimerSettingsForm` to add the event handlers in order to capture when the settings are updated:
  - Use the event `input` to detect a change of the value in the input field.
  - Use the event `change` to detect a change of the value in the checkbox field.
  
Note: Try to replace the `input` event by `change`, `keydown`, `keyup` or `keypress` and notice the difference.

```js
function initializeTimerSettingsForm() {
  // ...

  formSettingsFields.intervalCount.addEventListener('input', () => {
    console.log('intervalCount field updated', formSettingsFields.intervalCount.value);
  });

  formSettingsFields.intervalDuration.addEventListener('input', () => {
    console.log('intervalDuration field updated', formSettingsFields.intervalDuration.value);
  });

  formSettingsFields.enableBreak.addEventListener('change', () => {
    console.log('enableBreak checkbox updated', formSettingsFields.enableBreak.checked);
  });

  formSettingsFields.breakDuration.addEventListener('input', () => {
    console.log('breakDuration field updated', formSettingsFields.breakDuration.value);
  });
}
```

##### Set form and controls disabled state

Before implementing the logic for the event handlers, you should plan what will be required in those.
One of the things required is to change the disabled state. 
You should create functions in order to avoid code duplication every time you need to change the disabled state of all fields or controls. 

###### Controls

Control's disabled state needs to be updated independently.
 
Create a new function `setTimerControlsDisabledState` to manage the control's disabled state.

```js
function setTimerControlsDisabledState(start, pause, stop) {
  timerControlsButtons.start.disabled = start;
  timerControlsButtons.pause.disabled = pause;
  timerControlsButtons.stop.disabled = stop;
}
```

###### Form

Form field's disabled state will always be the same value except for `enableBreak`.
The field `enableBreak` needs to stay disabled when `timerSettings.intervalCount` equals 1.
 
Create a new function `setFormDisabledState` to set all field's disabled state.

```js
function setFormDisabledState(disabled) {
  formSettingsFields.intervalCount.disabled = disabled;
  formSettingsFields.intervalDuration.disabled = disabled;
  formSettingsFields.enableBreak.disabled = disabled || timerSettings.intervalCount === 1;
  formSettingsFields.breakDuration.disabled = disabled;
}
```

##### Implementing timer ticking logic

The purpose of this section is to implement the ticking scheduling part only.
The full timer ticking logic is more complex and is addressed separately further down.

Create three functions:
- `startTimerTick` starts the timer ticking using `setInterval` and `onTimerTick` and keep the `intervalID` for later cancelling.
- `stopTimerTick`  cancel the interval calling `onTimerTick`.
- `onTimerTick`    function being called by `setInterval`, this is where the timer's logic will be implemented.

```js
function startTimerTick() {
  timer.intervalId = setInterval(onTimerTick, 1000);
}

function stopTimerTick() {
  clearInterval(timer.intervalId);
}

function onTimerTick() {
  console.log('tick!');
}
```

##### Implementing event handlers' logic

In this section you should start to put together different parts implemented until now. 

###### Controls

The controls event handlers should be updated to prevent unexpected state.
- Update the `startTimer` function:
  - call `startTimerTick`.
  - call `resetTimer` when the timer is marked as `isFinished`.
  - **disable** the fields in `settings form`.
  - **disable** the `start` button and **enable**  `pause` and `stop`.
- Update the `pauseTimer` function:
  - call `stopTimerTick`.
  - **enable** the  `start` button and **disable** `pause` (`stop` remains enabled).
- Update the `stopTimer` function:
  - call `stopTimerTick`.
  - reset the timer by calling `resetTimer`.
  - **enable** the fields in `settings form`.
  - **enable** the  `start` button and **disable** `pause` and `stop`.

```js
function startTimer() {
  setFormDisabledState(true);
  setTimerControlsDisabledState(true, false, false);

  if (timer.isFinished) {
    resetTimer();
  }

  startTimerTick();
}

function pauseTimer() {
  setTimerControlsDisabledState(false, true, false);

  stopTimerTick();
}

function stopTimer() {
  setFormDisabledState(false);
  setTimerControlsDisabledState(false, true, true);

  stopTimerTick();
  resetTimer();
}
```

You should now be able to start and pause/stop the ticking.

###### Form

The "Key parts" section explains how to convert a string to number, how to detect invalid numbers with `isNaN` and how to apply min / max bounds.
Implementing the `settings form` event handlers will require a minimum of data validation.
- Verify the input
- Convert it to a number
- Apply min / max bounds to gently prevent the user starting a timer with `999999999999999999999999999999` intervals :D   

Create a new function `getNumberInBoundsOrDefault` which takes the value to validate with its minimum, maximum and default (when invalid).

```js
function getNumberInBoundsOrDefault(value, min, max, def = 1) {
  const valueAsNumber = parseInt(value);
  return isNaN(valueAsNumber) ? def : Math.max(min, Math.min(valueAsNumber, max));
}
```

The function above will be used to validate data entered for `intervalCount`, `intervalDuration`, `breakDuration`.

Create a new function `setBreakDurationLineDisplay` which takes a boolean value.
It should apply/clear the `display` to `breakDurationInputLine`.

```js
function setBreakDurationLineDisplay(displayed) {
  const breakDurationInputLineElt = document.getElementById('breakDurationInputLine');
  breakDurationInputLineElt.style.display = displayed ? null : 'none';
}
```

Update the event handlers in `initializeTimerSettingsForm` to:
  - call `setTimerSettings` with the updated value after validation.
  - show / hide `#breakDurationInputLine` based on `enableBreak` value.
  - show / hide `#breakDurationInputLine` based on `intervalCount` value (no break when value equals 1).

Note: `lastUserSetEnableBreak` is used to keep track of the last value set by the user in order to restore it when `intervalCount` is not equal to 1.

```js
function initializeTimerSettingsForm() {
  const oneDayInSeconds = 60 * 60 * 24;
  let lastUserSetEnableBreak = timerSettings.enableBreak;

  // ...

  formSettingsFields.intervalCount.addEventListener('input', () => {
    const
      intervalCount = getNumberInBoundsOrDefault(formSettingsFields.intervalCount.value, 1, 999),
      hasOneInterval = intervalCount === 1,
      hasBreak = hasOneInterval ? false : lastUserSetEnableBreak;
  
    formSettingsFields.enableBreak.disabled = hasOneInterval === true;
    formSettingsFields.enableBreak.checked = hasBreak;

    setBreakDurationLineDisplay(hasBreak);

    setTimerSettings(intervalCount, undefined, hasBreak);
  });

  formSettingsFields.intervalDuration.addEventListener('input', () => {
    setTimerSettings(undefined, getNumberInBoundsOrDefault(formSettingsFields.intervalDuration.value, 1, oneDayInSeconds));
  });

  formSettingsFields.enableBreak.addEventListener('change', () => {
    const enableBreak = formSettingsFields.enableBreak.checked;

    lastUserSetEnableBreak = enableBreak;
    setBreakDurationLineDisplay(enableBreak);
    setTimerSettings(undefined, undefined, enableBreak);
  });

  formSettingsFields.breakDuration.addEventListener('input', () => {
    setTimerSettings(undefined, undefined, undefined, getNumberInBoundsOrDefault(formSettingsFields.breakDuration.value, 1, oneDayInSeconds));
  });
}
```

The value `undefined` is used above to prevent repeating the matching `timerSettings` values.
Undefined values will be replaced with the defaults defined in the `setTimerSettings` function.

##### Display the data

###### Form

Update the function `initializeTimerSettingsForm` to set the initial values of `timerSettings`.

```js
function initializeTimerSettingsForm() {
  // ...

  formSettingsFields.intervalCount.value = timerSettings.intervalCount;
  formSettingsFields.intervalDuration.value = timerSettings.intervalDuration;
  formSettingsFields.enableBreak.checked = timerSettings.enableBreak;
  formSettingsFields.breakDuration.value = timerSettings.breakDuration;

  // ...
}
```

**Remember**: the reference to the element must be set before setting the value
e.g. set the value after initializing the reference object.

###### Status

In this section, you will implement the part to display the information about the timer.

Note: both elements `#timeOverviewMessage` and `#elapsedInBreakIntervalBox` have `display: none;` to hide them by default.

Create a new function `updateInfo` to manage the display of the information:
- Show `#elapsedInIntervalBox` when on NOT on break, hide when on break.
- Show `#elapsedInBreakIntervalBox` when on break, hide when not.
- Show `#timeOverviewMessage` when timer is finished, hide until then.
- Display the value from `timer.elapsedInInterval` in `#elapsedInIntervalBox` or `#elapsedInBreakIntervalBox` based on "on break" value.
- Display the value for:
  - `intervalsDone`
  - `intervalsRemaining`
  - `intervals`
  - `totalTimeElapsed`
  - `totalTimeRemaining`
  - `totalTime`

You will need to compute `totalTime` and `totalTimeRemaining`.
- Without break, it is simply `intervalCount * intervalDuration`
- With break, you need to add the value `breakDuration` for breaks.  
  Test with `intervalCount` set to different values, but make sure to test with `1`.

This function will require you to change the value of `timer` few times to cover all possibilities.
Ideally, it should be done as part of a test script, we should cover how in a more advanced tutorial.

It is tempting to implement `onTimerTick` and then `updateInfo` but debugging would be harder.
Debugging is easier when the debugged part is not impacted by too many outside factors.

```js
function updateInfo() {
  statusPanel.timeOverviewMessage.style.display = timer.isFinished ? 'block' : null;
  statusPanel.elapsedInIntervalBox.style.display = timer.isFinished || timer.isBreak ? 'none' : null;
  statusPanel.elapsedInBreakIntervalBox.style.display = !timer.isFinished && timer.isBreak ? 'block' : null;

  if (timer.isBreak) {
    statusPanel.elapsedInBreakInterval.textContent = timer.elapsedInInterval;
  } else {
    statusPanel.elapsedInInterval.textContent = timer.elapsedInInterval;
  }

  const {
      intervalCount, intervalDuration, enableBreak, breakDuration
    } = timerSettings,
    totalTime = (intervalCount * intervalDuration) + (enableBreak ? Math.max(intervalCount - 1, 1) * breakDuration : 0);

  statusPanel.intervalsDone.textContent = timer.intervalsDone;
  statusPanel.intervalsRemaining.textContent = timerSettings.intervalCount - timer.intervalsDone;
  statusPanel.intervals.textContent = timerSettings.intervalCount;
  statusPanel.totalTimeElapsed.textContent = timer.totalTimeElapsed;
  statusPanel.totalTimeRemaining.textContent = totalTime - timer.totalTimeElapsed;
  statusPanel.totalTime.textContent = totalTime;
}
```

Read more about the syntax used above:
[destructuring assignment](http://es6-features.org/#ObjectMatchingShorthandNotation).

Update now all event handlers of the settings form to call `updateInfo` after they update the timer settings. 

##### Implement the timer ticking logic

The function `onTimerTick` probably hold the most complex part of the application.
Let's break the logic into plain english first:

- There are two interval durations (normal / break)
- The type of the interval (normal / break) is defined by the value set in `timerSettings.enableBreak` and `timer.isBreak`
- The current interval duration is defined by the value set in `timerSettings.intervalDuration` or `timerSettings.breakDuration` based on `timer.isBreak` value
- Every tick (except last), the `timer.totalTimeElapsed` should be incremented
- Keep track of the elapsed time in the current interval with `timer.elapsedInInterval`
- Keep track of the completed intervals with `timer.intervalsDone`
- Reset the value of `timer.elapsedInInterval` when the interval is over 
- Inverse the value of `timer.isBreak` when the interval is over and if `timerSettings.enableBreak` is `true`
- Set the value of `timer.isFinished`
- If `timer.isFinished` is `true`
  - disable `pause` and `stop` buttons
  - enable the settings form
  - call `stopTimerTick`
- Update the timer values by calling `updateInfo` 

```js
function onTimerTick() {
  const
    isBreak = timerSettings.enableBreak && timer.isBreak,
    currentIntervalDuration = isBreak ? timerSettings.breakDuration : timerSettings.intervalDuration;

  if (timer.elapsedInInterval < currentIntervalDuration) {
    timer.elapsedInInterval++;
  } else {

    if (!timer.isBreak) {
      timer.intervalsDone++;
    }

    timer.isBreak = timerSettings.enableBreak ? !timer.isBreak : false;
    timer.isFinished = timer.intervalsDone === timerSettings.intervalCount;

    if (!timer.isFinished) {
      timer.elapsedInInterval = 1;
    }
  }

  if (timer.isFinished) {
    setTimerControlsDisabledState(false, true, true);
    setFormDisabledState(false);
    stopTimerTick();
  } else {
    timer.totalTimeElapsed++;
  }

  updateInfo();
}
```

### Wrapping up

You did it! *or just scrolled up to here ;)*

Hopefully this tutorial helped you understand some of the basic concepts e.g. event handlers, the Math API, intervals etc
but also how to break a problem into small digestible chunks. 

We welcome feedback on how we could improve this tutorial so feel free to share your thoughts with one of the web mentors.

Keep on learning!
