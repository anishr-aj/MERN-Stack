const b = document.getElementById("a");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const toggle = document.getElementById("toggle");

add.oneclick = function () {
    a.classList.add("hightlight");
};

remove.oneclick = function () {
    a.classList.remove("Hightlight");
};

toggle.oneclick = function () {
    a.classList.toggle("hightlight");
};