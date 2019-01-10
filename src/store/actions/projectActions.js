export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        ...project,
        aurthorFirstName: profile.firstName,
        aurthorLastName: profile.lastName,
        aurthorId: uid,
        createdAt: new Date()
      })
      .then(res => {
        dispatch({ type: "CREATE_PROJECT", project: project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
