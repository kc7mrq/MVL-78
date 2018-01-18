$(document).ready(function()
{
   var jQueryTabs1Options =
   {
      show: false,
      event: 'click',
      collapsible: false
   };
   $("#jQueryTabs1").tabs(jQueryTabs1Options);
   $("#PanelLayer").panel({animate: true, animationDuration: 200, animationEasing: 'easeOutCubic', dismissible: false, display: 'push', position: 'left'});
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
