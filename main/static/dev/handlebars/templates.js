(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['playingNow'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div id=\"song\">\n    <h4>Playing Now</h4>\n    <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.composer : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.name : stack1), depth0))
    + " ("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.start : stack1), depth0))
    + ")</p>\n</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<p id=\"no-playlist\">Playlist not available. ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.link : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.link : stack1), depth0))
    + "\" target=\"_blank\">Contact the host</a> to inquire about a piece.</p>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"program\">\n    <h2>On Now</h2>\n    <h3>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h3>\n    <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.start : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.end : stack1), depth0))
    + "</p>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.trackOnNow : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<div id=\"up-next\">\n    <h2>Up Next</h2>\n    <h3>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programUpNext : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h3>\n    <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programUpNext : depth0)) != null ? stack1.start : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programUpNext : depth0)) != null ? stack1.end : stack1), depth0))
    + "</p>\n</div>\n";
},"useData":true});
})();