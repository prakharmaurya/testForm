const userNameHTML = document.getElementById("userName");
const userEmailHTML = document.getElementById("userEmail");
const userPasswordHTML = document.getElementById("userPassword");
const userCPasswordHTML = document.getElementById("userCPassword");
const btnformSubmitHTML = document.getElementById("formSubmitter");

const formSubmit = (event) => {
  event.preventDefault();
  console.log(event);
  console.log(userNameHTML.value);
  console.log(userEmailHTML.value);
  console.log(userPasswordHTML.value);

  if (
    !userNameHTML.value ||
    !userEmailHTML.value ||
    !userPasswordHTML.value ||
    !userCPasswordHTML.value
  ) {
    alert("Fille All the fields");
    return;
  }

  if (userPasswordHTML.value !== userCPasswordHTML.value) {
    alert("password not equal");
    return;
  }

  axios
    .post("http://localhost:3000/profile/", {
      name: userNameHTML.value,
      email: userEmailHTML.value,
      password: userPasswordHTML.value,
    })
    .then((res) => {
      userNameHTML.value = null;
      userEmailHTML.value = null;
      userPasswordHTML.value = null;
      alert(`Successful, Name: ${res.data.name}, Email: ${res.data.email}`);
    })
    .catch((err) => {
      alert(`Error : ${err}`);
    });
};

btnformSubmitHTML.addEventListener("click", formSubmit);

// axios.get("http://localhost:3000/profile/").then((res) => {
//   console.log(res.data[0].id);
//   console.log(res.data[0].name);
//   console.log(`Email : ${res.data[0].email}`);
// });
