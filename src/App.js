import MessageDisplayComponent from "./MessageDisplayComponent"
import MessageBox from "./MessageBox"


function App() {
  return (
    <div className="App">
      <MessageBox>
        <MessageDisplayComponent message="Hello World!"/>
        <MessageDisplayComponent/>
      </MessageBox>
    </div>
  );
}

export default App;
