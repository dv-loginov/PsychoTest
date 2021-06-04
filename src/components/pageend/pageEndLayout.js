export const pageEndLayout = (name, limit, rezults, legend) => {
  const rezultList = rezults.map((rezult, index) => {
    if (rezult >= limit) {
      return (`
            <h3>${legend[index].type}</h3>
            <br>
            <p>${legend[index].description}</p>
            <br><br>
    `);
    }
  });

  return `
     <div class="header">
        <h1 class="header__text">${name}</h1>
    </div>
    </div>
    <div class="cartQuiz cartQuiz--end-page">
        <div class="result__title">Расшифровка результата</div>
        <div class="result__text">
             ${rezultList.join('')}
        </div>
        
    </div>
    <nav class="nav">
            <button 
                id="next" 
                class="button"
                data-button="theEnd"
                >Закончить
            </button>
    </nav>
    `;
};
