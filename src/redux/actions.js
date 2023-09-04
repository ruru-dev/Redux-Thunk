
const url =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json";

export const addCar = (car) => {
  return {
    type: "ADD_CAR",
    value: car,
  };
};

export const removeCar = (index) => {
  return {
    type: "REMOVE_CAR",
    value: index,
  };
};

// Fetch the makes from the API and then return an action for our reducer.
export const fetchMakes = (dispatch) => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'FETCH_MAKES',
        value: data.Results
      });
    });
};

export const deleteMake = (makeId) => {
  return {
    type: 'DELETE_MAKE',
    value: makeId
  };
}

