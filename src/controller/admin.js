'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    let menu = await this.model('menu').where({code:'admin'}).find();
    let menuItem = [];
    if(!think.isEmpty(menu)){
      menuItem = await this.model('menu_item').where({menu_id:menu.id}).select();
    }

    this.assign('menu', menu);
    this.assign('menuItem', menuItem);
    return this.display();
  }

  async companyAction(){

    if(this.isAjax()){
      let { page, rows, searchField, searchString, searchOper, sidx, sord, key} = this.param();

      let data = await this.model('company').page(page, rows).countSelect();
      return this.json({
        page: data.currentPage,
        records: data.count,
        rows: data.data,
        total: data.totalPages,
      });
    }else{
      return this.display();
    }
  }

  async companyEditAction(){
    if(this.isAjax()){
      let { oper, id, ...data} = this.param();
      if(oper == 'edit'){
        await this.model('company').where({id}).update(data);
      }else if(oper == 'add'){
        await this.model('company').add(data);
      }else if(oper == 'del'){
        await this.model('company').where({id:id.split(',')}).delete();
      }
      return this.json({});
    }else{
      return this.display();
    }

  }

  async articleAction(){
    return this.display();
  }

  async userAction(){
    if(this.isAjax()){
      let { page, rows, searchField, searchString, searchOper, sidx, sord, key} = this.param();

      let data = await this.model('user').page(page, rows).countSelect();
      return this.json({
        page: data.currentPage,
        records: data.count,
        rows: data.data,
        total: data.totalPages,
      });
    }else{
      return this.display();
    }
  }

  async reqAction(){
    if(this.isAjax()){
      let { page, rows, searchField, searchString, searchOper, sidx, sord, key} = this.param();

      let data = await this.model('user_req').page(page, rows).countSelect();
      return this.json({
        page: data.currentPage,
        records: data.count,
        rows: data.data,
        total: data.totalPages,
      });
    }else{
      return this.display();
    }
  }

  async taskAction(){
    return this.display();
  }

  async menuAction(){
    return this.display();
  }
}
