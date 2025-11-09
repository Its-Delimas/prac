import './App.css'

const movies=[
{title:"Superman",year:2025,id:1,isGood:true},
{title:"Ne Zha",year:2019,id:2,isGood:false},
{title:"Batman",year:2020,id:3,isGood:true}
]

export default function App(){
 const movieList= movies.map(({title,year,id,isGood})=>

    <li key={id} style={{color:isGood?'magenta':'orangered'}}>
       {id} {title},{year}
    </li>

 )
  return (
    <ol>
      {movieList}
    </ol>
  );
}