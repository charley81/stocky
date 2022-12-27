import { Component, State, h, Prop } from '@stencil/core';

@Component({
  tag: 'search-price',
  styleUrl: 'search-price.css',
  shadow: true,
})
export class SearchPrice {
  @Prop() onFetchStockPrice;
  @Prop() onInput;
  @Prop({ reflect: true, mutable: true }) symbol: string;

  render() {
    return (
      <form onSubmit={this.onFetchStockPrice}>
        <input type="text" id="search-price" name="search-price" placeholder="search a stock price..." value={this.symbol} onInput={this.onInput} />

        <button type="submit" class="btn-primary">
          submit
        </button>
      </form>
    );
  }
}
