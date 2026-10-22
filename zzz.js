var myIdx = 115200;
var myIdxDate = '2026-08-18';
var myBaseIdx = ddd.findIndex(row => row[0] === myIdxDate);

var zzz = ddd.map((row, i) => [
  row[0],                               // [日期]
  row[1].slice().sort((a, b) => a - b), // [順球×5]
  row[1],                               // [落球×5]
  myIdx + (myBaseIdx - i)                   // [期次 index]
]);

var sss = ddd.map(row => [
  row[0], 
  '日一二三四五六'[new Date(row[0]).getDay()], 
  row[1].slice().sort()
]);

var Color = [
['#f2f2f2','#e6e6ff','#e6ffe6','#ffe6f9','#fff9e6','#e6ffff','#f5f5f0','#f2e6ff','#fff2e6','#f0f0f5','#f9e6ff','#ffe6e6'],
['#bfbfbf','#8080ff','#80ff80','#ff80df','#ffdf80','#80ffff','#ccccb3','#bf80ff','#ffbf80','#b3b3cc','#df80ff','#ff8080'],
['#8c8c8c','#1a1aff','#1aff1a','#ff1ac6','#ffc61a','#1affff','#a3a375','#8c1aff','#ff8c1a','#7575a3','#c61aff','#ff1a1a'],
['#595959','#0000b3','#00b300','#b30086','#b38600','#00b3b3','#6b6b47','#5900b3','#b35900','#47476b','#8600b3','#b30000'],
['#262626','#00004d','#004d00','#4d0039','#4d3900','#004d4d','#2e2e1f','#26004d','#4d2600','#1f1f2e','#39004d','#4d0000']
];
