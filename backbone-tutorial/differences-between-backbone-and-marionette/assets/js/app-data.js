var Bill = Backbone.Model.extend({
  defaults: {
    name: 'Not Provided',
    institution: 'Not Provided',
    statementGenerationDayOfMonth: 'Not Provided',
    statementDueDay: 'Not Provided'
  }
});

var Bills = Backbone.Collection.extend({
  model: Bill,
  comparator: "institution"
});

var bills = new Bills([
  {
    name: 'Auto Loan',
    institution: 'Unify Credit Union',
    statementGenerationDayOfMonth: 3,
    statementDueDay: 25
  },
  {
    name: 'Netflix Subscription',
    institution: 'Netflix',
    statementGenerationDayOfMonth: 1,
    statementDueDay: 11
  },
  {
    name: 'Rent',
    institution: 'Decron Property Management',
    statementGenerationDayOfMonth: 1,
    statementDueDay: 15
  }
]);
