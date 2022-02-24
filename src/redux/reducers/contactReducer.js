const initialState = [
  {
    id: 0,
    name: "Dr Strange",
    email: "test@test.com",
    status: "active",
    access: "owner",
  },
  {
    id: 1,
    name: "Vaibhav Singh",
    email: "test1@test.com",
    status: "inactive",
    access: "read",
  },
  {
    id: 2,
    name: "Meet Shrivaastava",
    email: "test3@test.com",
    status: "inactive",
    access: "read",
  },
  {
    id: 3,
    name: "Dr Strange",
    email: "test@test.com",
    status: "active",
    access: "owner",
  },
  {
    id: 4,
    name: "Vaibhav Singh",
    email: "test1@test.com",
    status: "inactive",
    access: "read",
  },
  {
    id: 5,
    name: "Vaibhav Singh",
    email: "test1@test.com",
    status: "inactive",
    access: "read",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContacts;
      return state;

    default:
      return state;
  }
};

export default contactReducer;
