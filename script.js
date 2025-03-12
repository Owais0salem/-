function sayHello() {
    var name = document.getElementById("username").value;
    if (name.trim() !== "") {
        document.getElementById("title").innerText = "مرحبًا يا " + name + "!";
    } else {
        alert("من فضلك، اكتب اسمك أولًا!");
    }
}