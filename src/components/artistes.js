import React, { Component } from 'react';

import artistes from '../data/artistes.json';

import './style.scss';

// const artiste = artistes.map((artistes) => {
//   return (
//     <div>
//       Pute
//     <div className="tile fade-in" key={artistes.id}>
//       <a href={artistes.link} target="_blank">
//         <img src={artistes.picture} alt={artistes.artiste} />
//       </a>
//     </div>
//     </div>
//   )
// })

class Artistes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: artistes,
      visible: 3,
      error: false
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
      <section className="feed has-text-centered">
        <div className="tiles columns has-text-centered" aria-live="polite">
          {this.state.items.slice(0, this.state.visible).map((item, index) => {
            return (
              <div className="tile fade-in column is-one-third" key={item.id}>
                <a href={item.link} targer="_blank" rel="noreferrer noopener">
                  <img src={item.picture} alt={item.artiste + ' - ' + item.title} />
                  <span className="count">{index + 1}</span>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </a>
              </div>
            );
          })}
        </div>
        {this.state.visible < this.state.items.length &&
          <button onClick={this.loadMore} type="button" className="button is-danger load-more">Charger plus</button>
        }
      </section>
    );
  }
}

export default Artistes;