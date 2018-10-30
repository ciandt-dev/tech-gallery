module.exports = function ($q, $timeout, $rootScope) {
  /**
   * Object context
   * @type {Object}
   */
  var context = this;

  /**
   * Retrieve list of technologies
   * @return {Promise} The gapi response
   */
  this.getProjects = function () {
    var deferred = $q.defer();
    gapi.client.rest.getAllProjects().execute(function (data) {
      context.foundItems = data.items;
      deferred.resolve(context.foundItems);
    });
    return deferred.promise;
  };

  this.addOrUpdate = function (context) {
    this.searched = false;
    var req = {
      name: context.name
    };
    var deferred = $q.defer();

    gapi.client.rest.addProject(req).execute(function (data) {
      deferred.resolve(data);
    });
    return deferred.promise;
  };

  this.deleteTechnology = function (idTechnology) {
    var deferred = $q.defer();
    var req = { technologyId: idTechnology };
    gapi.client.rest.deleteTechnology(req).execute(function (data) {
      deferred.resolve(data);
    });
    return deferred.promise;
  };

  function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '_')           // Replace spaces with _
      .replace(/\#/g, '_')            // Replace # with _
      .replace(/\//g, '_')            // Replace / with _
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  this.slugify = function (text) {
    return slugify(text);
  };
};
