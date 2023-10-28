 import React from 'react'
 
 
 export const Main = ({data}) => {
   return (
     <div>
      {data.map((books) =>{
        return(
            <div key={books.id}>
                <h1>{books.bookName}</h1>
                <img src={books.bookImg} alt={books.bookImg} />
                <h2>{books.bookAutor}</h2>
             <div>
               <button>Closs</button>
             </div>
            </div>
            
        )
      })}
     </div>
   )
 }
 
 
 
 
 
