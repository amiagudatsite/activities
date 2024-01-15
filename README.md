# Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

# Adding Content

Adding new links to existing pages is relatively simple. Start by loocating the `.astro` file for the page you want to add links to in the `/pages` folder.

Each link is a `Button`, so to add a new one simply copy one of the existing links buttons and rename the `href` property
to be your new link.

For example, let's say we want to add a new link to `google.com` with the description `"Hello Google"` to the recipes page.

In order to do that we first go to the page's astro file (`pages/games.astro`). Then, inside the `List` element,
we add a new button with the new link and the description (you can copy one of the existing buttons and change it):

```tsx
<button
  className="mt-5 border-l-4 border-l-pink-300"
  title="Hello Google!"
  href="google.com"
  externalLink={true}
>
  <Arrow height="{10}" width="{10}" direction="left" />
</button>
```

The resulting page should look something like this:

```tsx
<List title="מתכונים">
  <button
    title="Hello Google"
    href="google.com"
    externalLink={true}
    className="border-l-4 border-l-pink-400"
  >
    <Arrow height={10" width={10} direction="left" />
  </button>
  <button
    className="mt-5 border-l-4 border-l-pink-400"
    title="איך מכינים אוכל בבית - חוברת מתכונים"
    href="/cooking-at-home.pdf"
  >
    <Arrow height={10} width={10} direction="left" />
  </button>
</List>
```

# Deploying Changes

After adding new links, you probably want to deploy your changes so userscan see them.

This is done by commiting your changes with git and pushing them to this repository on GitHub.

Once the commit is pushed a CI pipeline will run which deploys a new version with your changes.

After the deployment pipeline finishes, changes might take a few minutes to propagate to end users.
