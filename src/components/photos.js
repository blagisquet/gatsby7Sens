import React, { Component } from 'react';

import pictures from './data/pictures.json';

import './style.scss';

class Photos extends Component {

    state = {
      pictures: pictures,
      visible: 3
    };

    loadMore = this.loadMore.bind(this);


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
            {this.state.pictures.slice(0, this.state.visible).map((picture, index) => {
              return (
                <div className="tile fade-in column is-flex is-horizontal-center is-one-third" key={picture.id}>
                  <figure className="image is-128x128 is-inline-block">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                  </figure>
                </div>
              );
            })}
          </div>
          {this.state.visible < this.state.pictures.length &&
            <button onClick={this.loadMore} type="button" className="button is-danger load-more">Voir plus</button>
          }
        </div>
      </section>
    )
  }
}


export default Photos;