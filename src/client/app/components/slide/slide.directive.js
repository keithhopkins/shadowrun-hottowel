(function(){
  'use strict';

  angular.module('app.components.slide')
  .directive('srSlideable', slideableDirective)
  .directive('srSlideToggle', slideToggleDirective);


  function slideableDirective() {
    return {
      restrict:'C',
      compile: compile
    };
  }

  function compile(element, attr) {
    // wrap tag
    var contents = element.html();
    element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' +
      contents + '</div>');

    return function postLink(scope, element, attrs) {
      // default properties
      attrs.duration = (!attrs.duration) ? '.5s' : attrs.duration;
      attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
      element.css({
        'overflow': 'hidden',
        'height': '0px',
        'transitionProperty': 'height',
        'transitionDuration': attrs.duration,
        'transitionTimingFunction': attrs.easing
      });
    };
  }

  function slideToggleDirective() {
    return {
      restrict: 'A',
      link: link
    };
  }

  function link(scope, element, attrs) {
    var target = document.querySelector(attrs.srSlideToggle);
    attrs.expanded = false;
    var content = target.querySelector('.slideable_content');

    scope.$watch(function(){
      return content.clientHeight;
    }, function(newVal, oldVal){
      if(oldVal!==0 && oldVal!==newVal){
        slideOut();
        attrs.expanded = true;
      }
    });

    element.bind('click', function() {
      toggleSlide();
      attrs.expanded = !attrs.expanded;
    });

    function toggleSlide(){
      if(!attrs.expanded) {
        slideOut();
      } else {
        target.style.height = '0px';
      }
    }

    function slideOut(){
      content.style.border = '1px solid rgba(0,0,0,0)';
      var y = content.clientHeight;
      content.style.border = 0;
      target.style.height = (y+5) + 'px';
    }
  }
})();
