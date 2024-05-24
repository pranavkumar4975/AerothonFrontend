const API_URL = "https://skytracker.azurewebsites.net";

export const createUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/Users/Signup`, {
      mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      });
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
