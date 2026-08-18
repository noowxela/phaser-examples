// Cookie name for last score
export const COOKIE_LAST = 'lastscore';

// Cookie name for top score
export const COOKIE_TOP = 'topscore';

// Milliseconds of one frame at 60 frames per second
export const MILLISECONDS_PER_FRAME = 1000 / 60;

// Time delay before keys autorepeat
export const DAS_DELAY = 16 * MILLISECONDS_PER_FRAME;

// Time interval between keys repetitions
export const AUTOREPEAT_INTERVAL = 6 * MILLISECONDS_PER_FRAME;

// Time interval between table steps when softdrop is active
export const SOFTDROP_DELAY = 1.5 * MILLISECONDS_PER_FRAME;

// Frames per cell
export const GRAVITY_LEVELS = [
    48, // lv 0
    43,
    38,
    33,
    28,
    23,
    18,
    13,
    8,
    6,
    5,
    5,
    5, // lv 12
    4,
    4,
    4, // lv 15
    3,
    3,
    3, // lv 18
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2, // lv 28
    28 // lv 29+
]
export const PIECE_TYPES = new Map();
PIECE_TYPES.set(1, 'O');
PIECE_TYPES.set(2, 'T');
PIECE_TYPES.set(3, 'Z');
PIECE_TYPES.set(4, 'S');
PIECE_TYPES.set(5, 'J');
PIECE_TYPES.set(6, 'L');
PIECE_TYPES.set(7, 'I');

export const SHAPE_SPAWN = new Map();
SHAPE_SPAWN.set(1, { col: 4, row: 19 });
SHAPE_SPAWN.set(2, { col: 3, row: 20 });
SHAPE_SPAWN.set(3, { col: 3, row: 20 });
SHAPE_SPAWN.set(4, { col: 3, row: 20 });
SHAPE_SPAWN.set(5, { col: 3, row: 20 });
SHAPE_SPAWN.set(6, { col: 3, row: 20 });
SHAPE_SPAWN.set(7, { col: 3, row: 21 });

export const SHAPES = {
    // Piece O
    1: [
        [
            [1, 1], [1, 1]
        ]
    ],
    // Piece T
    2: [
        [
            [0, 1, 0], [1, 1, 1], [0, 0, 0] // Initial position
        ],
        [
            [0, 1, 0], [1, 1, 0], [0, 1, 0]
        ],
        [
            [0, 0, 0], [1, 1, 1], [0, 1, 0]
        ],
        [
            [0, 1, 0], [0, 1, 1], [0, 1, 0]
        ]
    ],
    // Piece Z
    3: [
        [
            [0, 1, 1], [1, 1, 0], [0, 0, 0] // Initial position
        ],
        [
            [0, 1, 0], [0, 1, 1], [0, 0, 1]
        ]
    ],
    // Piece S
    4: [
        [
            [1, 1, 0], [0, 1, 1], [0, 0, 0] // Initial position
        ],
        [
            [0, 0, 1], [0, 1, 1], [0, 1, 0]
        ]
    ],
    // Piece J
    5: [
        [
            [0, 0, 1], [1, 1, 1], [0, 0, 0] // Initial position
        ],
        [
            [1, 1, 0], [0, 1, 0], [0, 1, 0]
        ],
        [
            [0, 0, 0], [1, 1, 1], [1, 0, 0]
        ],
        [
            [0, 1, 0], [0, 1, 0], [0, 1, 1]
        ]
    ],
    // Piece L
    6: [
        [
            [1, 0, 0], [1, 1, 1], [0, 0, 0] // Initial position
        ],
        [
            [0, 1, 0], [0, 1, 0], [1, 1, 0]
        ],
        [
            [0, 0, 0], [1, 1, 1], [0, 0, 1]
        ],
        [
            [0, 1, 1], [0, 1, 0], [0, 1, 0]
        ]
    ],
    // Piece I
    7: [
        [
            [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0] // Initial position
        ],
        [
            [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]
        ]
    ]
} // end pieces