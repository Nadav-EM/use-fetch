import './App.css';
import useFetch from './useFetch'

function App() {
  const { data, loading, error, refetch } = useFetch('https://v2.jokeapi.dev/joke/Any')

  
  if(loading) return <h1>LOADING...</h1>
  if(error) console.log(error)

  return (
    <>
      <div>
        <h2>{data?.setup}</h2>
        <p>{data?.delivery}</p>
      </div>
    
      <button onClick={refetch}>Refetch</button>
    </>
  );
}

export default App;
