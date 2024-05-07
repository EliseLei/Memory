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
        $(this).children(".content").removeClass('hidden');
    
        if(counter <= 2) {
            flippedCards.push($(this));
            counter++;
        }

        if(counter === 2) {
            const classNames = flippedCards.map(card => card.attr('class').split(' ')[1]);
            if(classNames[0] === classNames[1]){
                flippedCards[0].addClass('bg-green-700');
                flippedCards[1].addClass('bg-green-700');
            }
            else {
                flippedCards.forEach(function(card) {
                    card.children(".content").removeClass('hidden');
                });
                
                setTimeout(function() {
                    paire.each(function(index) {
                        $(this).children(".content").addClass('hidden');
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
