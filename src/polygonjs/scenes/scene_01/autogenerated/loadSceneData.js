import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1653519530862',
	root: '1653519530862',
	nodes: {
		lights: '1653519530862',
		cameras: '1653519530862',
		'cameras/cameraControls1': '1653519530862',
		'cameras/cameraControls2': '1653519530862',
		fxhash: '1653519530862',
		'fxhash/actor1': '1653519530862',
		'fxhash/MAT': '1653519530862',
		'fxhash/MAT/meshStandardBuilder3': '1653519530862',
		floor: '1653519530862',
		'floor/MAT': '1653519530862',
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
