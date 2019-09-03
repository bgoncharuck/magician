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

function contactsOption() {
  let contactsInformation_el = document.getElementById("contactsInformation");
  let isDisplayed_prop = contactsInformation_el.style.getPropertyValue("display");
  if (isDisplayed_prop !== "block") {
    contactsInformation_el.style.setProperty("display", "block");
    let contactsButton_el = document.getElementById("contactsButton");
    contactsButton_el.classList.toggle("optionButtonToggled");
  } else if (isDisplayed_prop === "block") {
    contactsInformation_el.style.setProperty("display", "none");
    let contactsButton_el = document.getElementById("contactsButton");
    contactsButton_el.classList.remove("optionButtonToggled");
  }
}

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

function writeScriptOption() {
  let writeScriptInformation_el = document.getElementById("writeScriptInformation");
  let isDisplayed_prop = writeScriptInformation_el.style.getPropertyValue("display");
  if (isDisplayed_prop !== "block") {
    writeScriptInformation_el.style.setProperty("display", "block");
    let writeScriptButton_el = document.getElementById("writeScriptButton");
    writeScriptButton_el.classList.toggle("optionButtonToggled");
  } else if (isDisplayed_prop === "block") {
    writeScriptInformation_el.style.setProperty("display", "none");
    let writeScriptButton_el = document.getElementById("writeScriptButton");
    writeScriptButton_el.classList.remove("optionButtonToggled");
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

function contentFill(language) {

  // declaration
  
  // set

}

var language_choise = "uk";

function languageUkranianClicked() {
  languageDropDownMenuClicked();
  if (language_choise !== "ua") {

    switch (language_choise) {
      case "us":
      default:
        let langEnglishButton_el = document.getElementById("langEnglishButton");
        langEnglishButton_el.innerHTML = "English";
        break;
      case "ru":
        let langRussianButton_el = document.getElementById("langRussianButton");
        langRussianButton_el.innerHTML = "Русский";
        break;
      case "de":
        let langGermanButton_el = document.getElementById("langGermanButton");
        langGermanButton_el.innerHTML = "Deutsch";
        break;
    }

    language_choise = "ua";
    let langUkranianButton_el = document.getElementById("langUkranianButton");
    langUkranianButton_el.innerHTML = "<strong>Українська</strong>";

    contentFill(language_ukranian);
  }
}

function languageEnglishClicked() {
  languageDropDownMenuClicked();
  if (language_choise !== "us") {

    switch (language_choise) {
      case "ua":
      default:
        let langUkranianButton_el = document.getElementById("langUkranianButton");
        langUkranianButton_el.innerHTML = "Українська";
        break;
      case "ru":
        let langRussianButton_el = document.getElementById("langRussianButton");
        langRussianButton_el.innerHTML = "Русский";
        break;
      case "de":
        let langGermanButton_el = document.getElementById("langGermanButton");
        langGermanButton_el.innerHTML = "Deutsch";
        break;
    }

    language_choise = "us";
    let langEnglishButton_el = document.getElementById("langEnglishButton");
    langEnglishButton_el.innerHTML = "<strong>English</strong>";

    contentFill(language_english);
  }
}

function languageGermanClicked() {
  languageDropDownMenuClicked();
  if (language_choise !== "de") {

    switch (language_choise) {
      case "us":
      default:
        let langEnglishButton_el = document.getElementById("langEnglishButton");
        langEnglishButton_el.innerHTML = "English";
        break;
      case "ru":
        let langRussianButton_el = document.getElementById("langRussianButton");
        langRussianButton_el.innerHTML = "Русский";
        break;
      case "ua":
        let langUkranianButton_el = document.getElementById("langUkranianButton");
        langUkranianButton_el.innerHTML = "Українська";
        break;
    }

    language_choise = "de";
    let langGermanButton_el = document.getElementById("langGermanButton");
    langGermanButton_el.innerHTML = "<strong>Deutsch</strong>";

    contentFill(language_german);
  }
}

function languageRussianClicked() {
  languageDropDownMenuClicked();
  if (language_choise !== "ru") {

    switch (language_choise) {
      case "us":
      default:
        let langEnglishButton_el = document.getElementById("langEnglishButton");
        langEnglishButton_el.innerHTML = "English";
        break;
      case "ua":
        let langUkranianButton_el = document.getElementById("langUkranianButton");
        langUkranianButton_el.innerHTML = "Українська";
        break;
      case "de":
        let langGermanButton_el = document.getElementById("langGermanButton");
        langGermanButton_el.innerHTML = "Deutsch";
        break;
    }

    language_choise = "ru";
    let langRussianButton_el = document.getElementById("langRussianButton");
    langRussianButton_el.innerHTML = "<strong>Русский</strong>";

    contentFill(language_russian);
  }
}
