'use strict';
/**
 * model
 */
import _ from 'lodash';

export default class extends think.model.base {

  async itemTree(code){
    let menu = await this.where({code}).find();
    let itemTree = [];
    if(menu){
      let list = await this.model('menu_item').where({menu_id:menu.id}).select();

      _.each(list, o=>{
        let children = _.filter(list, {parent_id:o.id});
        if(children.length) o.children = children;
      });

      itemTree = _.filter(list, {parent_id:null});
    }
    console.log(itemTree);

    return itemTree;
  }
}
