function changeLanguage() {
  var language = document.getElementById('languageSelect').value;
  if (language === 'EN') {
    window.location.href = 'https://gabrieltroni.com/en/';
  } else if (language === 'PTBR') {
    window.location.href = 'https://gabrieltroni.com/';
  }
}

document.getElementById('languageSelect').addEventListener('change', changeLanguage);
