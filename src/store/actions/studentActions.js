export const createStudent = (student) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("g2academy")
      .add({
        ...student,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "CREATE_STUDENT",
          student,
        });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_STUDENT_ERR", err });
      });
  };
};
