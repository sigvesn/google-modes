(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^for(?![a-zA-Z\¡-\￿_0-9])/, /^while(?![a-zA-Z\¡-\￿_0-9])/, /^try(?![a-zA-Z\¡-\￿_0-9])/, /^do(?![a-zA-Z\¡-\￿_0-9])/, /^if(?![a-zA-Z\¡-\￿_0-9])/, /^switch(?![a-zA-Z\¡-\￿_0-9])/, /^(?:break|continue)(?![a-zA-Z\¡-\￿_0-9])/, /^assert(?![a-zA-Z\¡-\￿_0-9])/, /^return(?![a-zA-Z\¡-\￿_0-9])/, /^throw(?![a-zA-Z\¡-\￿_0-9])/, /^default(?![a-zA-Z\¡-\￿_0-9])/, /^case(?![a-zA-Z\¡-\￿_0-9])/, /^import(?![a-zA-Z\¡-\￿_0-9])/, /^catch(?![a-zA-Z\¡-\￿_0-9])/, /^finally(?![a-zA-Z\¡-\￿_0-9])/, /^(?:public|protected|private|abstract|static|final|transient|volatile|synchronized|native|strictfp|const)(?![a-zA-Z\¡-\￿_0-9])/, /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*/, /^else(?![a-zA-Z\¡-\￿_0-9])/, /^(?:\+\+|\-\-|\!|\~|\&|\*)/, /^(?:true|false|null)(?![a-zA-Z\¡-\￿_0-9])/, /^this(?![a-zA-Z\¡-\￿_0-9])/, /^super(?![a-zA-Z\¡-\￿_0-9])/, /^(?:(?:0x|0X)[0-9_a-fA-F]+|(?:0b|0B)[01_]+|(?:[0-9][0-9_]*(?:\.[0-9_]*)?|\.[0-9_]+)(?:[eE][\+\-]?[0-9_]+)?)[LlDdFf]?/, /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*(?=\()/, /^(?:\+\+|\-\-)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^instanceof(?![a-zA-Z\¡-\￿_0-9])/, /^[A-Z][a-zA-Z\¡-\￿_0-9]*/, /^(?:boolean|char|byte|short|int|long|float|double|void)(?![a-zA-Z\¡-\￿_0-9])/, /^enum(?![a-zA-Z\¡-\￿_0-9])/, /^(?:class|interface)(?![a-zA-Z\¡-\￿_0-9])/, /^package(?![a-zA-Z\¡-\￿_0-9])/, /^implements(?![a-zA-Z\¡-\￿_0-9])/, /^extends(?![a-zA-Z\¡-\￿_0-9])/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z\¡-\￿_])/, /^\@[a-zA-Z\¡-\￿_]+/, /^[a-zA-Z\¡-\￿_]+/, [0, /^(?!\*\/|\@|\{)/, /^[^]/], /^new(?![a-zA-Z\¡-\￿_0-9])/, /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]* *\.(?!\.)/, [0, [5, 371], /^[a-zA-Z\¡-\￿_]/, /^[a-zA-Z\¡-\￿_0-9]*/], /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*(?= *\()/, /^throws(?![a-zA-Z\¡-\￿_0-9])/, /^(?:\.\.\.)?/];
var nodes = [
  [1, 5, 2],
  [/^[^]/, 0],
  [2, 6, 3, {"name":"Statement"}],
  [0, 0,
   0, 1],
  [3, "keyword", e[29], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[17], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[33], -1,
   3, "keyword", e[32], -1,
   3, "keyword", e[20], -1,
   3, "keyword", e[39], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[43], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[26], -1,
   3, "type", e[28], -1,
   3, "type", e[27], -1,
   3, "atom", e[19], -1,
   3, "variable callee", e[23], -1,
   3, "variable", e[16], -1,
   3, "number", e[22], -1,
   2, 102, -1, {"name":"string","token":"string"},
   3, "operator", e[18], -1,
   3, "operator", e[24], -1,
   3, "operator", e[25], -1,
   2, 105, -1, {"name":"comment","token":"comment"},
   /^[^]/, -1],
  [[1, " ", "\t", "\n"], 5,
   2, 105, 5, {"name":"comment","token":"comment"},
   0, -1],
  [3, "keyword", e[0], 7,
   3, "keyword", e[1], 21,
   3, "keyword", e[2], 25,
   3, "keyword", e[3], 43,
   3, "keyword", e[4], 51,
   3, "keyword", e[5], 59,
   3, "keyword", e[6], 63,
   3, "keyword", e[7], 67,
   3, "keyword", e[8], 75,
   3, "keyword", e[9], 79,
   3, "keyword", e[10], 83,
   3, "keyword", e[11], 84,
   [0, /^[a-zA-Z\¡-\￿_]/, /^[a-zA-Z\¡-\￿_0-9]*/, [5, 111]], 83,
   3, "keyword", e[12], 87,
   ";", -1,
   2, 112, 94, {"name":"BeforeStatement"},
   1, 114, 96],
  [1, 5, 8],
  ["(", 9],
  [1, 5, 10],
  [2, 6, 11, {"name":"Statement"}],
  [1, 5, 12],
  [1, 114, 13,
   0, 13],
  [1, 5, 14],
  [";", 15],
  [1, 5, 16],
  [1, 114, 17,
   0, 17],
  [1, 5, 18],
  [")", 19],
  [1, 5, 20],
  [2, 6, -1, {"name":"Statement"}],
  [1, 5, 22],
  [2, 135, 23, {"name":"CondExpr"}],
  [1, 5, 24],
  [2, 6, -1, {"name":"Statement"}],
  [1, 5, 26],
  [2, 140, 27, {"name":"Block"}],
  [1, 5, 28],
  [3, "keyword", e[13], 29,
   3, "keyword", e[14], 30,
   0, -1],
  [1, 5, 31],
  [1, 5, 32],
  ["(", 33],
  [2, 140, -1, {"name":"Block"}],
  [1, 5, 34],
  [3, "keyword", e[15], 35,
   1, 144, 35,
   1, 151, 36],
  [1, 5, 34],
  [1, 5, 37],
  [3, "def", e[16], 38],
  [1, 5, 39],
  [")", 40],
  [1, 5, 41],
  [2, 140, 42, {"name":"Block"}],
  [1, 5, 28],
  [1, 5, 44],
  [2, 6, 45, {"name":"Statement"}],
  [1, 5, 46],
  [3, "keyword", e[1], 47],
  [1, 5, 48],
  [2, 135, 49, {"name":"CondExpr"}],
  [1, 5, 50],
  [";", -1],
  [1, 5, 52],
  [2, 135, 53, {"name":"CondExpr"}],
  [1, 5, 54],
  [2, 6, 55, {"name":"Statement"}],
  [1, 5, 56],
  [3, "keyword", e[17], 57,
   0, -1],
  [1, 5, 58],
  [2, 6, -1, {"name":"Statement"}],
  [1, 5, 60],
  [2, 135, 61, {"name":"CondExpr"}],
  [1, 5, 62],
  [2, 140, -1, {"name":"Block"}],
  [1, 5, 64],
  [/^(?:[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*)?/, 65],
  [1, 5, 66],
  [";", -1],
  [1, 5, 68],
  [1, 114, 69],
  [1, 5, 70],
  [":", 71,
   0, 72],
  [1, 5, 73],
  [1, 5, 74],
  [1, 114, 72],
  [";", -1],
  [1, 5, 76],
  [1, 114, 77,
   0, 77],
  [1, 5, 78],
  [";", -1],
  [1, 5, 80],
  [1, 114, 81],
  [1, 5, 82],
  [";", -1],
  [1, 5, 85],
  [1, 5, 86],
  [":", -1],
  [1, 114, 83],
  [1, 5, 88],
  [3, "keyword", /^static(?![a-zA-Z\¡-\￿_0-9])/, 89,
   0, 89],
  [1, 5, 90],
  [/^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]* *\./, 91,
   "*", 92,
   3, "def", e[16], 92],
  [1, 5, 90],
  [1, 5, 93],
  [";", -1],
  [1, 5, 95],
  [1, 162, -1],
  [1, 5, 97],
  [",", 98,
   1, 5, 99],
  [1, 5, 100],
  [";", -1],
  [1, 114, 101],
  [1, 5, 97],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 103],
  ["\\", 104,
   /^(?!\")./, 103,
   "\"", -1],
  [/^[^]/, 103],
  [/^\/\*\*(?!\/)/, 106,
   "/*", 110,
   /^\/\/.*/, -1],
  [0, 107,
   2, 208, 106, {"name":"doccomment.braced"},
   0, 108],
  [e[38], 109],
  [2, 216, 108, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 107,
   0, 106],
  [[0, /^(?!\*\/)/, /^[^]/], 110,
   "*/", -1],
  [e[34], 111,
   /^\:(?!\:)/, -1],
  [3, "keyword", e[15], 113,
   1, 144, 113,
   0, -1],
  [1, 5, 112],
  [3, "operator", e[18], 115,
   3, "atom", e[19], 118,
   3, "keyword", e[20], 118,
   3, "keyword", e[21], 118,
   3, "number", e[22], 118,
   2, 102, 118, {"name":"string","token":"string"},
   2, 224, 118, {"name":"NewExpr"},
   2, 244, 118, {"name":"Lambda"},
   3, "variable callee", e[23], 118,
   3, "variable", e[16], 118,
   2, 253, 116, {"name":"ParenExpr"}],
  [1, 5, 114],
  [1, 5, 117],
  [1, 114, 118,
   0, 118],
  [1, 5, 119],
  [2, 258, 120, {"name":"ArgList"},
   "[", 121,
   ".", 122,
   3, "operator", e[24], 120,
   3, "operator", e[25], 123,
   3, "keyword", e[26], 123,
   3, "operator", "?", 124,
   0, -1],
  [1, 5, 119],
  [1, 5, 125],
  [1, 5, 126],
  [1, 5, 127],
  [1, 5, 128],
  [1, 114, 129],
  [2, 263, 120, {"name":"TypeArgs"},
   3, "property callee", e[42], 120,
   3, "property", e[16], 120],
  [1, 114, 120],
  [1, 114, 130],
  [1, 5, 131],
  [1, 5, 132],
  ["]", 120],
  [3, "operator", ":", 133],
  [1, 5, 134],
  [1, 114, 120],
  ["(", 136],
  [1, 5, 137],
  [1, 114, 138,
   0, 138],
  [1, 5, 139],
  [")", -1],
  ["{", 141],
  [1, 5, 142],
  [2, 6, 143, {"name":"Statement"},
   "}", -1],
  [1, 5, 142],
  [2, 268, 145, {"name":"AnnotationHead","token":"meta"}],
  [1, 5, 146],
  ["(", 147,
   0, -1],
  [1, 5, 148],
  [1, 276, 149],
  [1, 5, 150],
  [")", -1],
  [1, 144, 152,
   0, 153],
  [1, 5, 151],
  [3, "meta", e[40], 154,
   3, "type", e[27], 155,
   3, "type", e[28], 155],
  [1, 5, 153],
  [1, 5, 156],
  ["[", 157,
   2, 263, 158, {"name":"TypeArgs"},
   0, -1],
  [1, 5, 159],
  [1, 5, 156],
  [1, 114, 160,
   0, 160],
  [1, 5, 161],
  ["]", 158],
  [2, 140, -1, {"name":"Block"},
   3, "keyword", e[29], 163,
   3, "keyword", e[30], 171,
   3, "keyword", e[31], 185,
   [5, 290], 192],
  [1, 5, 164],
  [3, "def", e[16], 165],
  [1, 5, 166],
  [3, "keyword", e[32], 167,
   0, 168],
  [1, 5, 169],
  [1, 5, 170],
  [1, 294, 168],
  [2, 300, -1, {"name":"EnumBody"}],
  [1, 5, 172],
  [3, "def", e[16], 173],
  [1, 5, 174],
  [2, 310, 175, {"name":"TypeParams"},
   0, 175],
  [1, 5, 176],
  [3, "keyword", e[33], 177,
   0, 178],
  [1, 5, 179],
  [1, 5, 180],
  [1, 151, 178],
  [3, "keyword", e[32], 181,
   0, 182],
  [1, 5, 183],
  [1, 5, 184],
  [1, 294, 182],
  [2, 315, -1, {"name":"ClassBody"}],
  [1, 5, 186],
  [e[16], 187],
  [1, 5, 188],
  [".", 189,
   ";", -1],
  [1, 5, 190],
  [e[16], 191],
  [1, 5, 188],
  [1, 151, 193],
  [1, 5, 194],
  [1, 319, 195],
  [1, 5, 196],
  [2, 324, -1, {"name":"FunctionDef"},
   3, "operator", "=", 197,
   0, 198],
  [1, 5, 199],
  [1, 5, 200],
  [1, 114, 198],
  [",", 201,
   ";", -1],
  [1, 5, 202],
  [1, 319, 203],
  [1, 5, 204],
  [3, "operator", "=", 205,
   0, 206],
  [1, 5, 207],
  [1, 5, 200],
  [1, 114, 206],
  ["{", 209],
  [3, "tag", e[35], 210,
   3, "tag", e[36], 211,
   2, 329, 215, {"name":"doccomment.type","token":"type"}],
  [e[34], 210,
   "{", 212,
   0, 211],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 211,
   0, 215],
  [2, 329, 213, {"name":"doccomment.type","token":"type"}],
  ["}", 214],
  [e[34], 214,
   3, "def", e[37], 211,
   0, 211],
  ["}", -1],
  [3, "tag", e[35], 217,
   3, "tag", e[36], 221],
  [e[34], 217,
   "{", 218,
   0, 221],
  [2, 329, 219, {"name":"doccomment.type","token":"type"}],
  ["}", 220],
  [e[34], 220,
   3, "def", e[37], 221,
   0, 221],
  [0, 222,
   2, 208, 221, {"name":"doccomment.braced"},
   0, -1],
  [e[38], 223],
  [0, 222,
   0, 221],
  [3, "keyword", e[39], 225],
  [1, 5, 226],
  [2, 263, 227, {"name":"TypeArgs"},
   0, 227],
  [1, 5, 228],
  [1, 144, 229,
   0, 230],
  [1, 5, 228],
  [3, "meta", e[40], 231,
   3, "type", e[27], 232,
   3, "type", e[28], 232],
  [1, 5, 230],
  [1, 5, 233],
  [2, 263, 234, {"name":"TypeArgs"},
   1, 5, 235],
  [1, 5, 233],
  ["[", 236,
   2, 258, 237, {"name":"ArgList"},
   0, 237],
  [1, 5, 238],
  [1, 5, 239],
  [1, 114, 240,
   0, 240],
  [2, 315, -1, {"name":"ClassBody"},
   0, -1],
  [1, 5, 241],
  ["]", 242],
  [1, 5, 243],
  [2, 330, -1, {"name":"ArrayInitializer"},
   0, -1],
  [[5, 335], 245,
   [5, 338], 246],
  [3, "def", e[16], 247,
   2, 341, 247, {"name":"ParamList"}],
  [2, 346, 248, {"name":"SimpleParamList"}],
  [1, 5, 249],
  [1, 5, 250],
  [3, "operator", "->", 251],
  [3, "operator", "->", 251],
  [1, 5, 252],
  [2, 140, -1, {"name":"Block"},
   1, 114, -1],
  ["(", 254],
  [1, 5, 255],
  [1, 114, 256,
   0, 256],
  [1, 5, 257],
  [")", -1],
  ["(", 259],
  [1, 5, 260],
  [1, 351, 261],
  [1, 5, 262],
  [")", -1],
  ["<", 264],
  [1, 5, 265],
  [1, 357, 266],
  [1, 5, 267],
  [">", -1],
  ["@", 269],
  [1, 5, 270],
  [e[16], 271],
  [1, 5, 272],
  [".", 273,
   0, -1],
  [1, 5, 274],
  [e[16], 275],
  [1, 5, 272],
  [e[41], 277,
   0, 278,
   0, -1],
  [1, 5, 279],
  [1, 5, 280],
  ["=", 278],
  [1, 144, 281,
   1, 114, 281],
  [1, 5, 282],
  [",", 283,
   0, -1],
  [1, 5, 284],
  [e[41], 285,
   0, 286],
  [1, 5, 287],
  [1, 5, 288],
  ["=", 286],
  [1, 144, 289,
   1, 114, 289],
  [1, 5, 282],
  [1, 144, 291,
   0, 292],
  [1, 5, 290],
  [3, "meta", e[40], 293,
   3, "type", e[27], -1,
   3, "type", e[28], -1],
  [1, 5, 292],
  [1, 151, 295,
   0, -1],
  [1, 5, 296],
  [",", 297,
   0, -1],
  [1, 5, 298],
  [1, 151, 299],
  [1, 5, 296],
  ["{", 301],
  [1, 5, 302],
  [1, 374, 303],
  [1, 5, 304],
  [";", 305,
   0, 308],
  [1, 5, 306],
  [2, 392, 307, {"name":"ClassItem"},
   0, 308],
  [1, 5, 306],
  [1, 5, 309],
  ["}", -1],
  ["<", 311],
  [1, 5, 312],
  [1, 399, 313],
  [1, 5, 314],
  [">", -1],
  ["{", 316],
  [1, 5, 317],
  [2, 392, 318, {"name":"ClassItem"},
   "}", -1],
  [1, 5, 317],
  [3, "def", e[16], 320],
  [1, 5, 321],
  ["[", 322,
   0, -1],
  [1, 5, 323],
  ["]", -1],
  [2, 341, 325, {"name":"ParamList"}],
  [1, 5, 326],
  [2, 415, 327, {"name":"ThrowsClause"},
   0, 327],
  [1, 5, 328],
  [";", -1,
   2, 140, -1, {"name":"Block"}],
  [1, 418, -1],
  ["{", 331],
  [1, 5, 332],
  [1, 351, 333],
  [1, 5, 334],
  ["}", -1],
  [3, "def", e[16], 336,
   2, 341, 336, {"name":"ParamList"}],
  [1, 5, 337],
  [3, "operator", "->", -1],
  [2, 346, 339, {"name":"SimpleParamList"}],
  [1, 5, 340],
  [3, "operator", "->", -1],
  ["(", 342],
  [1, 5, 343],
  [1, 422, 344],
  [1, 5, 345],
  [")", -1],
  ["(", 347],
  [1, 5, 348],
  [1, 438, 349],
  [1, 5, 350],
  [")", -1],
  [1, 114, 352,
   0, -1],
  [1, 5, 353],
  [",", 354,
   0, -1],
  [1, 5, 355],
  [1, 114, 356],
  [1, 5, 353],
  [1, 151, 358,
   "?", 359,
   0, -1],
  [1, 5, 360],
  [1, 5, 361],
  [",", 362,
   0, -1],
  [3, "keyword", e[33], 363,
   3, "keyword", e[21], 363],
  [1, 5, 364],
  [1, 5, 365],
  [1, 151, 366,
   "?", 367],
  [1, 151, 358],
  [1, 5, 360],
  [1, 5, 368],
  [3, "keyword", e[33], 369,
   3, "keyword", e[21], 369],
  [1, 5, 370],
  [1, 151, 366],
  [e[16], 372],
  [1, 5, 373],
  ["=", -1],
  [1, 144, 375,
   0, 375,
   0, -1],
  [1, 5, 376],
  [3, "def", e[16], 377],
  [1, 5, 378],
  [2, 258, 379, {"name":"ArgList"},
   0, 379],
  [1, 5, 380],
  [2, 140, 381, {"name":"Block"},
   0, 381],
  [1, 5, 382],
  [",", 383,
   0, -1],
  [1, 5, 384],
  [1, 144, 385,
   0, 385],
  [1, 5, 386],
  [3, "def", e[16], 387],
  [1, 5, 388],
  [2, 258, 389, {"name":"ArgList"},
   0, 389],
  [1, 5, 390],
  [2, 140, 391, {"name":"Block"},
   0, 391],
  [1, 5, 382],
  [2, 112, 393, {"name":"BeforeStatement"}],
  [1, 5, 394],
  [2, 310, 395, {"name":"TypeParams"},
   3, "def", e[42], 396,
   1, 162, -1],
  [1, 5, 397],
  [1, 5, 398],
  [3, "def", e[16], 396],
  [2, 324, -1, {"name":"FunctionDef"}],
  [1, 144, 400,
   3, "def", e[16], 401,
   0, -1],
  [1, 5, 399],
  [1, 5, 402],
  [3, "keyword", e[33], 403,
   1, 5, 404],
  [1, 5, 405],
  [",", 406,
   0, -1],
  [1, 151, 407],
  [1, 5, 408],
  [1, 5, 402],
  [1, 144, 409,
   3, "def", e[16], 410],
  [1, 5, 408],
  [1, 5, 411],
  [3, "keyword", e[33], 412,
   1, 5, 404],
  [1, 5, 413],
  [1, 151, 414],
  [1, 5, 411],
  [3, "keyword", e[43], 416],
  [1, 5, 417],
  [1, 294, -1],
  [/^(?!\}|\*\/)/, 419,
   0, -1],
  ["{", 420,
   /^[^]/, 418],
  [1, 418, 421],
  [/^\}?/, 418],
  [1, 144, 423,
   3, "keyword", e[15], 423,
   1, 144, 423,
   1, 151, 424,
   0, -1],
  [1, 5, 422],
  [1, 5, 425],
  [e[44], 426],
  [1, 5, 427],
  [3, "keyword", e[20], 428,
   1, 319, 428],
  [1, 5, 429],
  [",", 430,
   0, -1],
  [1, 5, 431],
  [1, 144, 432,
   3, "keyword", e[15], 432,
   1, 144, 432,
   1, 151, 433],
  [1, 5, 431],
  [1, 5, 434],
  [e[44], 435],
  [1, 5, 436],
  [3, "keyword", e[20], 437,
   1, 319, 437],
  [1, 5, 429],
  [3, "def", e[16], 439,
   0, -1],
  [1, 5, 440],
  [",", 441,
   0, -1],
  [1, 5, 442],
  [3, "def", e[16], 443],
  [1, 5, 440]
];
var start = 0;
var token = 4;


