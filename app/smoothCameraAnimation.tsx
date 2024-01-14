import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function smoothCameraAnimation(
  startPosition: THREE.Vector3,
  endPosition: THREE.Vector3,
  duration: number,
  controls: OrbitControls
) {
  let startTime: number;

  const animate = (time: number) => {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const newPosition = new THREE.Vector3().lerpVectors(
      startPosition,
      endPosition,
      progress
    );
    controls.object.position.copy(newPosition);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}

export default smoothCameraAnimation;
