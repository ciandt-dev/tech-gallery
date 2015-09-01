/*
 * Copyright 2013 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

angular
        .module('techGallery')
        .controller(
                'techListController',
                function($scope, $http, $location, $routeParams, $timeout,
                        $rootScope) {

                    $timeout(function() {
                        getTechList();
                    }, 200);

                    $scope.redirectUrl = function(techId) {
                        var host = 'http://' + location.host;
                        var path = location.pathname;
                        if (path === '/') {
                            path = '';
                        }
                        var servletRedirect = '/viewTech'
                        var queryString = '?id=';
                        return host + path + servletRedirect + queryString
                                + techId;
                    };

                    function getTechList() {
                        var host = location.host;
                        var complement = '/_ah/api/';
                        var rootUrl = 'http://' + host + complement;
                        gapi.client.load('rest', 'v1', callBackLoaded, rootUrl);
                        // mockList();
                    };

                    function mockList() {
                        var descr = "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.";
                        var list = [ {
                            name : "Angular",
                            desc : descr,
                            image : "/image/ANGULAR.png"
                        }, {
                            name : "Google App Engine",
                            desc : descr,
                            image : "/image/GAE.png"
                        }, {
                            name : "Google Compute Engine",
                            desc : descr,
                            image : "/image/GCE.png"
                        }, {
                            name : "Google Cloud Storage",
                            desc : descr,
                            image : "/image/GCS.png"
                        }, {
                            name : "Google Big Query",
                            desc : descr,
                            image : "/image/BQ.png"
                        }, {
                            name : "BootStrap",
                            desc : descr,
                            image : "/image/BOOT.png"
                        } ];
                        $scope.techList = list;
                    };

                    function callBackLoaded() {
                        gapi.client.rest.getTechnologies().execute(
                                function(data) {
                                    $scope.techList = data.technologies;
                                    $scope.$apply();
                                });
                    }
                    ;
                });

angular
        .module('techGallery')
        .controller(
                'techDetailsController',
                function($scope, $http, $location, $routeParams, $timeout,
                        $rootScope) {
                    var id = getParameterByName('id');
                    alert(id);
                    function getParameterByName(name) {
                        name = name.replace(/[\[]/, "\\[").replace(/[\]]/,
                                "\\]");
                        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
                                .exec(location.search);
                        return results === null ? ""
                                : decodeURIComponent(results[1].replace(/\+/g,
                                        " "));
                    }
                });