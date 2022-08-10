import './App.css';


function App() {

  const getPhotos = (img) => {
    return img.keys().map(img);

  }
let photos = getPhotos(require.context('./assets/', false, /.(png|jpe?g|svg)$/))


  return (
   <div className="">
    <h1 className="text">Hey man these are some of my best photos.</h1>
    <p className="text">I can shoot you on film as well as with my nikon. hmu if you're still down to do this! you can also text me: 407-576-8489</p>
    {photos.map((img,index)=> (
      <img src={img} className="image"></img>
    ))}
   </div>
  );
}

export default App;
