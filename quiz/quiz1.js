let container = document.querySelector(".quiz");
let result = document.querySelector(".result");
let subBtn = document.querySelector(".subBtn");
const preVb = document.querySelector("#preV");
const nextb = document.querySelector("#next");
const subb = document.querySelector("#sub");

console.log(subBtn);

let ansStore = [];

let innerhtml = "";
let index = 0;
function displayQuestion() {
  if (index == 0) {
    preVb.style.display = "none";
  } else {
    preVb.style.display = "block";
  }

  if (index == items.length - 1) {
    nextb.replaceWith(subb);
    subb.style.display = "block";
  } else {
    subb.replaceWith(nextb);
  }

  if (index < ansStore.length) {
    if (ansStore[index] == "a") {
      innerhtml += `<li>
    <h4>${index + 1}.${items[index].question}</h4>
    <ul class="chois">
      <li><li>
      <input type="radio" name="q${index}" value="a" id="opt1" checked/>
        <label for="opt1"
          >${items[index].opt1}</label
        >
      </li> <li><input type="radio" name="q${index}"  value="b" id="opt2" />
        <label for="opt2"
          >${items[index].opt2}</label
        >
      </li>
      <li><input type="radio" name="q${index}" value="c"  id="opt3"/>
        <label for="opt3"
          >${items[index].opt3}</label
        >
      </li>
      <li><input type="radio" name="q${index}" value="d" id="opt4" />
        <label for="opt4"
          >${items[index].opt4}</label
        >
      </li>
    </ul>
  </li>`;
    } else if (ansStore[index] == "b") {
      innerhtml += `<li>
    <h4>${index + 1}.${items[index].question}</h4>
    <ul class="chois">
      <li>
      <input type="radio" name="q${index}" value="a" id="opt1"/>
        <label for="opt1"
          >${items[index].opt1}</label
        >
      </li> <li><input type="radio" name="q${index}"  checked value="b" id="opt2" />
        <label for="opt2"
          >${items[index].opt2}</label
        >
      </li>
      <li><input type="radio" name="q${index}" value="c"  id="opt3"/>
        <label for="opt3"
          >${items[index].opt3}</label
        >
      </li>
      <li><input type="radio" name="q${index}" value="d" id="opt4" />
        <label for="opt4"
          >${items[index].opt4}</label
        >
      </li>
    </ul>
  </li>`;
    } else if (ansStore[index] == "c") {
      innerhtml += `<li>
    <h4>${index + 1}.${items[index].question}</h4>
    <ul class="chois">
      <li>
      <input type="radio" name="q${index}" value="a" id="opt1"/>
        <label for="opt1"
          >${items[index].opt1}</label
        >
      </li> <li><input type="radio" name="q${index}"   value="b" id="opt2" />
        <label for="opt2"
          >${items[index].opt2}</label
        >
      </li>
      <li><input type="radio" name="q${index}" checked value="c"  id="opt3"/>
        <label for="opt3"
          >${items[index].opt3}</label
        >
      </li>
      <li><input type="radio" name="q${index}" value="d" id="opt4" />
        <label for="opt4"
          >${items[index].opt4}</label
        >
      </li>
    </ul>
  </li>`;
    } else if (ansStore[index] == "d") {
      innerhtml += `<li>
    <h4>${index + 1}.${items[index].question}</h4>
    <ul class="chois">
      <li>
      <input type="radio" name="q${index}" value="a" id="opt1"/>
        <label for="opt1"
          >${items[index].opt1}</label
        >
      </li> <li><input type="radio" name="q${index}"   value="b" id="opt2" />
        <label for="opt2"
          >${items[index].opt2}</label
        >
      </li>
      <li><input type="radio" name="q${index}"  value="c"  id="opt3"/>
        <label for="opt3"
          >${items[index].opt3}</label
        >
      </li>
      <li><input type="radio" name="q${index}" checked value="d" id="opt4" />
        <label for="opt4"
          >${items[index].opt4}</label
        >
      </li>
    </ul>
  </li>`;
    } else if ((ansStore[index] !== "d", "a", "c", "d")) {
      innerhtml += `<li>
      <h4>${index + 1}.${items[index].question}</h4>
      <ul class="chois">
         <input type="radio" name="q${index}" value="a" id="opt1"/>
          <label for="opt1"
            >${items[index].opt1}</label
          >
        </li>
        <li><input type="radio" name="q${index}"  value="b" id="opt2" />
          <label for="opt2"
            >${items[index].opt2}</label
          >
        </li>
        <li><input type="radio" name="q${index}" value="c"  id="opt3"/>
          <label for="opt3"
            >${items[index].opt3}</label
          >
        </li>
        <li><input type="radio" name="q${index}" value="d" id="opt4" />
          <label for="opt4"
            >${items[index].opt4}</label
          >
        </li>
      </ul>
    </li>`;
    }
    //   innerhtml += `<li>
    //   <h4>${index + 1}.${items[index].question}</h4>
    //   <ul class="chois">
    //     `;

    //   innerhtml += `
    //     <li><input type="radio" name="q${index}"  value="b" id="opt2" />
    //       <label for="opt2"
    //         >${items[index].opt2}</label
    //       >
    //     </li>
    //     <li><input type="radio" name="q${index}" value="c"  id="opt3"/>
    //       <label for="opt3"
    //         >${items[index].opt3}</label
    //       >
    //     </li>
    //     <li><input type="radio" name="q${index}" value="d" id="opt4" />
    //       <label for="opt4"
    //         >${items[index].opt4}</label
    //       >
    //     </li>
    //   </ul>
    // </li>`;
  } else {
    innerhtml += `<li>
      <h4>${index + 1}.${items[index].question}</h4>
      <ul class="chois">
         <input type="radio" name="q${index}" value="a" id="opt1"/>
          <label for="opt1"
            >${items[index].opt1}</label
          >
        </li>
        <li><input type="radio" name="q${index}"  value="b" id="opt2" />
          <label for="opt2"
            >${items[index].opt2}</label
          >
        </li>
        <li><input type="radio" name="q${index}" value="c"  id="opt3"/>
          <label for="opt3"
            >${items[index].opt3}</label
          >
        </li>
        <li><input type="radio" name="q${index}" value="d" id="opt4" />
          <label for="opt4"
            >${items[index].opt4}</label
          >
        </li>
      </ul>
    </li>`;
  }

  container.innerHTML = innerhtml;
}

// function calculate() {
//   let score = 0;
//   items.forEach((item, index) => {
//     const selectedOption = document.querySelector(`input[name="q${index}"]`);
//     if (selectedOption && selectedOption.value == item.answer) {
//       score++;
//     }
//   });

// }

function previous() {
  innerhtml = "";
  index--;
  displayQuestion();
}
function next() {
  checkAns();
  innerhtml = "";
  index++;
  displayQuestion();
}

function calAns() {
  let marks = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].answer == ansStore[i]) {
      marks++;
    }
  }
  result.innerHTML = `Your score: ${marks} out of ${items.length}`;
}

function checkAns() {
  const opt1 = document.getElementById("opt1");
  const opt2 = document.getElementById("opt2");
  const opt3 = document.getElementById("opt3");
  const opt4 = document.getElementById("opt4");

  let userAnswer = "";
  console.log(opt1);
  if (opt1.checked == true) {
    userAnswer = "a";
  } else if (opt2.checked == true) {
    userAnswer = "b";
  } else if (opt3.checked == true) {
    userAnswer = "c";
  } else if (opt4.checked == true) {
    userAnswer = "d";
  }
  ansStore[index] = userAnswer;
  console.log(ansStore);
}
console.log(userAnswer);
