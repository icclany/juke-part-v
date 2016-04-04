juke.directive('player', ['PlayerFactory', function(PlayerFactory) {
  return {
    restrict: 'E',
    // scope: {
    // 	getCurrentSong: PlayerFactory.getCurrentSong
    // },
    link: function(scope, element, attrs) {
      scope.toggle = function() {
        if (PlayerFactory.isPlaying()) PlayerFactory.pause();
        else PlayerFactory.resume();
      };

      scope.getPercent = function() {
        return PlayerFactory.getProgress() * 100;
      };

      scope.getCurrentSong = PlayerFactory.getCurrentSong;

      scope.isPlaying = PlayerFactory.isPlaying;

      scope.next = PlayerFactory.next;

      scope.previous = PlayerFactory.previous;
    },
    templateUrl: 'js/player/templates/player.html'
  };
}]);
