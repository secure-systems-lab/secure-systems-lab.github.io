# use official ruby image
FROM ruby:3.2

# install nodejs and yarn for JS runtime
RUN apt-get update && apt-get install -y nodejs npm git && \
    npm install -g yarn && \
    gem install bundler

# set working directory
WORKDIR /app

# install ruby dependencies
COPY Gemfile* ./
RUN bundle install

# expose jekyll port
EXPOSE 7000

# default command to build and serve jekyll in watch mode
CMD ["bash", "-c", "jekyll serve --watch --incremental --port 7000 --host 0.0.0.0 --baseurl '/'"]
