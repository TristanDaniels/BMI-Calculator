let comment = document.getElementById("comment");
function bmicalc() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let answer = weight / height ** 2;
  console.log(answer);
  document.querySelector("#answer").innerHTML = answer;
  if (answer < 18) {
    comment.innerText = "underweight";
  } else if (answer >= 18 && answer < 25) {
    comment.innerText = "normal";
  } else if (answer >= 25 && answer < 30) {
    comment.innerText = "overweight";
  } else if (answer > 30) comment.innerText = "obese";
}
