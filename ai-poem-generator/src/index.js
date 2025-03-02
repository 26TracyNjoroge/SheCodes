function displayPoem(response) {

    new Typewriter('#response', {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
        delay: 100,
      });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionInput = document.querySelector("#user-instructions");
    let apiKey = "db90o24154efb0eb442t9a7ef39fdafd";
    let prompt = `Generate a poem about ${instructionInput.value}`;
    let context = "You are a poem expert who loves writing short poems. Your task is to generate a six-short-line poem in basic HTML while following the user's instructions. Do not include quotes or any additional HTML outside the poem. Each line should be separated with a <br/>. At the end of the poem, sign it with 'SheCodes AI' inside a <strong> element.Do not mention HTML.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);

    let responseEl = document.querySelector(".response-area");
    responseEl.classList.remove("hidden");

    new Typewriter('#response', {
        strings: "Generating...",
        autoStart: true,
        cursor: "",
        delay: 10,
      });

}

let formEl = document.querySelector("#ai-poem-form");
formEl.addEventListener("submit", generatePoem)