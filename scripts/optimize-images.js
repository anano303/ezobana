const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const ASSETS_DIR = path.join(__dirname, "..", "src", "assets");

// Images to optimize with their target settings
const imagesToOptimize = [
  // Hero banner - largest file (7.7 MB PNG -> WebP)
  {
    input: path.join(ASSETS_DIR, "playful-games-birthday-party-nature-background.png"),
    output: path.join(ASSETS_DIR, "playful-games-birthday-party-nature-background.webp"),
    width: 1920,
    quality: 80,
  },
  // Background image (3.5 MB JPG -> WebP)
  {
    input: path.join(ASSETS_DIR, "foni.jpg"),
    output: path.join(ASSETS_DIR, "foni.webp"),
    width: 1920,
    quality: 75,
  },
  // Niko image (5 MB JPG -> WebP)
  {
    input: path.join(ASSETS_DIR, "niko.jpg"),
    output: path.join(ASSETS_DIR, "niko.webp"),
    width: 800,
    quality: 80,
  },
  // Gallery images (4-7 MB each -> WebP)
  {
    input: path.join(ASSETS_DIR, "imagesMain", "6G8A6625.jpg"),
    output: path.join(ASSETS_DIR, "imagesMain", "6G8A6625.webp"),
    width: 800,
    quality: 78,
  },
  {
    input: path.join(ASSETS_DIR, "imagesMain", "6G8A6596.jpg"),
    output: path.join(ASSETS_DIR, "imagesMain", "6G8A6596.webp"),
    width: 800,
    quality: 78,
  },
  {
    input: path.join(ASSETS_DIR, "imagesMain", "6G8A6838 - Copy.jpg"),
    output: path.join(ASSETS_DIR, "imagesMain", "6G8A6838 - Copy.webp"),
    width: 800,
    quality: 78,
  },
  {
    input: path.join(ASSETS_DIR, "imagesMain", "6G8A6669.jpg"),
    output: path.join(ASSETS_DIR, "imagesMain", "6G8A6669.webp"),
    width: 800,
    quality: 78,
  },
  {
    input: path.join(ASSETS_DIR, "imagesMain", "472336843_122160478232284809_7464877080578904187_n.jpg"),
    output: path.join(ASSETS_DIR, "imagesMain", "472336843_122160478232284809_7464877080578904187_n.webp"),
    width: 800,
    quality: 78,
  },
  {
    input: path.join(ASSETS_DIR, "imagesMain", "472719518_122160478688284809_7926994663759402226_n.jpg"),
    output: path.join(ASSETS_DIR, "imagesMain", "472719518_122160478688284809_7926994663759402226_n.webp"),
    width: 800,
    quality: 78,
  },
  {
    input: path.join(ASSETS_DIR, "imagesMain", "472749414_122160478700284809_3487736465589202652_n.jpg"),
    output: path.join(ASSETS_DIR, "imagesMain", "472749414_122160478700284809_3487736465589202652_n.webp"),
    width: 800,
    quality: 78,
  },
  {
    input: path.join(ASSETS_DIR, "imagesMain", "473388264_122161859876284809_8330218571272847525_n.jpg"),
    output: path.join(ASSETS_DIR, "imagesMain", "473388264_122161859876284809_8330218571272847525_n.webp"),
    width: 800,
    quality: 78,
  },
  // Services page images (PNG -> WebP)
  {
    input: path.join(ASSETS_DIR, "ეზობანა 2.png"),
    output: path.join(ASSETS_DIR, "ეზობანა 2.webp"),
    width: 1000,
    quality: 80,
  },
  {
    input: path.join(ASSETS_DIR, "ეზობანა 3.png"),
    output: path.join(ASSETS_DIR, "ეზობანა 3.webp"),
    width: 1000,
    quality: 80,
  },
  {
    input: path.join(ASSETS_DIR, "ეზობანა 4.png"),
    output: path.join(ASSETS_DIR, "ეზობანა 4.webp"),
    width: 1000,
    quality: 80,
  },
  {
    input: path.join(ASSETS_DIR, "ეზობანა 5.png"),
    output: path.join(ASSETS_DIR, "ეზობანა 5.webp"),
    width: 1000,
    quality: 80,
  },
  {
    input: path.join(ASSETS_DIR, "ეზობანა 6.png"),
    output: path.join(ASSETS_DIR, "ეზობანა 6.webp"),
    width: 1000,
    quality: 80,
  },
  {
    input: path.join(ASSETS_DIR, "სკოლებს და ბაღს.png"),
    output: path.join(ASSETS_DIR, "სკოლებს და ბაღს.webp"),
    width: 1000,
    quality: 80,
  },
  {
    input: path.join(ASSETS_DIR, "პროგრამა დიდები.png"),
    output: path.join(ASSETS_DIR, "პროგრამა დიდები.webp"),
    width: 1000,
    quality: 80,
  },
];

async function optimizeImage({ input, output, width, quality }) {
  const inputName = path.basename(input);
  try {
    if (!fs.existsSync(input)) {
      console.log(`  SKIP: ${inputName} (file not found)`);
      return;
    }

    const inputStats = fs.statSync(input);
    const inputSizeKB = Math.round(inputStats.size / 1024);

    await sharp(input)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality })
      .toFile(output);

    const outputStats = fs.statSync(output);
    const outputSizeKB = Math.round(outputStats.size / 1024);
    const savings = Math.round((1 - outputSizeKB / inputSizeKB) * 100);

    console.log(
      `  OK: ${inputName} -> ${path.basename(output)}  |  ${inputSizeKB} KB -> ${outputSizeKB} KB  (${savings}% smaller)`
    );
  } catch (err) {
    console.error(`  ERROR: ${inputName}: ${err.message}`);
  }
}

async function main() {
  console.log("Optimizing images...\n");

  for (const img of imagesToOptimize) {
    await optimizeImage(img);
  }

  console.log("\nDone!");
}

main();
