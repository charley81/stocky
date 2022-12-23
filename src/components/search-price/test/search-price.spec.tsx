import { newSpecPage } from '@stencil/core/testing';
import { SearchPrice } from '../search-price';

describe('search-price', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SearchPrice],
      html: `<search-price></search-price>`,
    });
    expect(page.root).toEqualHtml(`
      <search-price>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </search-price>
    `);
  });
});
