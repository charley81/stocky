/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface HeaderComponent {
    }
    interface SearchPrice {
        "inputValid": boolean;
        "onFetchStockPrice": any;
        "onInput": any;
        "symbol": string;
    }
    interface SearchStocks {
    }
    interface ShowPrice {
        "error": string;
        "stockPrice": number;
    }
    interface ShowStocks {
    }
    interface StockItem {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLHeaderComponentElement extends Components.HeaderComponent, HTMLStencilElement {
    }
    var HTMLHeaderComponentElement: {
        prototype: HTMLHeaderComponentElement;
        new (): HTMLHeaderComponentElement;
    };
    interface HTMLSearchPriceElement extends Components.SearchPrice, HTMLStencilElement {
    }
    var HTMLSearchPriceElement: {
        prototype: HTMLSearchPriceElement;
        new (): HTMLSearchPriceElement;
    };
    interface HTMLSearchStocksElement extends Components.SearchStocks, HTMLStencilElement {
    }
    var HTMLSearchStocksElement: {
        prototype: HTMLSearchStocksElement;
        new (): HTMLSearchStocksElement;
    };
    interface HTMLShowPriceElement extends Components.ShowPrice, HTMLStencilElement {
    }
    var HTMLShowPriceElement: {
        prototype: HTMLShowPriceElement;
        new (): HTMLShowPriceElement;
    };
    interface HTMLShowStocksElement extends Components.ShowStocks, HTMLStencilElement {
    }
    var HTMLShowStocksElement: {
        prototype: HTMLShowStocksElement;
        new (): HTMLShowStocksElement;
    };
    interface HTMLStockItemElement extends Components.StockItem, HTMLStencilElement {
    }
    var HTMLStockItemElement: {
        prototype: HTMLStockItemElement;
        new (): HTMLStockItemElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
        "header-component": HTMLHeaderComponentElement;
        "search-price": HTMLSearchPriceElement;
        "search-stocks": HTMLSearchStocksElement;
        "show-price": HTMLShowPriceElement;
        "show-stocks": HTMLShowStocksElement;
        "stock-item": HTMLStockItemElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppRoot {
    }
    interface HeaderComponent {
    }
    interface SearchPrice {
        "inputValid"?: boolean;
        "onFetchStockPrice"?: any;
        "onInput"?: any;
        "symbol"?: string;
    }
    interface SearchStocks {
    }
    interface ShowPrice {
        "error"?: string;
        "stockPrice"?: number;
    }
    interface ShowStocks {
    }
    interface StockItem {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-root": AppRoot;
        "header-component": HeaderComponent;
        "search-price": SearchPrice;
        "search-stocks": SearchStocks;
        "show-price": ShowPrice;
        "show-stocks": ShowStocks;
        "stock-item": StockItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "header-component": LocalJSX.HeaderComponent & JSXBase.HTMLAttributes<HTMLHeaderComponentElement>;
            "search-price": LocalJSX.SearchPrice & JSXBase.HTMLAttributes<HTMLSearchPriceElement>;
            "search-stocks": LocalJSX.SearchStocks & JSXBase.HTMLAttributes<HTMLSearchStocksElement>;
            "show-price": LocalJSX.ShowPrice & JSXBase.HTMLAttributes<HTMLShowPriceElement>;
            "show-stocks": LocalJSX.ShowStocks & JSXBase.HTMLAttributes<HTMLShowStocksElement>;
            "stock-item": LocalJSX.StockItem & JSXBase.HTMLAttributes<HTMLStockItemElement>;
        }
    }
}
