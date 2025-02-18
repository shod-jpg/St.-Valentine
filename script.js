document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("btn_LoveWishes");
    const paragraph = document.getElementById("LoveWishes");
    const texts = ["❤️Твій день буде сповнений щастям❤️", "❤️Тебе чекають великі пригоди❤️", "❤️Не здавайся, йди до цілі!❤️", "❤️Любові та щастя тобі!❤️", "❤️Ти найкращий!❤️","❤️В тебе все вийде!❤️", "❤️Ти неповторний!❤️", "❤️Тебе люблять!❤️", "❤️Не сумуй, йди до цілі!❤️"];
    let index = 0;
    
    button.addEventListener("click", function () {
        index = (index + 1) % texts.length;
        paragraph.textContent = texts[index];
    });
});
