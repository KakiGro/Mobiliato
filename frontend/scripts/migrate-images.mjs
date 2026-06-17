#!/usr/bin/env node
import { copyFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { existsSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SOURCE = join(ROOT, '..', '..', 'Mobiliato-Old', 'www.mobiliato.com', 'images')
const DEST = join(ROOT, 'public', 'images')

const IMAGE_MAP = {
  'LogoMobiliato.png': 'brand/logo-mobiliato.png',
  'favicon.png': 'brand/favicon.png',
  'menu-icon_1menu-icon.png': 'brand/icon-menu.png',
  '64a5ad908d40ea3b66648c0b_facebook-logo.svg': 'brand/social-facebook.svg',
  'instagram-2.svg': 'brand/social-instagram.svg',
  'pinterest.png': 'brand/social-pinterest.png',
  'Detalles1.jpg': 'home/hero-detalles.jpg',
  'Detalles2.jpg': 'home/about-quienes-detalles.jpg',
  'Sala1.jpg': 'home/about-que-sala.jpg',
  'IMG_20190325_084616_990.jpg': 'home/about-como-trabajamos.jpg',
  'EntreMuros.png': 'home/press-entremuros.png',
  'Sillas.jpg': 'nosotros/servicio-sillas-thumb.jpg',
  'Sillas1.jpg': 'nosotros/servicio-sillas-01.jpg',
  'Sillas2.jpg': 'nosotros/servicio-sillas-02.jpg',
  'Sillas3.jpg': 'nosotros/servicio-sillas-03.jpg',
  'IMG_7095.jpeg': 'nosotros/servicio-mesas-thumb.jpeg',
  'Mesas1.jpg': 'nosotros/servicio-mesas-01.jpg',
  'Mesas2.jpg': 'nosotros/servicio-mesas-02.jpg',
  'Mesas3.jpg': 'nosotros/servicio-mesas-03.jpg',
  'Libreros.jpg': 'nosotros/servicio-libreros-thumb.jpg',
  'Libreros1.jpg': 'nosotros/servicio-libreros-01.jpg',
  'Libreros2.jpg': 'nosotros/servicio-libreros-02.jpg',
  'Libreros3.jpg': 'nosotros/servicio-libreros-03.jpg',
  'Cocinas.jpg': 'nosotros/servicio-cocinas-thumb.jpg',
  'Cocinas1Cortado.jpg': 'nosotros/servicio-cocinas-01.jpg',
  'Cocinas2Cortado.jpg': 'nosotros/servicio-cocinas-02.jpg',
  'Cocina3.jpg': 'nosotros/servicio-cocinas-03.jpg',
  'Salas.jpg': 'nosotros/servicio-sillones-thumb.jpg',
  'Sillones1.jpg': 'nosotros/servicio-sillones-01.jpg',
  'Sillones2.jpg': 'nosotros/servicio-sillones-02.jpg',
  'Sillones3.jpg': 'nosotros/servicio-sillones-03.jpg',
  'Pergola.jpg': 'nosotros/servicio-exteriores-thumb.jpg',
  'Exterior1.jpg': 'nosotros/servicio-exteriores-01.jpg',
  'Exterior2.jpg': 'nosotros/servicio-exteriores-02.jpg',
  'Exterior3.jpg': 'nosotros/servicio-exteriores-03.jpg',
}

const missing = []
const copied = []

for (const [sourceName, destPath] of Object.entries(IMAGE_MAP)) {
  const sourcePath = join(SOURCE, sourceName)
  const targetPath = join(DEST, destPath)

  if (!existsSync(sourcePath)) {
    missing.push(sourceName)
    continue
  }

  await mkdir(dirname(targetPath), { recursive: true })
  await copyFile(sourcePath, targetPath)
  copied.push(destPath)
}

console.log(`Copied ${copied.length} images to public/images/`)
if (missing.length) {
  console.log(`Missing ${missing.length} source files:`)
  missing.forEach((name) => console.log(`  - ${name}`))
}
