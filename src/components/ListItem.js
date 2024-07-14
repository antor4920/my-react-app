import React from 'react'

function ListItem() {
const arry= [
    {name:'Antor',
     age:24
    },
    {name:'Jahidul',
        age:25
    },
    {name:'Hasan',
        age:26
    }
]
const person= arry.map((X,index) => <h1 key={X.name}>Name is {X.name} and age is {X.age}</h1>)

  return (
    <div>{person}</div>
  )
}

export default ListItem