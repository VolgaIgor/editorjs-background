# Background Block Tune for Editor.js
Ability to highlight any block with a color.

### Preview
![Preview image](https://raw.githubusercontent.com/VolgaIgor/editorjs-background/refs/heads/main/asset/screenshot.png)

## Installation
### Install via NPM
Get the package

```shell
$ npm i editorjs-background
```

Include module at your application

```javascript
import BackgroundTune from 'editorjs-background';
```

### Load from CDN

You can load a specific version of the package from jsDelivr CDN.

Require this script on a page with Editor.js.

```html
<script src="https://cdn.jsdelivr.net/npm/editorjs-background"></script>
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/editorjs-background.bundle.js` file to your page.

## Usage
### For all blocks
```javascript
const editor = EditorJS({
  // ...
  tools: {
    // ...
    backgroundTune: BackgroundTune
  },
  tunes: ['backgroundTune']
  // ...
});
```

### For certain blocks
```javascript
const editor = EditorJS({
  // ...
  tools: {
    // ...
    backgroundTune: BackgroundTune,
    header: {
      class: Header,
      tunes: ['backgroundTune']
    },
  }
  // ...
});
```

### Config Params
One optional config parameter is available: `colors`. It allows you to change the available colors.

```javascript
const editor = EditorJS({
  // ...
  tools: {
    // ...
    backgroundTune: {
      class: BackgroundTune,
      config: {
        colors: [
          {
            id: 'info',
            icon: '<svg></svg>',
            title: 'Info',
            color: 'rgba(92, 182, 255, 0.1)'
          },
          {
            id: 'warning',
            icon: '<svg></svg>',
            title: 'Warning',
            color: 'rgba(255, 208, 37, 0.1)'
          }
        ]
      }
    }
  },
  tunes: ['backgroundTune']
  // ...
});
```

## Output data

This tune returns value with block data with following format:
```json
{
  "type": "header",
  "data": {
    "text": "Header",
    "level": 2
  },
  "tunes": {
    "backgroundTune": {
      "color": "info"
    }
  }
}
```