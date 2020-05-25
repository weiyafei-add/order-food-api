"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  async login() {
    const { ctx } = this;
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    let sql =
      "SELECT username FROM user WHERE username = '" +
      username +
      "' AND password = '" +
      password +
      "' ";
    const result = await this.app.mysql.query(sql);
    if (result.length > 0) {
      ctx.session.openId = new Date().getTime();
      console.log(ctx.session.openId);
      ctx.body = { data: "ok", openId: ctx.session.openId };
    } else {
      ctx.body = { data: "无用户信息" };
    }
  }
  // 获取分类
  async getCate() {
    const { ctx } = this;
    let result = await this.app.mysql.select("type");
    ctx.body = result;
  }
  // 获取全部食物
  async getAllFood() {
    const { ctx } = this;
    let allFood = await this.app.mysql.select("food");
    ctx.body = allFood;
  }
  // 获取中餐(首页)分类数据
  async getIndexFood() {
    const { ctx } = this;
    let query = "SELECT * FROM food WHERE cateType = 1";
    let indexFood = await this.app.mysql.query(query);
    ctx.body = indexFood;
  }
  // 获取西餐数据
  async getWesternFood() {
    const { ctx } = this;
    let query = "SELECT * FROM food WHERE cateType = 2";
    let westernFood = await this.app.mysql.query(query);
    ctx.body = westernFood;
  }
}

module.exports = HomeController;
