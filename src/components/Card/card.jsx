import "./card.css";

export function Card() {
  return (
    <section className="card">
      <img
        src="http://hp-api.herokuapp.com/images/harry.jpg"
        alt="Foto Harry Potter"/>
      <div className="card-text">
        <h3 className="card-title">Harry Potter</h3>
        <spam className="cardt-house">Gryffindor</spam>
        <p className="card-actor">Artista: Daniel Radcliffe</p>
      </div>
    </section>
  );
}
