import React, { Component } from 'react';

import Modal from '../theme/modal';

import pictures from './data/pictures.json';

import './style.scss';

class Photos extends Component {

  state = {
    pictures: pictures,
    visible: 3,
    openedModal: null
  };

  loadMore = this.loadMore.bind(this);

  toggleModal = this.toggleModal.bind(this);

  cloaseModal = this.closeModal.bind(this);

  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 3 };
    });
  }

  toggleModal(e, index) {
    this.setState({ openedModal: index });
  }

  closeModal() {
    this.setState({ openedModal: null });
  }

  render() {
    return (
      <section className="contain">
        <div className="feed has-text-centered">
          <div className="tiles columns has-text-centered is-multiline" aria-live="polite">
            {this.state.pictures.slice(0, this.state.visible).map((picture, index) => {
              return (
                <div className="tile fade-in column is-flex is-horizontal-center is-one-third" key={picture.id}>
                  <button className="studPic" onClick={e => this.toggleModal(e, index)}>
                    <img src={picture.url} alt={picture.alt} />
                  </button>
                  <Modal
                    closeModal={() => this.closeModal()}
                    showModal={this.state.openedModal === index}
                    title={picture.alt + picture.id}>
                    <img src={picture.url} alt={picture.alt} />
                  </Modal>
                </div>
              );
            })}
          </div>
          {this.state.visible < this.state.pictures.length &&
            <button onClick={this.loadMore} type="button" className="button is-danger load-more">Voir plus</button>
          }
        </div>

      </section>
    );
  }
}


export default Photos;