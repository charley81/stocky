import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <header-component></header-component>
        <search-price></search-price>
        <show-price></show-price>
        <search-stocks></search-stocks>
        <show-stocks></show-stocks>
      </div>
    );
  }
}
