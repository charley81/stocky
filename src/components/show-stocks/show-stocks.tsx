import { Component, h } from '@stencil/core';

@Component({
  tag: 'show-stocks',
  styleUrl: 'show-stocks.css',
  shadow: true,
})
export class ShowStocks {
  render() {
    return (
      <ul>
        <stock-item></stock-item>
        <stock-item></stock-item>
        <stock-item></stock-item>
        <stock-item></stock-item>
        <stock-item></stock-item>
        <stock-item></stock-item>
        <stock-item></stock-item>
      </ul>
    );
  }
}
