import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @State() stockPrice: number;
  @State() symbol: string;

  // fetch price data from api
  async onFetchStockPrice(e: Event) {
    try {
      e.preventDefault();
      const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.symbol}&apikey=${process.env.AV_API_KEY}`);
      const data = await response.json();

      this.stockPrice = +data['Global Quote']['05. price'];
      console.log(this.stockPrice);
    } catch (error) {
      console.log(error);
    }
  }

  // get user input
  onUserInput(e: Event) {
    this.symbol = (e.target as HTMLInputElement).value;
    console.log(this.symbol);
  }

  render() {
    return (
      <div class="app-home">
        <header-component></header-component>
        <main>
          <div class="left-side">
            <search-price onFetchStockPrice={this.onFetchStockPrice.bind(this)} onInput={this.onUserInput.bind(this)} symbol={this.symbol}></search-price>
            <show-price stockPrice={this.stockPrice}></show-price>
          </div>
          <div class="right-side">
            <search-stocks></search-stocks>
            <show-stocks></show-stocks>
          </div>
        </main>
      </div>
    );
  }
}
