import { newSpecPage } from '@stencil/core/testing';
import { ShowPrice } from '../show-price';

describe('show-price', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShowPrice],
      html: `<show-price></show-price>`,
    });
    expect(page.root).toEqualHtml(`
      <show-price>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </show-price>
    `);
  });
});
