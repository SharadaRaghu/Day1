
import './App.css';

function App() {

  const title = "Flora🌺";
  const like = "variety of";
  const link = "https://vsco.co/floralured/gallery";
  return (
    <div className="App">
     <div className="content">
       <h1><i>{ title} </i></h1>
       <h2>I like {like} Flowers</h2>
       
       <a href={link}>Have a look at my flora gallery<br></br></a>
       </div>
       <div className="info">
       <ul className="color">
         <li>A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Magnoliophyta, also called angiosperms).</li>
         <li>The biological function of a flower is to facilitate reproduction, usually by providing a mechanism for the union of sperm with eggs.</li>
         <li>The two types of pollination are: self-pollination and cross-pollination.</li>
         <li> Self-pollination happens when the pollen from the anther is deposited on the stigma of the same flower, or another flower on the same plant.</li>
         <li>This pollination does not require an investment from the plant to provide nectar and pollen as food for pollinators.</li>
         </ul>
         
      
        <p className="picture"><i><b>✨Please find Images Here✨</b></i></p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Bl%C3%BCten_1.jpg/495px-Bl%C3%BCten_1.jpg" alt="flowers"></img>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flower_poster_2.jpg/495px-Flower_poster_2.jpg" alt="flowers"></img>
      </div>

     

    </div>
  );
}

export default App;
