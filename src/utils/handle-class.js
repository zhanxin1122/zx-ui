/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-08-09 11:09:19
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-09 14:58:15
 * @Description:
 * @Email: kudo777kid@Gmail.com
 */

export function addClass(origin, newClass) {
  let classArr = [];
  let newClassArr = [];
  let reg = /(^\s*)|(\s*$)/g;
  if (origin && newClass) {
    // 如果原 className 不止一个
    if (reg.test(origin)) {
      classArr = origin.split(' ');
    } else {
      classArr[0] = origin;
    }
    // 如果新 className 不止一个
    if (reg.test(newClass)) {
      newClassArr = newClass.split(' ');
    } else {
      newClassArr.push(newClass);
    }

    for (let i = 0, len = newClassArr.length; i < len; i++) {
      if (classArr.indexOf(newClassArr[i]) === -1) {
        classArr.push(newClassArr[i]);
      } else {
        // 如果已有，啥都不做
        continue;
      }
    }
    return classArr.join(' ');
  } else {
    return origin;
  }
}

export function removeClass(origin, removeName) {
  let classArr = [];
  let removeClassArr = [];
  let reg = /(^\s*)|(\s*$)/g;
  if (origin && removeName) {
    // 如果原 className 不止一个
    if (reg.test(origin)) {
      classArr = origin.split(' ');
    } else {
      classArr[0] = origin;
    }
    // 如果需移除的 className 不止一个
    if (reg.test(removeName)) {
      removeClassArr = removeName.split(' ');
    } else {
      removeClassArr.push(removeName);
    }

    let index = 0; // 定义需要删除的下标
    for (let i = 0, len = removeClassArr.length; i < len; i++) {
      index = classArr.indexOf(removeClassArr[i]);
      if (index === -1) {
        // 如果没有，返回原值
        continue;
      } else {
        classArr.splice(index, 1);
      }
    }
    return classArr.join(' ');
  } else {
    return origin;
  }

  // if (origin) {
  //   classArr = origin.split(' ');
  //   let index = classArr.indexOf(newClass);
  //   if (index === -1) {
  //     // 如果没有，返回原值
  //     return origin;
  //   } else {
  //     classArr.splice(index, 1);
  //     return classArr.join(' ');
  //   }
  // }
}
