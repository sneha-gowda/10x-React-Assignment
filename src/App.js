
import Data from "./Data.jsx"
console.log(Data);

function App() {
  return (
    <>
      <div className="Card">
        <img src={Data[0].profileImg} alt="Profile" width="300px" height="300px" />
        <div className="Data">
          <h1>{Data[0].name}</h1>
          <h2>Location: {Data[0].location}</h2>
          <h3>Bloog Group: {Data[0].bloodGroup}</h3>
          <h4>Age: {Data[0].age}</h4>
        </div>
      </div>
    </>
  );
}

export default App;
