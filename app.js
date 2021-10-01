var buttonTranslate = document.querySelector("#btn-trans");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error Occured!", error);
    alert("Something went wrong ! Try again after sometime...");
}

function clickHandler() {
     var inputText = textInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            textOutput.innerText = translatedText;
        })
        .catch(errorHandler)

}
buttonTranslate.addEventListener("click", clickHandler);