'use strict';

/**
 * @ngdoc function
 * @name roboBrainApp.controller:PeopleCtrl
 * @description
 * # PeopleCtrl
 * Controller of the roboBrainApp
 */
angular.module('roboBrainApp')
  .controller('PeopleCtrl', function ($scope) {
    $scope.leads = [
    {
      name: 'Prof. Ashutosh Saxena',
      institution: 'Cornell University',
      role: 'Robot Learning and Project Lead',
      photo: 'images/contrib/asaxena.jpg',
      url: 'http://www.cs.cornell.edu/~asaxena/'
    },
    {
      name: 'Ashesh Jain',
      institution: 'Cornell University',
      role: 'Interactive Online Learning',
      photo: 'images/contrib/ajain.jpg',
      url: 'http://www.cs.cornell.edu/~ashesh/'
    },
    {
      name: 'Ozan Sener',
      institution: 'Cornell University',
<<<<<<< HEAD
      role: 'Vision and language',
=======
      role: 'Unsupervised Vision and Language',
>>>>>>> 059c33caf1a51b9d720e108f533c02cd974c104c
      photo: 'images/contrib/osener.jpg',
      url: 'http://ozansener.net/'
    },
    {
      name: 'Kevin Lee',
      institution: 'Cornell University',
      role: 'Online Robot Games',
      photo: 'images/contrib/klee.jpg',
      url: 'mailto:kkl53@cornell.edu'
    },
    {
      name: 'Aditya Jami',  
      institution: 'CTO, Zoodig',
      role: 'Large-Scale Systems',
      photo: 'images/contrib/ajami.jpg',
      url: 'http://www.linkedin.com/in/adityajami'
    }];
    $scope.faculty = [
    {
      name: 'Prof. Ken Goldberg',  
      institution: 'UC Berkeley',
      role: 'Cloud Robotics',
      photo: 'images/contrib/kgoldberg.jpg',
      url: 'http://goldberg.berkeley.edu/'
    },  
    {
      name: 'Prof. Stefanie Tellex',     
      institution: 'Brown University',
      role: 'Robot Dialog',
      photo: 'images/contrib/stellex.jpg',
      url: 'https://cs.brown.edu/people/stefie10/'
    },
    {
      name: 'Prof. Thorsten Joachims',     
      institution: 'Cornell University',
      role: 'Machine Learning',
      photo: 'images/contrib/tjoachims.jpg',
      url: 'http://www.cs.cornell.edu/People/tj/'
    },
    {
      name: 'Prof. Silvio Savarese',    
      institution: 'Stanford University',
      role: '3D Vision',
      photo: 'images/contrib/ssavarese.jpg',
      url: 'http://cvgl.stanford.edu/silvio/'
    },
    {
      name: 'Prof. Fei-Fei Li',   
      institution: 'Stanford University',
      role: 'Computer Vision',
      photo: 'images/contrib/fli.jpg',
      url: 'http://vision.stanford.edu/feifeili/'
    },
    {
      name: 'Prof. Bart Selman',    
      institution: 'Cornell University',
      role: 'Reasoning and AI',
      photo: 'images/contrib/bselman.jpg',
      url: 'http://www.cs.cornell.edu/selman/'
    },
    {
      name: 'Prof. Jitendra Malik',
      institution: 'UC Berkeley',
      role: 'Computer Vision',
      photo: 'images/contrib/jmalik.jpg',
      url: 'http://www.cs.berkeley.edu/~malik/'
    }];
    $scope.phd_students = [
    {
      name: 'Hema Koppula',
      institution: 'Cornell University',
      role: 'Machine Learning and 3D Perception',
      photo: 'images/contrib/hkoppula.jpg',
      url: 'http://www.cs.cornell.edu/~hema/'
    },
    {
      name: 'Yun Jiang',
      institution: 'Cornell University',
      role: 'Non-Parametric Learning',
      photo: 'images/contrib/yjiang.jpg',
      url: 'http://www.cs.cornell.edu/~yunjiang/'
    },
    {
      name: 'Ian Lenz',
      institution: 'Cornell University',
<<<<<<< HEAD
      role: 'Deep learning and Manipulation',
=======
      role: 'Deep Learning',
>>>>>>> 059c33caf1a51b9d720e108f533c02cd974c104c
      photo: 'images/contrib/ilenz.jpg',
      url: 'http://www.cs.cornell.edu/~ianlenz/'
    },
    {
      name: 'Dipendra K. Misra',
      institution: 'Cornell University',
      role: 'Robot Language (Tell Me Dave)',
      photo: 'images/contrib/dmisra.jpg',
      url: 'http://www.cs.cornell.edu/~dkm/'
    },
    {
      name: 'Jaeyong Sung',
      institution: 'Cornell University',
      role: 'Manipulation Planning',
      photo: 'images/contrib/jsung.jpg',
      url: 'http://www.cs.cornell.edu/~jysung/'
    },
    {
      name: 'Chenxia Wu',
      institution: 'Cornell University',
      role: '3D Vision',
      photo: 'images/contrib/cwu.jpg',
      url: 'http://www.cs.cornell.edu/~chenxiawu/'
    }];
  });
