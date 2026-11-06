import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// Glassy 3D "</>" that floats and tilts towards the mouse anywhere on the page.
// Colours: change PINK / VIOLET to restyle it.
const PINK = new THREE.Color('#ff3fa8');
const VIOLET = new THREE.Color('#6a3dff');

const EXTRUDE = {
  depth: 0.34,
  bevelEnabled: true,
  bevelThickness: 0.14,
  bevelSize: 0.13,
  bevelSegments: 10,
  curveSegments: 16,
};

// "<" outline: two arms meeting at a right angle.
function chevronShape(arm = 0.95, thickness = 0.36) {
  const h = thickness / 2;
  const k = h / Math.SQRT2;
  const tip = h * Math.SQRT2;
  const shape = new THREE.Shape();
  shape.moveTo(arm - k, arm + k);
  shape.lineTo(-tip, 0);
  shape.lineTo(arm - k, -arm - k);
  shape.lineTo(arm + k, -arm + k);
  shape.lineTo(tip, 0);
  shape.lineTo(arm + k, arm - k);
  shape.closePath();
  return shape;
}

// "/" bar: a rounded rectangle.
function barShape(width = 0.36, height = 2.7, radius = 0.17) {
  const w = width / 2;
  const hh = height / 2;
  const shape = new THREE.Shape();
  shape.moveTo(-w + radius, -hh);
  shape.lineTo(w - radius, -hh);
  shape.quadraticCurveTo(w, -hh, w, -hh + radius);
  shape.lineTo(w, hh - radius);
  shape.quadraticCurveTo(w, hh, w - radius, hh);
  shape.lineTo(-w + radius, hh);
  shape.quadraticCurveTo(-w, hh, -w, hh - radius);
  shape.lineTo(-w, -hh + radius);
  shape.quadraticCurveTo(-w, -hh, -w + radius, -hh);
  return shape;
}

// Pink at the bottom-left fading to violet at the top-right, baked into the vertices.
function paintGradient(geometry) {
  geometry.computeBoundingBox();
  const { min, max } = geometry.boundingBox;
  const pos = geometry.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const t = ((pos.getY(i) - min.y) / (max.y - min.y)) * 0.75 + ((pos.getX(i) - min.x) / (max.x - min.x)) * 0.25;
    c.copy(PINK).lerp(VIOLET, t);
    colors.set([c.r, c.g, c.b], i * 3);
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
}

function makePiece(shape, material) {
  const geometry = new THREE.ExtrudeGeometry(shape, EXTRUDE);
  geometry.center();
  paintGradient(geometry);
  return new THREE.Mesh(geometry, material);
}

export default function CodeSymbol3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = 0.45; // reflections without washing out the colour

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0, 9);

    // Soft glassy material: shiny clear coat, see-through glow, colours from the vertices.
    const material = new THREE.MeshPhysicalMaterial({
      vertexColors: true,
      roughness: 0.12,
      metalness: 0.1,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      transmission: 0.15,
      thickness: 0.8,
      ior: 1.45,
      iridescence: 0.5,
      iridescenceIOR: 1.6,
      sheen: 0.6,
      sheenColor: new THREE.Color('#ffb3ec'),
      emissive: new THREE.Color('#4a1a8f'),
      emissiveIntensity: 0.25,
      transparent: true,
      opacity: 0.92,
    });

    const left = makePiece(chevronShape(), material);
    left.position.x = -1.55;
    const right = makePiece(chevronShape(), material);
    right.rotation.y = Math.PI; // mirrored "<" becomes ">"
    right.position.x = 1.55;
    const slash = makePiece(barShape(), material);
    slash.rotation.z = -0.36;

    const symbol = new THREE.Group();
    symbol.add(left, slash, right);
    symbol.scale.setScalar(0.82);
    scene.add(symbol);

    // Coloured rim lights for the pink / violet glow on the edges.
    scene.add(new THREE.AmbientLight('#ffffff', 0.12));
    const key = new THREE.DirectionalLight('#ffffff', 1.1);
    key.position.set(2, 4, 6);
    const pinkLight = new THREE.PointLight('#ff3fb4', 70, 20);
    pinkLight.position.set(-4, -2, 2.5);
    const violetLight = new THREE.PointLight('#7a52ff', 70, 20);
    violetLight.position.set(4, 2.5, 2.5);
    const backGlow = new THREE.PointLight('#d65cff', 50, 15);
    backGlow.position.set(0, 0, -3);
    scene.add(key, pinkLight, violetLight, backGlow);

    function resize() {
      const { clientWidth: w, clientHeight: h } = mount;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // Keep the whole symbol in view on narrow screens.
      camera.position.z = w / h < 0.9 ? 9 / (w / h) * 0.85 : 9;
      camera.updateProjectionMatrix();
    }
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    // Mouse anywhere on the page, compared with the symbol's centre (-1..1).
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    function onMove(event) {
      const box = mount.getBoundingClientRect();
      const cx = box.left + box.width / 2;
      const cy = box.top + box.height / 2;
      target.x = THREE.MathUtils.clamp((event.clientX - cx) / (window.innerWidth / 2), -1, 1);
      target.y = THREE.MathUtils.clamp((event.clientY - cy) / (window.innerHeight / 2), -1, 1);
    }
    window.addEventListener('pointermove', onMove, { passive: true });

    // Only animate while the hero is on screen.
    let visible = true;
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    visibility.observe(mount);

    const clock = new THREE.Clock();
    let frame = 0;
    function tick() {
      frame = requestAnimationFrame(tick);
      if (!visible) return;
      const t = clock.getElapsedTime();
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      symbol.rotation.y = current.x * 0.6;
      symbol.rotation.x = current.y * 0.4;
      if (!reduceMotion) {
        symbol.position.y = Math.sin(t * 1.2) * 0.08; // gentle float
        symbol.rotation.z = Math.sin(t * 0.6) * 0.03;
      }
      renderer.render(scene, camera);
    }
    tick();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      resizeObserver.disconnect();
      visibility.disconnect();
      symbol.children.forEach((mesh) => mesh.geometry.dispose());
      material.dispose();
      scene.environment.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="code-scene" aria-hidden="true">
      <div className="code-scene-canvas" ref={mountRef} />
      <div className="code-scene-ring" />
    </div>
  );
}
