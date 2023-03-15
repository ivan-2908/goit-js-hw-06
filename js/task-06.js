const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {

    const validation =  Number(validationInput.getAttribute(`data-length`));
    validationInput.classList.toggle("invalid", validationInput.value.
    length !== validation );
    validationInput.classList.toggle("valid", validationInput.value.length 
    === validation )
});