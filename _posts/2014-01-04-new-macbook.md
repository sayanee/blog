---
layout: post
title:  "Setting up my new MacBook"
categories:
- web
- iot
abstract: I got a brand new 15 inch MacBook just a few weeks ago. Here are some apps and settings I did to customise it.
---

Having a brand new computer is like having a chance to sharpen your tool so that when we work with it, we are in a *flow*. I took about 7-8 hours in total to get everything working!

<pre><code class="language-bash">Model Name:	MacBook Pro
Model Identifier:	MacBookPro11,2
Processor Name:	Intel Core i7
Processor Speed:	2 GHz
Number of Processors:	1
Total Number of Cores:	4
L2 Cache (per Core):	256 KB
L3 Cache:	6 MB
Memory:	8 GB
</code></pre>

##Before the setup

Apart from any data, in terms of settings, a few things came in really handy as I had them either as a user account or the configurations stored as a Github repository:

1. [Chrome](https://www.google.com/intl/en/chrome/)'s user [login](https://www.google.com/intl/en/chrome/browser/signin.html) - useful for all bookmarks and recent browsing history
1. [Dotfiles](https://github.com/sayanee/dotfiles) - useful to keep a list of frequently used config files
1. [Sublime Text settings](https://github.com/sayanee/sublime-text-settings) - any text editor is a major tool and its handy to keep its settings
1. [Apple account](https://appleid.apple.com/cgi-bin/WebObjects/MyAppleId.woa/) - useful to download apps that I already had before
1. [Setapp](http://setapp.me/users/sayanee) as a reference to all the tools and apps I use

##Apps to download

I started setting up the MacBook with the installation of the Chrome browser and then some apps from the [App Store](http://www.apple.com/osx/apps/app-store.html). [XCode](https://developer.apple.com/xcode/) with [Command Line Tools](https://developer.apple.com/downloads/index.action?=command%20line%20tools) are almost always needed as they install GCC, Clang-LLVM and many other developer tools.

###From the App Store

1. [XCode](https://developer.apple.com/xcode/) and its [Command Line Tools](https://developer.apple.com/downloads/index.action?=command%20line%20tools)
1. [LiveReload](https://itunes.apple.com/us/app/livereload/id482898991)
1. [Dash](https://itunes.apple.com/us/app/dash-docs-snippets/id458034879) for easy documentation reference while programming
1. [Codebox](https://itunes.apple.com/us/app/codebox/id412536790) for storing quick code snippets
1. [Sketch](https://itunes.apple.com/us/app/sketch/id402476602) for making simple vector graphics for favicons or logos
1. [Skitch](https://itunes.apple.com/us/app/skitch-snap-markup-send/id490505997) for quick annotation of screenshots

###Other apps

1. [Sublime Text 3](http://www.sublimetext.com/3) as my main text editor
1. [iTerm2](http://www.iterm2.com/) as a replacement for Terminal
1. [Applets for Finder toolbar](https://github.com/fallroot/applescript-applets) to quickly open the folder in Iterm2 or Sublime Text
1. [AlfredApp](http://www.alfredapp.com/) as a quick launcher with [Minimal theme](http://www.alfredforum.com/topic/24-minimal-updated-download-available/)
1. [Caffeine](http://caffeine.en.softonic.com/mac) to prevent sleeping
1. [App Cleaner](http://www.freemacsoft.net/appcleaner/)
1. [Mou App](http://mouapp.com/) for writing my markdown for `readme.md` files
1. [ShiftIt](https://github.com/fikovnik/ShiftIt) for Finder window positioning with shortcut keys
1. [Tower](http://www.git-tower.com/) to quickly see my version changes with git
1. [Postgres.app](http://postgresapp.com/) for database

##Finder, Display, Keyboard and Files

The thing about configuring a brand new machine is that you become aware of the little settings that you are always used to. Here are my settings for the Finder:

1. Show Path Bar, Sidebar, Status Bar. `Finder > View > Show Path Bar/Status bar/Side bar`

    ![Finder View Options](/img/view-options.png)

1. Search in Current Folder and show file extensions. `Finder > Preferences > Advanced`

    ![Finder Advanced Preferences](/img/finder-pref.png)
    
1. [Applets for Finder toolbar](https://github.com/fallroot/applescript-applets) to quickly open the folder in iTerm2 or Sublime Text

    ![Finder Advanced Preferences](/img/finder.png)

____

I also like to have Hot Corners for easy access to the Desktop and have a snap shot of all the running application windows. Setting: `System Preferences > Desktop & Screen Saver > Screen Saver > Hot Corners`

![Hot Corners](/img/hot-corners.png)

____

I have remapped my almost-never-used `Caps Lock` key to `Control` key. This comes in really handy when using with [Tmux key bindings](https://wiki.archlinux.org/index.php/tmux#Key_bindings) as `ctrl-a` is just 2 keys side by side. Setting: `System Preferences > Keyboard > Modifier Keys > Caps Lock Key`

![Remapping keys](/img/remap.png)

___ 

In terms of hidden or dotfiles, I like to show them. The following command in the Terminal will enable them:

<pre><code class="language-bash">defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder
</code></pre> 

##Installed packages

The final step was to install the various packages that I use when I am programming. I started by installing the package manager [brew](http://brew.sh/) and then updating and upgrading brew itself. I installed some packages like wget, autojump and tree - useful when working in the command line, jumping from one folder to another or displaying the contents of the folder.

<pre><code class="language-bash">ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

brew update
brew upgrade

brew install wget
brew install autojump
brew install tree
brew install terminal-notifier
brew install tmux
</code></pre> 

Next I installed packages that I use while programming in the [Ruby](https://www.ruby-lang.org/en/) ecosystem. I started with [RVM](https://rvm.io/rvm/install), then [Ruby](https://www.ruby-lang.org/en/) itself, [Git](http://git-scm.com/downloads) and [RubyGems](http://rubygems.org/pages/downloadgit). [Setting up Git](https://help.github.com/articles/set-up-git) and then [generating SSH Keys](https://help.github.com/articles/generating-ssh-keys) had me setup my Github as well.

<pre><code class="language-bash">\curl https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer | bash -s stable

rvm get stable

brew install git
</code></pre>

Next, I installed [Node](http://nodejs.org/) releated packages. The main installer on the Node website comes with both Node as well as [NPM](https://npmjs.org/), so I downloaded that. Also, just like Ruby's RVM, I use Node's [NVM](https://npmjs.org/) for managing Node versions. Finally, I installed some commonly used global packages like [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/). Here are the steps:

<pre><code class="language-bash">curl https://raw.github.com/creationix/nvm/master/install.sh | sh

npm install -g grunt
npm install -g grunt-cli

npm install -g bower
</code></pre>

##Sharpening the Tools

> I've known people who have not mastered their tools who are good programmers, but not a tool master who remained a mediocre programmer. ~ [Kent Beck](https://twitter.com/KentBeck/status/398623270917771264)

Recently, I listened to a lovely episode from the [RubyRogues on Sharpening the Tools](http://rubyrogues.com/129-rr-sharpening-tools-with-ben-orenstein/). Couldn't agree more with the fact that as we are making and creating stuff, we will have to continuously keep note of steps that we are repeating or steps that are mildly erking us. 

Can we do it smaller number of steps or in an easier way? I'm keeping a little scratch note of this and every few weeks I go back to it and find ways to improve. Whether it's amending my bash prompt to contain more information or linting while coding in my text editor - all these tiny steps add up to ease me into the *flow of creativity* every time I get down to work.

I would love to hear from you too!

<p class="discussion">What apps or packages do you use very often? How do you keep sharpening your tools?</p>