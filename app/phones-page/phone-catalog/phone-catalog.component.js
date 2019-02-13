import { BaseComponent } from '../../common/components/base/base.component.js';

export class PhonesCatalogComponent extends BaseComponent {
  constructor({ element, phones, onPhoneSelect, basket }) {
    super({ element });
    this.phones = phones;
    this.onPhoneSelect = onPhoneSelect;
    this._render();
    this.arrBasket=[];
      this.itemId;
      this.itemName;
  }

  _handleClick({ target }) {
    console.log(target)
    const liElement = target.closest('.thumbnail');
    if (!liElement) {
      return;
    }
    this.onPhoneSelect(liElement.dataset.id);
  }
    _handleClickBasket({ target }) {
    this.itemId = target.parentNode.parentNode.dataset.id
        this.itemName = target.parentNode.parentNode.dataset.id

        let li = document.createElement('li');
    li.dataset.id = this.itemId;
        li.innerHTML = this.itemName;
        document.querySelector('.basket-inner').appendChild(li);
    }
  _render() {
    this._element.innerHTML = `
          <ul class="phones">
          ${this.phones.reduce((html, phone) => {
      return `${html}     <li class="thumbnail" data-id=${phone.id}>
          <a href="#!/phones/${phone.id}" class="thumb li-href">
            <img alt=${phone.id} src=${`assets/${phone.imageUrl}`}>
          </a>
          <div class="phones__btn-buy-wrapper">
            <a class="btn btn-success basket">
              Add
            </a>
          </div>
          <a href="#!/phones/${phone.id}" class="li-href">${phone.name}</a>
          <p>${phone.snippet}</p>
        </li>`
    }, '')}
   
      </ul>
    `
      this.arrBasket = document.querySelectorAll('.basket')
      this.arrImage = document.querySelectorAll('.li-href')

      // console.log(this.arrBasket)
      parent=this
      this.arrBasket.forEach(function (item) {
          item.addEventListener('click', parent._handleClickBasket.bind(item))
})
      this.arrImage.forEach(function (item) {
          item.addEventListener('click', parent._handleClick.bind(parent))
      })
  }
}