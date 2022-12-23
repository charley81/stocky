import { newE2EPage } from '@stencil/core/testing';

describe('search-price', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<search-price></search-price>');

    const element = await page.find('search-price');
    expect(element).toHaveClass('hydrated');
  });
});
