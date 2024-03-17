
import {
    handleCreateMap,
    handleCreateHero,
    handleObjectsLayer,
    handleHeroMovement,
    handleCreateGroups,
    handleCreateControls,
    handleConfigureCamera,
    handleCreateHeroAnimations,
} from '../../utils/sceneHelpers';
import { getSelectorData } from '../../utils/utils';


import { selectGameSetters } from '../../zustand/game/selectGameData';

export const key = 'GameScene';

export const scene = {};

export function create() {

    const { addGameCameraSizeUpdateCallback } = getSelectorData(selectGameSetters);


    handleCreateControls(scene);


    handleCreateGroups(scene);


    const customColliders = handleCreateMap(scene);


    handleCreateHero(scene);


    handleObjectsLayer(scene);


    handleConfigureCamera(scene);
    addGameCameraSizeUpdateCallback(() => {
        handleConfigureCamera(scene);
    });


    handleCreateHeroAnimations(scene);


    scene.physics.add.collider(scene.heroSprite, scene.enemies);
    scene.physics.add.collider(scene.heroSprite, customColliders);
}

export function update(time, delta) {
    handleHeroMovement(scene);
    scene.heroSprite.update(time, delta);
}
