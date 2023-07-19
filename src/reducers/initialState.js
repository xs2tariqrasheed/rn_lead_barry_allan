const initialState = {
  auth: {
    isLoading: true,
    isSignedIn: false,
    errorMessage: null,
    currentUser: {
      email: null,
      id: null,
    },
    userRole: null,
    newUser: null,
  },
  services: [],
  bookings: [],
  availableJobs: [],
  upcomingJobs: [],
  finishedJobs: [],
  zones:[],
  blur: null,
  error: null,
};

export default initialState;
