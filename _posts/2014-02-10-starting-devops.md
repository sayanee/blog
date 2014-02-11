---
layout: post
title:  "Starting commands for DevOps"
categories:
- web
- iot
abstract: 20 *nix commands that I used most often when getting started with DevOps.
---

In the past month, I was immersed in [DevOps](http://en.wikipedia.org/wiki/DevOps) starting up various [EC2](http://aws.amazon.com/ec2/) and [RDS](http://aws.amazon.com/rds/) instances in [AWS](http://aws.amazon.com/), trying to deploy my app consisting of [Rails](http://rubyonrails.org/) [API](https://github.com/rails-api/rails-api) server, [AngularJS](http://angularjs.org/) frontend and [PostgreSQL](http://www.postgresql.org/) database in various environments such as staging or production.

It was a challenging time for me as I needed to have a **systems view** instead of just a single application. Yet, firing up some instances in different operating systems also gave me a slight insight to their similarities and differences.

Below are the list of **20 most used commands**. Why is noticing the *most used commands* important? Because ultimately, we can include them in a script and build automation for various tasks in DevOps.

Here we start!

___

##Logging into the Server

###1. `ssh-keygen` generate ssh keys

Even before we log in to the remote server, we generate a pair of public and private ssh keys. Ultimately, the contents of the public key `*.pub` can go into [Github SSH keys](https://help.github.com/articles/generating-ssh-keys) or the remote computer's [`~/.ssh/authorized_keys` file](http://www.openssh.org/faq.html#3.14).

<pre><code class="language-bash"><!--email_off-->$ ssh-keygen -t rsa -f project-name -C "name@email.com"<!--/email_off-->
</code></pre>

###2. `ssh` secure shell

Next, to login there are various ways of using the `ssh` command. The 3 common ways that I have used are:

1. with a [config file](http://www.openbsd.org/cgi-bin/man.cgi?query=ssh_config) at `~/.ssh/config`

  <pre><code class="language-bash">Host projectname
      HostName website.com
      Port 8000
      IdentityFile ~/.ssh/sshkey
      IdentitiesOnly=yes
      User username
  </code></pre>

  And now we can ssh into the server with a much simpler command

  <pre><code class="language-bash">$ ssh projectname</code></pre>

1. ssh with a [username and a public key](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html#AccessingInstancesLinuxSSHClient)

  <pre><code class="language-bash"><!--email_off-->$ ssh -i mykey.pem username@server.com<!--/email_off--></code></pre>

1. ssh directly into a [particular directory](http://stackoverflow.com/questions/626533/how-can-i-ssh-directly-to-a-particular-directory)

  <pre><code class="language-bash">$ ssh projectname -t "cd /path/to/app ; /bin/bash"</code></pre>

___

##Transferring files

###3. `scp` secure copy

[Secure copy](http://www.openbsd.org/cgi-bin/man.cgi?query=scp&sektion=1) `scp` comes in handy for transferring files from the local machine to the remote machine and vice versa.

1. from [local to remote](http://stackoverflow.com/questions/11822192/ssh-scp-local-file-to-remote-in-terminal-mac-os-x)

  <pre><code class="language-bash"><!--email_off-->$ scp -i /path/to/key.pem /path/to/file username@server.com<!--/email_off--></code></pre>

1. from [remote to local](http://stackoverflow.com/questions/11304895/how-to-scp-a-folder-from-remote-to-local)

  <pre><code class="language-bash"><!--email_off-->$ scp -i ~/.ssh/key.pem  /path/to/source/file username@server.com:~/path/to/destination/file<!--/email_off--></code></pre>

###4. `cp` copy

To [copy](http://www.cyberciti.biz/faq/copy-folder-linux-command-line/) files or entire folder:

<pre><code class="language-bash">$ cp /path/to/source-folder/filename /path/to/destination-folder
$ cp -r /path/to/source-folder/folder /path/to/destination
$ cp /path/to/source-folder/filename /path/to/destination . # dot: destination is current folder
</code></pre>

###5. `mv` move

To move files/folders is also the same as renaming.

<pre><code class="language-bash">$ mv /path/to/source-folder/filename . # move file to current directory
$ mv /path/to/source-folder . # move folder to current directory
</code></pre>

###6. `echo` output

To [print out](http://linuxcommand.org/lc3_lts0080.php) simple commands and piping the output to a new file.

<pre><code class="language-bash">$ echo hello
$ echo `date` >> currentime.txt # copy to file
$ echo `date` > currentime.txt # append
</code></pre>

###7. `touch` update a file

When used without any arguments, `touch` will simply [create a file](http://www.linfo.org/touch.html).

<pre><code class="language-bash">$ touch filename1 filename2 filename3</code></pre>

###8. `ln` symlink

[Symbolic links](http://ss64.com/bash/ln.html) for files are useful when we want the exact file contents in 2 different places to be synced up. This can be handy for doing so with executable files if needed.

<pre><code class="language-bash">$ ln -s /path/to/source/filename /path/to/destination/filename</code></pre>

##File contents

###9. `head` top of a file

`head` is very useful to quickly view a certain first few lines of a file with an option `-n` to specify how many lines from the top.

<pre><code class="language-bash">$ head -n 5 /path/to/filename</code></pre>

###10. `tail` end of a file

`tail` as the name goes, is the opposite of the command `head` and this gives the content of the [last lines of a file](http://www.computerhope.com/unix/utail.htm). Using with the option `-f`, the output is appended as the file grows and this is used to continuously view server log files while changes are happening.

<pre><code class="language-bash">$ tail -n 5 /path/to/filename
$ tail -f log/production.log
</code></pre>

###11. `cat` see the contents of a file

`cat` is a simple way to view the file contents, but it can also be used to concatenate a few files into a new file.

<pre><code class="language-bash">$ cat /path/to/filename
$ cat file1 file2 >> newfile # newfile has contents of file1 and file2
</code></pre>

##Permissions

###12. `chmod` change permissions

File permissions include the ability to read, write or execute the file for users owner, group or others. `chmod` can [change these permissions](http://www.onlineconversion.com/html_chmod_calculator.htm) with either a number or expression.

<pre><code class="language-bash">$ chmod u+x /path/to/script # user can execute
$ chmod 600 ~/.ssh/authorized_keys # user can read, write
</code></pre>

###13. `sudo` act as root

`sudo` gives the [permission to run commands as the root user](http://xkcd.com/149/). It can be used for a single command or a [series of commands](http://askubuntu.com/questions/376199/sudo-su-vs-sudo-i-vs-sudo-bin-bash-when-does-it-matter-which-is-used). This command should definitely be used with caution as root user will have permissions to execute things a normal user might not.

<pre><code class="language-bash">$ sudo !! # execute the previous command with sudo
$ sudo cp /path/to/source /path/to/destination # execute as root
$ sudo su # switches from current user to root
</code></pre>

###14. `chown` own the folder/file

To quickly change the owner of a folder or file `chown` comes in handy in[ various situations](http://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo).

<pre><code class="language-bash">$ sudo chown -R username:username ~/path/to/folder</code></pre>

##Directory

###15. `cd` change directory

Changing directory is such a common command. Here are some ways to use `cd`:

<pre><code class="language-bash">$ cd ~ # go to home directory
$ cd - # go to the last visited directory
$ cd ../path/to/folder # go to relative directory one level up
$ cd /path/to/folder # absolute path
</code></pre>

###16. `ls` list files/folders

Another common commands is to [list the directory contents](http://www.freebsd.org/cgi/man.cgi?query=ls&sektion=1). Using `ls` with 3 options are useful to view the dotfiles in long format to give a comprehensive look inside that folder.

<pre><code class="language-bash">$ ls -lah . # current folder
$ ls -lah ~ # home folder
$ ls -lah /path/to/folder # absolute path to a folder
</code></pre>

##Monitoring processes

###17. `ps` running processes

Knowing the [current processes running](http://unixhelp.ed.ac.uk/CGI/man-cgi?ps) is another useful command through `ps`. Often, the list will be long. In this case [piping the answer to a search terms](http://stackoverflow.com/questions/9375711/more-elegant-ps-aux-grep-v-grep) is useful.

<pre><code class="language-bash">$ ps aux | grep unicorn # find all unicorn processes
</code></pre>

The command `ps aux` will give a long list of useful information about the processes including the user, CPU usage, path to the command as well as the Process ID (PID) which will come in handy if we want to stop that particular process.

###18. `kill` terminate a process

Often, we want to [find that particular process and kill/stop it](http://unixhelp.ed.ac.uk/shell/jobz5.html) so that we can make some change and then run it again. Coupled with the previous command `ps` which will give the PID number, we can kill that particular process with a [Unix signal 9](http://stackoverflow.com/questions/9951556/why-number-9-in-kill-9-command-in-unix). Here's an example:

<pre><code class="language-bash">$ ps aux | grep jekyll
$ sayanee  1835   0.0  0.8  2509028  68756 s003  S+    7:59PM   1:00.64 ruby /Users/command
$ kill -9 1835
</code></pre>

###19. `lsof`

At other times, knowing [which process is running in a particular port](http://stackoverflow.com/questions/9346211/how-to-kill-a-process-on-a-port-on-ubuntu) is also useful. For this `lsof` comes in handy!

<pre><code class="language-bash">$ sudo lsof -i:8080 # complete info on the process
$ sudo lsof -t -i:8080 # just the PID of the process
$ kill -9 `sudo lsof -t -i:8080` # put the PID to kill it
</code></pre>

###20. `crontab` cron jobs for scheduling

[Scheduling scripts to run at a certain time or an interval](http://en.wikipedia.org/wiki/Cron) is helpful through CRON jobs. Sometimes CRON jobs are created through a backend application using the application specific variables. To see the output, listing the cron job is useful.

<pre><code class="language-bash">$ crontab -l</code></pre>

___

##Getting started with DevOps

Noticing the most used commands is the first steps towards automation/shortcuts which can be done in the following ways:

1. write the commands in a **bash script**
1. include commands in a **CRON job**
1. including commonly used commands as **aliases** for shorthands

There are also frameworks such as [Chef](http://www.getchef.com/chef/) and [Puppet](http://puppetlabs.com/) which will help to kick start a list of commands that makes starting a production/staging environments easy with just one command or a click.

I have also come to realize that there is a change in thought processes when I'm doing development versus devops. But in the end, it was rather rewarding to get to understand the file systems in various linux distributions or operating systems.

<p class="discussion">What common commands are you using? How do you automate your DevOps processes?</p>
