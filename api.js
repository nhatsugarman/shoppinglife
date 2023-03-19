const nameInput = document.querySelector(".input-name");
const teleInput = document.querySelector(".telephone-input");
const addressInput = document.querySelector(".address-input");
const select = document.querySelector(".ladi-form-control-select");
const option1 = document.querySelector(".form-select-1");
const option2 = document.querySelector(".form-select-2");
const option3 = document.querySelector(".form-select-3");

const button = document.querySelector(".button-but-it");

button.addEventListener("click", function () {
  // day la gia tri cac bien lan luot tra ve nha. Ex: ten thi lay: nameInput.value,

  /**
   * sdt:  teleInput.value,
   * dia chi: addressInput.value,
   * size m or l: select.value,
   *
   * option1.checked, tra ve true or false. doi voi 3 option
   * */
  console.log(
    "submit",
    nameInput.value,
    teleInput.value,
    addressInput.value,
    select.value,
    option1.checked,
    option2.checked,
    option3.checked
  );
});
