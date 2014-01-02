function AssignmentStatement(target, source) {
  this.target = target;
  this.source = source;
}

AssignmentStatement.prototype.analyze = function (context) {
  this.target.analyze(context);
  this.source.analyze(context);
  this.target.type.assertCompatibleWith(this.source, 'Type mismatch in assignment')
}

AssignmentStatement.prototype.toString = function () {
  return '(= ' + this.target + ' ' + this.source + ')'
}

module.exports = AssignmentStatement;