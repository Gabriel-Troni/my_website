function changeLanguage() {
  var language = document.getElementById('languageSelect').value;
  if (language === 'EN') {
    window.location.href = 'http://127.0.0.1:5500/EN/index.html';
  } else if (language === 'PTBR') {
    window.location.href = 'http://127.0.0.1:5500/index.html';
  }
}

document.getElementById('languageSelect').addEventListener('change', changeLanguage);
