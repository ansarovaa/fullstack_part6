export const showNotification = (message) => ({
  type: "SHOW_NOTIFICATION",
  data: message,
});

export const removeNotification = (notification) => ({
  type: "REMOVE_NOTIFICATION",
});

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return action.data;
    case "REMOVE_NOTIFICATION":
      return null;
    default:
      return state;
  }
};

export default notificationReducer;