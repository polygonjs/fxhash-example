import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1653525968723',
	root: '1653525968723',
	nodes: {
		lights: '1653525968723',
		cameras: '1653525968723',
		'cameras/cameraControls1': '1653525968723',
		'cameras/cameraControls2': '1653525968723',
		fxhash: '1653525968723',
		'fxhash/actor1': '1653525968723',
		'fxhash/MAT': '1653525968723',
		'fxhash/MAT/meshStandardBuilder3': '1653525968723',
		floor: '1653525968723',
		'floor/MAT': '1653525968723',
	},
};

export const loadSceneData_scene_01 = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_01',
		urlPrefix: sceneDataRoot + '/scene_01',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
