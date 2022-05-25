import {EditorApiOptions, ConfigureEditor} from 'polygonjs-editor/public/editor/api';
// import {ProgressBarTop} from '@polygonjs/polygonjs/src/engine/viewers/progressBars/Top';

export const configureEditor: ConfigureEditor = (options: EditorApiOptions) => {
	// configure the editor
	options.api.setProjectName('fxhash_test_01');
	options.api.html.head.setTitle(options.sceneName);
	options.api.html.head.setDescription('a WebGL experience created with @polygonjs');
	options.api.html.head.setSiteUrl('https://polygonjs.com');
	options.api.html.head.setTwitter('@polygonjs');

	//
	// Add custom javascript
	//
	options.api.html.head.addScript({
		id: 'fxhash-snippet',
		content: `//---- do not edit the following code (you can indent as you wish)
		let alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
		var fxhash = "oo" + Array(49).fill(0).map(_=>alphabet[(Math.random()*alphabet.length)|0]).join('')
		let b58dec = str=>[...str].reduce((p,c)=>p*alphabet.length+alphabet.indexOf(c)|0, 0)
		let fxhashTrunc = fxhash.slice(2)
		let regex = new RegExp(".{" + ((fxhashTrunc.length/4)|0) + "}", 'g')
		let hashes = fxhashTrunc.match(regex).map(h => b58dec(h))
		let sfc32 = (a, b, c, d) => {
		  return () => {
			a |= 0; b |= 0; c |= 0; d |= 0
			var t = (a + b | 0) + d | 0
			d = d + 1 | 0
			a = b ^ b >>> 9
			b = c + (c << 3) | 0
			c = c << 21 | c >>> 11
			c = c + t | 0
			return (t >>> 0) / 4294967296
		  }
		}
		var fxrand = sfc32(...hashes)
		// true if preview mode active, false otherwise
		// you can append preview=1 to the URL to simulate preview active
		var isFxpreview = new URLSearchParams(window.location.search).get('preview') === "1"
		// call this method to trigger the preview
		function fxpreview() {
		  console.log("fxhash: TRIGGER PREVIEW")
		}
		//---- /do not edit the following code`,
	});
	options.api.html.head.addScript({
		id: 'fxhash-features',
		content: `
		function getBlockSize(value) {
			if (value < 0.7) { return 0.11 }
			return 0.15;
		}

		function getMaterial(value) {
			if (value < 0.5) { return 0 }
			if (value < 0.9) { return 1 }
			return 2
		}

		const seed = fxrand();
		window.$fxhashFeatures = {
			"blockSize": getBlockSize(seed),
			"material": getMaterial(seed),
		}
		  `
	})
	options.api.html.head.addScript({
		id: 'fxhash-preview',
		content: `document.addEventListener('POLYViewerReady', fxpreview);`
	})

	//
	// Update the progress bar used in the export
	//
	// options.api.html.viewer.setProgressBar(new ProgressBarTop());

	//
	// Add a custom viewer html
	//
	// 	options.api.panel.viewer.setData({
	// 		html: `
	// <div id='my-viewer'></div>
	// <div id=color-bars>
	// 	<div class='color-bar red'></div>
	// 	<div class='color-bar green'></div>
	// 	<div class='color-bar blue'></div>
	// </div>
	// <style>
	// #color-bars {
	// 	position: absolute;
	// 	top: 0px;
	// 	left: 0px;
	// 	width: 100%;
	// 	height: 20px;
	// }
	// .color-bar {
	// 	width: 32%;
	// 	height: 100%;
	// 	display: inline-block;
	// }
	// .color-bar.red { background-color: red; }
	// .color-bar.green { background-color: green; }
	// .color-bar.blue { background-color: blue; }

	// </style>`,
	// 	viewerId: 'my-viewer',
	// 	inShadowRoot: true
	// 	});
};
