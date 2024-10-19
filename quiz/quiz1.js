let container = document.querySelector(".quiz");
console.log(container);
console.log(items);

// const item = [
//   {
//     question: "what is your favorite dress",
//     opt1: "pant",
//     opt2: "shirt",
//     opt3: "jackat",
//     opt4: "none of this"
//   },

//   {
//     question: "what is your favorite item",
//     opt1: "rocket",
//     opt2: "blictch",
//     opt3: "kandy",
//     opt4: "none of this"
//   },
//   {
//     question: "what is your favorite color",
//     opt1: "pocket",
//     opt2: "ans",
//     opt3: "nika",
//     opt4: "none of this"
//   }

let innerhtml = "";

items.forEach((item) => {
  innerhtml += `<li>
  <h4>${item.question}</h4>
  <ul class="chois">
    <li>
      <label
        ><input type="radio" name="${item.name}" value="A" /><span
          >${item.opt1}</span
        ></label
      >
    </li>
    <li>
      <label
        ><input type="radio" name="${item.name}" value="b" /><span
          >${item.opt2}</span
        ></label
      >
    </li>
    <li>
      <label
        ><input type="radio" name="${item.name}" value="c" /><span
          >${item.opt3}</span
        ></label
      >
    </li>
    <li>
      <label
        ><input type="radio" name="${item.name}" value="D" /><span
          >${item.opt4}</span
        ></label
      >
    </li>
  </ul>
</li>`;
  container.innerHTML = innerhtml;
});
