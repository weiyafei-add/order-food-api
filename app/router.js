"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.post("/login", controller.home.login);
  router.get("/categray", controller.home.getCate);
  router.get("/getAllFood", controller.home.getAllFood);
  router.get("/getIndexFood", controller.home.getIndexFood);
  router.get("/getWesternFood", controller.home.getWesternFood);
};
