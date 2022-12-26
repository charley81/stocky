import { Component, h } from '@stencil/core';

@Component({
  tag: 'search-price',
  styleUrl: 'search-price.css',
  shadow: true,
})
export class SearchPrice {
  render() {
    return (
      <form>
        <input type="text" id="search-price" name="search-price" placeholder="search a stock price..." />

        <button type="submit" class="btn-primary">
          submit
        </button>
      </form>
    );
  }
}
