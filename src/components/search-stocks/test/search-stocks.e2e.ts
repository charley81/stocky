import { newE2EPage } from '@stencil/core/testing';

describe('search-stocks', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<search-stocks></search-stocks>');

    const element = await page.find('search-stocks');
    expect(element).toHaveClass('hydrated');
  });
});
