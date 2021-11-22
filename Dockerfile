FROM ruby:2-alpine

RUN apk add --no-cache build-base gcc bash cmake git

# install both bundler 1.x and 2.x
RUN gem install bundler -v "~>1.0" && gem install bundler jekyll

EXPOSE 4000

WORKDIR /site

ADD Gemfile Gemfile.lock ./

RUN bundle update --bundler

ENTRYPOINT [ "bundle", "exec", "jekyll", "serve", "--force_polling", "-H", "0.0.0.0", "-P", "4000" ]
