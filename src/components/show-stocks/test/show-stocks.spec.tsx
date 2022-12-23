import { newSpecPage } from '@stencil/core/testing';
import { ShowStocks } from '../show-stocks';

describe('show-stocks', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShowStocks],
      html: `<show-stocks></show-stocks>`,
    });
    expect(page.root).toEqualHtml(`
      <show-stocks>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </show-stocks>
    `);
  });
});
