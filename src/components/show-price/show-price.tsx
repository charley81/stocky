import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'show-price',
  styleUrl: 'show-price.css',
  shadow: true,
})
export class ShowPrice {
  render() {
    return (
      <Host>
        <h3>show price</h3>
      </Host>
    );
  }
}
