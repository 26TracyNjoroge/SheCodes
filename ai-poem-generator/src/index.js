function generatePoem(event) {
    event.preventDefault();

    new Typewriter('#response', {
        strings: 'Hey there, things will be alright',
        autoStart: true,
        cursor: "",
        delay: 100,
      });
}

let formEl = document.querySelector("#ai-poem-form");
formEl.addEventListener("submit", generatePoem)