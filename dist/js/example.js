let animes = $('.tray')[0].children;
let obj = [];
for (var i = 0; i < animes.length; i++) {
    obj[i] = {
        image: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("src=\"") + 5, animes[i].innerHTML.indexOf("jpg\"") + 3),
        name: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("title\">") + 7, animes[i].innerHTML.indexOf("</div>")),
        episodeName: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("episode-name\">") + 14, animes[i].innerHTML.indexOf("2018</span>")),
        views: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("episode-views\">") + 15, animes[i].innerHTML.indexOf(" lượt xem</span>")),
    };
}

let animes = $('.tray-content.news.asdf')[0].children;
let obj = [];
let stringg;
for (var i = 0; i < animes.length; i++) {
    stringg = animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("film-likes\">") + 12);
    obj[i] = {
        image: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("src=\"") + 5, animes[i].innerHTML.indexOf("alt") - 2),
        name: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("title\">") + 7, animes[i].innerHTML.indexOf("</div>")),
        views: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("film-views\">") + 12, animes[i].innerHTML.indexOf(" lượt xem</div>")),
        date: stringg.substring(0, stringg.indexOf("</div>")),
    };
}

//Anime-chart
let animes = $('.tray')[0].children;
let obj = [];
let episodes;
let categories;
for (let i = 0; i < animes.length; i++) {
    episodes = animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("film-update\">") + 13);
    categories = animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("film-genres\">") + 13);
    obj[i] = {
        image: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("src=\"") + 5, animes[i].innerHTML.indexOf("jpg\"") + 3),
        name: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("title\">") + 7, animes[i].innerHTML.indexOf("</div>")),
        episodes: episodes.substring(0, episodes.indexOf(" </div>")),
        categories: categories.substring(0, categories.indexOf("</div>")),
        views: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("film-views\">") + 12, animes[i].innerHTML.indexOf(" lượt xem</div>")),
        likes: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("likes\">") + 7, animes[i].innerHTML.indexOf(" thích</div>")),
    };
}

let seasons = $('.episode-list-wrapper');
let animes;
let className;
let obj = [];
let string;
for (let j = 0; j < seasons.length; j++) {
    className = seasons[j].className;
    className = (className[className.indexOf('season') + 10] === ' ') ? className.substring(className.indexOf('season'), className.indexOf('season') + 9) : className.substring(className.indexOf('season'), className.indexOf('season') + 10);
    animes = seasons[j].children;
    obj[j] = {[className]: []};
    for (let i = 0; i < animes.length; i++) {
        stringg = animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("item-title\">") + 12);
        obj[j][className][i] = {
            image: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("src=\"") + 5, animes[i].innerHTML.indexOf("jpg\"") + 3),
            name: stringg.substring(0, stringg.indexOf("</div>")),
            views: animes[i].innerHTML.substring(animes[i].innerHTML.indexOf("item-views\">") + 12, animes[i].innerHTML.indexOf(" lượt xem</div>")),
        };
    }
}

let seasons = $('.season-dropdown-item');
let obj = [];
let stringg;
for (let i = 0; i < seasons.length; i++) {
    stringg = seasons[i].outerHTML.substring(seasons[i].outerHTML.indexOf("item-range\">") + 12);
    obj[i] = {
        id: seasons[i].outerHTML.substring(seasons[i].outerHTML.indexOf("data-id=\"") + 9, seasons[i].outerHTML.indexOf("title") - 2),
        name: seasons[i].outerHTML.substring(seasons[i].outerHTML.indexOf("title=\"") + 7, seasons[i].outerHTML.indexOf("\">")),
        longName: seasons[i].outerHTML.substring(seasons[i].outerHTML.indexOf("item-name\">") + 11, seasons[i].outerHTML.indexOf("</span>")),
        episodesRange: stringg.substring(stringg, stringg.indexOf("</span>")),
    };
}