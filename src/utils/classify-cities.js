/*
 * @Author: Sephiroth·D·Kid
 * @Date: 2018-07-19 10:25:17
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-07-19 15:52:05
 * @Description: 用于归类省份的方法
 * @Email: kudo777kid@Gmail.com
 */

/**
 * 用于归类省份
 * @param {*} dataSource 数据源
 * @param {*} provinceArr 包含省份及编号对象的数组 eg: [{ name: '广东省', provinceCode: '44'}]
 */
export function classifyCities(dataSource, provinceArr) {
  let filterArr = [];
  let filterResult = {}; // 中间件对象
  if (provinceArr.length > 0) {
    provinceArr.forEach(item => {
      filterResult = {
        name: item.name,
        cities: dataSource
          .filter(city => {
            return city.provinceCode === item.provinceCode;
          })
          .map(res => {
            return {
              id: res.id,
              name: res.name,
              cityLevel: res.cityLevel,
              administrationLevel: res.administrationLevel
            };
          })
      };
      filterArr.push(filterResult);
    });
  }
  return filterArr;
}

/*
administrationLevel:"Z"
cityLevel:1
code:"1199"
createAt:"May 23, 2018 5:00:00 AM"
createBy:"liaobin"
id:1
name:"北京"
provinceCode:"11"
*/
