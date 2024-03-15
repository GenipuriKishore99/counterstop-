import React, { useState } from 'react'

function App() {
  const details=[
    {id:1,name:"anu",age:23},
    {id:2,name:"yamani",age:4},
    {id:3,name:"yamuna",age:2},
    {id:4,name:"nithis",age:3}
  ]
  const [sortby,setSortBy]=useState();
  function handler(e){
    setSortBy(e.target.value)
  }
  const data=[...details].sort((a,b)=>{
    if(sortby==='name'){
      return a.name.localeCompare(b.name)
    }
    else if(sortby==='age'){
      return a.age-b.age
    }
    return 0
  })

  return (
    <div>
      SortName<input type="radio" name="sort" value="name" onChange={handler} checked={sortby==='name'}></input>
      Age<input type="radio" name="sort" value="age" checked={sortby==='age'} onChange={handler}></input>
     <table className='table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((m)=>{
            return(
              <tr>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.age}</td>
              </tr>
            )
          })
        }
      </tbody>
     </table>
    </div>
  )
}

export default App