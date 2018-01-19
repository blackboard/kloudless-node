var BaseMethod = require('./basemethod');

var ApplicationsMethods = {
    get: BaseMethod.extend({
        dataFunction: function(data, cb) {
            if (data['application_id'] !== undefined) {
                this.path += data['application_id'];
            }
            cb(null, data);
        }
    }),
    create: BaseMethod.extend({
      method: 'POST',
      requiredParams: [
          'name'
      ]
    }),
    update: BaseMethod.extend({
      requiredParams: [
          'name'
      ],
      dataFunction: function(data, cb) {
          if (data['application_id'] !== undefined) {
              this.path += data['application_id'];
          }
          cb(null, data);
      }

    }),
    delete: BaseMethod.extend({
        method:'DELETE',
        requiredParams: [
            'application_id'
        ],
        dataFunction: function(data, cb) {
            this.path = "applications/" + data['application_id'];
            cb(null, data);
        }
    }),
};

module.exports = ApplicationsMethods;
