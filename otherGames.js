/*
id: game no.
name: string (folder name (lower case only))
title: string
description: string
phaserVersion: string
isPlayable: boolean
screenshots: array
references: array
tags: array (lowercase except particular name)
inspirations: array
demos: array (game play and video)
*/

var games = [
  {
    id: 1,
    name: '2048',
    title: '2048',
    description: '2048 Game',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      '2048.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/04/04/how-to-create-a-complete-html5-2048-game-with-phaser',
      'http://www.emanueleferonato.com/tag/2048/',
      'http://www.emanueleferonato.com/tag/hero-slide/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 2,
    name: '10000000',
    title: '10000000',
    description: 'Drag-and-match',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      '10000000.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/07/24/html5-drag-and-match-engine-made-with-phaser/',
      'http://www.emanueleferonato.com/tag/drag-and-match/'
    ],
    tags: [],
    inspirations: [
      'https://itunes.apple.com/en/app/10000000/id544385071'
    ],
    demos: []
  },
  {
    id: 4,
    name: 'ascii-roguelike',
    title: 'ASCII Roguelike',
    description: '',
    phaserVersion: '1.1.2',
    isPlayable: true,
    screenshots: [
      'ascii-roguelike.jpg'
    ],
    references: [
      'http://gamedevelopment.tutsplus.com/tutorials/how-to-make-your-first-roguelike--gamedev-13677'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 5,
    name: 'boids-flocking',
    title: 'Boids Flocking',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'boids-flocking.jpg'
    ],
    references: [
      'http://www.red3d.com/cwr/boids/',
      'http://www.kfish.org/boids/pseudocode.html',
      'http://www.emanueleferonato.com/2016/01/12/how-to-simulate-flocking-behavior-with-boids-using-html5-and-phaser/',
      'http://www.emanueleferonato.com/tag/boids/'
    ],
    tags: [
      'boids algorithm'
    ],
    inspirations: [],
    demos: []
  },
  {
    id: 6,
    name: 'boids-steering',
    title: 'Boids Steering',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'boids-steering.jpg'
    ],
    references: [
      'http://www.red3d.com/cwr/boids/',
      'http://www.kfish.org/boids/pseudocode.html',
      'http://www.emanueleferonato.com/2016/02/01/understanding-steering-behavior-html5-example-using-phaser/'
    ],
    tags: [
      'boids algorithm'
    ],
    inspirations: [],
    demos: []
  },
  {
    id: 8,
    name: 'bouncing-menu',
    title: 'Bouncing Menu',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'bouncing-menu.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/10/06/give-your-html5-game-menu-a-nice-bounce-effect-with-phaser/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 10,
    name: 'box2d',
    title: 'Box2D',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'box2d.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/06/16/introducing-phaser-box2d/',
      'http://phaser.io/shop/plugins/box2d'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 11,
    name: 'breakout',
    title: 'Breakout',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: false,
    screenshots: [
      'breakout.jpg'
    ],
    references: [
      'http://codepen.io/K_Cuma/pen/emaJBd'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 15,
    name: 'car',
    title: 'Car',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'car.jpg'
    ],
    references: [
      'http://phaser.io/tutorials/coding-tips-005'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 16,
    name: 'character-selection',
    title: 'Character Selection',
    description: 'Character selection like Crossy Road',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'character-selection.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2016/01/20/phaser-tutorial-creation-of-a-html5-character-selection-screen-like-the-one-in-crossy-road-ios-smash-hit/'
    ],
    tags: [
      'Crossy Road',
      'character selection'
    ],
    inspirations: [],
    demos: []
  },
  {
    id: 17,
    name: 'christmas-quest',
    title: 'Christmas Quest',
    description: '',
    phaserVersion: '2.1.1',
    isPlayable: true,
    screenshots: [
      'christmas-quest.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/11/18/upcoming-html5-christmas-game-christmas-quest/'
    ],
    tags: [
      'game title'
    ],
    inspirations: [],
    demos: []
  },
  {
    id: 20,
    name: 'crack-alien-code',
    title: 'Crack Alien Code',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: false,
    screenshots: [
      'crack-alien-code.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/05/28/play-crack-alien-code-an-html5-speed-memory-game-you-are-about-to-learn-how-to-code/'
    ],
    tags: [
      'sound control'
    ],
    inspirations: [],
    demos: [
      'http://www.emanueleferonato.com/wp-content/uploads/2015/05/cac/'
    ]
  },
  {
    id: 22,
    name: 'cube-jump',
    title: 'Cube Jump',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'cube-jump.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/08/18/creation-of-the-engine-behind-cube-jump-ios-game-with-phaser/',
      'http://www.emanueleferonato.com/wp-content/uploads/2015/08/cubejump/',
      'http://www.emanueleferonato.com/tag/cube-jump/'
    ],
    tags: [],
    inspirations: [
      'https://itunes.apple.com/us/app/cube-jump/id1015137537'
    ],
    demos: []
  },
  {
    id: 24,
    name: 'dashy-panda',
    title: 'Dashy Panda',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'dashy-panda.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2016/01/15/phaser-tutorial-create-a-html5-prototype-of-the-ios-game-dashy-panda/',
      'http://www.emanueleferonato.com/tag/dashy-panda/'
    ],
    tags: [],
    inspirations: [
      'https://itunes.apple.com/us/app/dashy-panda-and-friends/id989937013'
    ],
    demos: []
  },
  {
    id: 25,
    name: 'diamond-digger',
    title: 'Diamond Digger',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'diamond-digger.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/09/23/html5-diamond-diger-saga-prototype-made-with-phaser-adding-dirt-and-water/',
      'http://www.emanueleferonato.com/2014/09/18/html5-diamond-digger-saga-prototype-made-with-phaser/',
      'http://www.emanueleferonato.com/tag/diamond-digger-saga/'
    ],
    tags: [],
    inspirations: [],
    demos: [
      'https://king.com/#!/play/diamonddigger'
    ]
  },
  {
    id: 28,
    name: 'down-the-mountain',
    title: 'Down The Mountain',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'down-the-mountain.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/08/11/html5-down-the-mountain-game-prototype-made-with-phaser-actually-going-down-the-mountain/',
      'http://www.emanueleferonato.com/tag/down-the-mountain/'
    ],
    tags: [],
    inspirations: [
      'https://itunes.apple.com/us/app/down-the-mountain/id992730639'
    ],
    demos: []
  },
  {
    id: 29,
    name: 'draggable-and-scrollable-with-inertia',
    title: 'Draggable and Scrollable with Inertia',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'draggable-and-scrollable-with-inertia.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2016/01/18/how-to-create-a-html-draggable-and-scrollable-map-with-inertia-using-phaser-framework/',
      'http://www.emanueleferonato.com/2015/01/21/create-an-html5-level-selection-screen-using-a-scrollable-map-like-in-hero-emblems-game-using-phaser/'
    ],
    tags: [],
    inspirations: [
      'https://itunes.apple.com/vn/app/id645797558'
    ],
    demos: []
  },
  {
    id: 30,
    name: 'drop-wizard',
    title: 'Drop Wizard',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'drop-wizard.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/03/05/create-an-html5-game-like-drop-wizard-with-phaser-patrolling-enemies/',
      'http://www.emanueleferonato.com/2015/03/03/create-an-html5-game-like-drop-wizard-with-phaser-player-fire-by-extending-sprite-class/',
      'http://www.emanueleferonato.com/2015/01/15/create-an-html5-game-like-drop-wizard-with-phaser-player-movement/',
      'http://www.emanueleferonato.com/tag/drop-wizard/'
    ],
    tags: [],
    inspirations: [
      'https://itunes.apple.com/us/app/drop-wizard/id834955398'
    ],
    demos: []
  },
  {
    id: 38,
    name: 'flood-fill',
    title: 'Flood Fill',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'flood-fill.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/09/10/the-basics-behind-diamond-digger-saga-flood-fill-algorithm/',
      'http://www.emanueleferonato.com/2008/06/06/flash-flood-fill-implementation/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 39,
    name: 'fruit-ninja',
    title: 'Fruit Ninja',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'fruit-ninja.jpg'
    ],
    references: [
      'http://codepen.io/labdev/pen/sCAKe'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 40,
    name: 'fruit-ninja-2',
    title: 'Fruit Ninja 2',
    description: '',
    phaserVersion: '2.0.3',
    isPlayable: true,
    screenshots: [
      'fruit-ninja-2.jpg'
    ],
    references: [
      'http://codepen.io/codevinsky/pen/mgwdv'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 41,
    name: 'goat-rider',
    title: 'Goat Rider',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'goat-rider.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/12/02/html5-game-prototype-like-goat-rider-powered-by-phaser-and-arcade-physics/',
      'http://www.emanueleferonato.com/tag/goat-rider/'
    ],
    tags: [
      'https://itunes.apple.com/us/app/goat-rider/id1045358578'
    ],
    inspirations: [],
    demos: [
      'https://www.youtube.com/watch?v=Mc2rtBDgzkw'
    ]
  },
  {
    id: 42,
    name: 'gyro.js',
    title: 'gyro.js',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'gyro.js.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/01/10/playing-with-phaser-and-accelerometer-with-gyro-js/',
      'https://github.com/tomgco/gyro.js'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 43,
    name: 'hexagonal-tiles',
    title: 'Hexagonal Tiles',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: false,
    screenshots: [
      'hexagonal-tiles.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/02/12/how-to-find-adjacent-tiles-in-hexagonal-maps-all-and-every-case-explained/',
      'http://www.emanueleferonato.com/tag/hexagonal-tiles/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 50,
    name: 'level-selection',
    title: 'Level Selection',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'level-selection.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2016/01/25/create-a-html5-level-select-screen-controlled-by-swipe-without-actually-checking-for-swipes/',
      'http://www.emanueleferonato.com/2016/02/04/create-a-html5-level-select-screen-controlled-by-swipe-new-feature-actually-selecting-a-level/',
      'http://www.emanueleferonato.com/2016/04/08/create-a-html5-level-select-screen-controlled-by-swipe-new-feature-navigation-with-page-thumbnails/',
      'http://www.emanueleferonato.com/2016/09/09/apply-transitions-between-your-phaser-states-with-a-single-line-of-code-thanks-to-state-transition-plugin/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 51,
    name: 'level-selection-with-locked-and-stars',
    title: 'Level Selection With Locked and Stars',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'level-selection-with-locked-and-stars.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/12/05/html5-phaser-tutorial-how-to-create-a-level-selection-screen-with-locked-levels-and-stars-finished-prototype/',
      'http://www.emanueleferonato.com/2014/11/21/html5-phaser-tutorial-how-to-create-a-level-selection-screen-with-locked-levels-and-stars/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 52,
    name: 'lighting',
    title: 'Lighting',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'lighting.jpg'
    ],
    references: [
      'http://codepen.io/jdnic'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 53,
    name: 'magick',
    title: 'Magick',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'magick.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/05/12/phaser-tutorial-html5-player-movement-as-seen-in-ipad-magick-game-using-mostly-tile-maps/',
      'http://www.emanueleferonato.com/tag/magick/'
    ],
    tags: [
      'player movement'
    ],
    inspirations: [
      'https://itunes.apple.com/us/app/magick/id657336338'
    ],
    demos: [
      'https://www.youtube.com/watch?v=WGeKW8gA3WM',
      'https://www.youtube.com/watch?v=gGRohOMgvDY'
    ]
  },
  {
    id: 55,
    name: 'mass-attack',
    title: 'Mass Attack',
    description: '',
    phaserVersion: '2.0.7',
    isPlayable: true,
    screenshots: [
      'mass-attack.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/08/05/create-an-html5-game-like-mass-attack-with-phaser-just-using-tweens-well-almost/',
      'http://www.emanueleferonato.com/2017/09/19/mass-attack-html5-game-made-with-phaser-3-code-optimized-by-richard-davey/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 57,
    name: 'mikey-hooks',
    title: 'Mikey Hooks',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'mikey-hooks.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/09/29/html5-box2d-hook-like-the-one-seen-on-ios-mikey-hooks-game/',
      'http://www.emanueleferonato.com/2015/10/13/play-and-get-the-source-code-of-hookpod-a-flash-game-i-never-released/',
      'http://www.emanueleferonato.com/tag/mikey-hooks/'
    ],
    tags: [],
    inspirations: [
      'https://play.google.com/store/apps/details?id=com.noodlecake.mikeyhooks'
    ],
    demos: [
      'https://www.youtube.com/watch?v=aBsOanrh3Jk',
      'https://www.youtube.com/watch?v=yqdPRkMsroA'
    ]
  },
  {
    id: 58,
    name: 'monster-wants-candy',
    title: 'Monster Wants Candy',
    description: '',
    phaserVersion: '2.0.6',
    isPlayable: true,
    screenshots: [
      'monster-wants-candy.jpg'
    ],
    references: [
      'http://gamedevelopment.tutsplus.com/tutorials/getting-started-with-phaser-building-monster-wants-candy--cms-21723',
      'https://github.com/tutsplus/Monster-Wants-Candy-demo'
    ],
    tags: [],
    inspirations: [],
    demos: [
      'http://candy.enclavegames.com/'
    ]
  },
  {
    id: 60,
    name: 'one-tap-rpg',
    title: 'One Tap RPG',
    description: '',
    phaserVersion: '2.0.7',
    isPlayable: true,
    screenshots: [
      'one-tap-rpg.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/08/13/how-to-create-an-html5-rpg-physics-driven-game-with-phaser/',
      'http://www.emanueleferonato.com/tag/one-tap-rpg/'
    ],
    tags: [],
    inspirations: [
      'https://itunes.apple.com/it/app/id891234532'
    ],
    demos: []
  },
  {
    id: 64,
    name: 'particle-storm',
    title: 'Particle Storm',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'particle-storm.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/10/08/create-stunning-html5-particle-effects-with-phaser-particle-storm/',
      'http://www.emanueleferonato.com/wp-content/uploads/2015/10/particle01/',
      'http://phaser.io/shop/plugins/particlestorm'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 65,
    name: 'particle-to-sprite',
    title: 'Particle To Sprite',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'particle-to-sprite.jpg'
    ],
    references: [
      'http://codepen.io/codevinsky/pen/aocsr'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 66,
    name: 'paths-aliens',
    title: 'Paths - Aliens',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'paths-aliens.jpg'
    ],
    references: [],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 67,
    name: 'paths-face',
    title: 'Paths - Face',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'paths-face.jpg'
    ],
    references: [],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 68,
    name: 'paths-paths',
    title: 'Paths - Paths',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'paths-paths.jpg'
    ],
    references: [],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 69,
    name: 'phshare',
    title: 'Phshare',
    description: 'Sorry, I can not remember the source',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'phshare.jpg'
    ],
    references: [],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 71,
    name: 'platformer',
    title: 'Platformer',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'platformer.jpg'
    ],
    references: [
      'http://phaser.io/tutorials/making-your-first-phaser-game/index'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 73,
    name: 'pong',
    title: 'Pong',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'pong.jpg'
    ],
    references: [
      'https://github.com/zekechan/phaser-html5-tutorial-pong'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 76,
    name: 'rise-above',
    title: 'Rise Above',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: false,
    screenshots: [
      'rise-above.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/12/24/new-minibook-released-create-html5-vertical-endless-runner-cross-platform-games/',
      'http://www.emanueleferonato.com/2015/11/11/creation-of-an-html5-game-like-rise-above-using-phaser-and-arcade-physics-step-2/',
      'http://www.emanueleferonato.com/2015/10/23/creation-of-an-html5-game-like-rise-above-using-phaser-and-arcade-physics-step-1/',
      'http://www.emanueleferonato.com/tag/rise-above/'
    ],
    tags: [],
    inspirations: [
      'https://itunes.apple.com/nz/app/rise-above/id1039989390'
    ],
    demos: [
      'http://www.emanueleferonato.com/wp-content/uploads/2015/12/riseabove/'
    ]
  },
  {
    id: 78,
    name: 'rush-hour',
    title: 'Rush Hour',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'rush-hour.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2015/08/27/learn-how-phaser-manages-draggable-objects-by-making-the-html5-engine-behind-rush-hour-game/'
    ],
    tags: [],
    inspirations: [],
    demos: [
      'http://www.thinkfun.com/play-online/rush-hour/'
    ]
  },
  {
    id: 81,
    name: 'screenshake',
    title: 'Screenshake',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'screenshake.jpg'
    ],
    references: [
      'http://codepen.io/Problematic/pen/dPvBZN',
      'https://github.com/dmaslov/phaser-screen-shake',
      'https://github.com/dmaslov/super-coin-box'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 82,
    name: 'sea-life-vs-mines',
    title: 'Sea Life Vs Mines',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'sea-life-vs-mines.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/10/07/how-to-bring-your-html5-games-title-screen-to-life-in-a-minute-with-phaser/'
    ],
    tags: [
      'game title'
    ],
    inspirations: [],
    demos: []
  },
  {
    id: 85,
    name: 'sokoban-swipe',
    title: 'Sokoban Swipe',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'sokoban-swipe.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/11/13/html5-swipe-controlled-sokoban-game-made-with-phaser'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 86,
    name: 'space-hipster',
    title: 'Space Hipster',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'space-hipster.jpg'
    ],
    references: [
      'https://gamedevacademy.org/html5-phaser-tutorial-spacehipster-a-space-exploration-game/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 88,
    name: 'spellfall',
    title: 'Spellfall',
    description: '',
    phaserVersion: '2.0.7',
    isPlayable: true,
    screenshots: [
      'spellfall.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/08/19/how-to-create-an-html5-swap-and-match-3-game-engine-like-the-one-used-in-spellfall-ios-game-using-phaser/',
      'http://www.emanueleferonato.com/tag/spellfall/'
    ],
    tags: [],
    inspirations: [
      'https://itunes.apple.com/gb/app/spellfall-puzzle-rpg/id809027853'
    ],
    demos: []
  },
  {
    id: 90,
    name: 'splashscreen',
    title: 'Splashscreen',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'splashscreen.jpg'
    ],
    references: [],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 93,
    name: 'state-transition-plugin',
    title: 'State Transition Plugin',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'state-transition-plugin.jpg'
    ],
    references: [
      'https://github.com/aaccurso/phaser-state-transition-plugin'
    ],
    tags: [
      'state transition'
    ],
    inspirations: [],
    demos: [
      'http://aaccurso.github.io/phaser-state-transition-plugin/demo/'
    ]
  },
  {
    id: 94,
    name: 'straight-rush',
    title: 'Straight Rush',
    description: '',
    phaserVersion: '2.0.7',
    isPlayable: true,
    screenshots: [
      'straight-rush.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/07/30/html5-one-button-minigame-prototype-made-with-phaser/',
      'http://www.emanueleferonato.com/tag/one-button-game/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 95,
    name: 'string-avoider',
    title: 'String Avoider',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'string-avoider.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/06/10/html5-string-avoider-game-made-with-phaser/'
    ],
    tags: [],
    inspirations: [],
    demos: [
      'http://www.kongregate.com/games/triqui/stringy'
    ]
  },
  {
    id: 96,
    name: 'string-avoider-2',
    title: 'String Avoider 2',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'string-avoider-2.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2014/12/15/phaser-tutorial-creation-of-an-html5-string-avoider-prototype-working-on-mobile-devices-too/'
    ],
    tags: [],
    inspirations: [],
    demos: [
      'http://www.emanueleferonato.com/wp-content/uploads/2014/12/avoider/'
    ]
  },
  {
    id: 101,
    name: 'totem-destroyer',
    title: 'Totem Destroyer',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'totem-destroyer.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/wp-content/uploads/2014/04/totem/',
      'http://www.emanueleferonato.com/2014/04/21/html5-totem-destroyer-fully-working-prototype-using-phaser/',
      'http://www.emanueleferonato.com/2014/02/13/complete-html5-totem-destroyer-engine-using-physicsjs/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 102,
    name: 'trick-shot',
    title: 'Trick Shot',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: false,
    screenshots: [
      'trick-shot.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/wp-content/uploads/2015/09/trickshot3/',
      'http://www.emanueleferonato.com/2015/09/16/trick-shot-html5-game-prototype-part-3-handling-collisions/',
      'http://www.emanueleferonato.com/tag/trick-shot/'
    ],
    tags: [],
    inspirations: [
      'https://itunes.apple.com/us/app/trick-shot/id1016915419'
    ],
    demos: []
  },
  {
    id: 104,
    name: 'webfont',
    title: 'Webfont',
    description: '',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'webfont.jpg'
    ],
    references: [],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 108,
    name: 'samegame',
    title: 'Samegame',
    description: '',
    phaserVersion: '2.6.2',
    isPlayable: true,
    screenshots: [
      'samegame.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2016/11/17/html5-endless-samegame-engine-with-object-pooling-made-with-phaser/',
      'http://www.emanueleferonato.com/2016/10/13/10-successful-games-you-can-easily-create-starting-from-the-samegame-engine/',
      'http://www.emanueleferonato.com/tag/samegame/',
      'http://www.emanueleferonato.com/tag/knightfall/'
    ],
    tags: [],
    inspirations: [
      'http://www.kongregate.com/games/megadev/knightfall'
    ],
    demos: []
  },
  {
    id: 106,
    name: 'guessnext',
    title: 'GuessNext',
    description: '',
    phaserVersion: '2.6.2',
    isPlayable: true,
    screenshots: [
      'guessnext.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2017/03/10/html5-deck-of-cards-management-a-first-simple-game/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 107,
    name: 'dungeon-raid',
    title: 'Dungeon Raid',
    description: 'Dots game using "Dungeon Raid" engine',
    phaserVersion: '2.6.2',
    isPlayable: true,
    screenshots: [
      'dungeon-raid.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/tag/dungeon-raid/'
    ],
    tags: [],
    inspirations: [
      'http://dungeonraid.atspace.com/',
      'https://itunes.apple.com/in/app/dots-a-game-about-connecting/id632285588?mt=8'
    ],
    demos: []
  },
  {
    id: 109,
    name: 'revenge',
    title: 'Revenge',
    description: '',
    phaserVersion: '2.6.2',
    isPlayable: true,
    screenshots: [
      'revenge.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/tag/planet-revenge/'
    ],
    tags: [],
    inspirations: [
      'https://itunes.apple.com/us/app/planet-revenge/id1018002797?mt=8'
    ],
    demos: []
  },
  {
    id: 112,
    name: 'flipping-legend',
    title: 'Flipping Legend',
    description: '',
    phaserVersion: '2.6.2',
    isPlayable: true,
    screenshots: [
      'flipping-legend.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2017/08/01/html5-prototype-of-mobile-hit-flipping-legend-with-top-down-view-made-with-phaser-adding-holes/',
      'http://www.emanueleferonato.com/tag/flipping-legend/'
    ],
    tags: [],
    inspirations: [
      'https://play.google.com/store/apps/details?id=com.noodlecake.flippinglegend&hl=en'
    ],
    demos: []
  },
  {
    id: 117,
    name: 'wall-jump',
    title: 'Wall jump',
    description: '',
    phaserVersion: '2.6.2',
    isPlayable: true,
    screenshots: [
      'wall-jump.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2017/06/16/the-basics-behind-wall-jump-in-platform-games-html5-prototype-made-with-phaser-and-arcade-physics/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 118,
    name: 'twin-spin',
    title: 'TwinSpin',
    description: '',
    phaserVersion: '2.6.2',
    isPlayable: true,
    screenshots: [
      'twin-spin.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/tag/twinspin/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  },
  {
    id: 120,
    name: 'yeah-bunny',
    title: 'Yeah Bunny',
    description: '',
    phaserVersion: '2.6.2',
    isPlayable: true,
    screenshots: [
      'yeah-bunny.jpg'
    ],
    references: [
      'http://www.emanueleferonato.com/2017/06/21/html5-platformer-prototype-inspired-by-ios-hit-yeah-bunny-thanks-to-phaser-and-arcade-physics/',
      'http://www.emanueleferonato.com/tag/yeah-bunny/'
    ],
    tags: [],
    inspirations: [],
    demos: []
  }
];

function debugGameObject() {
  var nGames = games.length;
  var i = 0;

  console.log('nGames', nGames);
  for (i = 0; i < nGames; i++) {
    var text = `i: ${i}, id: ${games[i].id}, ${games[i].name}`;
    console.log(text);
  }
}

debugGameObject();
