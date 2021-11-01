import './App.css';

export default function App() {
  const names = [{
    name: "Robin",
    dp: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
  }, {
    name: "Rohit",
      dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxDrCR5SfO2zzeBNLF9U9xbjlC8-ToAA68g&usqp=CAU"
    },
    {
      name: "John Doe",
      dp: "http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Whatsapp-DP-2-2.jpg"
    }]
  return (
    <div className="App">
      {names.map((N) => <Msg name={N.name} pic={N.dp}/>)}
    </div>
  );
}
function Msg({ name, pic }) {
  return (
    <div>
      <h1>Hello,{name}</h1>
      <img class="picture" src={pic} alt={name}></img>
    </div>
  );
}
let sun = "rob";
let sunn = 2;

