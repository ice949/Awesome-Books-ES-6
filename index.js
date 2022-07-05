import switchPage from './modules/switcher.js';
import addAndRemoveBook from './modules/app.js';

const date = document.getElementById('time');
window.setInterval(() => {
  // eslint-disable-next-line no-undef
  date.innerHTML = `<p>${luxon.DateTime.local().toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS)
  }</p>`;
}, 1000, this);

switchPage();
addAndRemoveBook();