var grammar = Object.freeze({
	nodes: nodes,
	start: start,
	token: token
});

function storeLocal(context, name, scopes) {
  for (var cx = context; cx; cx = cx.parent)
    { if (scopes.indexOf(cx.name) > -1)
      { return (cx.locals || (cx.locals = [])).push(name) } }
}
function isLocal(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
  return false
}

var varRE = /(^|\s)variable($|\s)/;

function markLocals(type, scopes, stream, state) {
  if (type == "def")
    { storeLocal(state.context, stream.current(), scopes); }
  else if (varRE.test(type) && !/qualified/.test(type) &&
           isLocal(state.context, stream.current()))
    { type = type.replace(varRE, "$1variable-2$2"); }
  return type
}

function hasSubStatement(context) {
  var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
  return m && m[1]
}

function isSwitch(context) {
  return context && context.name == "Statement" &&
    /^switch\b/.test(context.startLine.slice(context.startPos))
}

function isLabel(text) {
  return text && /^\s*(case|default)\b/.test(text)
}

function aligned(cx) {
  return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
}

var bracketed = {
  Block: "}", BlockOf: "}", ClassBody: "}", ObjectLiteral: "}", EnumBody: "}", ArrayInitializer: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", TemplateArgs: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">"
};

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr")
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function plus(result, add) {
  return typeof result == "number" ? result + add : result
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (config.align !== false && curLine != cx.startLine && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (cx.name == "Block" || cx.name == "ClassBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem") {
    var base = statementIndent(cx, config);
    if (!curLine && hasSubStatement(cx))
      { return base + (/^else\b/.test(textAfter) ? 0 : config.indentUnit) }
    var flat$1 = curLine == cx.startLine ||
        curLine && CodeMirror.countColumn(curLine, null, config.tabSize) <= base;
    return base + (flat$1 ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "ArrowRest") {
    return plus(findIndent(cx.parent, textAfter, cx.startLine, config), config.indentUnit)
  } else {
    return plus(findIndent(cx.parent, textAfter, curLine, config),
                cx.name == "InitializerList" ? 2 : cx.name == "ThrowsClause" ? 2 * config.indentUnit : 0)
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "TemplateHead")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, config)
}

var scopes = ["Block", "FunctionDef", "Lambda"];

var JavaMode = (function (superclass) {
  function JavaMode(conf) {
    superclass.call(this, grammar);
    this.indentConf = {align: false, tabSize: conf.tabSize, indentUnit: conf.indentUnit};
  }

  if ( superclass ) JavaMode.__proto__ = superclass;
  JavaMode.prototype = Object.create( superclass && superclass.prototype );
  JavaMode.prototype.constructor = JavaMode;

  JavaMode.prototype.token = function token$$1 (stream, state) {
    return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
  };

  JavaMode.prototype.indent = function indent$1 (state, textAfter, line) {
    return indent(state, textAfter, line, this.indentConf)
  };

  return JavaMode;
}(CodeMirror.GrammarMode));

JavaMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
JavaMode.prototype.blockCommentStart = "/*";
JavaMode.prototype.blockCommentEnd = "*/";
JavaMode.prototype.blockCommentContinue = " * ";
JavaMode.prototype.lineComment = "//";
JavaMode.prototype.fold = "brace";

CodeMirror.defineMode("google-java", function (conf) { return new JavaMode(conf); });

})));
