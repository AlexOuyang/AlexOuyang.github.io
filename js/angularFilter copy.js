/* ========================================================================*/
/* ======================= By: Chenxing Ouyang  ===========================*/
/* ========================================================================*/

// Declare a module
angular.module('ngFilter', []);

// configure the module.
angular.module('ngFilter').controller("MainController", function () {
    var vm = this;
    vm.searchInput = '';
    vm.shows = [
        {
            title: '★ Quadcopter (In Progress)',
            tags: 'Hardware, Arduino',
            year: 2015,
            description: "The purpose of this project is to create a systems and algorithms necessary to allow a quadcopter to autonomously locate and land on a station target using C and Arduino Uno micro-controller. (In progress)",
            img_url: "img/Projects/quadcopter.jpg",
            haveProject: true,
            view_project_url: "https://play.google.com/store/apps/details?id=com.NXTLVL.INSATIABLE_SPIDER",
            haveGithub: true,
            github_url: "https://play.google.com/store/apps/details?id=com.NXTLVL.INSATIABLE_SPIDER",
    }, {
            title: '✓ Insatiable Spider (Available on Google Play)',
            tags: 'Game, PC, Mobile, Unity3D',
            description: 'You are one BIG-ASS SPIDER with an INSATIABLE hunger!! Eat as much and as fast as you can in this arcade shooter. Earn points by eating and watch as your power grows!',
            img_url: "img/Projects/InsatiableSpider2.png",
            url: "https://play.google.com/store/apps/details?id=com.NXTLVL.INSATIABLE_SPIDER",
            year: 2015,
            haveExternalLink: true
    }, {
            title: '★ Powerful Poptart (In Progress)',
            tags: 'Game, PC, Mobile, Unity3D',
            description: 'Genetically modified hamster Poptart tries to save his abducted human family.',
            img_url: "img/Projects/PowerfulPoptart.png",
            url: "http://nxtlvlgames.tumblr.com/",
            year: 2015,
            haveExternalLink: true
    }, {
            title: '★ Into The Light (In Progress)',
            tags: 'Game, PC, Mobile, Unity3D',
            description: 'The story of a soul in the world of darkness tries to illuminate the world by collecting star dusts',
            img_url: "img/Projects/IntoTheLight.png",
            url: "http://nxtlvl.itch.io/into-the-light",
            year: 2015,
            haveExternalLink: true
    }, {
            //     title: 'Forest Runner',
            //     tags: 'Game, PC, Mobile, Unity3D',
            //     description: 'A story line baesd Infinitly Runner game that details the story of a lone wolf running wild in the forst',
            //     img_url: "img/Projects/ForestRunner.png",
            //     url: "",
            //     year: 2014,
            //     haveExternalLink: true;
            // }, {
            title: 'Maze Runner',
            tags: 'Puzzld Game, PC, Mobile, Unity3D',
            description: 'Player switches between first person and third person to solve maze puzzles',
            img_url: "https://scontent-dfw1-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/10616309_767037970035866_2224106353375435192_n.jpg?oh=bee4962b972bda93d5d34b11ff44e879&oe=5635662E",
            url: "",
            year: 2014,
            haveExternalLink: false
    }, {
            title: 'Entangled',
            tags: 'Web, Front-end, Chrome Experiment, HTML5',
            description: 'Gestured controlled minimalistic canvas animation implemented using LeapMotion motion controller and Javascript.',
            img_url: "img/Projects/Entangled.png",
            url: "https://github.com/AlexOuyang/Canvas-Animation/tree/master/LeapMotion%20Minimalist%20Pattern%20Trials",
            year: 2014,
            haveExternalLink: true
    }, {
            title: '❦ Image Slider Of Love',
            tags: 'Web, Front-end, HTML5',
            description: 'Something Made for a friend with Love ❤❤❤',
            img_url: "img/Projects/ImageSliderOfLove.png",
            url: "http://codepen.io/AlexO/pen/jKEqG",
            year: 2014,
            haveExternalLink: true
    }, {
            title: 'Gesture Controlled 3D Cube Photo Gallery',
            tags: 'Web, Sinatra, Experiment, Canvas',
            description: 'A small photog gallery made using Ruby + Sinatra, where users can upload pictures to the six sides of a cube. To rotate the cube, simple wave your hand up down, left or right.',
            img_url: "img/Projects/Cube.png",
            url: "https://github.com/AlexOuyang/3D-Cube-Gallery",
            year: 2014,
            haveExternalLink: true
    }, {
            title: '❣ Meca Model - Gabrille',
            tags: 'Art, 3D Modeling, Blender',
            description: 'Meca 3D model that I designed and modeld using Blender, inspired by Gundam',
            img_url: "img/Projects/meca01.png",
            url: "",
            year: 2014,
            haveExternalLink: false
    }, {
            title: '❣ Meca Model - Hellsing',
            tags: 'Art, 3D Modeling, Blender',
            description: 'Meca 3D model that I designed and modeld using Blender inspired by Evangelion',
            img_url: "img/Projects/meca02.png",
            url: "",
            year: 2014,
            haveExternalLink: false
    }, {
            title: '❣ Meca Model - HellRaiser',
            tags: 'Art, 3D Modeling, Blender',
            description: 'Meca 3D model that I designed and modeld using Blender, inspired by Gundam',
            img_url: "img/Projects/meca03.png",
            url: "",
            year: 2013,
            haveExternalLink: false
    }, {
            title: '❣ Meca Model - Blue Elf',
            tags: 'Art, 3D Modeling, Blender',
            description: 'Meca 3D model that I designed and modeld using Blender, inspired by Gundam',
            img_url: "img/Projects/meca04.png",
            url: "",
            year: 2013,
            haveExternalLink: false
    }, {
            title: '❣ Meca Model - Pantacle',
            tags: 'Art, 3D Modeling, Blender',
            description: 'Meca 3D model that I designed and modeld using Blender, inspired by Gundam',
            img_url: "img/Projects/meca05.png",
            url: "",
            year: 2013,
            haveExternalLink: false
    }];
});