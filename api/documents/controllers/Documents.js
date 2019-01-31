'use strict';

/**
 * Documents.js controller
 *
 * @description: A set of functions called "actions" for managing `Documents`.
 */

module.exports = {

  /**
   * Retrieve documents records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.documents.search(ctx.query);
    } else {
      return strapi.services.documents.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a documents record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.documents.fetch(ctx.params);
  },

  /**
   * Count documents records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.documents.count(ctx.query);
  },

  /**
   * Create a/an documents record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.documents.add(ctx.request.body);
  },

  /**
   * Update a/an documents record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.documents.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an documents record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.documents.remove(ctx.params);
  }
};
