(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['playingNow'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    <h3><a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.link : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></h3>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    <h3>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h3>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div id=\"song\">\n    <h4>Playing Now</h4>\n    <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.composer : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.name : stack1), depth0))
    + " ("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.trackOnNow : depth0)) != null ? stack1.start : stack1), depth0))
    + ")</p>\n</div>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<p id=\"no-playlist\">Playlist data unavailable for "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    <h3><a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programUpNext : depth0)) != null ? stack1.link : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programUpNext : depth0)) != null ? stack1.name : stack1), depth0))
    + "</a></h3>\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    <h3>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programUpNext : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h3>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"program\">\n    <h2>On Now</h2>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.link : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.start : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programOnNow : depth0)) != null ? stack1.end : stack1), depth0))
    + "</p>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.trackOnNow : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n<div id=\"up-next\">\n    <h2>Up Next</h2>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.programUpNext : depth0)) != null ? stack1.link : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programUpNext : depth0)) != null ? stack1.start : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.programUpNext : depth0)) != null ? stack1.end : stack1), depth0))
    + "</p>\n</div>\n";
},"useData":true});
})();