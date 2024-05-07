let counterTotal = 0;
let counter = 0;
let flippedCards = [];

function setMemory() {
    const paire = $('.paire');

    paire.each(function(index) {
        $(this).addClass(`paire${index+1}`);
    });

    paire.click(function(event){
        event.preventDefault();
        const currentCard = $(this);

        currentCard.addClass('flipped');

        flippedCards.push(currentCard);
        counter++;


        if(counter === 2) {
            const classNames = flippedCards.map(card => card.attr('class').split(' ')[1]);
            
            if(classNames[0] === classNames[1]){
                flippedCards.forEach(function(card) {
                    card.addClass('bg-green-700 disabled');
                });
            }
            else {
                setTimeout(function() {
                    paire.each(function(index) {
                        if(!$(this).hasClass('disabled')) {
                            $(this).removeClass('flipped');
                        }
                    });
                }, 1000);

            }

            counterTotal++;
            getCounter(counterTotal);

            flippedCards = [];
            counter = 0;
        }
    });
}


function shuffleCards() {
    const container = $('.f-full');
    const cards = container.children('.paire');
    for (let i = cards.length; i >= 0; i--) {
        container.append(cards.eq(Math.floor(Math.random() * i)));
    }
}

$(document).ready(function(){
    shuffleCards();
    setMemory();
});
