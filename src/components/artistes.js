import React, { Component } from 'react';

import artistes from './data/artistes.json';

import './style.scss';

class Artistes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // artistes: [
      //   { id: "1", artiste: "Föze", title: "Everybody Say", genre: "Indie pop", link: "https://www.youtube.com/watch?v=JmuJRCXBaVw", picture: "../images/couv/Foze.jpg" },
      //   { id: "2", artiste: "Hana Ops", title: "On court", genre: "Chanson", link: "https://www.youtube.com/watch?v=FHeWSB0w9NY", picture: "../../../public/couv/hana.png" },
      // {
      //   "id": "3",
      //   "artiste": "Zebraska",
      //   "title": "La balade",
      //   "genre": "Rap",
      //   "link": "https://www.youtube.com/watch?v=EzoLKNVTlew",
      //   "picture": "./src/images/couv/Zebraska.jpg"
      // },
      // {
      //   "id": "4",
      //   "artiste": "Fernand Brel Rock Expérience",
      //   "title": "Ne me quitte pas",
      //   "genre": "Rock",
      //   "link": "https://www.youtube.com/watch?v=TamKfuyPGeI",
      //   "picture": "./src/images/couv/fernand.jpg"
      // },
      // {
      //   "id": "5",
      //   "artiste": "JT25",
      //   "title": "Goagno Tsara Tahiza",
      //   "genre": "Rap",
      //   "link": "https://www.youtube.com/watch?v=E56vT3OzUcU",
      //   "picture": "./src/images/couv/JT25.jpg"
      // },
      // {
      //   "id": "6",
      //   "artiste": "Steeven Lr",
      //   "title": "Nekfeu Cheum",
      //   "genre": "Drum Cover",
      //   "link": "https://www.youtube.com/watch?v=r_XPiQbOBi0",
      //   "picture": "localhost:3000/src/images/couv/lr.png"
      // },
      // {
      //   "id": "7",
      //   "artiste": "The Delaney",
      //   "title": "4h11",
      //   "genre": "Rock",
      //   "link": "https://www.youtube.com/watch?v=GOlzQdvJFlQ",
      //   "picture": "./src/images/couv/delaney.png"
      // },
      // {
      //   "id": "8",
      //   "artiste": "Goby",
      //   "title": "J'ai cassé ma puce",
      //   "genre": "Rap",
      //   "link": "https://www.youtube.com/watch?v=LhVOjegPgOg",
      //   "picture": "./src/images/couv/goby.png"
      // },
      // {
      //   "id": "9",
      //   "artiste": "Baptist'",
      //   "title": "Né dans un camion rouge",
      //   "genre": "Chanson",
      //   "link": "https://www.youtube.com/watch?v=olZLPEWd2-E",
      //   "picture": "./src/images/couv/baptist.jpg"
      // },
      // {
      //   "id": "10",
      //   "artiste": "Mc Destiny",
      //   "title": "2020",
      //   "genre": "Rap",
      //   "link": "https://www.youtube.com/watch?v=TTb9wkh4qfc",
      //   "picture": "./src/images/couv/Destiny.png"
      // },
      // {
      //   "id": "11",
      //   "artiste": "Drôle d'Artiste",
      //   "title": "#1#",
      //   "genre": "Rap",
      //   "link": "https://www.youtube.com/watch?v=Xzg8xg39zbc",
      //   "picture": "./src/images/couv/drole.png"
      // }
      // ],
      artistes: artistes,
      visible: 3
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 3 };
    });
  }

  render() {
    return (
      <section className="contain">
        <div className="feed has-text-centered">
          <div className="tiles columns has-text-centered is-multiline" aria-live="polite">
            {this.state.artistes.slice(0, this.state.visible).map((item, index) => {
              return (
                <div className="tile fade-in column is-flex is-horizontal-center is-one-third" key={item.id}>
                  <a href={item.link} target="_blank" rel="noreferrer noopener">
                    <div className="has-text-centered">
                      <img className="artImg" src={item.picture} alt={item.artiste + ' - ' + item.title} />
                    </div>
                    <div className="info is-size-5">
                      <div className="textHover">
                        <p>{item.artiste}</p>
                        <p>{item.title}</p>
                        <p>{item.genre}</p>
                        {/* <p>Lien Youtube</p> */}
                      </div>
                    </div>
                  </a>
                </div>
              );

            })}
          </div>
          {this.state.visible < this.state.artistes.length &&
            <button onClick={this.loadMore} type="button" className="button is-danger load-more">Voir plus</button>
          }
        </div>
      </section>
    );
  }
}

export default Artistes;