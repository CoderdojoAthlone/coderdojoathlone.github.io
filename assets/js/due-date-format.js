(() => {
  window.addEventListener('load', () => {
    const now = Date.now();

    Array.from(document.querySelectorAll('[data-due-date]'))
      .filter(elt => new Date(elt.dataset.dueDate).getTime() < now)
      .forEach(elt => elt.classList.add('cda-due-date-expired'));
  });
})();
