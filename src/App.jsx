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
/*
The concepts being covered in the provided code are:

1. **React Functional Component**:  
   - The file defines a function `App` that returns JSX, following the pattern of a functional React component.
  
2. **Importing CSS**:  
   - `import './App.css'` demonstrates how to import and apply CSS for styling in React.

3. **Array of Objects / Data Modeling**:  
   - The `movies` array is an array of objects, each representing a movie with fields like `title`, `year`, `id`, and `isGood`.

4. **Array Mapping / Dynamic Rendering**:  
   - `movies.map(...)` is used to loop through the `movies` array to generate a list item (`li`) for each movie.
   - This is dynamic rendering: each movie object becomes a `<li>` element in the rendered list.

5. **JSX Element Keys**:  
   - Each `<li>` uses the `key` prop (`key={id}`), which helps React efficiently update/render lists.

6. **Conditional Styling**:  
   - The style object in the `<li>` is set based on the `isGood` field:  
     `{ color: isGood ? 'magenta' : 'orangered' }`  
     — showing how to apply conditional inline styles in JSX.

7. **Composition of Components with JSX**:  
   - The return statement encapsulates the list (`<ol>`) and maps the array to JSX.

**Summary:**  
This code demonstrates the foundations of functional React components, how to render lists dynamically from arrays, apply conditional rendering and styling in JSX, and best practices like using unique keys in lists.
*/