# coderdojoathlone.com

## Getting started

This site is generated using Jekyll and hosted as static page on GitHub.
https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/

Jekyll installation and docs:
https://jekyllrb.com/docs/

The syntax used for `if`, `else`, `loop` is Liquid:
https://shopify.github.io/liquid/basics/introduction/
Both `Markdown` and `HTML` files are used based on the need, both can embed Liquid scripts. 

Styles from Bootstrap:
https://getbootstrap.com/docs/ 

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

Start the server:
```bash
bundle exec jekyll serve
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

To add new posts, simply add a file in the `__posts` directory that follows the convention `YYYY-MM-DD-name-of-post.md` (or `html`) and includes the necessary front matter.

```
    ---
    layout:     default
    lang:       en
    ref:        sample-project
    title:      Sample project
    date:       2019-01-01
    parent:     projects
    breadcrumb: true
    permalink:  /en/projects/sample-project/
    ---
```

- `lang`:       language code
- `ref`:        unique identifier for the post
- `title`:      title of the page (as in browser tab)
- `date`:       date of the post as `YYYY-MM-DD`
- `parent`:     `ref` of the parent page (used for navigation)
- `breadcrumb`: display the page breadcrumb
- `permalink`:  URL of the post


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
