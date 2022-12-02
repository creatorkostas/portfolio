function create_card(title,image_path,some_words){
    
    //console.log(obg);
    var card = `
                    <div class="finder">
                        <div class="finder__outer">
                            
                            <div class="card_image">
                                <img class="image_to_card" src="`+image_path+`" alt="project_image">
                            </div>
                            <div class="content">
                                <h1>`+title+`</h1><br>
                                <div class="some_words">
                                    <p class="some_words_p">`+some_words+`</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

    var elem = document.createElement("div");
    elem.className = "card";
    elem.innerHTML = card;

    document.body.appendChild(elem);
}

/*
function del_cardbox(){
    var card = document.getElementById("project_box");
    document.body.removeChild(card);
}*/