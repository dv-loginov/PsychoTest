export const pageStartLayout = (name, description, instruction) => {
  return `
    <div class="header">
        <h1 class="header__text">${name}</h1>
    </div>
    <div class="cartQuiz cartQuiz--start-page">
        <input class="radio" id="one" name="group" type="radio" checked>
        <input class="radio" id="two" name="group" type="radio">
        <div class="tabs">
            <label class="tab" id="one-tab" for="one">Описание</label>
            <label class="tab" id="two-tab" for="two">Правила</label>
        </div>
        <div class="panels">
            <div class="panel" id="one-panel">
                ${description}
            </div>
            <div class="panel" id="two-panel">
                ${instruction}
            </div>
        </div>
    </div>
    <nav class="nav">
            <button 
                id="next" 
                class="button" 
                data-button="nextPage" 
                >Начать
            </button>
    </nav>
    `;
};
