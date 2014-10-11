(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['playlistCalendar'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.am : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <div class=\"listing\">\n                    <p class=\"program-time\">"
    + escapeExpression(((helper = (helper = helpers.start || (depth0 != null ? depth0.start : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"start","hash":{},"data":data}) : helper)))
    + " - "
    + escapeExpression(((helper = (helper = helpers.end || (depth0 != null ? depth0.end : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"end","hash":{},"data":data}) : helper)))
    + "</p>\n                    <h4><a href=\"#"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></h4>\n                </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.am : depth0), {"name":"unless","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "    <div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"program\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.link : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <p class=\"program-time\">"
    + escapeExpression(((helper = (helper = helpers.start || (depth0 != null ? depth0.start : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"start","hash":{},"data":data}) : helper)))
    + " - "
    + escapeExpression(((helper = (helper = helpers.end || (depth0 != null ? depth0.end : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"end","hash":{},"data":data}) : helper)))
    + "</p>\n        <div class=\"playlist";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.future : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.playlist : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(16, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n";
},"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <h2><a href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></h2>\n";
},"9":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <h2>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"11":function(depth0,helpers,partials,data) {
  return " future";
  },"13":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.playlist : depth0), {"name":"each","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"14":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <div class=\"song\">\n                    <p class=\"composer\">"
    + escapeExpression(((helper = (helper = helpers.composerName || (depth0 != null ? depth0.composerName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"composerName","hash":{},"data":data}) : helper)))
    + " - "
    + escapeExpression(((helper = (helper = helpers.trackName || (depth0 != null ? depth0.trackName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"trackName","hash":{},"data":data}) : helper)))
    + "</p>\n                    <p class=\"start-time\">"
    + escapeExpression(((helper = (helper = helpers.startTime || (depth0 != null ? depth0.startTime : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"startTime","hash":{},"data":data}) : helper)))
    + "</p>\n                    <p class=\"purchase\"><a href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\">More Info/Purchase Song</a></p>\n                </div>\n";
},"16":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.future : depth0), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.program(19, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"17":function(depth0,helpers,partials,data) {
  return "";
},"19":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <p>Playlist is unavailable for this program. <a href=\""
    + escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\">Contact the host</a> for playlist information</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n<div class=\"row schedule\">\n    <div class=\"col-xs-12\">\n        <h2>Schedule for "
    + escapeExpression(((helper = (helper = helpers.dateString || (depth0 != null ? depth0.dateString : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dateString","hash":{},"data":data}) : helper)))
    + "</h2>\n        <p class=\"click-to-playlist\">Click on a program to see it's playlist</p>\n    </div>\n\n    <div class=\"col-sm-6\">\n        <h3>Program Starts In AM</h3>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.dailySchedule : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </div>\n\n    <div class=\"col-sm-6\">\n        <h3>Program Starts In PM</h3>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.dailySchedule : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </div>\n</div>\n\n<h2 id=\"playlist-date\">Playlist for "
    + escapeExpression(((helper = (helper = helpers.dateString || (depth0 != null ? depth0.dateString : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"dateString","hash":{},"data":data}) : helper)))
    + "</h2>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.dailySchedule : depth0), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
})();