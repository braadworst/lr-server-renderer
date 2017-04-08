const cheerio = require('cheerio');

module.exports = () => {

  let output;

  return {
    template(template) {
      output = cheerio.load(template);
    },
    render(html, placeholder) {
      if (output(placeholder).length === 0) {
        throw new Error(`Renderer could not render, placeholder "${ placeholder }" not found`);
      }
      output(placeholder).empty();
      output(placeholder).append(html);
    },
    state(state) {
      output('#state').replaceWith(`<script>window.__state__ = ${ JSON.stringify(state) }</script>`);
    },
    html() {
      return output.html().trim();
    }
  }
}
