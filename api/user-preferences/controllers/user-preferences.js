'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    index: async ctx => {
        const {id} = ctx.params;
        const entity = await strapi.services["user-preferences"].findOne({'users_permissions_user.id': id})
        const userDetails =await strapi.query('user', 'users-permissions').findOne({ id: id });
        let preferences ={}
        if(entity.marital_status.length)
        {
          preferences.marital_status=entity.marital_status
        }
        if(entity.religion.length)
        {
          preferences.religion=entity.religion
        }
        if(entity.caste.length)
        {
          preferences.caste=entity.caste
        }
        if(entity.mother_tongue.length)
        {
          preferences.mother_tongue=entity.mother_tongue
        }
        preferences.sex = userDetails.user_profile.sex === 'male'? 'female':'male'
        const result = await strapi.services["user-profile"].find(preferences)
        ctx.send(result);
      },
};
