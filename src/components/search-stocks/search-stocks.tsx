import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'search-stocks',
  styleUrl: 'search-stocks.css',
  shadow: true,
})
export class SearchStocks {
  render() {
    return (
      <form>
        <label htmlFor="search-stock">
          <input type="text" id="search-stock" name="search-stock" placeholder="search a stock..." />
        </label>
        <button type="submit">search</button>
      </form>
    );
  }
}
