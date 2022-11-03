import throttle from "lodash.throttle";
const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector(".feedback-form input");
const messageRef = document.querySelector(".feedback-form textarea");
const STORAGE_KAY = "feedback-form-state"; 
const formData = {};

populateInput();
formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500))

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KAY);
    console.log(formData);
};

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KAY, formDataJSON);

};

function populateInput() {
    const inputTextSave = localStorage.getItem(STORAGE_KAY);
    if (inputTextSave) {
        const text = JSON.parse(inputTextSave);
        emailRef.value = text.email;
        messageRef.value = text.message;
    };
};