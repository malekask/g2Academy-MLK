const initState = {};

const studentReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_STUDENT":
      console.log("Created student", action.student);
      return state;
    case "CREATE_STUDENT_ERR":
      console.log("Create student error", action.err);
      return state;
    default:
      return state;
  }
};

export default studentReducer;
