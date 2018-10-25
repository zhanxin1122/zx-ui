/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-07-26 10:22:41
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-07-26 14:03:04
 * @Description: 简易 hash 值实现
 * @Email: kudo777kid@Gmail.com
 */

function getRandomStr(randomFlag, min, max) {
  let hashStr = '';
  let range = min;
  let pos = 0; // 中间件
  let arr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }
  for (var i = 0; i < range; i++) {
    pos = Math.round(Math.random() * (arr.length - 1));
    hashStr += arr[pos];
  }
  return hashStr;
}

// function computeHashCode(str) {
//   var h = 0;
//   var len = str.length;
//   var t = 2147483648;
//   for (var i = 0; i < len; i++) {
//     h = 31 * h + str.charCodeAt(i);
//     if (h > 2147483647) h %= t; //java int溢出则取模
//   }
//   /*var t = -2147483648 * 2;
//    while (h > 2147483647) {
//    h += t
//    }*/
//   return h;
// }

export function getHashCodeByTime() {
  //定义一个时间戳，计算与1970年相差的毫秒数  用来获得唯一时间
  let timestamp = new Date().valueOf();
  let myRandom = getRandomStr(false, 8);
  let hashCode = myRandom + timestamp.toString();
  return hashCode;
}
