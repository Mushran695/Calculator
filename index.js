const monthNameE1 = document.getElementById
("month-name")
const dayName = document.getElementById("day-name")
const dayNum = document.getElementById
("day-number")
const yearE1 = document.getElementById("year");

const date = new Date();
const month = date.getMonth()
monthNameE1.innerText = date.toLocaleString("en", {
    month:"long"
})


dayNameE1.innerText = date.toLocaleString("en", {
    weekday: "long"
})

dayNumE1.innerText = date.getDate()

yearE1.innerText = data.getFullYear()
