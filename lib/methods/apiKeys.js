var BaseMethod = require('./basemethod');

var ApiKeysMethods = {
    get: BaseMethod.extend({
        requiredParams: [
            'application_id'
        ],
        dataFunction: function(data, cb) {
            this.path = data['application_id'] + '/apikeys';
            cb(null, data);
        }
    }),
    create: BaseMethod.extend({
      method: 'POST',
      requiredParams: [
          'application_id'
      ],
      dataFunction: function(data, cb) {
          this.path = data['application_id'] + '/apikeys';
          cb(null, data);
      }
    }),
    delete: BaseMethod.extend({
        method:'DELETE',
        requiredParams: [
            'application_id',
            'key'
        ],
        dataFunction: function(data, cb) {
            this.path = data['application_id'] +
                '/apikeys/' + data['key'];
            cb(null, data);
        }
    })
};

module.exports = ApiKeysMethods;
