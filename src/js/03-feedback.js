


// Виконуй це завдання у файлах 03 - feedback.html і 03 - feedback.js.Розбий його на декілька підзавдань:
// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.


import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");

formEl.addEventListener('input', throttle(event => {

    const emailEl = formEl.elements.email.value;
    const messageEl = formEl.elements.message.value;


    const formData = {
        email: emailEl,
        message: messageEl,
    };

    const formDataJSON = JSON.stringify(formData);
    localStorage.setItem("feedback-form-state", formDataJSON);

}, 500));



formEl.addEventListener('submit', event => {
    event.preventDefault();
    formEl.reset();
});


function onPageLoad() {
    const formDataJSON = localStorage.getItem("feedback-form-state");
    const parsedForm = JSON.parse(formDataJSON);
    

    for (const key of Object.keys(parsedForm)) {
        formEl.elements[key].value = parsedForm[key];
    }
};
 onPageLoad();


 
