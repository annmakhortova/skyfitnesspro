const BASE_URL =
  "https://fitness-pro-9efbb-default-rtdb.europe-west1.firebasedatabase.app";

export async function getAllCourses() {
  const response = await fetch(BASE_URL + "/courses.json", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const newData = await response.json();

  return newData;
}

export async function getAllWorkouts() {
  const response = await fetch(BASE_URL + "/workouts.json", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const newData = await response.json();

  return newData;
}

export async function getAllUsers() {
  const response = await fetch(BASE_URL + "/users.json", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const newData = await response.json();

  return newData;
}

export async function getCurrentUsers() {
  const response = await fetch(BASE_URL + "/users/GyanmgaAa8btlzVBmnx2QeEq4pI3.json", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const newData = await response.json();

  return newData;
}

