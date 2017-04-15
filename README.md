# lr-server-renderer reference

Server side renderer for lagoon road.

| Information | - |
| ----------- | - |
| Code coverage | [![Coverage Status](https://coveralls.io/repos/github/lagoon-road/lr-server-renderer/badge.svg?branch=master)](https://coveralls.io/github/lagoon-road/lr-server-renderer?branch=master) |
| Repo link | [lr-server-renderer](https://github.com/lagoon-road/lr-server-renderer) |
| Dependencies | [cheerio](https://github.com/cheeriojs/cheerio) |
| Size (ex. dependencies) | 612 bytes |
| Version | 1.0.0 |
| License | MIT |
| Usage | [guide](https://lagoonroad.com/guide) |

---

### renderer.template(html)
```
renderer.template('<html>...</html>');
```

_Method sets the template for the output, all components will be added to this template_

**html:string**  
The template you want to use for the components and state that you might want to add.

---

### renderer.render(html, placeholder)
```
renderer.render('<section>...</section>', '.placeholderName');
```

_Adds a component to the template._

**html:string**  
The components html that you want to load.

**placeholder:string**  
A html selector that should be the parent of the html you want to add. The contents of the placeholder will be removed before adding the new html.

---

### renderer.state(state)
```
renderer.state({ data : [...], otherProperties : true });
```
_Add data to a script tag that you can access on the client again. This prevents loading the same data. The data will be available by accessing `window.__state__` as json._

**state:object**  
An object that has been loaded on the server that you want to transfer to the client.

---

### renderer.html()
```
renderer.html();
```

_Get the final output of the template and components that you have created, this data can be send back as the response to the client._
