# visual-style-guide

This repository contains Mongabay's visual style guide.

## Contributing

### Local installation

1. Install Jekyll on your machine. For step-by-step instructions, visit: https://jekyllrb.com/docs/installation/
2. Clone this repository: `git clone https://github.com/mongabay/visual-style-guide.git`
3. Navigate to the folder: `cd visual-style-guide`
4. Run the server: `jekyll serve`
5. Open http://127.0.0.1:4000 in your browser

### Editing the content

All the textual content of the style guide is located in the `_docs/` folder. It is sub-divided into each of the categories you see on the sidebar.

The order of the items in the sidebar is defined by the name of the files. Thus, if you would like to add a new page, you might want to follow the pattern of having two digit at the beginning of its name.

Pages also start with a section called the [front matter](https://jekyllrb.com/docs/front-matter/). This section contains the title of the page, a eventual small description that will be displayed below the title, and whether or not a table of content should be automatically created based on the page's titles.

The front matter is a mandatory part of each page.

Here is an example of front matter:
```yml
---
title: Font sizes 	# Title of the page
nav: true 			# Whether or not to display the table of content
info: List of recommended font-sizes	# Small description
---
```

The pages' extension is `.md`, meaning they are written as markdown files. GitHub provides a guide for beginners here: https://guides.github.com/features/mastering-markdown/.

If you'd like to add any images to your pages, place them in the `src/assets/images/` folder. We would recommend you to follow the same directory structure as the `_docs/` folder.

Finally, if you want to edit the styles of the style guide, you can edit the Sass files in `src/assets/_sass/`. Global variables are defined in `src/assets/_sass/abstracts/_variables.scss`.

If you add any new `.scss` file, please remember to import them in the `__XXX-dir.scss` file of each parent folder.

## License

This visual style guide is based on the code of [this repository](https://github.com/matthewelsom/jekyll-style-guide). The code is under the “Apache License 2.0” license.

You can find the complete license in the `LICENSE` file.
