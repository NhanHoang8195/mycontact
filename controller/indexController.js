var contact = require('../models').contact;

module.exports={
  getIndex(req, res) {
    return contact.findAll().then(contacts =>{
      var data = JSON.stringify(contacts);
      console.log(data);
      res.render('index', {

        result: contacts
      })
    }).catch(errors => {
      res.render('index', {
        result: errors
      })
    })
  },

  addContact(req, res) {
    return contact.create(req.body
    ).then(contacts=>{
      res.redirect('/')
    }).catch(errors=>{
      res.render('contacts', {
        result: errors
      })
    })
    console.log(req.body);
  }
}
