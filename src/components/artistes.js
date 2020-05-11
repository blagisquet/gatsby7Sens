import React, { Component } from 'react';

import artistes from './data/artistes.json';

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

  // componentDidMount() {
  //   console.log('nique');
  //   fetch("./artistes.json").then(
  //     res => res.json()
  //   ).then(res => {
  //     if(res.ok) {
  //     this.setState({
  //       items: res
  //     });
  //     console.log("ok");
  //   } else {
  //     console.log('merde putain');
  //   }
  //     console.log(this.state.items);
  //   }).catch(error => {
  //     console.error(error);
  //     this.setState({
  //       error: true
  //     });
  //   });
  // }

  // componentDidMount() {
  //   console.log('ok');
  //   fetch("https://jsonplaceholder.typicode.com/posts").then(
  //     res => res.json()
  //   ).then(res => {
  //     this.setState({
  //       items: res
  //     });
  //   }).catch(error => {
  //     console.error(error);
  //     this.setState({
  //       error: true
  //     });
  //   });
  // }

  render() {
    return (
      <section className="contain">
        <div className="feed has-text-centered">
          <div className="tiles columns has-text-centered is-multiline" aria-live="polite">
            {this.state.items.slice(0, this.state.visible).map((item, index) => {
              return (
                <div className="tile fade-in artist column is-one-third" key={item.id}>
                  <a href={item.link} targer="_blank" rel="noreferrer noopener">
                    <figure className="image is-128x128">
                      {/* <img src={item.picture} alt={item.artiste + ' - ' + item.title} /> */}
                      <img src="https://bulma.io/images/placeholders/128x128.png" />
                    </figure>
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