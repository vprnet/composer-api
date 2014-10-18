(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['playingNow'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"song\">\n    <h4>Playing Now</h4>\n    <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.composer : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.name : stack1), depth0))
    + " ("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.start : stack1), depth0))
    + ")</p>\n    <p class=\"info\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.ensemble : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.conductor : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "</p>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.soloists : stack1), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <p><a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" alt=\"Link to purchase piece\" target=\"_blank\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.copyright : stack1), depth0))
    + " "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.catalogNumber : stack1), depth0))
    + "</a></p>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.ensemble : stack1), depth0));
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.conductor : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"3":function(depth0,helpers,partials,data) {
  return " / ";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.conductor : stack1), depth0));
  },"7":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    <p>"
    + escapeExpression(lambda(depth0, depth0))
    + "</p>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<p id=\"no-playlist\">For playlist information ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.link : stack1), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" target=\"_blank\">contact the host</a>.</p>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"program\">\n    <h2>On Now</h2>\n    <h3>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h3>\n    <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.start : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.end : stack1), depth0))
    + "</p>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.trackOnNow : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<div id=\"up-next\">\n    <h2>Up Next</h2>\n    <h3>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programUpNext : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h3>\n    <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programUpNext : depth0)) != null ? stack1.start : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programUpNext : depth0)) != null ? stack1.end : stack1), depth0))
    + "</p>\n</div>\n\n<p class=\"calendar-link\">For something you heard earlier, see the <a href=\"http://www.vpr.net/apps/composer/playlist-calendar\" target=\"_blank\" alt=\"VPR Classical Playlist calendar\">Playlist Calendar</a></p>\n";
},"useData":true});
})();