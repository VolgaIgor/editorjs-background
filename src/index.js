import { IconColor } from '@codexteam/icons';

import IconInfo from './svg/info.svg';
import IconWarning from './svg/warning.svg';

/**
 * Background Block Tune for the Editor.js
 */
export default class BackgroundTune {

  /**
   * @returns {bool}
   */
  static get isTune() {
    return true;
  }

  /**
   * @returns {{id: string, icon: string, title: string, color: string}[]}
   */
  static defaultColors() {
    return [
      {
        id: 'info',
        icon: IconInfo,
        title: 'Info',
        color: 'rgba(92, 182, 255, 0.1)'
      },
      {
        id: 'warning',
        icon: IconWarning,
        title: 'Warning',
        color: 'rgba(255, 208, 37, 0.1)'
      }
    ];
  }

  /**
   * Class constructor
   * @param data - Previously saved data
   * @param api - Editor.js API
   * @param config - user config for Tool
   * @param block - current block API object
   * 
   * @link https://editorjs.io/tools-api#class-constructor
   */
  constructor({ data, api, config, block }) {
    this.api = api;
    this.config = {
      colors: config.colors || BackgroundTune.defaultColors(),
    };
    this.block = block;

    this._color = null;
    this.color = data?.color;

    this._wrapper = null;
  }

  /**
   * Current color
   * @returns {string|null}
   */
  get color() {
    return this._color;
  }

  /**
   * Set color
   * @param {string|null} color color ID
   */
  set color(color) {
    const existColor = this.config.colors.find(elem => elem.id === color);
    this._color = existColor ? color : null;

    if (this._wrapper) {
      this._wrapper.style.backgroundColor = existColor ? existColor.color : null;
    }
  }

  /**
   * 
   * @returns {object[]}
   */
  render() {
    const childrenItems = [];
    this.config.colors.forEach(color => {
      childrenItems.push({
        icon: color.icon,
        title: color.title,
        isActive: () => this.color === color.id,
        onActivate: () => this.color = (this.color !== color.id ? color.id : null),
        closeOnActivate: true
      });
    });

    return {
      icon: IconColor,
      title: "Background",
      children: {
        items: childrenItems
      },
      isActive: () => this.color !== null,
    };
  }

  /**
   * 
   * @returns {HTMLElement}
   */
  wrap(blockContent) {
    const wrapper = document.createElement('div');
    wrapper.append(blockContent);

    this._wrapper = wrapper;

    this.color = this.color;

    return wrapper;
  }

  /**
   * Extracts Tune data
   * 
   * @returns {string|undefined} color id
   */
  save() {
    return this.color ? {
      color: this.color
    } : undefined;
  }
}
