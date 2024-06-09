function skillsMember() {
    var url = "https://api.github.com/users/" + document.getElementById("member").value + "/repos";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        var data = JSON.parse(this.responseText);
        var skills = [];
        for (var i = 0; i < data.length; i++) {
            skills.push(data[i].name);
        }
        document.getElementById("skills").innerHTML = skills.join("</br>");
    }
    xhr.send();
}