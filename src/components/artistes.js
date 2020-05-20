import React, { Component } from 'react';

import artistes from './data/artistes.json';

import './style.scss';

class Artistes extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
                    <div className="info is-size-4">
                      <div className="textHover">
                        <p>{item.artiste}</p>
                        <p>{item.title}</p>
                        <p>{item.genre}</p>
                        <span className="icons"><i className="fab fa-youtube"></i></span>
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