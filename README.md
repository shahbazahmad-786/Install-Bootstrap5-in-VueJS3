# [Install Bootstrap5 in Vue3](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

## Install Using Commands

**Save Bootstrap**

```bash
npm install bootstrap
```

---

## Change in main.js

```js
/* Import Bootstrap */
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

/* Use Bootstrap */
app.use(bootstrap);
```

## Uses in Template

```html
<!-- Simple Text Color -->
<h1 class="text-primary">Hello Bootstrap!</h1>
<!-- Simple Button -->
<button type="button" class="btn btn-primary">Bootstrap Button</button>
```

[Search from Bootstrap Website](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
