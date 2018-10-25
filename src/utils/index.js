/*
 * @Author: zhanxin
 * @Date: 2018-07-27 08:18:32
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-08-03 18:21:01
 * @Description: 组件工具函数
 */

// 合并两个对象
// export const merge = (orignal, target) => {
//   if (target === null || target === undefined) {
//     return orignal;
//   }
//   for (let key in target) {
//     if (key === 'series') {
//       console.log(target[key] instanceof Object);
//     }
//     if (target.hasOwnProperty(key)) {
//       if (typeof target[key] === 'object' && Object.prototype === target[key].__proto__) {
//         !orignal[key] && (orignal[key] = {});
//         merge(orignal[key], target[key]);
//       } else {
//         if (target[key] !== undefined) {
//           orignal[key] = target[key];
//         }
//       }
//     }
//   }
//   return orignal;
// };

const singleMerge = function(orignal, target) {
  if (target === null || target === undefined) {
    return orignal;
  }
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      if (typeof target[key] === 'object' && Object.prototype === target[key].__proto__) {
        !orignal[key] && (orignal[key] = {});
        singleMerge(orignal[key], target[key]);
      } else {
        if (target[key] !== undefined) {
          orignal[key] = target[key];
        }
      }
    }
  }
  return orignal;
};

// 深层合并多个对象
export const merge = (orignal, ...target) => {
  if (target.length === 0) {
    return orignal;
  }
  if (target.length === 1) {
    return singleMerge(orignal, target[0]);
  }
  if (target.length > 1) {
    const currentTarget = target.splice(0, 1);
    return singleMerge(orignal, merge(currentTarget, target));
  }
};

export function formatTime(second) {
  let h = Math.floor(second / 3600);
  let m = Math.floor((second % 3600) / 60);
  let s = Math.floor(second % 60);
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  return `${h}:${m}:${s}`;
}

export const toPoint = percent => {
  var str = percent.replace('%', '');
  str = str / 100;
  return str;
};
