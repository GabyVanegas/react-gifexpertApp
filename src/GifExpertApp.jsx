import { useState } from "react"
import { AddCategory, GifGrid } from './components'



export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['One Punch'])
  const onAddCategory = ( newCategory ) =>{

    if(categories.includes(newCategory)) return;

    //categories.push(newCategory)
    setcategories([newCategory, ...categories])
  }

  return (
    <>

        {/* titulo */}
        <h1>GifExpertAppp</h1>

        {/* Input */}
        <AddCategory 
        onNewCategory = {event => onAddCategory(event)}
        currentCategories = {categories}
        //setcategories = {setcategories}
        />

        {/* Listado de Gif */}
        
        
        {
          categories.map( (category ) => (
            
            <GifGrid key={category} category={category}/>
            ))
        }
        
        {/* Gif Item */}
    </>
  )
}
