$(document).ready(function()
{
   $("#PanelLayer").panel({animate: true, animationDuration: 200, animationEasing: 'easeOutCubic', dismissible: false, display: 'push', position: 'left'});
   function PanelText1Scroll()
   {
      var $obj = $("#wb_PanelText1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelText1', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelText1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelText1').inViewPort(true))
   {
      $('#wb_PanelText1').addClass("in-viewport");
   }
   PanelText1Scroll();
   $(window).scroll(function(event)
   {
      PanelText1Scroll();
   });
   function PanelImage1Scroll()
   {
      var $obj = $("#wb_PanelImage1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelImage1', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelImage1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelImage1').inViewPort(true))
   {
      $('#wb_PanelImage1').addClass("in-viewport");
   }
   PanelImage1Scroll();
   $(window).scroll(function(event)
   {
      PanelImage1Scroll();
   });
   function PanelImage2Scroll()
   {
      var $obj = $("#wb_PanelImage2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelImage2', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelImage2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelImage2').inViewPort(true))
   {
      $('#wb_PanelImage2').addClass("in-viewport");
   }
   PanelImage2Scroll();
   $(window).scroll(function(event)
   {
      PanelImage2Scroll();
   });
   function PanelImage3Scroll()
   {
      var $obj = $("#wb_PanelImage3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelImage3', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelImage3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelImage3').inViewPort(true))
   {
      $('#wb_PanelImage3').addClass("in-viewport");
   }
   PanelImage3Scroll();
   $(window).scroll(function(event)
   {
      PanelImage3Scroll();
   });
   function PanelText2Scroll()
   {
      var $obj = $("#wb_PanelText2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelText2', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelText2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelText2').inViewPort(true))
   {
      $('#wb_PanelText2').addClass("in-viewport");
   }
   PanelText2Scroll();
   $(window).scroll(function(event)
   {
      PanelText2Scroll();
   });
   function PanelText3Scroll()
   {
      var $obj = $("#wb_PanelText3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelText3', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelText3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelText3').inViewPort(true))
   {
      $('#wb_PanelText3').addClass("in-viewport");
   }
   PanelText3Scroll();
   $(window).scroll(function(event)
   {
      PanelText3Scroll();
   });
});
var wb_Timer2;
function TimerStartTimer2()
{
   wb_Timer2 = setTimeout(function()
   {
      var event = null;
      ShowPanel('PanelLayer', event);
   }, 500);
}
function TimerStopTimer2()
{
   clearTimeout(wb_Timer2);
}
TimerStartTimer2();
