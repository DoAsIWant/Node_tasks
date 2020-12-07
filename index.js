// Чтобы использовать handlebars нужно выполнить команду npm i express-handlebars

const express = require("express");
const app = express();
const PORT = 3000;
const handlebars = require("express-handlebars"); // подключаем handleBars

// Настройки HandleBars
const hbs = handlebars.create({
    defaultLayout: "main", // Главный шаблон в котором будет происходить динамическое исзменение страниц
    extname: "hbs" // Расширение для шаблона
});

app.engine("hbs", hbs.engine);
app.set("view engine","hbs");
app.set("views","view"); // Задаём папку в которой будут шаблоны

app.get("/",(req,res)=>{
 res.render("index"); // Выдаём ответ от сервера в виде html Странице
});

app.get("/about",(req,res)=>{
res.render("about");
})

app.listen(PORT,()=>{
console.log(`Server was launching ${PORT}`);
})