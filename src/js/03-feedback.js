import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form")
const formInputEl = document.querySelector('.feedback-form input')
const formMessageEl = document.querySelector('.feedback-form textarea')
const formData = {}
const STORAGE_KEY = "feedback-form-state"

formEl.addEventListener('input', throttle(onFormData, 500));
formEl.addEventListener("submit", onFormSumbit)

// savedStorageData()

function onFormData(e) {
  const storageFormData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, storageFormData)
  formData[e.target.name] = e.target.value;
}

function onFormSumbit(e) {
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY)
  console.log(formData);
  e.target.reset()
}

// function savedStorageData() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY)
//   if (savedMessage) {
//     formInputEl.value !== undefined ? JSON.parse(savedMessage).email : '';
//     formMessageEl.value == undefined ? JSON.parse(savedMessage).message : '';
//   }
// }















// const formEl = document.querySelector('.feedback-form');
// const inputEmailEl = document.querySelector('.feedback-form input');
// const textareaEl = document.querySelector('.feedback-form textarea');
// const formData = {};
// const STORAGE_KEY = 'feedback-form-state'

// checkLocalStorageOnLoad();

// formEl.addEventListener('input', throttle(onFormInput, 500));
// formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();
//   console.log(formData);
//   localStorage.removeItem(STORAGE_KEY);
//   e.target.reset();
// }

// function onFormInput(e) {
//   formData[e.target.name] = e.target.value;
//   const strFormData = JSON.stringify(formData);
//   localStorage.setItem(STORAGE_KEY, strFormData);
// }

// function savedStorageData() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   const parseFormValue = JSON.parse(savedMessage);

//   if (savedMessage) {
//     formInputEl.value =
//       parseFormValue.email !== undefined ? parseFormValue.email : '';

//       formMessageEl.value =
//       parseFormValue.message !== undefined ? parseFormValue.message : '';
//   }
// }














