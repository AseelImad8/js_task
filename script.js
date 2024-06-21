var language = ["c++", "Java", "Python"];
var data = " ";

for (var index = 0; index < 3; index++) {
    data += "<li>" + language[index] + "</li>";
}
document.querySelector(".favorite").innerHTML = data;

