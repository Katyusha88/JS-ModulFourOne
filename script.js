function watch(){
    // const dateOpen = new Date('March 25, 2025 07:00');
    const dateOpen = new Date('June 08, 2026 17:40');

    const myDate = new Date();
    const diff = dateOpen - myDate;
    
    const msInSecond = 1000;
    const msInMinut = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const diffDay = Math.floor(diff / msInDay);

    document.querySelector('.days').textContent = diffDay;

    const diffHour = Math.floor((diff % msInDay) / msInHour);
    document.querySelector('.hours').textContent = diffHour;

    const diffMinut = Math.floor((diff % msInHour) / msInMinut);
    document.querySelector('.minutes').textContent = diffMinut;

    const diffSecond = Math.floor((diff % msInMinut) / msInSecond);
    document.querySelector('.seconds').textContent = diffSecond;

    setInterval(watch, 1000);

    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        newWord()
    }

    clearInterval(timerID);
}

let timerID=setInterval(watch, 1000);


const pictures = document.querySelectorAll('.item');

pictures.forEach(item => {
    item.addEventListener('mouseover', () => {
    removeFocus();
    item.classList.add('selected');  
})
removeFocus = () => {
    pictures.forEach(item => {
    item.classList.remove('selected');
    })
}
})


 function newWord() {
    const heading = document.querySelector('h2');
    heading.textContent = 'We  are open ! ! !';
    heading.classList.add('open');
 }
watch();