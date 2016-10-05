'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }

  async loginAction(){
    if(this.isAjax()){
      let { username, password } = this.param();

      let user = await this.model('user').where({username,password}).find();
      if(!think.isEmpty(user)){
        await this.session('user',{
          id: user.id, username
        });
      }

      return this.json({errno:200, redirect:'/'});
    }
    else{
      return this.display();
    }
  }

  async logoutAction(){
    await this.session();
    return this.redirect('/');
  }

  async joinAction(){
    if(this.isAjax()){
      let { username, password } = this.param();
      await this.model('user').add({ username, password });
      return this.json({errno:200, redirect:'/auth/login'})
    }else{
      return this.display();
    }
  }

  async resetAction(){
    return this.display();
  }
}
