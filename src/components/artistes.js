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
      <section className="contain">
        <div className="feed has-text-centered">
          <div className="tiles columns has-text-centered is-multiline" aria-live="polite">
            {this.state.items.slice(0, this.state.visible).map((item, index) => {
              return (
                <div className="tile fade-in column is-flex is-horizontal-center is-one-third" key={item.id}>
                  <a href={item.link} targer="_blank" rel="noreferrer noopener">
                    <div className="has-text-centered">
                      <figure className="image is-128x128 is-inline-block">
                        {/* <img src={item.picture} alt={item.artiste + ' - ' + item.title} /> */}
                        <img src="https://bulma.io/images/placeholders/128x128.png" />
                      </figure>
                    </div>
                    <div className="info">
                      <p>{item.artiste}</p>
                      <p>{item.title}</p>
                      <p>{item.genre}</p>
                      {/* <p>Lien Youtube</p> */}
                    </div>
                  </a>
                </div>
              );

            })}
          </div>
          {this.state.visible < this.state.items.length &&
            <button onClick={this.loadMore} type="button" className="button is-danger load-more">Voir plus</button>
          }
        </div>
      </section>
    );
  }
}

export default Artistes;