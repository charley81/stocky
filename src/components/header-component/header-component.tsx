import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.css',
  shadow: true,
})
export class HeaderComponent {
  render() {
    return (
      <Host>
        <h3>
          <span>S</span>TOCKY
        </h3>
      </Host>
    );
  }
}
