import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'show-price',
  styleUrl: 'show-price.css',
  shadow: true,
})
export class ShowPrice {
  @Prop() stockPrice: number;

  render() {
    return (
      <Host>
        <p>
          Price: <span>${this.stockPrice}</span>
        </p>
      </Host>
    );
  }
}
