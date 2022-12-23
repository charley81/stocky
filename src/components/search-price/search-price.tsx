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
        <label htmlFor="search-price">
          <input type="text" id="search-price" name="search-price" placeholder="search a stock price..." />
        </label>
        <button type="submit">submit</button>
      </form>
    );
  }
}
