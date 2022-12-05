import React from "react";
import axios from "axios";
import './App.css'
function App() {
    const [dataSource, setdataSource] = React.useState([]);
    
    React.useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setdataSource(res.data);     
      })
  })
    return (
      <div className="App">

        <table id="table">
          <thead>
            <tr className="row">
              <td className="col">Name</td>
              <td className="col">Email</td>
            </tr>
          </thead> 
          <tbody>
            {dataSource.map(post =>
            <tr className="row" key={post.id}>
              <td className="col">{post.name}</td>
              <td className="col">{post.email}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    );
    };
  export default App;