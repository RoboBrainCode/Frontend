RoboBrain Frontend v.0.02
====================

RoboBrain website for the web. Includes an
introduction to RoboBrain, its contributors,
and the publications associated with the
project.


### Dependencies (Not need to install if you are using Vagrant virtual box, Skip to next step)

* compass (ruby gem)
* npm Package Manager (for testing only)
* Bower Package Manager

### To setup local dev/testing Environment

Over the time we received a lot of feedback on how the productivity of individual contributor increases if we they do not have to deal with systems and environment stuff (Dependency packages, confilicts due to multiple package manangers across multiple projects etc). So,we made a virtual box using Vagrant which has all the right dependency packages of the packages that are required for smooth development, testing and local deployment of Backend. In other words, all instructions mentioned in the docs for getting started will run smoothly.

1.  Install Vagrant: Download link can be found at https://www.vagrantup.com/downloads.html

2. Download the Vagrant package.box file: Can be found here https://s3-us-west-2.amazonaws.com/feedmedia/package.box

3. Follow the instrucitons to login to virtual box

  `$ vagrant box add testbox package.box` (First time only)

  `$ vagrant init testbox` (First time only)

  `$ vagrant up`

  `$ vagrant ssh`
  
  `$ git config --global user.name "Your Name"` (First time only)

  `$ git config --global user.email youremail@xxx.com` (First time only)
  

4. Once you are inside the virtual box, you can proceed with the instructions avalable at  https://github.com/RoboBrainCode/Docs/blob/master/README.md or mentioned below. 
5. Once you finish develpment and testing, you can issue `vagrant shutdown` to exit the virtual environment. You can always comeback by using step 3. 


### Installation

In your terminal, navigate to this project's
root folder. Run "npm install" and "bower install"
to install all remaining dependencies.


### Testing

To test the frontend on localhost, navigate
to this project's root folder in your terminal
and run "grunt serve".


### Deployment

The RoboBrain website can be served using any
static file server (i.e. Apache, nginx). Run "grunt build",
then copy the contents of the new "dist" folder to
the public directory where Apache or nginx is
listening.
