var form = document.getElementById("form");
var result = document.getElementById("result");
var arr;
var data = { title: "dato 1", description: "es un buen dato" };
var pushData = function () { return ((arr = [data]),
    arr.map(function (x) {
        result.innerText += "Titulo: " + x.title + "\ndescripcion: " + x.description + "\n\n";
    })); };
var getData = function (e) {
    e.preventDefault();
    var _a = e.target, title = _a.title, description = _a.description;
    arr.push((data = { title: title.value, description: description.value }));
    console.log(arr);
    pushData();
};
form.addEventListener("submit", getData);
pushData();
