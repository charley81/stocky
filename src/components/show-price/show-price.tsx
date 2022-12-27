import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'show-price',
  styleUrl: 'show-price.css',
  shadow: true,
})
export class ShowPrice {
  @Prop() stockPrice: number;
  @Prop() error: string;

  render() {
    let dataContent = <p>Please enter a stock symbol</p>;

    if (this.error) {
      dataContent = (
        <p>
          Error: <span>{this.error}</span>
        </p>
      );
    }

    if (this.stockPrice) {
      dataContent = (
        <p>
          Price: <span>${this.stockPrice}</span>
        </p>
      );
    }

    return <Host>{dataContent}</Host>;
  }
}
