# coderdojoathlone.com

## Getting started

This site is generated using Jekyll and hosted as static page on GitHub.
https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/

Jekyll installation and docs:
https://jekyllrb.com/docs/

The syntax used for `if`, `else`, `loop` is Liquid:
https://shopify.github.io/liquid/basics/introduction/

Styles from Bootstrap:
https://getbootstrap.com/docs/ 

### Posts

To add new posts, simply add a file in the `__posts` directory that follows the convention `YYYY-MM-DD-name-of-post.md` (or `html`) and includes the necessary front matter.

```
    ---
    layout:     default
    lang:       en
    ref:        some-project-1
    title:      Some project 1
    date:       2018-01-01
    permalink:  /en/projects/some-project-1/
    ---
```

- `lang`:       language code
- `ref`:        unique identifier for the post
- `title`:      title of the page (as in browser tab)
- `date`:       date of the post as `YYYY-MM-DD`
- `permalink`:  URL of the post

#### Syntax highlighting

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

## Commands

Start the server:
```bash
bundle exec jekyll serve
```


## Notes

Use `jsonify` to debug content

```
{{postsByMonth | jsonify}}
```
