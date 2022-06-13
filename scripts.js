function bmicalc() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let answer = weight / height ** 2;
  console.log(answer);
  document.querySelector("#answer").innerHTML = answer;
}
