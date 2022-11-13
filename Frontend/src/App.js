import "./App.css";
import { FileUploader } from "./components/fileUploader";

function App() {
  return (
    <div className="App">
      <div className="container_header">
        <h1> Сегментизация текста на изображении </h1>
      </div>
      <div className="container">
        <div className="container_uploader">
          <FileUploader />
        </div>
      </div>
    </div>
  );
}

export default App; 
