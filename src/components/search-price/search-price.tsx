import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'search-price',
  styleUrl: 'search-price.css',
  shadow: true,
})
export class SearchPrice {
  @Prop() onFetchStockPrice;
  @Prop() onInput;
  @Prop({ reflect: true, mutable: true }) symbol: string;
  @Prop() inputValid: boolean;

  render() {
    return (
      <form onSubmit={this.onFetchStockPrice}>
        <input type="text" id="search-price" name="search-price" placeholder="search a stock price..." value={this.symbol} onInput={this.onInput} />

        <button type="submit" class="btn-primary" disabled={!this.inputValid}>
          submit
        </button>
      </form>
    );
  }
}
