import EmpList from "./components/EmpList";
import TeamList from "./components/TeamList";
import { AppProvider } from "./context/Context";

function App() {
  return (
    <AppProvider>
      <div className="flex justify-center  w-[100%]">
        <EmpList />
        <TeamList />
      </div>
    </AppProvider>
  );
}

export default App;
