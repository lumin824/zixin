'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){

    let itemTree = await this.model('menu').itemTree('admin');
    this.assign('itemTree', itemTree);
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
    if(this.isAjax()){
      let { page, rows, searchField, searchString, searchOper, sidx, sord, key} = this.param();

      let data = await this.model('article').page(page, rows).countSelect();
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

  async articleEditAction(){
    if(this.isAjax()){
      let { oper, id, ...data} = this.param();
      if(oper == 'edit'){
        await this.model('article').where({id}).update(data);
      }else if(oper == 'add'){
        await this.model('article').add(data);
      }else if(oper == 'del'){
        await this.model('article').where({id:id.split(',')}).delete();
      }
      return this.json({});
    }else{
      return this.display();
    }
  }

  async articleTypeAction(){
    if(this.isAjax()){
      let { page, rows, searchField, searchString, searchOper, sidx, sord, key} = this.param();

      let data = await this.model('article_type').page(page, rows).countSelect();
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

  async articleTypeEditAction(){
    if(this.isAjax()){
      let { oper, id, ...data} = this.param();
      if(oper == 'edit'){
        await this.model('article_type').where({id}).update(data);
      }else if(oper == 'add'){
        await this.model('article_type').add(data);
      }else if(oper == 'del'){
        await this.model('article_type').where({id:id.split(',')}).delete();
      }
      return this.json({});
    }else{
      return this.display();
    }
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

  async taskTypeAction(){
    if(this.isAjax()){
      let { page, rows, searchField, searchString, searchOper, sidx, sord, key} = this.param();

      let data = await this.model('task_type').page(page, rows).countSelect();
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

  async taskTypeEditAction(){
    if(this.isAjax()){
      let { oper, id, ...data} = this.param();
      if(oper == 'edit'){
        await this.model('task_type').where({id}).update(data);
      }else if(oper == 'add'){
        await this.model('task_type').add(data);
      }else if(oper == 'del'){
        await this.model('task_type').where({id:id.split(',')}).delete();
      }
      return this.json({});
    }else{
      return this.display();
    }
  }

  async taskAction(){
    if(this.isAjax()){
      let { page, rows, searchField, searchString, searchOper, sidx, sord, key} = this.param();

      let data = await this.model('task').page(page, rows).countSelect();
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

  async taskEditAction(){
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

  async menuAction(){
    if(this.isAjax()){
      let { page, rows, searchField, searchString, searchOper, sidx, sord, key} = this.param();

      let data = await this.model('menu').page(page, rows).countSelect();
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

}
