(() => {

  window.addEventListener('load', onLoad);

  function onLoad() {
    setTimerSettings(3, 60, true, 15);

    initializeTimerControls();
    initializeStatusPanel();
    initializeTimerSettingsForm();
    resetTimer();
  }

  let
    formSettingsFields,
    timerControlsButtons,
    statusPanel,
    timer,
    timerSettings;

  function setTimerSettings(
    intervalCount = timerSettings.intervalCount,
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

  function resetTimer() {
    timer = {
      totalTimeElapsed: 0,
      elapsedInInterval: 0,
      intervalsDone: 0,
      isBreak: false,
      isFinished: false
    };

    updateInfo();
  }

  function initializeTimerSettingsForm() {
    const oneDayInSeconds = 60 * 60 * 24;
    let lastUserSetEnableBreak = timerSettings.enableBreak;

    formSettingsFields = {
      intervalCount: document.getElementById('intervalCountInput'),
      intervalDuration: document.getElementById('intervalDurationInput'),
      enableBreak: document.getElementById('enableBreakInput'),
      breakDuration: document.getElementById('breakDurationInput'),
    };

    formSettingsFields.intervalCount.value = timerSettings.intervalCount;
    formSettingsFields.intervalDuration.value = timerSettings.intervalDuration;
    formSettingsFields.enableBreak.checked = timerSettings.enableBreak;
    formSettingsFields.breakDuration.value = timerSettings.breakDuration;

    function getNumberInBoundsOrDefault(value, min, max, def = 1) {
      const valueAsNumber = parseInt(value);
      return isNaN(valueAsNumber) ? def : Math.max(min, Math.min(valueAsNumber, max));
    }

    function setBreakDurationLineDisplay(displayed) {
      const breakDurationInputLineElt = document.getElementById('breakDurationInputLine');
      breakDurationInputLineElt.style.display = displayed ? null : 'none';
    }

    formSettingsFields.intervalCount.addEventListener('input', () => {
      const
        intervalCount = getNumberInBoundsOrDefault(formSettingsFields.intervalCount.value, 1, 999),
        hasOneInterval = intervalCount === 1,
        hasBreak = hasOneInterval ? false : lastUserSetEnableBreak;

      formSettingsFields.enableBreak.disabled = hasOneInterval === true;
      formSettingsFields.enableBreak.checked = hasBreak;

      setBreakDurationLineDisplay(hasBreak);

      setTimerSettings(intervalCount, undefined, hasBreak);
      updateInfo();
    });

    formSettingsFields.intervalDuration.addEventListener('input', () => {
      setTimerSettings(undefined, getNumberInBoundsOrDefault(formSettingsFields.intervalDuration.value, 1, oneDayInSeconds));
      updateInfo();
    });

    formSettingsFields.enableBreak.addEventListener('change', () => {
      const enableBreak = formSettingsFields.enableBreak.checked;

      lastUserSetEnableBreak = enableBreak;
      setBreakDurationLineDisplay(enableBreak);
      setTimerSettings(undefined, undefined, enableBreak);
      updateInfo();
    });

    formSettingsFields.breakDuration.addEventListener('input', () => {
      setTimerSettings(
        undefined, undefined, undefined,
        getNumberInBoundsOrDefault(formSettingsFields.breakDuration.value, 1, oneDayInSeconds)
      );
      updateInfo();
    });
  }

  function initializeTimerControls() {
    timerControlsButtons = {
      start: document.getElementById('startBtn'),
      pause: document.getElementById('pauseBtn'),
      stop: document.getElementById('stopBtn')
    };

    setTimerControlsDisabledState(false, true, true);

    timerControlsButtons.start.addEventListener('click', startTimer);
    timerControlsButtons.pause.addEventListener('click', pauseTimer);
    timerControlsButtons.stop.addEventListener('click', stopTimer);
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

  function setTimerControlsDisabledState(start, pause, stop) {
    timerControlsButtons.start.disabled = start;
    timerControlsButtons.pause.disabled = pause;
    timerControlsButtons.stop.disabled = stop;
  }

  function setFormDisabledState(disabled) {
    formSettingsFields.intervalCount.disabled = disabled;
    formSettingsFields.intervalDuration.disabled = disabled;
    formSettingsFields.enableBreak.disabled = disabled || timerSettings.intervalCount === 1;
    formSettingsFields.breakDuration.disabled = disabled;
  }

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

  function startTimerTick() {
    timer.intervalId = setInterval(onTimerTick, 1000);
  }

  function stopTimerTick() {
    clearInterval(timer.intervalId);
  }

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
      totalTime = (intervalCount * intervalDuration) + (enableBreak ? (intervalCount - 1) * breakDuration : 0);

    statusPanel.intervalsDone.textContent = timer.intervalsDone;
    statusPanel.intervalsRemaining.textContent = timerSettings.intervalCount - timer.intervalsDone;
    statusPanel.intervals.textContent = timerSettings.intervalCount;
    statusPanel.totalTimeElapsed.textContent = timer.totalTimeElapsed;
    statusPanel.totalTimeRemaining.textContent = totalTime - timer.totalTimeElapsed;
    statusPanel.totalTime.textContent = totalTime;
  }

})();
