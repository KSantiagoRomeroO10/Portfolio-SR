import ValidationRules from "./ValidationRules"

const Validate = (Value, Rules) => {
  for (let Rule of Rules) {
    if (typeof Rule === 'string') {
      if (!ValidationRules[Rule](Value)) {
        return false
      }
    } 
    else if (typeof Rule === 'object') {
      const RuleName = Object.keys(Rule)[0]
      if (!ValidationRules[RuleName](Value, Rule[RuleName])) {
        return false
      }
    }
  }
  return true
}

export default Validate
