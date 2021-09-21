'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    updateConnection: async ctx => {
        const {status} = ctx.request.body
        console.log(status,ctx.params.id)
        const result = strapi.services["user-connections"].update({"id":ctx.params.id},{"status":status})
        ctx.send(result);

    }
};
