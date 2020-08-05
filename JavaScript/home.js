'use strict';

let money;
let time;

//2
money = prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");

//3
let appData = {
    money: money, //Бюджет
    timeData: time, //Данные времени
    optionalExpenses: "", //"Необязательные расходы"
    savings: false, //Свойство 
    expenses: {
        feastMoney: "", //"Обязательные расходы"
        allMoney: "", //"Во сколько обойдется?"
        }
    }


let income = [];


//4
appData.expenses.feastMoney = prompt("Введите обязательную статью расходов в этом месяце", "");
appData.expenses.allMoney = prompt("Во сколько обойдется?", "");

alert(appData.expenses.feastMoney);
alert(appData.expenses.allMoney);
alert("Бюджет на " + appData.timeData + " составляет " + appData.expenses.allMoney);