'use strict';

import Base from './base.js';
import moment from 'moment';
import _ from 'lodash';

export default class extends Base {

  async __before(){
    let user = await this.session('user');
    if(think.isEmpty(user)){
      return this.redirect('/auth/login');
    }

    if(!this.isAjax()){
      let menu = await this.model('menu').where({code:'home'}).find();
      let menuItem = [];
      if(!think.isEmpty(menu)){
        menuItem = await this.model('menu_item').where({menu_id:menu.id}).select();
      }

      this.assign('menu', menu);
      this.assign('menuItem', menuItem);
    }
  }

  indexAction(){
    return this.display();
  }

  async reqAction(){
    let { id } = await this.session('user');
    let list = await this.model('user_req').where({user_id:id}).select();
    list = _(list).map(o=>({
      ...o, create_time: moment.unix(o.create_time).format('YYYY-MM-DD HH:mm:ss')
    })).value();
    this.assign('list', list);
    return this.display();
  }

  async reqFormAction(){
    if(this.isAjax()){
      let { ...data } = this.param();
      let { id } = await this.session('user');
      await this.model('user_req').add({user_id:id, content:JSON.stringify(data), create_time:moment().unix()});
      return this.json({errno:200, redirect:'/user/req'})
    }else{
      return this.display();
    }
  }
}
