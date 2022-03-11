$(document).ready(function() {

    const pickRandomTag=()=> {
        const tags = document.querySelectorAll('.tag')
        return tags[Math.floor(Math.random() * tags.length)]
    }
    function randomSelect() {
        const times = 30

        const interval = setInterval(() => {
            const randomTag = pickRandomTag()

            if (randomTag !== undefined) {
                highlightTag(randomTag)

                setTimeout(() => {
                    unHighlightTag(randomTag)
                }, 100)
            }
        }, 100);

        setTimeout(() => {
            clearInterval(interval)

            setTimeout(() => {
                const randomTag = pickRandomTag()

                highlightTag(randomTag)
            }, 100)

        }, times * 100)
    }
    function highlightTag(tag) {
        tag.classList.add('highlight')
    }

    function unHighlightTag(tag) {
        tag.classList.remove('highlight')
    }
    const createTag=(text)=>{
        const colors=['#cd84f1',
            '#ffcccc',
            '#ff4d4d',
            '#ffaf40',
            '#fffa65',
            '#c56cf0',
            '#ffb8b8',
            '#ff3838',
            '#ff9f1a',
            '#fff200',
            '#32ff7e',
            '#7efff5',
            '#18dcff',
            '#7d5fff',
            '#3ae374',
            '#67e6dc',
            '#17c0eb',
            '#7158e2'];
        const randomColor=colors[Math.floor(Math.random() * colors.length)];
        $('.tags').append('<span class="tag" style="background-color:'+randomColor+'">'+text+'</span>')
    }
    let currentWord="";
    $('textarea').keyup(function(e) {
        if(e.keyCode === 13){
            setTimeout(() => {
                e.target.value = ''
            }, 10)

            randomSelect();
        }
        else if(e.keyCode === 188 && currentWord !== "") {
            createTag(currentWord);
            currentWord="";
        }
        else if (e.code.startsWith('Key') || e.code.startsWith('Numpad') || e.code.startsWith('Digit') || e.code.startsWith('Space'))
            currentWord+=e.key;

    });

});
