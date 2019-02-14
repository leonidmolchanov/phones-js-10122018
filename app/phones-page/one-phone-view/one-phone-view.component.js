import { BaseComponent } from '../../common/components/base/base.component.js';

export class OnePhoneViewComponent extends BaseComponent{
  show(phone) {
    this._phone = phone;
    this._backButton;
      this._basketButton;

      this._render();
    super.show();
    console.log(phone)
  }
    _handleClickBasket({ target }) {
    console.log(target.parentNode.dataset.id)
        let li = document.createElement('li');
        li.dataset.id = target.parentNode.dataset.id;
        li.innerHTML = target.parentNode.dataset.id;
        document.querySelector('.basket-inner').appendChild(li);
    }
    _handleClickBack({ target }) {
        console.log(this)
        this.onBack();
// document.querySelector('#item').style.display='none';
//         document.querySelector('#catalog').style.display='block';

    }
  _render() {
    this._element.innerHTML = `<div data-id="${this._phone.id}">
       <img class="phone" src="assets/img/phones/${this._phone.id}.0.jpg">

    <button class="back-button">Back</button>
    <button class="basket-button">Add to basket</button>


    <h1>${this._phone.id}</h1>

    <p>${this._phone.description}</p>

    <ul class="phone-thumbs">
    ${this._phone.images.reduce((html, item) => {
        return `${html}  <li>
        <img src="assets/${item}">
      </li>`}, '')}
    </ul>

    <ul class="specs">
      <li>
        <span>Availability and Networks</span>
        <dl>
          <dt>Availability</dt>
         
          
       ${this._phone.availability.reduce((html, item) => {
        return `${html} <dd>${item}</dd>`}, '')}
        </dl>
      </li>
      <li>
        <span>Battery</span>
        <dl>
          <dt>Type</dt>
          <dd>${this._phone.battery.type}</dd>
          <dt>Talk Time</dt>
          <dd>${this._phone.battery.talkTime}</dd>
          <dt>Standby time (max)</dt>
          <dd>${this._phone.battery.standbyTime}</dd>
        </dl>
      </li>
      <li>
        <span>Storage and Memory</span>
        <dl>
          <dt>RAM</dt>
          <dd>${this._phone.storage.ram}</dd>
          <dt>Internal Storage</dt>
          <dd>${this._phone.storage.flash}</dd>
        </dl>
      </li>
      <li>
        <span>Connectivity</span>
        <dl>
          <dt>Network Support</dt>
          <dd></dd>
          <dt>WiFi</dt>
          <dd>${this._phone.connectivity.wifi}</dd>
          <dt>Bluetooth</dt>
          <dd>${this._phone.connectivity.bluetooth}</dd>
          <dt>Infrared</dt>
          ${(this._phone.connectivity.infrared ? '<dd>✓</dd>' :'<dd>✘</dd>')}
          <dt>GPS</dt>
          ${(this._phone.connectivity.gps ? '<dd>✓</dd>' :'<dd>✘</dd>')}
        </dl>
      </li>
      <li>
        <span>Android</span>
        <dl>
          <dt>OS Version</dt>
          <dd>${this._phone.android.os}</dd>
          <dt>UI</dt>
          <dd>${this._phone.android.ui}</dd>
        </dl>
      </li>
      <li>
        <span>Size and Weight</span>
        <dl>
          <dt>Dimensions</dt>
          <dd>${this._phone.sizeAndWeight.dimensions[0]}</dd>
          <dd>${this._phone.sizeAndWeight.dimensions[1]}</dd>
          <dd>${this._phone.sizeAndWeight.dimensions[2]}</dd>
          <dt>Weight</dt>
          <dd>${this._phone.sizeAndWeight.weight}</dd>
        </dl>
      </li>
      <li>
        <span>Display</span>
        <dl>
          <dt>Screen size</dt>
          <dd>${this._phone.display.screenSize}</dd>
          <dt>Screen resolution</dt>
          <dd>${this._phone.display.screenResolution}</dd>
          <dt>Touch screen</dt>
          ${(this._phone.display.touchScreen ? '<dd>✓</dd>' :'<dd>✘</dd>')}
        </dl>
      </li>
      <li>
        <span>Hardware</span>
        <dl>
          <dt>CPU</dt>
          <dd>${this._phone.hardware.cpu}</dd>
          <dt>USB</dt>
          <dd>${this._phone.hardware.usb}</dd>
          <dt>Audio / headphone jack</dt>
          <dd>${this._phone.hardware.audioJack}</dd>
          <dt>FM Radio</dt>
          ${(this._phone.hardware.fmRadio ? '<dd>✓</dd>' :'<dd>✘</dd>')}
          <dt>Accelerometer</dt>
                    ${(this._phone.hardware.accelerometer ? '<dd>✓</dd>' :'<dd>✘</dd>')}
        </dl>
      </li>
      <li>
        <span>Camera</span>
        <dl>
          <dt>Primary</dt>
          <dd>${this._phone.camera.primary}</dd>
          <dt>Features</dt>
          <dd>${this._phone.camera.features}</dd>
        </dl>
      </li>
      <li>
        <span>Additional Features</span>
        <dd>Sensors: ${this._phone.additionalFeatures}</dd>
      </li>
    </ul>
    </div>`
      this._basketButton = document.querySelector('.basket-button')
      this._basketButton.addEventListener('click', this._handleClickBasket.bind(parent))
      this._backButton = document.querySelector('.back-button')
      this._backButton.addEventListener('click', this._handleClickBack.bind(parent))
  }
}