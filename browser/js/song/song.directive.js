juke.directive('songList', ['PlayerFactory', 'PlaylistFactory', function(PlayerFactory, PlaylistFactory) {
  return {
    scope: {
      songs: '='
    },
    restrict: 'E',
    templateUrl: 'js/song/templates/songList.html',
    link: function(scope, element, attrs) {
      scope.getCurrentSong = PlayerFactory.getCurrentSong;

      scope.toggle = function(song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, scope.songs);
        } else if (PlayerFactory.isPlaying()) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };

      scope.isPlaying = function(song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };
    }
  }
}]);

juke.directive('doubleClick', function() {
  return {
    scope: {
      doubleClick: '&'
    },
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.on('dblclick', function(event, data) {
        scope.doubleClick();
      })
    }
  }
})
