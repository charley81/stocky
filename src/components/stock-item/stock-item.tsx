import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stock-item',
  styleUrl: 'stock-item.css',
  shadow: true,
})
export class StockItem {
  render() {
    return (
      <Host>
        <h3>stock item</h3>
      </Host>
    );
  }
}
