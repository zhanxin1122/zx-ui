/*
 * @Author: Mr.Tian 
 * @Date: 2018-08-24 08:34:56 
 * @Last Modified by:   Mr.Tian 
 * @Last Modified time: 2018-08-24 08:34:56 
 */
import Card from './src/card';

Card.install = function(Vue) {
  Vue.component(Card.name, Card);
};

export default Card;
