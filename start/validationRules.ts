import { validator } from '@ioc:Adonis/Core/Validator'

validator.rule('myRuleName', ( { pointer, arrayExpressionPointer, errorReporter }) => {
  let ruleIsValid = false;

  // define rule here

  if (ruleIsValid) {
    errorReporter.report(pointer, 'myRuleName', 'The value for this rule failed validation', arrayExpressionPointer)
  }
})
