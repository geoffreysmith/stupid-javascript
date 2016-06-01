export default function profileReducer(state = initialState.profile, action) {
  let newState;

  switch (action.type) {
    case "GET_USER_PROFILE`":
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      newState.necessaryDataIsProvidedToCalculateSavings = calculator().necessaryDataIsProvidedToCalculateSavings(newState);
      newState.dateModified = dateHelper.getFormattedDateTime(new Date());

      if (newState.necessaryDataIsProvidedToCalculateSavings) {
        newState.savings = calculator().calculateSavings(newState);
      }

      return newState;

    default:
      return state;
  }
}
