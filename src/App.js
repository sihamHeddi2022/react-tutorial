import styles from './App.modules.css'
//import './App.css';

function App() {
  const users = [
    {
      name:"sirine",
      age:43
    },
    {
      name:"salma",
      age:34
    }
  ]
  const age = 23
  const name = "jdjd dj djd"
  const showMeHow= age>=20?<p>hello</p>:<p> ekejej </p>
  return (
    <div className={styles.App}>
      {name}
      {showMeHow}
      {
        users.map((user)=> (<div>{user.name}</div>))
      }
    </div>
  );
}

export default App;
