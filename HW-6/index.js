let userYearOfBirth = prompt("Вкажіть Ваш рік народження");
let userAge = "";
(userYearOfBirth === null || userYearOfBirth.trim() === "" || isNaN(+userYearOfBirth))
    ? alert("Шкода що Ви не захотіли вводити свій рік народження")
    : userAge = "Ваш вік: " + (2023 - userYearOfBirth) +". ";

let userCity = prompt("Вкажіть в якому місті Ви живете?");
let userCityMessage = "";
if (userCity === null || userCity.trim() === "") {
    alert("Шкода що Ви не захотіли вводити назву міста, в якому живете");
} else if (userCity.toLowerCase() === "київ") {
    userCityMessage = " Ви живете у столиці України.";
} else if (userCity.toLowerCase() === "вашингтон") {
    userCityMessage = " Ви живете у столиці США.";
} else if (userCity.toLowerCase() === "лондон") {
    userCityMessage = " Ви живете у столиці Великобританії.";
} else {
    userCityMessage = " Ви живете у місті " + userCity +".";
};

let userSport = prompt("Вкажіть який Ваш улюблений вид спорту?");
let userSportMessage = "";
if (userSport === null || userSport.trim() === "") {
    alert("Шкода що Ви не захотіли вказати свій улюблений вид спорту.");
} else if (userSport.toLowerCase() === "бокс") {
    userSportMessage = " Круто! Хочете стати як Мухамед Алі?";
} else if (userSport.toLowerCase() === "плавання") {
    userSportMessage = " Круто! Хочете стати як Майкл Фелпс?";
} else if (userSport.toLowerCase() === "легка атлетика") {
    userSportMessage = " Круто! Хочете стати як Усейн Болт?";
}

alert(userAge + userCityMessage + userSportMessage);
