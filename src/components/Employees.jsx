// import { useState } from "react";
// import { empDetails } from "../constants.jsx/empDetails";

// const Employees = () => {
//   const [teamData, setTeamData] = useState([]);

//   const addTheData = (emp) => {
//     // Avoid adding the same employee multiple times
//     if (!teamData.some((teamMember) => teamMember.id === emp.id)) {
//       setTeamData([...teamData, emp]);
//     }
//   };

//   const sortByAge = () => {
//     setTeamData(empDetails.sort((a, b) => a.age - b.age));
//     console.log(teamData);
//   };

//   const removeData = () => {
//     teamData.filter((team) => {
//       return team.id === empDetails.id;
//     });
//     console.log(teamData);
//   };

//   return (
// <div className="flex justify-center">
//   <div className="border-2 w-[30%] m-10">
//     <h1 className="text-center text-3xl font-semibold">Employees</h1>
//     <div className="m-3">
//       {empDetails.map((emp) => {
//         return (
//           <div
//             key={emp.id}
//             className="flex justify-between p-3 m-5 border-2"
//           >
//             <h2>{emp.id}</h2>
//             <h2>{emp.name}</h2>
//             <h2>{emp.age}</h2>
//             <button onClick={() => addTheData(emp)}>ADD</button>
//           </div>
//         );
//       })}
//     </div>
//   </div>

{
  /* <div className="border-2 w-[30%] m-10">
  <h1 className="text-center text-3xl font-semibold">TEAM</h1>
  <div className="flex justify-end pr-7">
    <button onClick={sortByAge}>Sort by age</button>
  </div>
  {teamData.map((team) => {
    return (
      <div key={team.id} className="flex justify-between p-3 m-5 border-2">
        <h2>{team.id}</h2>
        <h2>{team.name}</h2>
        <h2>{team.age}</h2>
        <button onClick={removeData}>REMOVE</button>
      </div>
    );
  })}
  <div>
    {teamData.length === 0 ? (
      <h1></h1>
    ) : (
      <h1 className="text-center text-xl font-semibold">
        Average Age: {teamData.reduce((a, b) => a + b.age, 0) / teamData.length}
      </h1>
    )}
  </div>
</div>; */
}
//     </div>
//   );
// };

// export default Employees;
