import React,{useRef,useState} from 'react'
import styles from  './App.module.css';
import Recipies from './Componets/Recipies';
function App() {
const fetchValue = useRef()
const [isLoading,setLoading] = useState(false);
const [error,setError] = useState(null);
const [recipieData,setRecipieData] = useState([]);
  const handleData = async(event)=>{
    event.preventDefault();
    const userSearchValue = fetchValue.current.value;
    setLoading(true)
    setError(null)
    try {
      setError(null)
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearchValue}`)
      if (!response.ok) {
        throw new Error('Wrong Recipie Entered Plese Check the RecipieName...')
      }
      const data = await response.json();
      setLoading(false)
      const finaldata = data.meals;
      setRecipieData(finaldata)

      console.log(recipieData);
    } 
    catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }


  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <form className={styles.searchForm}>
          <input ref={fetchValue} type="text" className={styles.searchInput} />
          <button type="button" className={styles.searchBTN} onClick={handleData}>search</button>
        </form>
        {!isLoading && !error &&  <Recipies recipieData={recipieData}/>}
        {!isLoading && !error  && recipieData.length < 0 && <p style={{textAlign:'center',fontSize:'20px',color:'black',fontWeight:900,fontFamily:'cursive'}}>please enter Recipie to search</p>}
        {isLoading && <p style={{fontSize:"25px", fontWeight:"bold",color:'green'}}>Loading....</p>}
        {!isLoading && error &&  <p style={{textAlign:'center',fontSize:'20px',color:'black',fontWeight:900,fontFamily:'cursive'}}>{error}</p>}
        
      </div>
    </div>
  );
}

export default App;
