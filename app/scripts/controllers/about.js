'use strict';

/**
 * @ngdoc function
 * @name roboBrainApp.controller:ResearchCtrl
 * @description
 * # ResearchCtrl
 * Controller of the roboBrainApp
 */
angular.module('roboBrainApp')
  .controller('AboutCtrl', function ($scope) {

    $scope.news = [
    {
      name: 'New York Times',
      logo: 'images/news/nyt.jpg',
      url: 'http://www.nytimes.com/2014/09/02/science/robot-touch.html'
    },
    {
      name: 'TechCrunch',
      logo: 'images/news/tc.jpg',
      url: 'http://techcrunch.com/2014/08/25/the-robo-brain-will-use-the-internet-to-teach-robots/'
    },
    {
      name: 'Yahoo',
      logo: 'images/news/yahoo.jpg',
      url: 'https://www.yahoo.com/tech/cornell-scientists-create-robo-brain-to-teach-robots-95740298304.html'
    },
    {
      name: 'ABC',
      logo: 'images/news/abc.jpg',
      url: 'http://abcnews.go.com/Technology/robots-learn-teach/story?id=25196591'
    },
    {
      name: 'Kurzweil',
      logo: 'images/news/kurzweil.jpg',
      url: 'http://www.kurzweilai.net/robo-brain-will-teach-robots-everything-from-the-internet'
    },
    {
      name: 'Wired',
      logo: 'images/news/wired.jpg',
      url: 'http://www.wired.com/2014/08/robobrain/'
    },
    {
      name: 'CNet',
      logo: 'images/news/cnet.jpg',
      url: 'http://www.cnet.com/news/robo-brain-is-learning-from-the-internet/'
    },
    {
      name: 'CBS',
      logo: 'images/news/cbs.jpg',
      url: 'http://www.cbsnews.com/news/robo-brain-to-teach-robots-about-the-human-world/'
    },
    {
      name: 'Washington Post',
      logo: 'images/news/wpost.jpg',
      url: 'http://www.washingtonpost.com/news/speaking-of-science/wp/2014/08/25/this-robot-is-using-youtube-videos-to-learn-all-about-us/'
    },
    {
      name: 'BBC',
      logo: 'images/news/bbc.jpg',
      url: 'http://www.bbc.com/news/technology-28936436'
    },
    {
      name: 'Sky',
      logo: 'images/news/sky.jpg',
      url: 'http://news.sky.com/story/1325005/robo-brain-lets-robots-learn-from-the-internet'
    },
    {
      name: 'Daily Mail',
      logo: 'images/news/dmail.jpg',
      url: 'http://www.dailymail.co.uk/sciencetech/article-2734123/The-robot-brain-rule-Plans-giant-central-brain-power-millions-machines-world-revealed.html'
    },
    {
      name: 'Popular Science',
      logo: 'images/news/psci.jpg',
      url: 'http://www.popsci.com/blog-network/zero-moment/robo-brain-project-wants-turn-internet-robotic-hivemind'
    },
    {
      name: 'VOA',
      logo: 'images/news/voa.jpg',
      url: 'http://blogs.voanews.com/science-world/2014/08/25/12571/'
    }
    ];
    $scope.sponsors_gov = [
    {
      name: 'National Science Foundation',
      logo: 'images/sponsors/nsf.jpg',
      url: 'http://www.nsf.gov/'
    },
    {
      name: 'Office of Naval Research',
      logo: 'images/sponsors/onr.jpg',
      url: 'http://www.onr.navy.mil/'
    },
    {
      name: 'Army Research Office',
      logo: 'images/sponsors/aro.jpg',
      url: 'http://www.nsf.gov/'
    },
    {
      name: 'National Robotics Initiative',
      logo: 'images/sponsors/nri.jpg',
      url: 'http://www.nsf.gov/funding/pgm_summ.jsp?pims_id=503641&org=CISE'
    }];
  $scope.sponsors_tech = [
    {
      name: 'Google',
      logo: 'images/sponsors/goog.jpg',
      url: 'http://www.google.com/'
    },
    {
      name: 'Microsoft',
      logo: 'images/sponsors/msft.jpg',
      url: 'http://www.microsoft.com/'
    },
    {
      name: 'Qualcomm',
      logo: 'images/sponsors/qcom.jpg',
      url: 'http://www.qualcomm.com/'
    }];
  

$scope.sponsors_school = [
    {
      name: 'Cornell University',
      logo: 'images/sponsors/cornell.jpg',
      url: 'http://www.cornell.edu/'
    },
     {
      name: 'Stanford University',
      logo: 'images/sponsors/stanford.jpg',
      url: 'http://www.stanford.edu/'
    },
    {
      name: 'UC Berkeley',
      logo: 'images/sponsors/berkeley.jpg',
      url: 'http://www.berkeley.edu/'
    },
    {
      name: 'Brown University',
      logo: 'images/sponsors/brown.jpg',
      url: 'http://www.brown.edu/'
    }
    ];

  $scope.sponsors_misc = [
    {
      name: 'Alfred P. Sloan Foundation',
      logo: 'images/sponsors/apsf.jpg',
      url: 'http://www.sloan.org/'
    }];
 
    $scope.publications = [
    {
      title: 'Robo Brain: Large-Scale Knowledge Engine for Robots',
      authors: 'Ashutosh Saxena, Ashesh Jain, Ozan Sener, Aditya Jami, Dipendra K Misra and Hema S Koppula',
      collection: 'Tech Report arxiv',
      year: '2014',
      url: 'http://arxiv.org/abs/1412.0691',
    },
    {
      title: 'Deep Learning for Detecting Robotic Grasps',
      authors: 'Ian Lenz, Honglak Lee, Ashutosh Saxena',
      collection: 'International Journal on Robotics Research (IJRR)',
      year: '2014',
      url: 'http://pr.cs.cornell.edu/deepgrasping/',
      misc: 'An earlier version was presented in Robotics Science and Systems (RSS), 2013.'
    },
    {
      title: 'Tell Me Dave: Context-Sensitive Grounding of Natural Language to Mobile Manipulation Instructions',
      authors: 'Dipendra K. Misra, Jaeyong Sung, Kevin Lee, Ashutosh Saxena',
      collection: 'Robotics: Science and Systems (RSS)',
      year: '2014',
      url: 'http://tellmedave.cs.cornell.edu/paper.pdf'
    },
    {
      title: 'Hierarchical Semantic Labeling for Task-Relevant RGB-D Perception',
      authors: 'Chenxia Wu, Ian Lenz, Ashutosh Saxena',
      collection: 'Robotics: Science and Systems (RSS)',
      year: '2014',
      url: 'http://www.cs.cornell.edu/~asaxena/papers/wulenzsaxena_hierarchicallabel-rgbd_rss2014.pdf'
    },
    {
      title: 'Modeling High-Dimensional Humans for Activity Anticipation using Gaussian Process Latent CRFs',
      authors: 'Yun Jiang, Ashutosh Saxena',
      collection: 'Robotics: Science and Systems (RSS)',
      year: '2014',
      url: 'http://www.cs.cornell.edu/~asaxena/papers/jiang_saxena_rss14_gplcrf.pdf'
    },
    {
      title: 'Physically-Grounded Spatio-Temporal Object Affordances',
      authors: 'Hema S. Koppula, Ashutosh Saxena',
      collection: 'European Conference on Computer Vision (ECCV)',
      year: '2014',
      url: 'http://www.cs.cornell.edu/~asaxena/papers/koppula-saxena-eccv14-physicallygroundedaffordances.pdf'
    },
    {
      title: 'Anticipatory Planning for Human-Robot Teams',
      authors: 'Hema S. Koppula, Ashesh Jain, Ashutosh Saxena',
      collection: '14th International Symposium on Experimental Robotics (ISER)',
      year: '2014',
      url: 'http://www.cs.cornell.edu/~asaxena/papers/koppula_jain_saxena_iser14_anticipatoryplanning.pdf'
    },
    {
      title: '3D Reasoning from Blocks to Stability',
      authors: 'Zhaoyin Jia, Andy Gallagher, Ashutosh Saxena, Tsuhan Chen',
      collection: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (PAMI)',
      year: '2014',
      url: 'http://www.cs.cornell.edu/~asaxena/papers/3d_based_reasoning_saxena_pami14.pdf',
      misc: 'Original version appeared as an oral in CVPR 2013.'
    },
    {
      title: 'Learning Trajectory Preferences for Manipulators via Iterative Improvement',
      authors: 'Ashesh Jain, Brian Wojcik, Thorsten Joachims, Ashutosh Saxena',
      collection: 'Neural Information Processing Systems (NIPS)',
      year: '2013',
      url: 'http://www.cs.cornell.edu/~asaxena/papers/jain_saxena_trajectorypreferencelearning_nips13.pdf',
      misc: 'An earlier version of this work was presented at the ICML workshop on Robot Learning, June 2013.'
    },
    {
      title: 'Anticipating Human Activities using Object Affordances for Reactive Robotic Response',
      authors: 'Hema S. Koppula, Ashutosh Saxena',
      collection: 'Robotics: Science and Systems (RSS)',
      year: '2013',
      url: 'http://www.cs.cornell.edu/~asaxena/papers/anticipation_RSS_2013.pdf',
      awards: 'Best Student Paper Award, Best Paper Runner-Up'
    },
    {
      title: 'Infinite Latent Conditional Random Fields for Modeling Environments through Humans',
      authors: 'Yun Jiang, Ashutosh Saxena',
      collection: 'Robotics: Science and Systems (RSS)',
      year: '2013',
      url: 'http://www.cs.cornell.edu/~asaxena/papers/jiang_saxena_rss13_ILCRF.pdf'
    },
    {
      title: 'Learning Object Arrangements in 3D Scenes using Human Context',
      authors: 'Yun Jiang, Marcus Lim, Ashutosh Saxena',
      collection: 'International Conference of Machine Learning (ICML)',
      year: '2012',
      url: 'http://www.cs.cornell.edu/~asaxena/papers/jiang_saxena_rss13_ILCRF.pdf'
    },
    {
      title: 'Contextual Guided Semantic Labeling and Search for 3D Point Clouds',
      authors: 'Abhishek Anand, Hema S. Koppula, Thorsten Joachims, Ashutosh Saxena',
      collection: 'International Journal of Robotics Research (IJRR)',
      year: '2012',
      url: 'http://www.cs.cornell.edu/~asaxena/papers/contextuallabeling3d_saxena_ijrr12.pdf',
      misc: 'Original version in NIPS 2011.'
    },
    {
      title: 'Learning to Open New Doors',
      authors: 'Ellen Klingbeil, Ashutosh Saxena, Andrew Y. Ng',
      collection: 'International Conference on Intelligent Robots and Systems (IROS)',
      year: '2010',
      url: 'http://www.cs.cornell.edu/~asaxena/openingnewdoors/klingbeil-saxena-ng-opennewdoors.pdf',
      misc: 'First published in Robotics Science and Systems (RSS) workshop on Robot Manipulation, 2008.'
    },
    {
      title: 'Robotic Grasping of Novel Objects using Vision',
      authors: 'Ashutosh Saxena, Justin Driemeyer, Andrew Y. Ng',
      collection: 'International Journal of Robotics Research (IJRR)',
      year: 'vol. 27, no. 2, pp. 157-173, Feb. 2008',
      url: 'http://pr.cs.cornell.edu/grasping/IJRR_saxena_etal_roboticgraspingofnovelobjects.pdf',
      misc: 'Original version appeared in Neural Information Processing Systems (NIPS), 2006.'
    }];
  });
