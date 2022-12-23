import { newSpecPage } from '@stencil/core/testing';
import { StockItem } from '../stock-item';

describe('stock-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StockItem],
      html: `<stock-item></stock-item>`,
    });
    expect(page.root).toEqualHtml(`
      <stock-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stock-item>
    `);
  });
});
