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
function consultationOption() {
  let consultationInformation_el = document.getElementById("consultationInformation");
  let isDisplayed_prop = consultationInformation_el.style.getPropertyValue("display");
  if (isDisplayed_prop !== "block") {
    consultationInformation_el.style.setProperty("display", "block");
    let consultationButton_el = document.getElementById("consultationButton");
    consultationButton_el.classList.toggle("optionButtonToggled");
  } else if (isDisplayed_prop === "block") {
    consultationInformation_el.style.setProperty("display", "none");
    let consultationButton_el = document.getElementById("consultationButton");
    consultationButton_el.classList.remove("optionButtonToggled");
  }
}

function remoteAccessOption() {
  let remoteAccessInformation_el = document.getElementById("remoteAccessInformation");
  let isDisplayed_prop = remoteAccessInformation_el.style.getPropertyValue("display");
  if (isDisplayed_prop !== "block") {
    remoteAccessInformation_el.style.setProperty("display", "block");
    let remoteAccessButton_el = document.getElementById("remoteAccessButton");
    remoteAccessButton_el.classList.toggle("optionButtonToggled");
  } else if (isDisplayed_prop === "block") {
    remoteAccessInformation_el.style.setProperty("display", "none");
    let remoteAccessButton_el = document.getElementById("remoteAccessButton");
    remoteAccessButton_el.classList.remove("optionButtonToggled");
  }
}

function departureOption() {
  let departureInformation_el = document.getElementById("departureInformation");
  let isDisplayed_prop = departureInformation_el.style.getPropertyValue("display");
  if (isDisplayed_prop !== "block") {
    departureInformation_el.style.setProperty("display", "block");
    let departureButton_el = document.getElementById("departureButton");
    departureButton_el.classList.toggle("optionButtonToggled");
  } else if (isDisplayed_prop === "block") {
    departureInformation_el.style.setProperty("display", "none");
    let departureButton_el = document.getElementById("departureButton");
    departureButton_el.classList.remove("optionButtonToggled");
  }
}

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
