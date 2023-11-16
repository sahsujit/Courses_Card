import "./App.css";
import {apiUrl ,filterData } from "./data";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Spinner from './components/Spinner';


function App() {

const [courses, setCourses] = useState(null);
const [loading, setLoading] = useState(true);

const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);

    }
    catch(error){
      toast.error("error aa gaya");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">

      <div>
        <NavBar />
      </div>

      <div className="bg-bgDark2">
        <Filter filterData={filterData}
        category={category} setCategory={setCategory} />
      </div>

      <div  className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
           loading ? (
            <Spinner />) : (<Cards courses={courses} category={category}  />)
        }
        
     
        
      </div>

    </div>
  );
}

export default App;
