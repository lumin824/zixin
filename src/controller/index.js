'use strict';

import Base from './base.js';

export default class extends Base {
  async indexAction(){

    let menu = await this.model('menu').where({code:'home'}).find();
    let menuItem = [];
    if(!think.isEmpty(menu)){
      menuItem = await this.model('menu_item').where({menu_id:menu.id}).select();
    }

    this.assign('menu', menu);
    this.assign('menuItem', menuItem);

    let { key } = this.param();

    if(key){
      let list = await this.model('company').where({'name|uscc':['like',`%${key}%`]}).select();
      this.assign('list', list);
    }

    return this.display();
  }
}
