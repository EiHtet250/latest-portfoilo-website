import { about, profile } from '../data/portfolio.js';
import './About.css';

export default function About() {
  const bySide = (side) => about.notes.filter((note) => note.side === side);

  return (
    <section className="section section-alt about" id="about">
      <div className="container">
        <header className="section-head-center">
          <h2 className="section-title">
            A little <span>about me</span>
          </h2>
          
        </header>

        <div className="about-board">
          <NoteStack notes={bySide('left')} side="left" />

          <div className="about-center">
            <figure className="polaroid">
              <div className="polaroid-photo">
                {profile.photo ? <img src={profile.photo} alt={profile.name} /> : <span>{profile.initials}</span>}
              </div>
              <figcaption>I am {profile.name}</figcaption>
            </figure>
            {bySide('center').map((note) => (
              <Note key={note.heading} note={note} />
            ))}
          </div>

          <NoteStack notes={bySide('right')} side="right" />
        </div>

        <div className="about-tags">
          {about.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
          <em>{about.footnote}</em>
        </div>
      </div>
    </section>
  );
}

function NoteStack({ notes, side }) {
  return (
    <div className={`note-stack note-stack-${side}`}>
      {notes.map((note) => (
        <Note key={note.heading} note={note} />
      ))}
    </div>
  );
}

function Note({ note }) {
  return (
    <article className="note">
      <h3>{note.heading}</h3>
      <p>{note.text}</p>
    </article>
  );
}
