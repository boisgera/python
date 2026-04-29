[![Snake and computer](src/assets/friendly-snake-and-computer.png)](https://boisgera.github.io/python/)

The Python course : <https://boisgera.github.io/python/>

---

## Quickstart for editors

First [install Bun], then install the project dependencies:

```bash
bun install
``` 

To preview the site locally while editing:

```bash
bun run dev
```

Edit the contents of the `src` folder to your liking.

To build a static version of the site:

```bash
bun run build
```

The output files will be in the `dist` directory. You can preview them with:

```bash
bunx serve dist
```

> **Note:** [Node.js] users can substitute `npm` for `bun` and `npx` for `bunx`.

[install Bun]: https://bun.com/docs/installation
[Node.js]: https://nodejs.org/en