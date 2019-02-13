import { BaseComponent } from '../../common/components/base/base.component.js';

export class PhonesBasketComponent extends BaseComponent {
    constructor({ element}) {
        super({ element });
        this._render();
    }

    _render() {
        this._element.innerHTML = `
          <section>
        <p>Shopping Cart</p>
        <ul class="basket-inner">
        </ul>
      </section>
    `
    }
}