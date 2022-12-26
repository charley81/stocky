import { Component, h } from '@stencil/core';

@Component({
  tag: 'search-stocks',
  styleUrl: 'search-stocks.css',
  shadow: true,
})
export class SearchStocks {
  render() {
    return (
      <form>
        <input type="text" id="search-stock" name="search-stock" placeholder="search a stock..." />
        <button type="submit" class="btn-primary">
          search
        </button>
      </form>
    );
  }
}
