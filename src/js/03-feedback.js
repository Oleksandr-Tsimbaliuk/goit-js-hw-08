import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form")
const formInputEl = document.querySelector('.feedback-form input')
const formMessageEl = document.querySelector('.feedback-form textarea')
const formData = {}
const STORAGE_KEY = "feedback-form-state"

formEl.addEventListener('input', throttle(onFormData, 500));
formEl.addEventListener("submit", onFormSumbit)

savedStorageData()

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  const storageFormData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, storageFormData)
}

function onFormSumbit(e) {
  e.preventDefault();
  localStorage.removeItem(STORAGE_KEY)
  e.target.reset()
}

function savedStorageData() {
  const getStorageData = JSON.parse(localStorage.getItem(STORAGE_KEY))
  // console.log(getStorageData);
  // console.log(JSON.parse(getStorageData));
  
  if (getStorageData) {
    console.log(getStorageData);
    
      if (getStorageData.email) {
        formInputEl.value = getStorageData.email
      }
      if (getStorageData.message) {
        formMessageEl.value = getStorageData.message
      }

    // if (formInputEl.value) {
    //   getStorageData.email = formInputEl.value
    // }
    // if (formMessageEl.value) {
    //   getStorageData.message
    // }
  }
}






















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














