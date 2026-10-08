FROM ruby:3.4-alpine

RUN apk add --no-cache build-base bash git

EXPOSE 4000

WORKDIR /site

ADD Gemfile Gemfile.lock ./

RUN bundle install

ENTRYPOINT [ "bundle", "exec", "jekyll", "serve", "--force_polling", "-H", "0.0.0.0", "-P", "4000" ]
