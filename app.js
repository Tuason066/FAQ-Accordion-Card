const card = document.querySelector('.card');
const myAccordionItems = document.querySelectorAll('.my-accordion-item');
const pattern = document.querySelector('.pattern');

let patternWidth;
let accordionBodyStatus = false;


window.addEventListener('resize', () => {
    const cardWidth = card.getBoundingClientRect().width;

    if(cardWidth < 1000) {
        for (let i = 0; i < pattern.children.length; i++) {
            pattern.children[i].style.transform = `scale(1) translate(0)`;
        }
    } else {
        if (accordionBodyStatus) {
            for (let i = 0; i < pattern.children.length; i++) {
                pattern.children[i].style.transform = `scale(2) translate(-34%, calc(-9% + ${patternWidth}px))`;
            }
        } else {
            for (let i = 0; i < pattern.children.length; i++) {
                pattern.children[i].style.transform = `scale(2) translate(-34%, -9%)`;
            };
        };
    };

});

myAccordionItems.forEach(accordion => {

    const myAccordionHeader = accordion.querySelector('.my-accordion-header');
    
    myAccordionHeader.addEventListener('click', () => {

        myAccordionItems.forEach(item => {

            const myAccordionBody = item.querySelector('.my-accordion-body');
                const myAccordionBodyText = item.querySelector('.my-accordion-body p');
                const myAccordionBodyTextHeight = myAccordionBodyText.getBoundingClientRect().height;
            
            if(accordion !== item) {
                item.classList.remove('show-my-accordion-body');
                myAccordionBody.style.height = `0px`;

            } else {
                const cardWidth = card.getBoundingClientRect().width;

                if(!item.classList.contains('show-my-accordion-body')) {
                    accordionBodyStatus = true;

                    item.classList.add('show-my-accordion-body');
                    myAccordionBody.style.height = `${myAccordionBodyTextHeight}px`;

                    patternWidth = (3 * myAccordionBodyTextHeight)/8;

                    if(cardWidth >= 1000) {
                        if(myAccordionBodyTextHeight > 70) {
                            for (let i = 0; i < pattern.children.length; i++) {
                                pattern.children[i].style.transform = `scale(2) translate(-34%, calc(-9% + ${patternWidth}px))`;
                            };
                        };
                    };

                } else {
                    item.classList.remove('show-my-accordion-body');
                    myAccordionBody.style.height = `0px`;
                    
                    if(cardWidth >= 1000) {
                        for (let i = 0; i < pattern.children.length; i++) {
                            pattern.children[i].style.transform = `scale(2) translate(-34%, -9%)`;
                        };
                    };
                };

            };
        });

    });

});