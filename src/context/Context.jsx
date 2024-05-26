import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { empDetails } from "../constants/empDetails";

const AppContext = createContext();

const initialState = {
  employees: empDetails,
  team: [],
  buttonVisibility: {},
};

const redcureFun = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        team: [...state.team, action.payload],
        buttonVisibility: {
          ...state.buttonVisibility,
          [action.payload.id]: false,
        },
      };
    }
    case "SORT":
      return {
        ...state,
        team: state.team.sort((a, b) => a.age - b.age),
      };

    case "REMOVE":
      return {
        ...state,
        team: state.team.filter((team) => team.id !== action.payload.id),
        buttonVisibility: {
          ...state.buttonVisibility,
          [action.payload.id]: true,
        },
      };
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    redcureFun,
    // JSON.parse(localStorage.getItem("empDetails")) ||
    initialState
  );

  //   useEffect(() => {
  //     localStorage.setItem("empDetails", JSON.stringify(state));
  //   }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
