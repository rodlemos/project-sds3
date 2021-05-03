import Footer from "components/Footer";
import Navbar from "components/Navbar";
import DataTable from 'components/DataTable'
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de vendas</h1>
        
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso</h5>
            <BarChart/>
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <DonutChart/>
          </div>
        </div>


        <h2 className="text-primary py-3">Todas vendas</h2>
        <DataTable/>
      </div>
      <Footer/>    
    </>
  );
}

export default App;
