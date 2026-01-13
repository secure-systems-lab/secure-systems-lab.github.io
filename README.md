# Secure Systems Lab website

This is the repository for the Secure Systems Lab website. You can see the live
version of this site at
[ssl.engineering.nyu.edu](https://ssl.engineering.nyu.edu).

## Building locally

Before committing changes, please make sure your commit looks good by checking
your change locally.

- Open a terminal and `cd` to the directory where you've checked out this
  project
- *First time only*
  - install the bundler package manager with `gem install bundler`
  - install necessary ruby packages with `bundler install`
- Run the local jekyll server: `jekyll build --trace  --baseurl '/' && jekyll serve --incremental --port 7000 --baseurl '/'`
- View your draft at [localhost:7000](http://localhost:7000)
- Most files will be automatically re-processed as long as the server is
  running, if you edit a *.yml* file, however, you will need to manually kill
  the server and re-run the build command.
