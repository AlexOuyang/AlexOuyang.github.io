/* ========================================================================*/
/* ======================= By: Chenxing Ouyang  ===========================*/
/* ========================================================================*/

// Declare a module
angular.module('ngFilter', []);

// configure the module.
angular.module('ngFilter').controller("MainController", function ($scope) {
    var vm = this;
    vm.searchInput = '';


    // These are my machine learning projects
    vm.machineLearning = [
        {
            title: 'Dynamic Vision Sensor Fall Risk Assessment (In Progress)',
            tags: 'Research, Machine Vision',
            description: 'Working on data collection and algorithm development in a fall risk assessment study that employs Dynamic Vision Sensor cameras to capture pixel-level illumination changes asynchronously in the presence of motion. Using various machine vision algorithms in Matlab to record and analyze SPPB tests (including gate speed test, balance test, and chair stand test) in a controlled study.',
            img_url: "img/Research/dvs/dvs1.png",
            haveGallery: false,
            gallery: [],
            year: "March, 2016",
            haveProject: false,
            view_project_url: "http://alexouyang.github.io/GraphicModelCreator/documentation/tutorial-interactiveExamples.html",
            haveGithub: false,
            github_url: "https://github.com/AlexOuyang/GraphicModelCreator",
        }, {
            title: 'Graphical Model Creator (In Progress)',
            tags: 'Javascript, Front-end, Web',
            description: 'Used Javascript (ES6) and D3.js to create an infographic API library for creating interactive probability graphical models in aid of visualizing the theory of communication, with documentation and examples included. Examined the various aspects of infographics and practiced iterative design on a weekly basis.',
            img_url: "img/Research/PGMCreator/pgm_6.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Research/PGMCreator/pgm_0.png",
                }, {
                    url: "img/Research/PGMCreator/pgm_1.png",
                }, {
                    url: "img/Research/PGMCreator/pgm_2.png",
                }, {
                    url: "img/Research/PGMCreator/pgm_3.png",
                }, {
                    url: "img/Research/PGMCreator/pgm_4.png",
                }, {
                    url: "img/Research/PGMCreator/pgm_5.png",
                }],
            year: "Dec, 2015",
            haveProject: true,
            view_project_url: "http://alexouyang.github.io/GraphicModelCreator/documentation/tutorial-interactiveExamples.html",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/GraphicModelCreator",
        }, {
            title: 'Handwriting Digit Segmentation and Recognition',
            tags: 'Machine Learning, Python, Theano, OpenCV',
            description: 'Digit classification using multilayer perceptron trained on MNIST dataset build in Theano, and digit segmentation using edge detection, adaptive thresholding and other image filtering methods from openCV and tested on the Street View House Number Dataset written in Python.',
            img_url: "img/Research/digitRecognition/1.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Research/digitRecognition/2.png",
                }, {
                    url: "img/Research/digitRecognition/3.png",
                }, {
                    url: "img/Research/digitRecognition/4.png",
                }],
            year: "Sept, 2015",
            haveProject: false,
            view_project_url: "",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/OCR",
        }, {
            title: 'Real Time Face Detection and Recognition',
            tags: 'Machine Learning, Python, Theano, OpenCV',
            description: 'Achieved real time face tracking in OpenCV and optimized haarcascade for up to 45 degrees of rotation vavriancy. Built SVM classification model for face recognition in python from the top 150 eigenvectors of the 2452 training samples in the Extended Yale Face Dataset B extracted using PCA. An accuracy of 93.3% is obtained with the Radial Basis Function kernel on the set of 613 testing samples.',
            img_url: "img/Research/faceRecognition/face_sad.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Research/faceRecognition/face_side.png",
                }, {
                    url: "img/Research/faceRecognition/face_left.png",
                }, {
                    url: "img/Research/faceRecognition/face_eigen.png",
                }, {
                    url: "img/Research/faceRecognition/face_predict.png",
                }],
            year: "Oct, 2014",
            haveProject: false,
            view_project_url: "",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/RealTimeFaceRecognition",
        }, {
            title: 'EEG Signal Analysis and Frequency Modulation',
            tags: 'Signal Analysis, Python',
            description: 'Created a EEG frequency modulation toolbox for analyzing EEG oscillatory dynamics in Python. Implemented signal processing methods such as FFT, running median filters and various spectral estimation methods for analyzing peak alpha frequency and simulated brain alpha oscillations. Examined the effect of alpha brain wave in behavioral level performance on memory and attention tasks using BCI neurofeedback. ',
            img_url: "img/Research/fmbci/1.png",
            haveGallery: false,
            year: "Sept, 2015",
            haveProject: false,
            view_project_url: "",
            haveGithub: false,
            github_url: "https://github.com/AlexOuyang/GraphicModelCreator",
        }];




    // These are my other projects
    vm.projects = [
        {
            title: 'Calendar+',
            tags: 'Android, Material UI, Backend',
            description: 'Calendar+ is an android calendar app designed for students! It is a smart calendar app used for students to keep track of classes and events via a dynamically scheduling algorithm that prioritizes events based on event types and user preference.',
            img_url: "img/Projects/calendarPlus/material_1.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Projects/calendarPlus/1.png",
                }, {
                    url: "img/Projects/calendarPlus/2.png",
                }, {
                    url: "img/Projects/calendarPlus/3.png",
                }, {
                    url: "img/Projects/calendarPlus/4.png",
                }, {
                    url: "img/Projects/calendarPlus/5.png",
                }, {
                    url: "img/Projects/calendarPlus/6.jpg",
                }, {
                    url: "img/Projects/calendarPlus/7.jpg",
                }, {
                    url: "img/Projects/calendarPlus/8.jpg",
                }, {
                    url: "img/Projects/calendarPlus/9.jpg",
                }, {
                    url: "img/Projects/calendarPlus/10.jpg",
                }, {
                    url: "img/Projects/calendarPlus/11.jpg",
                }, {
                    url: "img/Projects/calendarPlus/12.jpg",
                }, {
                    url: "img/Projects/calendarPlus/13.png",
                }, {
                    url: "img/Projects/calendarPlus/14.png",
                }, {
                    url: "img/Projects/calendarPlus/15.png",
                }, {
                    url: "img/Projects/calendarPlus/16.png",
                }],
            year: "Feb, 2016",
            haveProject: false,
            view_project_url: "",
            haveGithub: true,
            github_url: "https://github.com/ucsdCSE110wi16/CSE110W240T9",
        }, {
        //     title: "Kristine's Website",
        //     tags: 'Javascript, Front-end, Web',
        //     description: 'A website helped to create for a friend based on a HTML5Up template',
        //     img_url: "img/Projects/kristineWebsite/2.jpg",
        //     haveGallery: true,
        //     gallery: [
        //         {
        //             url: "img/Projects/kristineWebsite/1.jpg",
        //         }, {
        //             url: "img/Projects/kristineWebsite/3.jpg",
        //         }, {
        //             url: "img/Projects/kristineWebsite/4.jpg",
        //         }],
        //     year: "Jan, 2016",
        //     haveProject: true,
        //     view_project_url: "http://kristinetran14.github.io/",
        //     haveGithub: false,
        //     github_url: "",
        // }, {
            title: 'My Website V2.0',
            tags: 'Web Development, Front-end',
            description: 'This is the website you are looking at.',
            img_url: "img/Projects/myWebsite2/7.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Projects/myWebsite2/2.png",
                }, {
                    url: "img/Projects/myWebsite2/3.png",
                }, {
                    url: "img/Projects/myWebsite2/4.png",
                }, {
                    url: "img/Projects/myWebsite2/5.png",
                }, {
                    url: "img/Projects/myWebsite2/6.png",
                }, {
                    url: "img/Projects/myWebsite2/0.png",
                }, {
                    url: "img/Projects/myWebsite2/1.png",
                }],
            year: "Dec, 2015",
            haveProject: false,
            view_project_url: "",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/AlexPersonalWebsite",
        }, {
            title: 'HackStatus (SD Hacks)',
            tags: 'Hackathon, Front-end, Web',
            description: 'HackStatus is a website that allows its users to share hackathon projects and collaborate. Created the entire front end graphical interface including project page, user profile page, main page, registration form, animations using jQuery, angularJS, HTML5 and CSS.',
            img_url: "img/Projects/hackStatus/2.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Projects/hackStatus/1.png",
                }, {
                    url: "img/Projects/hackStatus/3.png",
                }, {
                    url: "img/Projects/hackStatus/4.png",
                }, {
                    url: "img/Projects/hackStatus/5.png",
                }, {
                    url: "img/Projects/hackStatus/6.png",
                }, {
                    url: "img/Projects/hackStatus/7.png",
                }, {
                    url: "img/Projects/hackStatus/8.png",
                }],
            year: "Sept, 2015",
            haveProject: false,
            view_project_url: "",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/HackStatus",
        }, {
            title: '3D Grapher (In Progress)',
            tags: 'Javascript, Front-end, Web',
            description: 'Realtime web-based 3D function grapher made in javascript',
            img_url: "img/Projects/3dGrapher/1.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Projects/3dGrapher/2.png",
                }],
            year: "Nov, 2015",
            haveProject: false,
            view_project_url: "",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/3DGrapher",
        }, {
            title: 'Dictionary Autocomplete Application',
            tags: 'C++, Data Structure',
            description: 'Implement an efficient auto-complete program in C++ that works on a dictionary to find the k most frequently occurring completions of a given prefix. The dictionary is implemented as a multiway trie data structure. Since the C++ STL offers other ways of storing a dictionary such as ordered set..etc, I also wrote benchmarking code to compare the performance of my dictionary with those provided by the C++ STL.',
            img_url: "img/Projects/autocomplete/2.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Projects/autocomplete/2.png",
                }],
            year: "Feb, 2016",
            haveProject: false,
            view_project_url: "",
            haveGithub: false,
            // github_url: "https://github.com/AlexOuyang/3DGrapher",
        }, {
            title: 'Personal Website V0.1',
            tags: 'Front-end, Web',
            description: 'My first personal website.',
            img_url: "img/Projects/myWebsite1/1.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Projects/myWebsite1/2.png",
                }, {
                    url: "img/Projects/myWebsite1/3.png",
                }],
            year: "Oct, 2014",
            haveProject: false,
            view_project_url: "",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/PersonalWebsite",
        }, {
            title: 'Quadcopter (In Progress)',
            tags: 'Hardware, Arduino',
            description: 'The purpose of this project is to create a systems and algorithms necessary to allow a quadcopter to autonomously locate and land on a station target using C and Arduino Uno micro-controller. (In progress)',
            img_url: "img/Projects/quadcopter/quadcopter.jpg",
            year: "Jun, 2015",

        }, {
            title: 'MorningSignOut',
            tags: 'Hackathon, Front-end, Web',
            description: 'Created an android app for my intership at MorningSignOut that allows readers to access website articles via mobile devices. Designed test procedures, performed functional testings on code, documented source code and fixed bugs.',
            img_url: "img/Projects/mso/1.jpg",
            year: "Feb, 2015",
            haveProject: false,
            haveGithub: false,
        }, {
            title: 'Entangled',
            tags: 'LeapMotion, Touch-control, Front-end, HTML5',
            description: 'Gestured controlled minimalistic canvas animation implemented using LeapMotion motion controller and Javascript.',
            img_url: "img/WebArt/entangled/Entangled.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/WebArt/entangled/1.png",
                }, {
                    url: "img/WebArt/entangled/2.png",
                }, {
                    url: "img/WebArt/entangled/3.png",
                }, {
                    url: "img/WebArt/entangled/4.png",
                }],
            year: "Aug, 2014",
            haveProject: true,
            view_project_url: "https://www.youtube.com/watch?v=LhcHsVe4xXc",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/CanvasAnimations/tree/master/LeapMotion%20Minimalist%20Pattern%20Trials",
        }, {
            title: 'Scattered',
            tags: 'Touch-control, Front-end, HTML5',
            description: 'Interactive touch screen minimalistic canvas animation implemented using pure Javascript.',
            img_url: "img/WebArt/scattered/scattered.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/WebArt/scattered/1.png",
                }, {
                    url: "img/WebArt/scattered/2.png",
                }, {
                    url: "img/WebArt/scattered/3.png",
                }, {
                    url: "img/WebArt/scattered/4.png",
                }],
            year: "Jun, 2014",
            haveProject: true,
            view_project_url: "https://www.youtube.com/watch?v=LhcHsVe4xXc",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/CanvasAnimations/tree/master/ScatteredAnimation",
        }, {
            title: 'Gesture Controlled 3D Cube Photo Gallery',
            tags: 'Web, Sinatra, Experiment, Canvas',
            description: 'A small photog gallery made using Ruby + Sinatra, where users can upload pictures to the six sides of a cube. To rotate the cube, simple wave your hand up down, left or right.',
            img_url: "img/WebArt/cube/cube.png",
            year: "Nov, 2013",
            haveProject: false,
            view_project_url: "",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/3D-Cube-Gallery",
        }, {
            title: '❦ Image Slider Of Love',
            tags: 'Web, Front-end, HTML5',
            description: 'A postcard like photo album with Love ❤❤❤',
            img_url: "img/WebArt/sliderOfLove/ImageSliderOfLove.png",
            year: "Jan, 2013",
            haveProject: true,
            view_project_url: "http://codepen.io/AlexO/full/jKEqG/",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/CanvasAnimations/tree/master/LeapMotion%20Minimalist%20Pattern%20Trials",
        }, {
            title: 'The Universe Animation',
            tags: 'Web, Front-end, HTML5',
            description: 'My interpretation of time and space in the form of canvas animation',
            img_url: "img/WebArt/theUniverse/theUniverse2.png",
            year: "Jan, 2013",
            haveProject: true,
            view_project_url: "http://codepen.io/AlexO/full/etBqa/",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/TheUniverseCanvasAnimation",
        }, {
            title: 'Remaint Game Studio',
            tags: 'Front-end, HTML5, Web Design',
            description: 'A game collaborate I started with a friend of mine in high school for fun.',
            img_url: "img/Projects/remaint/1.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Projects/remaint/5.png",
                }, {
                    url: "img/Projects/remaint/2.png",
                }, {
                    url: "img/Projects/remaint/3.png",
                }, {
                    url: "img/Projects/remaint/4.png",
                }],
            year: "Jun, 2012",

        }];



    // These are my game projects
    vm.games = [
        {
            title: 'AtomAR (Coming on GooglePlay soon)',
            tags: 'Education, OpenGL, Android, Augmented Reality',
            description: 'Augmented reality chemistry game to make education more fun.',
            img_url: "img/Games/atomAR/atomAR_icon2.png",
            haveGallery: false,
            gallery: [
                {
                    url: "img/Games/parallelWorld/1.png",
                }, {
                    url: "img/Games/parallelWorld/2.png",
                }, {
                    url: "img/Games/parallelWorld/3.png",
                }, {
                    url: "img/Games/parallelWorld/5.png",
                }, {
                    url: "img/Games/parallelWorld/6.png",
                }, {
                    url: "img/Games/parallelWorld/7.png",
                }],
            year: "May, 2016",
            haveProject: true,
            view_project_url: "https://medium.com/@snyoonoh/created-by-alex-ouyang-seung-yoon-oh-dede5c7ac70a#.bcnfrcnyp",
            haveGithub: false,
            // github_url: "https://github.com/AlexOuyang/Insatiable-Spider",
        }, {
            title: 'Galatic Dragon',
            tags: 'OpenGL, GLFW, GLEW, GLSL',
            description: 'C++ game made from scratch.',
            img_url: "img/Games/galaticDragon/youtube.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Games/galaticDragon/2.png",
                }, {
                    url: "img/Games/galaticDragon/1.png",
                }],
            year: "May, 2016",
            haveProject: true,
            view_project_url: "https://www.youtube.com/watch?v=1vc1sbcdWMo",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/GalaticDragonGame",
        }, {
            title: 'Parallel World (Coming on GooglePlay soon)',
            tags: 'Game, PC, Mobile, Unity3D',
            description: 'To become whole again.',
            img_url: "img/Games/parallelWorld/4.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Games/parallelWorld/icon_2.png",
                }, {
                    url: "img/Games/parallelWorld/2.png",
                }, {
                    url: "img/Games/parallelWorld/3.png",
                }, {
                    url: "img/Games/parallelWorld/5.png",
                }, {
                    url: "img/Games/parallelWorld/6.png",
                }, {
                    url: "img/Games/parallelWorld/7.png",
                }],
            year: "April, 2016",
            haveProject: false,
            // view_project_url: "https://play.google.com/store/apps/details?id=com.NXTLVL.INSATIABLE_SPIDER",
            haveGithub: false,
            // github_url: "https://github.com/AlexOuyang/Insatiable-Spider",
        }, {
            title: 'Powerful Poptart (In Progress)',
            tags: 'Game, PC, Mobile, Unity3D',
            description: 'Our main protagonist, genetically modified hamster Poptart tries to save his abducted human family from the evil and vindictive hamster boss. Designed and implemented in game puzzle, game physics, player power up system, storage system, particle effects, enemy AI, animation for scene transition and boss fights, as well as the touch controls for mobile devices.',
            img_url: "img/Games/powerfulPoptart/7.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Games/powerfulPoptart/powerfulPoptartLogo.png",
                }, {
                    url: "img/Games/powerfulPoptart/1.png",
                }, {
                    url: "img/Games/powerfulPoptart/2.png",
                }, {
                    url: "img/Games/powerfulPoptart/3.png",
                }, {
                    url: "img/Games/powerfulPoptart/4.png",
                }, {
                    url: "img/Games/powerfulPoptart/5.png",
                }, {
                    url: "img/Games/powerfulPoptart/6.png",
                }],
            year: "Jan, 2015",
            haveProject: true,
            view_project_url: "http://nxtlvlgames.tumblr.com/",
            haveGithub: false,
            github_url: "",
        }, {
            title: 'Reversal (Web Game Made For JS13K Hackathon)',
            tags: 'Game, Web, HTML5, Javascript',
            description: 'Traversal is a game that allows you to teleport while gaining higher jumping velocity, teleportation is an important part of the game. It is a 2D side scroller html5 game created from scratch using pure Javascript. I also implemented features including code generated environmental art, Newtonian physics, fluid simulations and tile map generation.',
            img_url: "img/Games/reversal/1.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Games/reversal/reversal.gif",
                }, {
                    url: "img/Games/reversal/2.png",
                }],
            year: "Jul, 2015",
            haveProject: true,
            view_project_url: "http://js13kgames.com/entries/reversal",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/REVERSAL-game",
    }, {
            title: 'Insatiable Spider (Available on Google Play)',
            tags: 'Game, PC, Mobile, Unity3D',
            description: 'You are one BIG-ASS SPIDER with an INSATIABLE hunger!! Eat as much and as fast as you can in this arcade shooter. Earn points by eating and watch as your power grows!',
            img_url: "img/Games/insatiableSpider/1.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Games/insatiableSpider/0.png",
                }, {
                    url: "img/Games/insatiableSpider/2.png",
                }, {
                    url: "img/Games/insatiableSpider/4.png",
                }, {
                    url: "img/Games/insatiableSpider/5.png",
                }, {
                    url: "img/Games/insatiableSpider/6.png",
                }],
            year: "Jul, 2015",
            haveProject: true,
            view_project_url: "https://play.google.com/store/apps/details?id=com.NXTLVL.INSATIABLE_SPIDER",
            haveGithub: true,
            github_url: "https://github.com/AlexOuyang/Insatiable-Spider",
    }, {
            title: 'Into The Light',
            tags: 'Game, PC, Mobile, Unity3D',
            description: 'The story of a lost soul in the world of darkness tries to illuminate the world by collecting star dusts. I designed and implemented reverse gravity physics and teleportation mechanisms which allows players to teleport while retaining velocity.',
            img_url: "img/Games/intoTheLight/0.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Games/intoTheLight/1.png",
                }, {
                    url: "img/Games/intoTheLight/2.png",
                }, {
                    url: "img/Games/intoTheLight/3.png",
                }, {
                    url: "img/Games/intoTheLight/4.png",
                }],
            year: "Apr, 2015",
            haveProject: true,
            view_project_url: "http://nxtlvl.itch.io/into-the-light",
            haveGithub: false,
            github_url: "",
    }, {
            title: 'Lost World',
            tags: 'Game, PC, Mobile, Unity3D',
            description: 'The story of boy lost in the world of memories, he tries to collect stars in order to find way home.',
            img_url: "img/Games/lostWorld/3.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Games/lostWorld/1.png",
                }, {
                    url: "img/Games/lostWorld/4.png",
                }],
            year: "Mar, 2014",
            haveProject: true,
            view_project_url: "https://www.youtube.com/watch?v=jFnByirxdkc",
            haveGithub: false,
            github_url: "",
    }, {
            title: 'Forest Runner',
            tags: 'Game, PC, Mobile, Unity3D',
            description: 'An infinite runner game that details the story of a lone wolf running wild in the forst. Unfortunately this game was abundonded half way.',
            img_url: "img/Games/forestRunner/1.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Games/forestRunner/2.jpg",
                }, {
                    url: "img/Games/forestRunner/3.jpg",
                }],
            year: "Feb, 2014",
            haveProject: false,
            view_project_url: "",
            haveGithub: false,
            github_url: "",
    }, {
            title: 'Maze Runner',
            tags: 'Puzzld Game, PC, Mobile, Unity3D',
            description: 'Player switches between first person and third person to solve maze puzzles',
            img_url: "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10616309_767037970035866_2224106353375435192_n.jpg?oh=bee4962b972bda93d5d34b11ff44e879&oe=5635662E",
            img_url: "img/Games/mazeRunner/1.jpg",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Games/mazeRunner/2.jpg",
                }, {
                    url: "img/Games/mazeRunner/3.jpg",
                }, {
                    url: "img/Games/mazeRunner/4.jpg",
                }, {
                    url: "img/Games/mazeRunner/5.PNG",
                }, {
                    url: "img/Games/mazeRunner/6.PNG",
                }, {
                    url: "img/Games/mazeRunner/7.PNG",
                }, {
                    url: "img/Games/mazeRunner/8.PNG",
                }],
            year: "Jun, 2013",
            haveProject: false,
            view_project_url: "",
            haveGithub: false,
            github_url: "",
    }];





    // These are the 2d and 3d art projects

    vm.artWorks = [
        {
            title: 'Pixel Girl',
            tags: 'Pixel Art, Design',
            description: 'Pixel Girl artWorks',
            img_url: "img/Art/pixelGirl/pixelGirl3.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Art/pixelGirl/pixelGirl1.png",
                }, {
                    url: "img/Art/pixelGirl/pixelGirl2.png",
                }],
            year: 2016,
        }, {
            title: 'Pixel Me Ideling 2',
            tags: 'GameArt, PixelArt',
            description: "The pixel me",
            img_url: "img/Art/pixelMe/me2.png",
            year: 2015,
        }, {
            title: 'Pixel Me Jumping',
            tags: 'GameArt, PixelArt',
            description: "The pixel me",
            img_url: "img/Art/pixelMe/me.png",
            year: 2015,

        }, {
            title: 'Tron Model - steelBlue',
            tags: 'Art, 3D Modeling, Blender',
            description: 'Meca 3D model that I designed and modeld using Blender, inspired by Gundam',
            img_url: "img/Art/tronBlue/1.jpg",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Art/tronBlue/2.jpg",
                }, {
                    url: "img/Art/tronBlue/3.jpg",
                }, {
                    url: "img/Art/tronBlue/4.jpg",
                }],
            year: 2014,
        }, {
            title: 'Tron Model - red',
            tags: 'Art, 3D Modeling, Blender',
            description: 'Meca 3D model that I designed and modeld using Blender, inspired by Gundam',
            img_url: "img/Art/tronRed/1.jpg",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Art/tronRed/2.jpg",
                }, {
                    url: "img/Art/tronRed/3.jpg",
                }],
            year: 2014,

        }, {
            title: '❣ Meca Model - Gabrille',
            tags: 'Art, 3D Modeling, Blender',
            description: 'Meca 3D model that I designed and modeld using Blender, inspired by Gundam',
            img_url: "img/Art/angel/1.jpg",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Art/angel/2.jpg",
                }, {
                    url: "img/Art/angel/3.jpg",
                }, {
                    url: "img/Art/angel/4.jpg",
                }, {
                    url: "img/Art/angel/5.jpg",
                }, {
                    url: "img/Art/angel/6.jpg",
                }],
            year: 2014,

        }, {
            title: '❣ Meca Model - 04',
            tags: 'Art, 3D Modeling, Blender',
            description: 'Meca 3D model that I designed and modeld using Blender inspired by Evangelion',
            img_url: "img/Art/04/1.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Art/04/2.jpg",
                }, {
                    url: "img/Art/04/3.jpg",
                }, {
                    url: "img/Art/04/4.jpg",
                }, {
                    url: "img/Art/04/5.jpg",
                }],
            year: 2013,
        }, {
            title: '❣ Meca Model - death',
            tags: 'Art, 3D Modeling, Blender',
            description: 'Meca 3D model that I designed and modeld using Blender, inspired by Gundam',
            img_url: "img/Art/death/1.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Art/death/2.jpg",
                }, {
                    url: "img/Art/death/3.jpg",
                }, {
                    url: "img/Art/death/4.jpg",
                }, {
                    url: "img/Art/death/5.jpg",
                }, {
                    url: "img/Art/death/6.jpg",
                }],
            year: 2013,
        }, {
            title: '❣ Meca Model - Blue Elf',
            tags: 'Art, 3D Modeling, Blender',
            description: 'Meca 3D model that I designed and modeld using Blender, inspired by Gundam',
            img_url: "img/Art/blueElf/1.png",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Art/blueElf/2.jpg",
                }, {
                    url: "img/Art/blueElf/3.jpg",
                }, {
                    url: "img/Art/blueElf/4.jpg",
                }, {
                    url: "img/Art/blueElf/5.jpg",
                }, {
                    url: "img/Art/blueElf/6.jpg",
                }],
            year: 2013,
        }, {
            title: '❣ Meca Model - Pantacle',
            tags: 'Art, 3D Modeling, Blender',
            description: 'Meca 3D model that I designed and modeld using Blender, inspired by Gundam',
            img_url: "img/Art/snake/1.jpg",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Art/snake/2.jpg",
                }, {
                    url: "img/Art/snake/3.jpg",
                }, {
                    url: "img/Art/snake/4.jpg",
                }],
            year: 2013,
        }, {
            title: 'My Drawing',
            tags: 'Drawing, Art',
            description: "This is my art",
            img_url: "img/Art/drawings/pic9.jpg",
            year: 2015,
        }, {
            title: 'My Drawing',
            tags: 'Drawing, Art',
            description: "This is my art",
            img_url: "img/Art/drawings/pic8.jpg",
            year: 2015,
        }, {
            title: 'My Drawing',
            tags: 'Drawing, Art',
            description: "This is my art",
            img_url: "img/Art/drawings/pic7.jpg",
            year: 2015,
        }, {
            title: 'My Drawing',
            tags: 'Drawing, Art',
            description: "This is my art",
            img_url: "img/Art/drawings/pic6.jpg",
            year: 2014,
        }, {
            title: 'My Drawing',
            tags: 'Drawing, Art',
            description: "This is my art",
            img_url: "img/Art/drawings/pic5.jpg",
            year: 2013,
        }, {
            title: 'My Drawing',
            tags: 'Drawing, Art',
            description: "This is my art",
            img_url: "img/Art/drawings/pic4.jpg",
            year: 2012,
        }, {
            title: 'My Drawing',
            tags: 'Drawing, Art',
            description: "This is my art",
            img_url: "img/Art/drawings/pic3.jpg",
            year: 2011,
        }, {
            title: 'My Drawing',
            tags: 'Drawing, Art',
            description: "This is my art",
            img_url: "img/Art/drawings/pic2.jpg",
            year: 2011,
        }, {
            title: 'My Drawing',
            tags: 'Drawing, Art',
            description: "This is my art",
            img_url: "img/Art/drawings/pic1.jpg",
            year: 2011,
        }];
});
