// create component  head
const Header = (head) => {
 
  return (
      <h1>{head.course}</h1>
  )
};
// create component part
const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};
// create component  Total
const Total = ({ parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return  <p> Number of exercises {total} </p>
};
// create component  Content
const Content = ({parts}) => {
  return (
    <div>
    {parts.map((part, index) => (
      <Part key={index} part={part.name} exercises={part.exercises} />
    ))}
  </div>
   
  );
};

// create APP
const App = () => {
  const course = 'Half Stack application development'

  const parts = [
      {name      : 'Fundamentals of React',
       exercises : 10 
      },

      {name      : 'Using props to pass data',
      exercises :  7        
      },

      {name     : 'State of a component',
      exercises : 14 },
  ]

  return (
    <div>     
       <Header  course = {course} />
       <Content parts  = {parts}/>
       <Total   parts  = {parts}/>
    </div>
  )
}

export default App