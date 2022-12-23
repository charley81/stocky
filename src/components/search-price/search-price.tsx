import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'search-price',
  styleUrl: 'search-price.css',
  shadow: true,
})
export class SearchPrice {
  render() {
    return (
      <Host>
        <h3>search price</h3>
      </Host>
    );
  }
}
