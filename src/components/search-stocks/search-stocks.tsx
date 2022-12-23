import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'search-stocks',
  styleUrl: 'search-stocks.css',
  shadow: true,
})
export class SearchStocks {
  render() {
    return (
      <Host>
        <h3>search stocks</h3>
      </Host>
    );
  }
}
