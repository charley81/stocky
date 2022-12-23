import { newE2EPage } from '@stencil/core/testing';

describe('show-price', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<show-price></show-price>');

    const element = await page.find('show-price');
    expect(element).toHaveClass('hydrated');
  });
});
