import React,{useState,useEffect} from 'react'
import styles from '../Componets/RecipiesItem.module.css'
function RecipiesItem(props) {
    const [urlState,setUrlState] = useState(false)
   let url = props.mealSource;
   useEffect(()=>{
    setUrlState(url)
   },[url])
  
  return (
    <div className={styles.RecipieData}>
        <img src={props.mealThumb} alt={props.mealThumb} className={styles.mealThumb}/>
        <p><b>MealName:</b> {props.mealname} </p>
        <p><b>MealCategory:</b> {props.mealcategory} </p>
        <p className={styles.instructionText}><b>MealInstructions:</b> {props.mealinstructions}</p>
        {urlState && <a href={url} target='_blank' className={styles.moreInfoText}>view Recipie</a> }
        {!urlState && <a href='' target='_blank' className={styles.moreInfoText}>no recipie link</a>}
      
    </div>
  )
}

export default RecipiesItem