---
layout: post
title:  "Quick start projects"
categories:
- web
- iot
abstract: Often we have about 3 to 4 active projects. I am using a simple bash script with tmuxinator to fire up all the related elements of a single project so that it is ready to code in less than 10 seconds.
---

Let's say there is about 3 to 4 active projects. These projects might include, a couple of client projects, a side project or even a blog. Every time when starting each of these projects, typically the following applications need to be opened:

1. **Text editor** with different folder paths
1. **Command line** with various panes and tabs
1. Some **native applications**
1. **Browser** with various tabs

For each of the projects, the exact requirements to the above 4 applications definitely differs. For example, the browser needs to be opened in a different localhost port for different projects along with links to [Github](https://github.com/) or [Trello](https://trello.com/).

For the past few months, I have been automating the opening up of various project related elements with a single command - the project name itself. Here's how the effect looks like when I open up various application with a single command to work on my blog:

![Quick start projects](/img/quick-start.gif)

___

##What you need

1. [Alfred app](http://www.alfredapp.com/) (optional) for launching a shell command
1. Simple [Bash](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/) scripting to create a script `project-name`
1. [Tmux](http://tmux.sourceforge.net/) and [Tmuxinator](https://github.com/aziz/tmuxinator) installation to create a tmuxinator project file `project-name.yml`
    <pre><code class="language-bash">brew install tmux
    gem install tmuxinator
    </code></pre>
    
With AlfredApp, we can [call the shell command](http://support.alfredapp.com/features:terminal) without launching any command line application with a simple prefix of `>`. The bash script that we will create will open up various applications, url and paths in the Finder. 

[Tmux](https://wiki.archlinux.org/index.php/tmux) is a terminal multiplexer      
    
Let's take the example of this blog itself and create the 2 files: 

1. `blog` (bash script)  
1. `blog.yml` (tmuxinator project file)
    
###Create the script file

Usually, I just name the file as the project. In this case, it will be simply `blog`. As this file needs to be an executable, we will also change the file permission with the command `chmod`. Lastly, we will symlink this file to a file in a directory where all such automated scripts are stored. This [directory has to be found in your path variable](http://askubuntu.com/questions/3744/how-do-i-modify-my-path-so-that-the-changes-are-available-in-every-terminal-sess) `$PATH`. Now, this script can be run from any location.

<pre><code class="language-bash">$ touch blog

$ ls -al blog
-rw-r--r--  1 sayanee  staff  0 Jan 11 22:24 blog

$ chmod u+x blog

$ ls -al blog
-rwxr--r--  1 sayanee  staff  0 Jan 11 22:24 blog

$ ln -s blog /current/path/blog
</code></pre>

The exact contents of the script file will vary project to project, but it generally consists of the following:

1. path to the source code is defined
1. open the source code in **window** and **text editor**
1. open some **native applications** and they might include:
    - version control
    - database visualiser
    - graphic editing software
1. open **project management** tools or **remote repository** in browser. I have used the following:
    - [Pivotal Tracker](http://www.pivotaltracker.com/)
    - [Github](https://github.com/) with link to the open issues assigned to me
    - [Trello](https://trello.com/) board of the project
1. open the **project url** in the browser
    - production url
    - development url - might include admin / testing / documentation url

1. open the tmuxinator project

Here is an example of the `blog` script file.

<pre><code class="language-bash">#!/bin/bash

# USAGE in the command line:
# blog

app="/Users/sayanee/Sites/blog/app" # path to source code

open $app # open in Finder
subl $app # open in text editor
cd _posts && open `ls -tr | tail -1` # open last modified file (latest post)

open /Applications/Tower.app # open version control visualiser

open https://github.com/sayanee/blog/issues/assigned/sayanee?state=open # open git remote repo assigned to me

open http://localhost:4000 # open in development
open http://blog.sayan.ee # open in production

tmuxinator blog # open tmuxinator project
</code></pre>

###Create the tmuxinator project

Next, we will create the tmuxinator project file that will define the various window, panes and commands to fire when starting the project. Let's first create the file `blog.yml` and create a symlink to the `~/.tmuxinator` folder. 

<pre><code class="language-bash">$ touch blog.yml

$ ln -s blog.yml ~/.tmuxinator/blog.yml
</code></pre>

In the Tmuxinator project, I will define various windows for the following purpose depending on the project:

1. frontend server e.g. `sudo nginx` with [Nginx](http://wiki.nginx.org/Main)
1. backend server e.g. `rails server` for [Rails](http://rubyonrails.org/)
1. automated testing 
1. continuous build tool e.g `grunt` for [GruntJS](http://gruntjs.com/)
1. ssh into the production server e.g. `ssh production && cd path/to/source`
1. [repl](http://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) e.g. `node` for [NodeJS](http://nodejs.org/) or `irb` for [Ruby](http://en.wikipedia.org/wiki/Interactive_Ruby_Shell)

For this blog, the Tmuxinator project is pretty simple consisting of 1 window with 3 panes.

<pre><code class="language-bash">name: blog
root: /Users/username/path/to/blog
windows:
  - blog:
      layout: main-vertical
      panes:
        - git pull origin gh-pages && clear && ls
        - jekyll serve --watch --config _dev_config.yml
        - grunt
</code></pre>

With the command `tmuxinator blog`, a tmux session will be started that will look like this:

![Tmuxinator project](/img/tmuxinator-blog.jpg)

And that's all! With these 2 simple files, now whenever we trigger the command `blog` all the project related elements will open up within seconds!

___

##Another example

The `blog` command is pretty simple, so I thought of giving another example for a project called `todo`. This project consists of full stack development with frontend and backend.

Here's the content of the bash script `todo`:

<pre><code class="language-bash">#!/bin/bash

# USAGE in the command line:
# todo

app="/Users/sayanee/Workspace/todo"
backend="/backend"
frontend="/frontend"
apidocs="/apidocs"

open $app
subl $app$backend
subl $app$frontend
subl $app$apidocs

open /Applications/Postgres93.app # db
open /Applications/Tower.app # git management

open http://localhost:8000 # frontend
open http://localhost:4000 # api documentation
open http://localhost:3000 # backend

open https://github.com/username/todo-frontend/issues/assigned/sayanee?state=open 
open https://github.com/username/todo-backend/issues/assigned/sayanee?state=open

open https://trello.com/b/xxxxxxx/todo-board-overview # trello tasks

tmuxinator todo
</code></pre>

And here is the tmuxinator project file `todo.yml` with 4 windows opening up the development for frontend, backend or api documentation and lastly even the production server. When starting to code, I also usually like to do a `git pull` to sync my code base with the remote repository.

<pre><code class="language-bash">name: todo
root: /Users/sayanee/Workspace/todo
windows:
  - backend:
      layout: main-vertical
      panes:
        - cd backend && git pull
        - cd backend && rails console
        - cd backend && rails server
  - frontend:
      layout: main-vertical
      panes:
        - cd frontend && git pull
        - cd frontend && grunt
        - cd frontend && sudo nginx
  - apidocs:
      layout: main-vertical
      panes:
        - cd apidocs
        - cd apidocs && npm start
        - cd apidocs && redis-server
  - production:
      layout: even-vertical
      panes:
        - ssh production-server && cd path/to/frontend
        - ssh production-server && cd path/to/backend
</code></pre>

___

##Fast context switching

One of the challenging of getting into the *zone of creativity* is how fast and easily we can launch the various applications and commands to get started, especially if we are spending some time launching them often. Here are some other projects that I found that helps in launching current projects fast:

<ol class="ideas">
    <li><a href="http://anvilformac.com/">Anvil for mac</a></li>
    <li><a href="http://yeoman.io/">Yeoman</a></li>
    <li><a href="http://brunch.io/">Brunch</a></li>
</ol>   
 
Would love to know if there is a better or alternative way to launching applications other the current method that I am using. What are your thoughts?  

<p class="discussion">How do you quick launch your various active projects?</p>