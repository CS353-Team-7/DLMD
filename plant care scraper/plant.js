const fetch = require('node-fetch');
const cheerio = require('cheerio');

const url = 'https://www.patchplants.com/gb/en/s/?q=';

function searchPlants(searchTerm) {
   return fetch(`${url}${searchTerm}`)
    .then(response => response.text())
}

searchPlants('plant')   
    .then(body => {
        const plants = [];
        const $ = cheerio.load(body);
        $('.card').each(function(i, element) {
            const $element = $(element);
            const $image = $element.find('article a img');
            const $title = $element.find('p.card__subtitle')
            const plant = {
                image: $image.attr('src'),
                title: $title.text()
            };
            plants.push(plant);
        });

        console.log(plants);
    });

    module.exports = {
        searchPlants
    };
