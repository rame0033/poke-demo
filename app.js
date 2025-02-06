const pokedex = [
  { id: 1, name: 'bulbasaur', caught: false },
  { id: 2, name: 'ivysaur', caught: false },
  { id: 3, name: 'venusaur', caught: false},
  { id: 4, name: 'charmander', caught: false },
  { id: 5, name: 'charmeleon', caught: false },
  { id: 6, name: 'charizard', caught: false },
  { id: 7, name: 'squirtle', caught: false },
  { id: 8, name: 'wartortle', caught: false },
  { id: 9, name: 'blastoise', caught: false },
  { id: 10, name: 'caterpie', caught: false },
  { id: 11, name: 'metapod', caught: false },
  { id: 12, name: 'butterfree', caught: false },
  { id: 13, name: 'weedle', caught: false },
  { id: 14, name: 'kakuna', caught: false },
  { id: 15, name: 'beedrill', caught: false },
  { id: 16, name: 'pidgey', caught: false },
  { id: 17, name: 'pidgeotto', caught: false },
  { id: 18, name: 'pidgeot', caught: false },
  { id: 19, name: 'rattata', caught: false },
  { id: 20, name: 'raticate', caught: false }
]

// thumb: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// full: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png

function GalleryItemImage (props) {
  const item = props.item
  const thumbnail = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`
  return (
    <img className="gallery-item-image" src={thumbnail} alt={item.name} />
  )
}

function Gallery () {
  const [items, setItems] = React.useState(pokedex) // initial state
  
  function clickHandler (target) {
    setItems(items.map(item => item.id === target.id ? {...item, caught: !item.caught} : item)) // If clicked item, toggle caught status
  }

   // This return statement renders a gallery of items. Each item is displayed as a div with a conditional class based on whether it is caught or not. 
  // The div contains an image component and a heading with the item's name. The clickHandler function is called when an item is clicked.
  return (
      <div id="gallery" className="gallery">
        {items.map(item => (
          <div key={item.id} className={item.caught ? "gallery-item caught" : "gallery-item"} onClick={() => clickHandler(item)}>
            <GalleryItemImage item={item} />
            <h2 className="gallery-item-name">{item.name}</h2>
          </div>))}
      </div>
    )
}

function App () {
  return (
    <React.Fragment>
      <h1 className="gallery-title">Pokemon Gallery</h1>
      <Gallery />
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)