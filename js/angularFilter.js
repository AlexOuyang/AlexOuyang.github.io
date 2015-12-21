/* ========================================================================*/
/* ======================= By: Chenxing Ouyang  ===========================*/
/* ========================================================================*/

// Declare a module
angular.module('ngFilter', []);

// configure the module.
angular.module('ngFilter').controller("MainController", function ($scope) {
    var vm = this;
    vm.searchInput = '';

    // These are my games
    vm.games = [
        {
            title: 'Powerful Poptart (In Progress)',
            tags: 'Game, PC, Mobile, Unity3D',
            description: 'Our main protagonist, genetically modified hamster Poptart tries to save his abducted human family from the evil and vendictive hamster boss. Designed and implemented in game puzzle, game physics, player power up system, storage system, particle effects, enemy AI, animation for scene transition and boss fights, as well as the touch controls for mobile devices.',
            img_url: "img/Games/powerfulPoptart/7.png",
            haveGallery: true,
            gallery: [
                {
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
            year: 2015,
            haveProject: true,
            view_project_url: "http://nxtlvlgames.tumblr.com/",
            haveGithub: false,
            github_url: "",
        }, {
            title: 'Reversal (Web Game Made For JS13K Hackathon)',
            tags: 'Game, Web, HTML5, Javascript',
            description: 'Traversal is a game that allows you to teleport while gaining higher jumping velocity, teleportation is an important part of the game. It is a 2D side scroller html5 game created from scratch using pure Javascript. I also implemented features including code generated environmental art, Newtonian physics, fluid simulations and tile map generation.',
            img_url: "img/Games/reversal/reversal.gif",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Games/reversal/1.png",
                }, {
                    url: "img/Games/reversal/2.png",
                }],
            year: 2015,
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
                    url: "img/Games/insatiableSpider/3.png",
                }, {
                    url: "img/Games/insatiableSpider/4.png",
                }, {
                    url: "img/Games/insatiableSpider/5.png",
                }, {
                    url: "img/Games/insatiableSpider/6.png",
                }],
            year: 2015,
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
            year: 2015,
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
            year: 2014,
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
            year: 2014,
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
            year: 2013,
            haveProject: false,
            view_project_url: "",
            haveGithub: false,
            github_url: "",
    }];





    // These are the 2d and 3d art projects

    vm.artWorks = [
        {
            title: 'Pixel Me Ideling 2',
            tags: 'GameArt, PixelArt',
            description: "The pixel me",
            img_url: "img/Art/pixelMe/meIdling2.gif",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Art/pixelMe/me2.png",
                }],
            year: 2015,

        }, {
            title: 'Pixel Me Jumping',
            tags: 'GameArt, PixelArt',
            description: "The pixel me",
            img_url: "img/Art/pixelMe/meJumping.gif",
            haveGallery: true,
            gallery: [
                {
                    url: "img/Art/pixelMe/me.png",
                }, {
                    url: "img/Art/pixelMe/me2.png",
                }],
            year: 2015,

    }, {
            title: 'Short Guy',
            tags: 'GameArt, PixelArt',
            description: "Some pixel art I created for a game",
            img_url: "img/Art/shortGuy/shortGuy.gif",
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