import React from 'react'
import RecipiesItem from './RecipiesItem'
import styles from '../Componets/Recipies.module.css'
function Recipies(props) {
    const data = props.recipieData;
    if ( data === null) {
      console.log('no data');
    }
  return (

    <div className={styles.RecipieWrap}>
        {data.map((data)=>{ return <RecipiesItem 
            key={data.idMeal}
            mealThumb = {data.strMealThumb}
            mealname = {data.strMeal}
            mealcategory={data.strCategory}
            mealinstructions={data.strInstructions}
            mealSource={data.strSource}
            mealYoutubeLink={data.strYoutube}
            />})} 
    </div>
  )
}

export default Recipies