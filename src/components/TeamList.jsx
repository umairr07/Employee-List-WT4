import { useContext } from "react";
import { AppContext } from "../context/Context";

function TeamList() {
  const { state, dispatch } = useContext(AppContext);

  const sortByAge = () => {
    dispatch({ type: "SORT" });
  };

  const removeData = (teamEmp) => {
    dispatch({ type: "REMOVE", payload: teamEmp });
  };

  return (
    <div className="w-[30%] m-10 py-7 rounded-lg shadow-xl bg-[#fff]">
      <h1 className="text-center text-3xl font-semibold">Team</h1>
      <div className="flex justify-end pr-7">
        {state.team.length === 0 ? (
          <h1></h1>
        ) : (
          <button
            onClick={sortByAge}
            className="p-2 bg-green-500 hover:bg-green-600 text-white rounded "
          >
            Sort by age
          </button>
        )}
      </div>
      {state.team.map((team) => (
        <div
          key={team.id}
          className="flex justify-between items-center p-2 m-5 border-2 rounded-lg"
        >
          <h2 className="text-[18px] font-medium w-[100px]">
            {team.first_name}
          </h2>
          <h2 className="text-[18px] font-medium">{team.age}</h2>
          <button
            onClick={() => removeData(team)}
            className="bg-red-500 hover:bg-red-700 text-white rounded p-2 "
          >
            REMOVE
          </button>
        </div>
      ))}
      <div>
        {state.team.length === 0 ? (
          <h1></h1>
        ) : (
          <h1 className="text-center text-xl font-semibold">
            Average Age:{" "}
            {state.team.reduce((a, b) => a + b.age, 0) / state.team.length}
          </h1>
        )}
      </div>
    </div>
  );
}

export default TeamList;
