async function askAI(){

let q = document.getElementById("question").value;

let res = await fetch("/ask",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({question:q})
});

let data = await res.json();

document.getElementById("answer").innerText = data.answer;

}
