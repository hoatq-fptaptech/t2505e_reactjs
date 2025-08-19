import logo from './logo.svg';
import './App.css';
import './components/Demo';
import Demo from './components/Demo';
import Catalog from './components/Catalog';
function App() {
  const sv1 = {
    name: "Nguyễn Văn An",
    tel: "0987654321",
    email: "annv@gmail.com",
    address: "13 Trịnh Văn Bô"
  };
  const sv2 = {
    name: "Bùi Như Lạc",
    tel: "0123456789",
    email: "lacbv@gmail.com",
    address: "8A Tôn Thất Thuyết"
  };
  const cats = [
    {
      name: "Fashion",
      count:12
    },
    {
      name: "Watch",
      count:4
    }
  ];
  return (
    <div className="App">
        <Demo data={sv1}/>
        <Demo data={sv2}/>

        {
          cats.map((e,i)=>{ // e: element --- i: index
            return <Catalog cat={e} key={i} />
          })
        }
    </div>
  );
}

export default App;
