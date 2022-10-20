# coderdojoathlone.com

## Getting started

This site is generated using Jekyll and hosted as static page on GitHub.
https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/

- Install [Docker](https://www.docker.com/)
- Familiarize yourself with
  - [Jekyll](https://jekyllrb.com/docs/)
  Site structure / engine
  - [Liquid](https://shopify.github.io/liquid/basics/introduction/)
  The syntax used for `if`, `else`, `loop` is Liquid:
  Both `Markdown` and `HTML` files are used based on the need, both can embed Liquid scripts.

Styles from Bootstrap:
https://getbootstrap.com/docs/

GitHub Pages dependency version:
https://pages.github.com/versions/

### Syntax highlighting

Jekyll also offers powerful support for code snippets:

```
{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}
```

### Commands

Build Docker container for the local server (only the first time)

```shell
docker build . -t coderdojoathlone:latest
```

Start the server:
```shell
docker run -p 4000:4000 --volume="$PWD:/site" coderdojoathlone:latest
```

### Notes

Use `jsonify` to debug content

```
{{postsByMonth | jsonify}}
```


## Concepts

The type `page` is used for main / structural pages, e.g. home, register, etc.
`post` type is used for articles and contributed content.

### Posts

The posts are located under `_posts/en` where `en` is for English (more work to support multi languages is required).

Posts are the dynamic content of the site, they are currently split into 2 categories/folders:
- `projects`:    article covering a project
- `resources`:  learning materials and articles

The posts are listed by category and type based on the `parent` property pointing to:

- `pages/en/projects/`
  - `scratch.md`
  - `web.md`
  - `electronic.md`
- `pages/en/resources/`
  - `scratch.md`
  - `web.md`
  - `electronic.md`

#### Add a new post:

To add new posts, follow the steps:

- create a file under `_posts/en/projects` or `_posts/en/resources`
- the file name should follow the convention `YYYY-MM-DD-name-of-post.md` (or `html`).

The front matter must be present at the very top of the file:

```
    ---
    layout:       article
    lang:         en
    parent:       scratch-resources
    breadcrumb:   true
    permalink:    /en/resources/scratch-resources/sample-resource/
    ref:          sample-resource
    title:        Sample resource
    author:       John Doe
    description:  A brief description of the article, will be displayed in the list.
    tags:         scratch, motions, sprites, colors
    ---
```

- `layout`     : (`article`) sets the layout of the rendered page
- `lang`       : language of the post / should match the language folder it is stored into
- `parent`     : refers to the ref of the parent page, e.g. `scratch-resources`, `web-projects`
- `breadcrumb` : (`true`) show the navigation breadcrumb
- `permalink`  : URL of the post, should be `/lang/category/parent/ref`
- `ref`        : unique identifier for the post
- `title`      : title of the page (as in browser tab)
- `author`     : author name
- `description`: brief description of the post, will be displayed in the list
- `tags`       : tags/keywords reflecting the post content


## Structure

### Partials

The content in `pages/en/partials` is reused in different pages.
Each partial is a short page introduction pointing to the more complete content.

```text
    ---
    lang:       en
    ref:        partial-id
    caption:    assets/images/path-to-caption.png
    readMore:   ref-of-related-page
    ---

    Content
```

### Profiles

All mentor profiles are stored in `pages/en/about/mentors`.

```text
    ---
    lang:       en
    ref:        profile-ref
    fullName:   Display Name
    caption:    assets/images/mentors/path-to-picture.jpg
    ---

    Profile description
```

### Styles

The `_sass/coderdojo-athlone` contains the compiled theme (written in SASS).
`site.scss` is the entry file importing the other stylesheets.
