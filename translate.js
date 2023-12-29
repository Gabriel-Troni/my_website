function changeLanguage() {
  var language = document.getElementById('languageSelect').value;
  if (language === 'EN') {
    window.location.href = 'https://gabriel-troni.vercel.app/en/';
  } else if (language === 'PTBR') {
    window.location.href = 'https://gabriel-troni.vercel.app/';
  }
}

document.getElementById('languageSelect').addEventListener('change', changeLanguage);
