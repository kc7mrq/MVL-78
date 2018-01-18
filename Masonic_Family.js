$(document).ready(function()
{
   $("#PanelLayer").panel({animate: true, animationDuration: 200, animationEasing: 'easeOutCubic', dismissible: false, display: 'push', position: 'left'});
$("#Image1").attr('data-zoom-image', 'images/masonic_map_03.jpg');
$("#Image1").elevateZoom({ 
   responsive: false,
   scrollZoom: false,
   easing: false,
   easingDuration: 2000,
   lensSize: 200,
   zoomWindowWidth: 300,
   zoomWindowHeight: 600,
   zoomWindowOffetx: 0,
   zoomWindowOffety: 5,
   zoomWindowPosition: 1,
   zoomWindowBgColour: '#FFFFFF',
   lensFadeIn: false,
   lensFadeOut: false,
   zoomWindowFadeIn: false,
   zoomWindowFadeOut: false,
   zoomTintFadeIn: false,
   zoomTintFadeOut: false,
   borderSize: 1,
   borderColour: '#888888',
   lensBorderSize: 1,
   lensBorderColour: '#000000',
   lensShape: 'square',
   zoomType: 'window',
   containLensZoom: true,
   lensColour: '#FFFFFF',
   lensOpacity: 0.4,
   showLens: true,
   tint: false,
   tintColour: '#333333',
   tintOpacity: 0.4,
   cursor: 'default' 
});
});
var wb_Timer2;
function TimerStartTimer2()
{
   wb_Timer2 = setTimeout(function()
   {
      var event = null;
      ShowPanel('PanelLayer', event);
   }, 200);
}
function TimerStopTimer2()
{
   clearTimeout(wb_Timer2);
}
TimerStartTimer2();
