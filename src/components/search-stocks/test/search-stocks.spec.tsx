import { newSpecPage } from '@stencil/core/testing';
import { SearchStocks } from '../search-stocks';

describe('search-stocks', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SearchStocks],
      html: `<search-stocks></search-stocks>`,
    });
    expect(page.root).toEqualHtml(`
      <search-stocks>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </search-stocks>
    `);
  });
});
