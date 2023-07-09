import "./App.css";
import roflan from "./assets/roflan.png";
import { MainLayout } from "./layout/MainLayout/MainLayout";

function App() {
  return (
    <MainLayout title="Рофлер">
      <h1 className="network-name">РОФЛЕР</h1>

      <h1>
        Социальная сеть <br /> для любителей анекдотов
      </h1>

      <img src={roflan} style={{ width: 200, height: 200 }}></img>
    </MainLayout>
  );
}

export default App;
