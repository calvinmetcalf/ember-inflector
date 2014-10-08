import {
  defaultRules
} from "./system";
import 'inflector-core';
var Inflector = Ember.Inflector;
Inflector.defaultRules = defaultRules;
Ember.Inflector        = Inflector;

export default Inflector;

export var pluralize = Ember.String.pluralize;
export var singularize = Ember.String.singularize;