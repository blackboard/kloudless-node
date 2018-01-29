var BaseMethod = require('./basemethod');

var ApiKeysMethods = {
    get: BaseMethod.extend({
        requiredParams: [
            'application_id'
        ],
        dataFunction: function(data, cb) {
            this.path = data['application_id'] + '/trusted_domains';
            cb(null, data);
        }
    }),
    create: BaseMethod.extend({
      method: 'POST',
      requiredParams: [
          'application_id',
          'domain'
      ],
      dataFunction: function(data, cb) {
          this.path = data['application_id'] + '/trusted_domains';
          cb(null, data);
      }
    }),
    delete: BaseMethod.extend({
        method:'DELETE',
        requiredParams: [
            'application_id',
            'domain_id'
        ],
        dataFunction: function(data, cb) {
            this.path = data['application_id'] +
                '/trusted_domains/' + data['domain_id'];
            cb(null, data);
        }
    })
};

module.exports = ApiKeysMethods;
