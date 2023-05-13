
function insert(value) {
    console.log(value);
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function deleteDigit() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.substring(0, result.length - 1);
    console.log(result);
  }
  
  function calculate() {
    let result = document.getElementById('result').value;
    let answer = eval(result);
    document.getElementById('result').value = answer;
    console.log(answer);
  }