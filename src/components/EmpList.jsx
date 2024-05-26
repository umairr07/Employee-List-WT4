import { useContext } from "react";
import { AppContext } from "../context/Context";

function EmpList() {
  const { state, dispatch } = useContext(AppContext);
  const addData = (employee) => {
    dispatch({ type: "ADD", payload: employee });
  };

  return (
    <div className="flex justify-center">
      <div className="w-[500px] m-10 py-10 rounded-lg shadow-xl bg-[#fff]">
        <h1 className="text-center text-3xl font-semibold">Employees</h1>
        <div className="m-3">
          {state.employees.slice(0, 7).map((emp) => {
            return (
              <div
                key={emp.id}
                className="flex justify-between items-center p-2 m-5 border-2 rounded-lg"
                style={{
                  backgroundColor:
                    state.buttonVisibility[emp.id] === false
                      ? "#f0f0f0"
                      : "#fff",
                }}
              >
                <h2 className="text-[18px] font-medium w-[100px]">
                  {emp.first_name}
                </h2>
                <h2 className="text-[18px] font-medium">{emp.age}</h2>
                <button
                  onClick={() => addData(emp)}
                  style={{
                    display:
                      state.buttonVisibility[emp.id] === false
                        ? "none"
                        : "block",
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white rounded p-2 w-[60px]"
                >
                  ADD
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EmpList;
