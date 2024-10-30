const log_in = document.querySelector("#log");
const body = document.querySelector("body");
const email = document.querySelector("#EmailIn");
const pass = document.querySelector("#passIn");
const name_container = document.querySelector(".name-container");
const action_container = document.querySelector(".action-container");
const login_wrape = document.querySelector(".login_wrape");
const info = document.querySelector(".info");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const phone = document.querySelector("#phone");
const register = document.querySelector("#register");
const reglog = document.querySelector("#reglog");

info.style.display = "none";

function login(e) {
  event.preventDefault();
  const allUser = JSON.parse(localStorage.getItem("allUser"));
  const user = allUser.find(
    (user) => user.email === email.value && user.pass === pass.value
  );

  if (user) {
    window.location.href = "/quiz/quiz.html";
  } else {
    login_wrape.innerHTML = `<img src="/img/3m.png" alt=""></br><h4 class="warnds">You dont have an account</h4></br><button class="warnBtn" onclick="window.location.href = 'index.html'">ok</button>`;
  }

  //read email and pass

  // const allUser = JSON.parse(localStorage.getItem("allUser"));

  //find that email and pass is present or not in allUser

  //If present then redirect to the exam page : window.location.href = "exam.html"
}

function reg() {
  const newUser = {
    fname: fname.value,
    lname: lname.value,
    phone: phone.value,
    pass: pass.value,
    email: email.value
  };
  // console.log(newUser);

  if (localStorage.getItem("allUser")) {
    const allUser = JSON.parse(localStorage.getItem("allUser"));
    allUser.push(newUser);
    localStorage.setItem("allUser", JSON.stringify(allUser));
  } else {
    const allUser = [];
    allUser.push(newUser);
    localStorage.setItem("allUser", JSON.stringify(allUser));
  }
  // window.location.href = "";
  reglog.innerHTML = `<img src="/img/1m.png" alt=""></br><h4  class="warnds">You information was succesfully registered</h4></br><button class="warnBtn" onclick="window.location.href = 'index.html'">ok</button>`;
  // window.location.reload();
}

// register.addEventListener("click", (e) => {
//   const newUser = {
//     fname: fname.value,
//     lname: lname.value,
//     phone: phone.value,
//     pass: pass.value,
//     email: email.value
//   };

//   console.log(newUser);

//   localStorage.setItem("alluser", newUser);
//   console.log("register");
// });
