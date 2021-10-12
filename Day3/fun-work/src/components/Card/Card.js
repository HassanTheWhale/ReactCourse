import './Card.css'

function Card(props) {
  console.log(props)
  let obj = props.object;
  return <>
    <div className="card">
      <div className="header">
        <h3 className="title center">{obj.name}</h3>

          <div class="magicFlip">
            <div class="front">
              <img src={obj.imgSrc} alt={obj.name} />
            </div>
            <div class="back">
             <p>{obj.text}</p>
            </div>
          </div>

      </div>
    </div>
  </>;
}

export default Card;
