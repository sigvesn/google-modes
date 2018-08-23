(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^if(?![a-zA-Z¡-￿_0-9_])/, /^(?:while|elif)(?![a-zA-Z¡-￿_0-9_])/, /^else(?![a-zA-Z¡-￿_0-9_])/, /^(?:try|finally)(?![a-zA-Z¡-￿_0-9_])/, /^for(?![a-zA-Z¡-￿_0-9_])/, /^except(?![a-zA-Z¡-￿_0-9_])/, /^async(?![a-zA-Z¡-￿_0-9_])/, /^print(?![a-zA-Z¡-￿_0-9_])/, /^in(?![a-zA-Z¡-￿_0-9_])/, /^as(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*/, /^with(?![a-zA-Z¡-￿_0-9_])/, /^def(?![a-zA-Z¡-￿_0-9_])/, /^class(?![a-zA-Z¡-￿_0-9_])/, /^(?:pass|break|continue)(?![a-zA-Z¡-￿_0-9_])/, /^del(?![a-zA-Z¡-￿_0-9_])/, /^(?:return|assert)(?![a-zA-Z¡-￿_0-9_])/, /^raise(?![a-zA-Z¡-￿_0-9_])/, /^import(?![a-zA-Z¡-￿_0-9_])/, /^from(?![a-zA-Z¡-￿_0-9_])/, /^(?:global|nonlocal)(?![a-zA-Z¡-￿_0-9_])/, /^[\*\+\-\~]/, /^(?:not|await)(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?![a-zA-Z¡-￿_0-9_])(?= *(?:\, *[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?![a-zA-Z¡-￿_0-9_]) *)*(?:\=|in(?![a-zA-Z¡-￿_0-9_])))/, /^(?:(?:0b|OB)[01_]+|(?:0o|0O)[0-7_]+|(?:0x|OX)[0-9a-fA-F_]+|(?:[0-9][0-9_]*(?:l|L|\.[0-9_]+)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?[jJ]?)/, /^(?:None|True|False)(?![a-zA-Z¡-￿_0-9_])/, /^self(?![a-zA-Z¡-￿_0-9_])/, /^yield(?![a-zA-Z¡-￿_0-9_])/, /^lambda(?![a-zA-Z¡-￿_0-9_])/, /^(?:abs|all|any|bin|bool|bytearray|callable|chr|classmethod|compile|complex|delattr|dict|dir|divmod|enumerate|eval|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip|__import__|NotImplemented|Ellipsis|__debug__|ascii|bytes|exec|print)(?![a-zA-Z¡-￿_0-9_])/, /^(?:(?:\^|\&|\||\<\<|\>\>|\+|\-|\*\*?|\@|\/|\%|\/)\=?|\=|\<|\>|\=\=|\>\=|\<\=|\<\>|\!\=)/, /^(?:or|and|in|is(?: +not)?|not(?: +in)?)(?![a-zA-Z¡-￿_0-9_])/, /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?=\()/, [7, "stillIndented"], /^[a-zA-Z¡-￿__][a-zA-Z¡-￿_0-9_]*(?= *\=)/, /^(?:\*|\*\*)/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    ["\n", 4,
     2, 8, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[27], -1,
     3, "keyword", e[17], -1,
     3, "keyword", e[19], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[20], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[22], -1,
     3, "atom", e[25], -1,
     3, "atom", e[26], -1,
     3, "keyword", e[31], -1,
     3, "builtin", e[29], -1,
     3, "builtin", e[7], -1,
     3, "operator", e[30], -1,
     3, "operator", e[21], -1,
     3, "number", e[24], -1,
     2, 52, -1, {"name":"string","token":"string"},
     3, "variable", e[10], -1,
     3, "comment", /^\#.*/, -1,
     /^[^]/, -1],
    [/^[ \t]/, 6,
     3, "comment", /^\#.*/, 6,
     "\\\n", 6,
     [0, /^(?=\n)/, [7, "maySkipNewline"]], 7,
     0, -1],
    ["\n", 6],
    [3, "keyword", e[0], 9,
     3, "keyword", e[1], 9,
     3, "keyword", e[2], 15,
     3, "keyword", e[3], 15,
     3, "keyword", e[4], 19,
     3, "keyword", e[5], 29,
     3, "keyword", e[6], 39,
     1, 54, -1,
     2, 67, 41, {"name":"Annotation","token":"meta"},
     3, "builtin", e[7], 45,
     1, 75, 47],
    [1, 6, 10],
    [1, 105, 11],
    [1, 6, 12],
    [":", 13],
    [1, 6, 14],
    [1, 112, -1],
    [1, 6, 16],
    [":", 17],
    [1, 6, 18],
    [1, 112, -1],
    [1, 6, 20],
    [1, 118, 21],
    [1, 6, 22],
    [3, "keyword", e[8], 23],
    [1, 6, 24],
    [1, 105, 25],
    [1, 6, 26],
    [":", 27],
    [1, 6, 28],
    [1, 112, -1],
    [1, 6, 30],
    [1, 105, 31,
     0, 32],
    [1, 6, 33],
    [1, 6, 34],
    [3, "keyword", e[9], 35,
     0, 32],
    [":", 36],
    [1, 6, 37],
    [1, 6, 38],
    [3, "def", e[10], 32],
    [1, 112, -1],
    [1, 6, 40],
    [1, 54, -1],
    [1, 6, 42],
    [2, 124, 43, {"name":"ArgList"},
     0, 43],
    [1, 6, 44],
    ["\n", -1],
    [1, 6, 46],
    [2, 124, -1, {"name":"ArgList"},
     1, 105, -1],
    [1, 6, 48],
    [";", 49,
     "\n", -1],
    [1, 6, 50],
    [1, 75, 51,
     0, 51],
    [1, 6, 48],
    [/^[uUrRfFbB]+(?=[\'\"])/, 53,
     1, 129, -1],
    [1, 129, -1],
    [3, "keyword", e[11], 55,
     3, "keyword", e[12], 61,
     3, "keyword", e[13], 65],
    [1, 6, 56],
    [1, 134, 57],
    [1, 6, 58],
    [":", 59],
    [1, 6, 60],
    [1, 112, -1],
    [1, 6, 62],
    [3, "def", e[10], 63],
    [1, 6, 64],
    [2, 148, -1, {"name":"FuncDef"}],
    [1, 6, 66],
    [2, 157, -1, {"name":"ClassDef"}],
    ["@", 68],
    [1, 6, 69],
    [e[10], 70],
    [1, 6, 71],
    [".", 72,
     0, -1],
    [1, 6, 73],
    [e[10], 74],
    [1, 6, 71],
    [3, "keyword", e[14], -1,
     3, "keyword", e[15], 76,
     3, "keyword", e[16], 78,
     3, "keyword", e[17], 80,
     3, "keyword", e[18], 86,
     3, "keyword", e[19], 88,
     3, "keyword", e[20], 99,
     1, 164, 101,
     1, 105, -1],
    [1, 6, 77],
    [1, 105, -1],
    [1, 6, 79],
    [1, 105, -1,
     0, -1],
    [1, 6, 81],
    [1, 105, 82,
     0, 82],
    [1, 6, 83],
    [3, "keyword", e[19], 84,
     0, -1],
    [1, 6, 85],
    [1, 105, -1],
    [1, 6, 87],
    [1, 134, -1],
    [1, 6, 89],
    [".", 90,
     1, 105, 91,
     0, 91],
    [1, 6, 89],
    [1, 6, 92],
    [3, "keyword", e[18], 93],
    [1, 6, 94],
    ["*", -1,
     "(", 95,
     1, 170, -1],
    [1, 6, 96],
    [1, 184, 97,
     0, 97],
    [1, 6, 98],
    [")", -1],
    [1, 6, 100],
    [1, 198, -1],
    [1, 6, 102],
    [3, "operator", "=", 103],
    [1, 6, 104],
    [1, 105, -1],
    [3, "operator", e[21], 106,
     3, "keyword", e[22], 106,
     1, 204, 107],
    [1, 6, 105],
    [1, 6, 108],
    [1, 214, 109,
     3, "keyword", e[8], 110,
     ",", 110,
     0, -1],
    [1, 6, 108],
    [1, 6, 111],
    [1, 105, 109],
    [1, 75, 113,
     2, 225, -1, {"name":"indentedBody"}],
    [1, 6, 114],
    [";", 115,
     "\n", -1],
    [1, 6, 116],
    [1, 75, 117,
     0, 117],
    [1, 6, 114],
    [3, "def", e[23], 119,
     1, 231, 119],
    [1, 6, 120],
    [",", 121,
     0, -1],
    [1, 6, 122],
    [3, "def", e[23], 123,
     1, 231, 123,
     0, 123],
    [1, 6, 120],
    ["(", 125],
    [1, 6, 126],
    [1, 236, 127,
     0, 127],
    [1, 6, 128],
    [")", -1],
    ["'''", 130,
     "\"\"\"", 132,
     /^(?:\'(?:\\.|(?!\').)*\'|\"(?:\\.|(?!\").)*\")/, -1],
    ["\\", 131,
     [0, /^(?!\'\'\')/, /^[^]/], 130,
     "'''", -1],
    [/^[^]/, 130],
    ["\\", 133,
     [0, /^(?!\"\"\")/, /^[^]/], 132,
     "\"\"\"", -1],
    [/^[^]/, 132],
    [1, 250, 135],
    [1, 6, 136],
    [3, "keyword", e[9], 137,
     0, 139],
    [1, 6, 138],
    [3, "def", e[10], 139],
    [1, 6, 140],
    [",", 141,
     0, -1],
    [1, 6, 142],
    [1, 250, 143,
     0, 144],
    [1, 6, 145],
    [1, 6, 140],
    [3, "keyword", e[9], 146,
     0, 144],
    [1, 6, 147],
    [3, "def", e[10], 144],
    [2, 257, 149, {"name":"ParamList"}],
    [1, 6, 150],
    ["->", 151,
     0, 153],
    [1, 6, 152],
    [1, 105, 153],
    [1, 6, 154],
    [":", 155],
    [1, 6, 156],
    [1, 112, -1],
    [3, "type def", e[10], 158],
    [1, 6, 159],
    [2, 124, 160, {"name":"ArgList"},
     0, 160],
    [1, 6, 161],
    [":", 162],
    [1, 6, 163],
    [1, 112, -1],
    [3, "def", e[23], 165],
    [1, 6, 166],
    [",", 167,
     0, -1],
    [1, 6, 168],
    [3, "def", e[23], 169,
     0, 169],
    [1, 6, 166],
    [e[10], 171],
    [1, 6, 172],
    [3, "keyword", e[9], 173,
     0, 175],
    [1, 6, 174],
    [3, "def", e[10], 175],
    [1, 6, 176],
    [",", 177,
     0, -1],
    [1, 6, 178],
    [e[10], 179,
     0, 180],
    [1, 6, 181],
    [1, 6, 176],
    [3, "keyword", e[9], 182,
     0, 180],
    [1, 6, 183],
    [3, "def", e[10], 180],
    [e[10], 185],
    [1, 6, 186],
    [3, "keyword", e[9], 187],
    [1, 6, 188],
    [3, "def", e[10], 189,
     0, 189],
    [1, 6, 190],
    [",", 191,
     0, -1],
    [1, 6, 192],
    [e[10], 193,
     0, 194],
    [1, 6, 195],
    [1, 6, 190],
    [3, "keyword", e[9], 196],
    [1, 6, 197],
    [3, "def", e[10], 194,
     0, 194],
    [3, "variable", e[10], 199],
    [1, 6, 200],
    [",", 201,
     0, -1],
    [1, 6, 202],
    [3, "variable", e[10], 203,
     0, 203],
    [1, 6, 200],
    [2, 262, -1, {"name":"ParenExpr"},
     2, 267, -1, {"name":"ArrayLiteral"},
     2, 272, -1, {"name":"ObjectLiteral"},
     3, "number", e[24], -1,
     0, 205,
     3, "operator", "...", -1,
     3, "atom", e[25], -1,
     3, "atom", e[26], -1,
     3, "keyword", e[27], 208,
     3, "keyword", e[28], 212,
     3, "builtin", e[29], -1,
     3, "variable callee", e[32], -1,
     3, "variable", e[10], -1],
    [2, 52, 206, {"name":"string","token":"string"}],
    [1, 6, 207],
    [0, 205,
     0, -1],
    [1, 6, 209],
    [3, "keyword", e[19], 210,
     1, 105, -1,
     0, -1],
    [1, 6, 211],
    [1, 105, -1],
    [1, 6, 213],
    [2, 279, -1, {"name":"LambdaDef"}],
    [3, "operator", e[30], 215,
     3, "keyword", e[31], 215,
     2, 124, -1, {"name":"ArgList"},
     2, 284, -1, {"name":"Subscript"},
     ".", 217,
     3, "keyword", e[0], 219],
    [1, 6, 216],
    [1, 105, -1],
    [1, 6, 218],
    [3, "property callee", e[32], -1,
     3, "property", e[10], -1],
    [1, 6, 220],
    [1, 105, 221],
    [1, 6, 222],
    [3, "keyword", e[2], 223,
     0, -1],
    [1, 6, 224],
    [1, 105, -1],
    ["\n", 226],
    [/^[ \t]/, 226,
     3, "comment", /^\#.*/, 226,
     "\n", 226,
     e[33], 227],
    [2, 8, 228, {"name":"Statement"}],
    [/^[ \t]/, 228,
     3, "comment", /^\#.*/, 228,
     "\n", 228,
     0, 229],
    [0, 230,
     0, -1],
    [e[33], 227],
    [3, "operator", e[21], 232,
     3, "keyword", e[22], 232,
     1, 204, 233],
    [1, 6, 231],
    [1, 6, 234],
    [1, 289, 235,
     0, -1],
    [1, 6, 234],
    [3, "operator", "**", 237,
     3, "meta", e[34], 238,
     0, 237],
    [1, 6, 239],
    [1, 6, 240],
    [1, 250, 241],
    ["=", 237],
    [1, 6, 242],
    [",", 243,
     0, -1],
    [1, 6, 244],
    [3, "operator", "**", 245,
     3, "meta", e[34], 246,
     0, 245,
     0, 247],
    [1, 6, 248],
    [1, 6, 249],
    [1, 6, 242],
    [1, 250, 247],
    ["=", 245],
    [3, "operator", e[21], 251,
     3, "keyword", e[22], 251,
     1, 204, 252],
    [1, 6, 250],
    [1, 6, 253],
    [1, 300, 254,
     3, "keyword", e[8], 255,
     0, -1],
    [1, 6, 253],
    [1, 6, 256],
    [1, 105, 254],
    ["(", 258],
    [1, 6, 259],
    [1, 311, 260,
     0, 260],
    [1, 6, 261],
    [")", -1],
    ["(", 263],
    [1, 6, 264],
    [1, 337, 265,
     0, 265],
    [1, 6, 266],
    [")", -1],
    ["[", 268],
    [1, 6, 269],
    [1, 337, 270,
     0, 270],
    [1, 6, 271],
    ["]", -1],
    ["{", 273],
    [1, 6, 274],
    [1, 344, 275,
     0, 277],
    [1, 6, 276],
    [1, 350, 277,
     0, 277],
    [1, 6, 278],
    ["}", -1],
    [1, 361, 280,
     0, 280],
    [1, 6, 281],
    [":", 282],
    [1, 6, 283],
    [1, 250, -1],
    ["[", 285],
    [1, 6, 286],
    [1, 379, 287],
    [1, 6, 288],
    ["]", -1],
    [3, "operator", e[30], 290,
     3, "keyword", e[31], 290,
     2, 124, -1, {"name":"ArgList"},
     2, 284, -1, {"name":"Subscript"},
     ".", 292,
     3, "keyword", e[0], 294],
    [1, 6, 291],
    [1, 231, -1],
    [1, 6, 293],
    [3, "property callee", e[32], -1,
     3, "property", e[10], -1],
    [1, 6, 295],
    [1, 231, 296],
    [1, 6, 297],
    [3, "keyword", e[2], 298,
     0, -1],
    [1, 6, 299],
    [1, 231, -1],
    [3, "operator", e[30], 301,
     3, "keyword", e[31], 301,
     2, 124, -1, {"name":"ArgList"},
     2, 284, -1, {"name":"Subscript"},
     ".", 303,
     3, "keyword", e[0], 305],
    [1, 6, 302],
    [1, 250, -1],
    [1, 6, 304],
    [3, "property callee", e[32], -1,
     3, "property", e[10], -1],
    [1, 6, 306],
    [1, 250, 307],
    [1, 6, 308],
    [3, "keyword", e[2], 309,
     0, -1],
    [1, 6, 310],
    [1, 250, -1],
    [2, 405, 312, {"name":"op","token":"operator"},
     0, 312],
    [1, 6, 313],
    [3, "atom", e[26], 314,
     3, "def", e[10], 314],
    [1, 6, 315],
    [":", 316,
     0, 317],
    [1, 6, 318],
    [1, 6, 319],
    [1, 250, 317],
    [3, "operator", "=", 320,
     0, 322],
    [1, 6, 321],
    [1, 250, 322],
    [1, 6, 323],
    [",", 324,
     0, -1],
    [1, 6, 325],
    [2, 405, 326, {"name":"op","token":"operator"},
     0, 326,
     0, 327],
    [1, 6, 328],
    [1, 6, 323],
    [3, "atom", e[26], 329,
     3, "def", e[10], 329],
    [1, 6, 330],
    [":", 331,
     0, 332],
    [1, 6, 333],
    [1, 6, 334],
    [1, 250, 332],
    [3, "operator", "=", 335,
     0, 327],
    [1, 6, 336],
    [1, 250, 327],
    [3, "variable-2", [0, /^[a-zA-Z¡-￿__]/, /^[a-zA-Z¡-￿_0-9_]*/, [7, "isCompLocal"]], 338,
     1, 250, 340],
    [1, 6, 339],
    [1, 300, 340,
     0, 340],
    [1, 6, 341],
    [",", 342,
     1, 350, -1,
     0, -1],
    [1, 6, 343],
    [1, 408, -1,
     0, -1],
    [2, 414, 345, {"name":"DictProp"}],
    [1, 6, 346],
    [",", 347,
     0, -1],
    [1, 6, 348],
    [2, 414, 349, {"name":"DictProp"},
     0, 349],
    [1, 6, 346],
    [3, "keyword", e[6], 351,
     0, 351],
    [1, 6, 352],
    [3, "keyword", e[4], 353],
    [1, 6, 354],
    [1, 118, 355],
    [1, 6, 356],
    [3, "keyword", e[8], 357],
    [1, 6, 358],
    [1, 105, 359],
    [1, 6, 360],
    [1, 350, -1,
     1, 421, -1,
     0, -1],
    [3, "operator", e[35], 362,
     0, 362],
    [1, 6, 363],
    [3, "def", e[10], 364],
    [1, 6, 365],
    [3, "operator", "=", 366,
     0, 368],
    [1, 6, 367],
    [1, 250, 368],
    [1, 6, 369],
    [",", 370,
     0, -1],
    [1, 6, 371],
    [3, "operator", e[35], 372,
     0, 372,
     0, 373],
    [1, 6, 374],
    [1, 6, 369],
    [3, "def", e[10], 375],
    [1, 6, 376],
    [3, "operator", "=", 377,
     0, 373],
    [1, 6, 378],
    [1, 250, 373],
    [1, 250, 380,
     ":", 381],
    [1, 6, 382],
    [1, 6, 383],
    [":", 384,
     0, 390],
    [1, 250, 385,
     0, 385],
    [1, 6, 386],
    [1, 6, 387],
    [1, 250, 390,
     0, 390],
    [":", 388,
     0, 390],
    [1, 6, 389],
    [1, 250, 390,
     0, 390],
    [1, 6, 391],
    [",", 392,
     0, -1],
    [1, 6, 393],
    [1, 250, 394,
     ":", 395,
     0, 396],
    [1, 6, 397],
    [1, 6, 398],
    [1, 6, 391],
    [":", 399,
     0, 396],
    [1, 250, 400,
     0, 400],
    [1, 6, 401],
    [1, 6, 402],
    [1, 250, 396,
     0, 396],
    [":", 403,
     0, 396],
    [1, 6, 404],
    [1, 250, 396,
     0, 396],
    ["*", 406],
    [1, 6, 407],
    [/^\*?/, -1],
    [1, 250, 409],
    [1, 6, 410],
    [",", 411,
     0, -1],
    [1, 6, 412],
    [1, 250, 413,
     0, 413],
    [1, 6, 410],
    [3, "operator", "**", 415,
     1, 250, 417],
    [1, 6, 416],
    [1, 250, -1],
    [1, 6, 418],
    [":", 419,
     0, -1],
    [1, 6, 420],
    [1, 250, -1],
    [3, "keyword", e[0], 422],
    [1, 6, 423],
    [1, 105, 424],
    [1, 6, 425],
    [1, 350, -1,
     1, 421, -1,
     0, -1]
  ];
  var start = 0;
  var token = 5;

  var grammar = /*#__PURE__*/Object.freeze({
    nodes: nodes,
    start: start,
    token: token
  });

  function getScope(context, scopes) {
    for (var cx = context; cx; cx = cx.parent)
      { if (scopes.indexOf(cx.name) > -1) { return cx } }
  }
  function isLocal(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
    return false
  }

  var varRE = /(^|\s)variable($|\s)/;

  function markLocals(type, scopes, stream, state) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (scope.locals.indexOf(name) == -1) { scope.locals.push(name); }
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  var scopes = ["LambdaDef", "FuncDef", "ClassDef"];
  var allowNewline = ["ArgList", "ParamList", "ParenExpr", "ArrayLiteral", "ObjectLiteral", "SubScript", "DictProp"];

  function maySkipNewline(_line, _pos, cx) {
    return cx && allowNewline.indexOf(cx.name) > -1
  }

  function countIndent(line, pos) {
    var count = 0;
    for (var i = pos - 1; i >= 0; i--) {
      var ch = line.charCodeAt(i);
      if (ch === 32) { count++; }
      else if (ch === 9) { count += 4; }
      else { break }
    }
    return count
  }

  function stillIndented(line, pos, cx) {
    while (cx && cx.name != "Statement") { cx = cx.parent; }
    return cx && countIndent(line, pos) > countIndent(cx.startLine, cx.startPos)
  }

  function isCompLocal(line, pos) {
    var id = /\w*$/.exec(line.slice(0, pos))[0];
    var forDecl = /\s*for\s*(\w+)/.exec(line.slice(pos));
    return forDecl ? forDecl[1] == id : false
  }

  function aligned(cx) {
    return !/^\s*((#.*)?$)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    ObjectLiteral: "}",
    ArrayLiteral: "]", SubScript: "]",
    ParamList: ")", ArgList: ")", ParenExpr: ")"
  };

  function findIndent(cx, textAfter, curLine, config) {
    if (!cx) { return 0 }
    if (cx.name == "string") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    if (brack) {
      if (curLine != cx.startLine && aligned(cx))
        { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 1 }

      var closed = textAfter && textAfter.charAt(0) == brack;
      var flat = closed && brack != ")" || curLine == cx.startLine;
      return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) + (flat ? 0 : 2 * config.indentUnit)
    } else if (cx.name == "indentedBody") {
      for (;; cx = cx.parent) {
        if (!cx) { return config.indentUnit }
        if (cx.name == "Statement") { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) + config.indentUnit }
      }
    } else {
      return findIndent(cx.parent, textAfter, curLine, config) +
        ((cx.name == "DictProp" || cx.name == "Statement") && cx.startLine != curLine ? 2 * config.indentUnit : 0)
    }
  }

  function pythonMarkLocals(token$$1, stream, state) {
    var marked = markLocals(token$$1, scopes, stream, state);
    if (token$$1 == "def") {
      var cx = state.context;
      while (cx && scopes.indexOf(cx.name) == -1) { cx = cx.parent; }
      if (cx && cx.name == "ClassDef") { marked = "def property"; }
      else if (marked == "def local") { marked = "variable-2"; }
    }
    return marked
  }  

  var PythonMode = (function (superclass) {
    function PythonMode(conf) {
      superclass.call(this, grammar, {
        predicates: {maySkipNewline: maySkipNewline, stillIndented: stillIndented, isCompLocal: isCompLocal}
      });
      this.conf = conf;
    }

    if ( superclass ) PythonMode.__proto__ = superclass;
    PythonMode.prototype = Object.create( superclass && superclass.prototype );
    PythonMode.prototype.constructor = PythonMode;

    PythonMode.prototype.token = function token$$1 (stream, state) {
      return pythonMarkLocals(superclass.prototype.token.call(this, stream, state), stream, state)
    };

    PythonMode.prototype.indent = function indent (state, textAfter, line) {
      return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
    };

    return PythonMode;
  }(CodeMirror.GrammarMode));

  PythonMode.prototype.electricInput = /^\s*[\}\]\)]$/;
  PythonMode.prototype.closeBrackets = {triples: "'\""};
  PythonMode.prototype.lineComment = "#";
  PythonMode.prototype.fold = "indent";

  CodeMirror.defineMode("google-python", function (conf) { return new PythonMode(conf); });

})));
