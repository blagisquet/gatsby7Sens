import React, { Component } from 'react';

import artistes from './data/artistes.json';

import './style.scss';

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
                  {/* <span className="count">{index + 1}</span> */}
                  <p>{item.artiste}</p>
                  <p>{item.title}</p>
                  <p>{item.genre}</p>
                </a>
              </div>
            );
          })}
        </div>
        {this.state.visible < this.state.items.length &&
          <button onClick={this.loadMore} type="button" className="button is-danger is-fullwidth-mobile is-rounded load-more">Voir plus</button>
        }
      </section>
    );
  }
}

export default Artistes;