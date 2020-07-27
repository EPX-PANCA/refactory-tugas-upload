const {program} = require('@caporal/core');
const axios = require('axios');
const cheerio = require('cheerio');

program
    .command('headlines', 'get title link')
    .action(() => {
        let data = [];
        const scrape = async () => {
            const html = await axios.get('https://kompas.com');
            const $ = await cheerio.load(html.data);

            $('.article__link').each((i, element) => {
                data.push({title: $(element).text(), link: $(element).attr('href')})
            });
            console.log(data);
        }
        scrape()
    })

program.run()