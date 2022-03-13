const db = require('../database');

const Data1 = {
  getById: function(id, callback) {
    return db.query('select * from Data1 where id=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from Data1', callback);
  },
  add: function(Data1, callback) {
    return db.query(
      'insert into Data1 (value1,value2,value3) values(?,?,?)',
      [Data1.value1, Data1.value2, Data1.value3],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Data1 where id=?', [id], callback);
  },
  update: function(id, Data1, callback) {
    return db.query(
      'update Data1 set value1=?,value2=?, value3=? where id=?',
      [Data1.value1, Data1.value2, Data1.value3, id],
      callback
    );
  }
};
module.exports = Data1;