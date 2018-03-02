var Handlebars = require('hbs');
var hbs = Handlebars.registerHelper('json', function(context) {
    return JSON.stringify(context);
});
module.exports={
  hbs
}
// var register = function(Handlebars) {
//     var helpers = {
//     json: function(context) {
//         return JSON.stringify(context);
//     },
//     };
//
// if (Handlebars && typeof Handlebars.registerHelper === "function") {
//     for (var prop in helpers) {
//         Handlebars.registerHelper(prop, helpers[prop]);
//     }
// } else {
//     return helpers;
// }
//
// };
//
// module.exports.register = register;
// module.exports.helpers = register(null);
