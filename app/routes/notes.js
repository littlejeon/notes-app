import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('note');
  },
  actions:{
    addNote: function(noteContent){
      var model = this.store.createRecord('note', {
        content: noteContent
      });
      // debugger;
      model.save();
      this.controller.set('noteContent', '');
    }
  }
});
