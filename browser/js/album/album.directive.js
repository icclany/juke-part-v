juke.directive('albumList', function(){
  return {
    scope: {
      albums: '='
    },
  restrict: 'E',
  templateUrl: 'js/album/templates/albumList.html'
  // controller: 'AlbumsCtrl'
}
});
