import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'show-stocks',
  styleUrl: 'show-stocks.css',
  shadow: true,
})
export class ShowStocks {
  render() {
    return (
      <Host>
        <ul>
          <stock-item></stock-item>
          <stock-item></stock-item>
          <stock-item></stock-item>
          <stock-item></stock-item>
          <stock-item></stock-item>
          <stock-item></stock-item>
          <stock-item></stock-item>
        </ul>
      </Host>
    );
  }
}
