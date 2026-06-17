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
  'Casas.jpg': 'portfolio/cover-hogares.jpg',
  'PortadaComercial.jpg': 'portfolio/cover-comercial.jpg',
  'IMG-20230512-WA0050.jpg': 'portfolio/hogares/salas-01-full.jpg',
  'IMG-20230604-WA0025.jpg': 'portfolio/hogares/salas-02-full.jpg',
  'IMG-20230505-WA0018.jpg': 'portfolio/hogares/salas-03-full.jpg',
  'IMG-20230530-WA0023.jpg': 'portfolio/hogares/salas-04-full.jpg',
  'IMG_8532_auto_x2_1.jpg': 'portfolio/hogares/salas-05-full.jpg',
  'PHOTO-2020-12-26-11-58-18_auto_x2.jpg': 'portfolio/hogares/salas-06-full.jpg',
  'PHOTO-2021-01-21-20-26-00_auto_x2.jpg': 'portfolio/hogares/salas-07-full.jpg',
  'IMG_7614.jpeg': 'portfolio/hogares/comedores-01-full.jpeg',
  'IMG_8294.jpeg': 'portfolio/hogares/comedores-02-full.jpeg',
  'IMG_7094.jpeg': 'portfolio/hogares/comedores-03-full.jpeg',
  'IMG_20150310_111659754.jpg': 'portfolio/hogares/comedores-04-full.jpg',
  'IMG_8900.JPG': 'portfolio/hogares/comedores-05-full.jpg',
  '20220727_085928.jpg': 'portfolio/hogares/comedores-06-full.jpg',
  'IMG-20230621-WA0037.jpg': 'portfolio/hogares/recamaras-01-full.jpg',
  'IMG-20230621-WA0044.jpg': 'portfolio/hogares/recamaras-02-full.jpg',
  'IMG_1922.jpeg': 'portfolio/hogares/recamaras-03-full.jpeg',
  'IMG-20200709-WA0017.jpg': 'portfolio/hogares/recamaras-04-full.jpg',
  'Baño.jpg': 'portfolio/hogares/recamaras-05-full.jpg',
  'Cocinas.jpg': 'portfolio/hogares/cocinas-01-full.jpg',
  '20221123_134718.jpg': 'portfolio/hogares/cocinas-02-full.jpg',
  'Cocina3.jpg': 'portfolio/hogares/cocinas-03-full.jpg',
  'IMG-20230711-WA0032_auto_x2.jpg': 'portfolio/hogares/cocinas-04-full.jpg',
  'IMG_9602.jpeg': 'portfolio/hogares/exteriores-01-full.jpeg',
  '20220519_132758.jpg': 'portfolio/hogares/exteriores-02-full.jpg',
  'IMG_4047.jpeg': 'portfolio/hogares/exteriores-03-full.jpeg',
  '20201009_122253.jpg': 'portfolio/hogares/exteriores-04-full.jpg',
  '53150227_2716515498375607_1658674248970928128_n.jpg':
    'portfolio/hogares/exteriores-05-full.jpg',
  '20230509_135125.jpg': 'portfolio/hogares/exteriores-06-full.jpg',
  'IMG_20190522_211224_702.jpg': 'portfolio/comercial/restaurantes-01-full.jpg',
  '20221103_111025.jpg': 'portfolio/comercial/restaurantes-02-full.jpg',
  'Rest2.jpg': 'portfolio/comercial/restaurantes-03-full.jpg',
  'Rest1.jpg': 'portfolio/comercial/restaurantes-04-full.jpg',
  '20221102_130418.jpg': 'portfolio/comercial/tiendas-01-full.jpg',
  'IMG_3515.jpeg': 'portfolio/comercial/tiendas-02-full.jpeg',
  'Frete.jpg': 'portfolio/comercial/tiendas-03-full.jpg',
  'Brioni1jpg.jpg': 'portfolio/comercial/tiendas-04-full.jpg',
  'Brioni2.jpg': 'portfolio/comercial/tiendas-05-full.jpg',
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
