# Readme

Nothing special, forked from [https://github.com/barryclark/jekyll-now](https://github.com/barryclark/jekyll-now)

## Before You Begin
To complete this tutorial, you’ll need to have [Ruby](https://www.ruby-lang.org/en/) and [Bundler](https://bundler.io/) installed. You can find the installation instructions on their websites.

## Add Jekyll
Now, we’re going to use Bundler to add Jekyll as a dependency of our new project. This command will add the Jekyll gem to our Gemfile and install it to the ./vendor/bundle/ folder (or your default gem installation directory if you didn’t set a custom path).

    bundle add jekyll

## Commend to run this project
    bundle exec jekyll serve --watch

## Serve the Site
Your new website is ready! You can serve the website with `bundle exec jekyll serve` and visit it at http://127.0.0.1:4000. From here, you’re ready to continue developing the site on your own. All of the normal Jekyll commands are available to you, but you should prefix them with `bundle exec` so that Bundler runs the version of Jekyll that is installed in your project folder.