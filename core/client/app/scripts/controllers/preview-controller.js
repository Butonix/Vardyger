/*!
 * Vardyger
 * Copyright(c) 2015 Rob Ferguson
 * MIT Licensed
 */

'use strict';

// Reference the 'vardyger' module to attach a controller

angular.module('vardyger')
  .controller('PreviewController',
  function(
    $log,         // inject the $log service
    $scope,       // inject the $scope service
    post          // inject resolved post data
  ) {

    $log.info('PreviewController');

    $scope.item = post;

    // $log.info('$scope.item: ', $scope.item);

  });

/*

 $scope.editPost = function() {

   $log.info('editPost()');

   // $state.go('app.editor({postId: item.post.id})');

 };

*/
