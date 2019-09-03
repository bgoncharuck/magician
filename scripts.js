// Prices Window
function showPricesWindow() {
  let pricesWindow_el = document.getElementById("pricesWindow");
  pricesWindow_el.style.setProperty("display", "block");
}

function closePricesWindow() {
  let pricesWindow_el = document.getElementById("pricesWindow");
  pricesWindow_el.style.setProperty("display", "none");
}

// Options Buttons

// Language Button
function showLanguageOptions() {
  let languageDropDownMenu_el = document.getElementById("languageDropDownMenu");
  languageDropDownMenu_el.style.setProperty("display", "flex");
  let languageButton_el = document.getElementById("languageButton");
  languageButton_el.style.setProperty("visibility", "hidden");
}

function languageDropDownMenuClicked() {
  let languageDropDownMenu_el = document.getElementById("languageDropDownMenu");
  languageDropDownMenu_el.style.setProperty("display", "none");
  let languageButton_el = document.getElementById("languageButton");
  languageButton_el.style.setProperty("visibility", "visible");
}

// Language Choise

function languageUkranianClicked() {
  languageDropDownMenuClicked();
}

function languageEnglishClicked() {
  languageDropDownMenuClicked();
}

function languageGermanClicked() {
  languageDropDownMenuClicked();
}

function languageRussianClicked() {
  languageDropDownMenuClicked();
}
