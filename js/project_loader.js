window.addEventListener('load', () => {
    fetch('../js/projects.json')
    .then((response) => response.json())
    .then((json) => {
        var myJson = json.project;
        for(i=0;i<myJson.length;i++){
            image_path = myJson[i].image;
            title = myJson[i].title;
            some_words = myJson[i].some_words;
            create_card(title,image_path,some_words);
        }
    });
});
