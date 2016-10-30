'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    let { type_id } = this.param();

    if(type_id){
      let articleList = await this.model('article').where({type_id}).select();
      this.assign('articleList', articleList);
    }
    return this.display();
  }
}
