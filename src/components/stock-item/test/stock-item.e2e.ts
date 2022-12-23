import { newE2EPage } from '@stencil/core/testing';

describe('stock-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stock-item></stock-item>');

    const element = await page.find('stock-item');
    expect(element).toHaveClass('hydrated');
  });
});
