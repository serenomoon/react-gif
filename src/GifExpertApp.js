import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [category, setCategory] = useState(['One Punch']);


  return (
    <>
        <h2>GifExpertApp</h2>
        <CategoryAdd setCategory={setCategory}/>
        <hr></hr>

        <ol>
            {
                category.map(category => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }

        </ol>

    </>
  )
};

