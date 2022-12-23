import { newE2EPage } from '@stencil/core/testing';

describe('show-stocks', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<show-stocks></show-stocks>');

    const element = await page.find('show-stocks');
    expect(element).toHaveClass('hydrated');
  });
});
