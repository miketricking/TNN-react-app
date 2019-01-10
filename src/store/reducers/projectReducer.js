const initState = {
  projects: [
    {
      id: "1",
      title: "heading 1",
      content: "asdf lpplf faofd amdfs dfoas cl lol"
    },
    {
      id: "2",
      title: "heading 2",
      content: "asdf lpplf faofd amdfs dfoas cl lol"
    },
    {
      id: "3",
      title: "heading 3",
      content: "asdf lpplf faofd amdfs dfoas cl lol"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("created project", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
