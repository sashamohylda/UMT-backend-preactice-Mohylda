import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.resolve("/Users/alexandramogilda/Documents/Personal/Practice/UMT-markup-practice-Mohylda-Oleksandra/public/images");
const FOLDER = process.env.CLOUDINARY_FOLDER ?? "flora";

async function uploadImage(filename) {
  const filepath = path.join(IMAGES_DIR, filename);
  if (!fs.existsSync(filepath)) {
    console.warn(`Image not found: ${filepath}`);
    return filename;
  }
  const result = await cloudinary.uploader.upload(filepath, {
    folder: FOLDER,
    public_id: path.parse(filename).name,
    overwrite: false,
    resource_type: "image",
  });
  return result.secure_url;
}

const bouquetsData = [
  { img: "peach-meadow@1x.png", title: "Peach Meadow", desc: "A soft and radiant arrangement of peach and blush roses with lush greenery in a straw basket — light and natural.", price: 55 },
  { img: "blush-romance@1x.png", title: "Blush Romance", desc: "A premium bouquet of deep pink and ivory roses, complemented by silver eucalyptus — sophisticated and intimate.", price: 34 },
  { img: "pastel-garden@1x.png", title: "Pastel Garden", desc: "A pastel-toned mix of spray roses and greenery in a woven basket — gentle, airy, and perfect for any occasion.", price: 40 },
  { img: "tulip-charm@1x.png", title: "Tulip Charm", desc: "A vivid bouquet of bright tulips and roses in a lavender box — cheerful and full of charm.", price: 61 },
  { img: "berry-bloom@1x.png", title: "Berry Bloom", desc: "A lush mix of rich pink, purple, and cream blooms with textured greens — romantic and elegant.", price: 32 },
  { img: "sweet-whisper@1x.png", title: "Sweet Whisper", desc: "A charming spring bouquet with peonies, roses, and lilac-toned accents — fresh, lively, and expressive.", price: 40 },
  { img: "field-joy@1x.png", title: "Field Joy", desc: "A rustic hand-tied bouquet of sunflowers, lisianthus, and daisies — perfect for brightening the day.", price: 49 },
  { img: "soft-bloom@1x.png", title: "Soft Bloom", desc: "A delicate bouquet of pink carnations and roses wrapped in satin paper — soft, stylish, and versatile.", price: 37 },
  { img: "peach-meadow@1x.png", title: "Burgundy Luxe", desc: "A rich arrangement of deep burgundy roses and peonies — passionate and refined.", price: 58 },
  { img: "blush-romance@1x.png", title: "Spring Awakening", desc: "A light bouquet of yellow and white blooms with fresh herbs — the freshness of first warmth.", price: 33 },
  { img: "pastel-garden@1x.png", title: "Lavender Dreams", desc: "An elegant bouquet of lavender roses, dried flowers, and eucalyptus — serenity and romance.", price: 45 },
  { img: "tulip-charm@1x.png", title: "Sunny Hello", desc: "A bright arrangement of sunflowers and yellow roses — joy, warmth, and a smile all day.", price: 38 },
  { img: "berry-bloom@1x.png", title: "Royal Peony", desc: "A monumental bouquet of large white peonies and greenery — purity, luxury, and impeccable taste.", price: 60 },
  { img: "sweet-whisper@1x.png", title: "Rustic Chic", desc: "A natural bouquet of wildflowers and grains in kraft paper — simplicity with character.", price: 30 },
  { img: "field-joy@1x.png", title: "Pink Sunset", desc: "A tender bouquet of pink and peach blooms against silver foliage — the romance of an evening sky.", price: 43 },
  { img: "soft-bloom@1x.png", title: "White Elegy", desc: "A refined bouquet of white orchids and calla lilies — a symbol of purity and minimalism.", price: 57 },
  { img: "peach-meadow@1x.png", title: "Tropical Splash", desc: "An exotic bouquet of birds-of-paradise and large leaves — vivid, bold, and unforgettable.", price: 55 },
  { img: "blush-romance@1x.png", title: "Forest Tale", desc: "A natural bouquet of green branches, berries, and tiny flowers — as if gathered in an enchanted forest.", price: 36 },
  { img: "pastel-garden@1x.png", title: "Cotton Candy", desc: "A fluffy mix of pale pink ranunculus and white lisianthus — sweet, dreamy, and irresistibly soft.", price: 42 },
  { img: "tulip-charm@1x.png", title: "Midnight Garden", desc: "Dark velvet roses and deep plum dahlias with muted foliage — mysterious and deeply romantic.", price: 53 },
  { img: "berry-bloom@1x.png", title: "Golden Hour", desc: "Warm amber chrysanthemums and rust-toned roses bathed in golden light — glowing and inviting.", price: 39 },
  { img: "sweet-whisper@1x.png", title: "Ocean Breeze", desc: "Cool-toned blue hydrangeas and white delphiniums — fresh as a seaside morning.", price: 47 },
  { img: "field-joy@1x.png", title: "Cherry Blossom", desc: "Delicate branches of pink sakura and white gypsophila — poetic, fleeting, and beautiful.", price: 50 },
  { img: "soft-bloom@1x.png", title: "Garden Party", desc: "A cheerful mix of colorful garden roses, anemones, and sweet peas — festive and full of life.", price: 44 },
  { img: "peach-meadow@1x.png", title: "Ivory Dream", desc: "Creamy garden roses and white hellebores tied with raw silk ribbon — understated luxury.", price: 56 },
  { img: "blush-romance@1x.png", title: "Wildflower Waltz", desc: "A free-spirited mix of cornflowers, poppies, and meadow grasses — joyful and untamed.", price: 31 },
  { img: "pastel-garden@1x.png", title: "Rose Cascade", desc: "A waterfall of blush, cream, and coral roses cascading freely — dramatic and breathtaking.", price: 59 },
  { img: "tulip-charm@1x.png", title: "Frosted Berry", desc: "White snowberries, dusty miller, and icy blue flowers — crisp, clean, and wintry elegant.", price: 41 },
  { img: "berry-bloom@1x.png", title: "Terra Cotta", desc: "Earthy burnt-orange dahlias and dried pampas grass — warm, grounded, and utterly modern.", price: 48 },
  { img: "sweet-whisper@1x.png", title: "Violet Mist", desc: "Soft purple wisteria and lilac anemones wrapped in sheer tulle — ethereal and enchanting.", price: 46 },
  { img: "field-joy@1x.png", title: "Coral Reef", desc: "Vibrant coral roses, orange ranunculus, and tropical foliage — energetic and joyfully bold.", price: 52 },
  { img: "soft-bloom@1x.png", title: "Secret Garden", desc: "Climbing roses, jasmine tendrils, and moss — a hidden garden brought to your door.", price: 54 },
  { img: "peach-meadow@1x.png", title: "Pearl Drop", desc: "Pristine white tulips and lily of the valley with pearl-tipped pins — pure and bridal.", price: 49 },
  { img: "blush-romance@1x.png", title: "Autumn Ember", desc: "Fiery red and orange maples, dahlias, and rosehips — the warmth of fall in full bloom.", price: 43 },
  { img: "pastel-garden@1x.png", title: "Morning Dew", desc: "Soft white freesias and pale green hellebores with dewy moss — the scent of a quiet morning.", price: 35 },
  { img: "tulip-charm@1x.png", title: "Raspberry Kiss", desc: "Hot pink gerberas and fuchsia tulips wrapped in candy-stripe paper — playful and affectionate.", price: 38 },
  { img: "berry-bloom@1x.png", title: "Champagne Toast", desc: "Soft champagne garden roses and cream spray carnations — refined, celebratory, and timeless.", price: 57 },
  { img: "sweet-whisper@1x.png", title: "Blue Moon", desc: "Rare blue roses and white irises with silver leaves — unusual, poetic, and truly one of a kind.", price: 60 },
  { img: "field-joy@1x.png", title: "Honey Bee", desc: "Yellow mimosa clusters and gold ranunculus with sprigs of lavender — buzzing with happiness.", price: 34 },
  { img: "soft-bloom@1x.png", title: "Smoke & Rose", desc: "Mauve roses and smoky eucalyptus with dried lavender — effortlessly cool and quietly romantic.", price: 46 },
  { img: "peach-meadow@1x.png", title: "Cabaret", desc: "Bold striped tulips and wine-red roses arranged in a theatrical round — dramatic and show-stopping.", price: 51 },
  { img: "blush-romance@1x.png", title: "Mint Julep", desc: "Cool mint green chrysanthemums, white roses, and eucalyptus — refreshing and unexpectedly chic.", price: 37 },
  { img: "pastel-garden@1x.png", title: "Lilac Lane", desc: "Fresh-cut lilac branches and white mock orange — a fragrant stroll through a spring garden.", price: 33 },
  { img: "tulip-charm@1x.png", title: "Saffron Sky", desc: "Rich yellow sunflowers, orange dahlias, and paprika roses — warm as a summer horizon.", price: 44 },
  { img: "berry-bloom@1x.png", title: "Ballerina", desc: "Blush pink tulips and pale lilac sweet peas tied with satin — graceful, light, and feminine.", price: 42 },
  { img: "sweet-whisper@1x.png", title: "Ink & Petal", desc: "Deep inky purple calla lilies and black-tipped roses — modern, editorial, and utterly distinct.", price: 58 },
  { img: "field-joy@1x.png", title: "Clover Hill", desc: "White clover, green herbs, and cream roses in a mason jar — unpretentious and endlessly charming.", price: 30 },
  { img: "soft-bloom@1x.png", title: "Scarlet Letter", desc: "A bold statement of crimson roses and red anemones wrapped in black kraft paper — passionate.", price: 55 },
  { img: "peach-meadow@1x.png", title: "Daydream", desc: "Soft lavender freesias, pale pink roses, and wisps of baby breath — gentle as a quiet afternoon.", price: 39 },
  { img: "blush-romance@1x.png", title: "Peony Cloud", desc: "An oversized bundle of blowsy white and blush peonies — indulgent, romantic, and impossibly lush.", price: 60 },
  { img: "pastel-garden@1x.png", title: "Tangerine Dream", desc: "Bright tangerine ranunculus and coral gerberas with tropical leaves — vibrant and energizing.", price: 41 },
  { img: "tulip-charm@1x.png", title: "Lemon Sorbet", desc: "Zesty yellow tulips, white daisies, and lime-green buttons — bright, fresh, and utterly uplifting.", price: 32 },
  { img: "berry-bloom@1x.png", title: "Dusty Rose", desc: "Antique rose-toned flowers and dried seedheads with linen ribbon — vintage warmth and elegance.", price: 47 },
  { img: "sweet-whisper@1x.png", title: "Stargazer", desc: "Fragrant stargazer lilies and white roses reaching upward — bold, perfumed, and unforgettable.", price: 53 },
  { img: "field-joy@1x.png", title: "Copper Moon", desc: "Burnt copper roses, rust chrysanthemums, and dried lunaria — autumnal and richly textured.", price: 48 },
  { img: "soft-bloom@1x.png", title: "Peppermint", desc: "Striped red and white carnations with dark holly leaves — festive, crisp, and full of seasonal cheer.", price: 36 },
  { img: "peach-meadow@1x.png", title: "Gossamer", desc: "Translucent white cosmos and pale green orchids — delicate, airy, and effortlessly ethereal.", price: 52 },
  { img: "blush-romance@1x.png", title: "Wanderlust", desc: "Protea, banksia, and tropical grasses in earthy tones — adventurous, global, and wonderfully wild.", price: 59 },
  { img: "pastel-garden@1x.png", title: "Strawberry Fields", desc: "Red-pink roses and white anemones with strawberry-shaped buds — playful, sweet, and summery.", price: 43 },
  { img: "tulip-charm@1x.png", title: "Silver Lining", desc: "Silvery dusty miller, white roses, and frosted berries — cool-toned and quietly stunning.", price: 45 },
  { img: "berry-bloom@1x.png", title: "Sundowner", desc: "Salmon, apricot, and gold roses at the edge of dusk — warm, layered, and memorably beautiful.", price: 50 },
  { img: "sweet-whisper@1x.png", title: "Green Thumb", desc: "Textural greens — bells of Ireland, ferns, and succulents — a bouquet for plant lovers.", price: 38 },
  { img: "field-joy@1x.png", title: "Amaranth", desc: "Trailing amaranth, deep magenta dahlias, and burgundy foliage — opulent and richly textured.", price: 56 },
  { img: "soft-bloom@1x.png", title: "Breezy Day", desc: "Light blue scabious, white gypsophila, and sky-blue veronica — as free as an open-sky afternoon.", price: 31 },
  { img: "peach-meadow@1x.png", title: "Macaroon", desc: "Pastel pink, pistachio, and lavender flowers in a neat round — sweet, French, and perfectly composed.", price: 44 },
  { img: "blush-romance@1x.png", title: "Noir et Blanc", desc: "Black calla lilies and white roses with graphite foliage — bold contrast and high-fashion drama.", price: 60 },
  { img: "pastel-garden@1x.png", title: "Blossom Trail", desc: "Cherry blossom branches, pink tulips, and ranunculus cascading freely — flowing and poetic.", price: 49 },
  { img: "tulip-charm@1x.png", title: "Velvet Underground", desc: "Deep red velvet roses and black-tipped dahlias — bold, moody, and undeniably sensual.", price: 54 },
  { img: "berry-bloom@1x.png", title: "Citrus Squeeze", desc: "Sunshine yellow dahlias, orange spray roses, and lime zest foliage — fresh, bright, and energetic.", price: 36 },
  { img: "sweet-whisper@1x.png", title: "Powder Blue", desc: "Hydrangeas in the softest blue and white muscari — quiet, cool, and perfectly serene.", price: 42 },
  { img: "field-joy@1x.png", title: "Harvest Moon", desc: "Wheat stalks, burgundy dahlias, and russet chrysanthemums — the bounty of autumn gathered together.", price: 46 },
  { img: "soft-bloom@1x.png", title: "Tulle & Thorns", desc: "Soft pink roses nestled in layers of tulle with subtle thorny branches — beauty in contrast.", price: 51 },
  { img: "peach-meadow@1x.png", title: "Jade Garden", desc: "Emerald green anthuriums, white orchids, and tropical palms — lush, architectural, and striking.", price: 57 },
  { img: "blush-romance@1x.png", title: "Apricot Kiss", desc: "Apricot-hued garden roses and cream wax flowers with sage leaves — warm, gentle, and loving.", price: 40 },
  { img: "pastel-garden@1x.png", title: "Foxglove Fancy", desc: "Tall foxglove spires and cottage garden roses in a wild, romantic cluster — English garden magic.", price: 47 },
  { img: "tulip-charm@1x.png", title: "First Snow", desc: "Pure white snowdrops, white hellebores, and frosted pine cones — quiet winter beauty.", price: 33 },
  { img: "berry-bloom@1x.png", title: "Rose Gold", desc: "Metallic-tinted rose-gold roses and warm blush peonies — glamorous and deeply modern.", price: 58 },
  { img: "sweet-whisper@1x.png", title: "Prairie Wind", desc: "Wild grasses, dried cotton, and soft-toned gomphrena — minimal, textural, and effortlessly natural.", price: 30 },
  { img: "field-joy@1x.png", title: "Plum Dusk", desc: "Deep plum lisianthus, dusty mauve roses, and pewter foliage — moody twilight in bloom.", price: 48 },
  { img: "soft-bloom@1x.png", title: "Watercolor", desc: "Soft washes of pink, peach, and lilac blooms loosely gathered — painterly and impressionistic.", price: 44 },
  { img: "peach-meadow@1x.png", title: "Electric Poppy", desc: "Vivid orange and red Iceland poppies with acid green foliage — electric, daring, and alive.", price: 35 },
  { img: "blush-romance@1x.png", title: "Garden Goddess", desc: "An abundant hand-tied bouquet of everything in bloom — lush, overflowing, and overwhelmingly beautiful.", price: 60 },
  { img: "pastel-garden@1x.png", title: "Driftwood", desc: "Bleached white blooms, driftwood-toned dried grasses, and pale blush roses — coastal and calm.", price: 43 },
  { img: "tulip-charm@1x.png", title: "Sunburst", desc: "A radiant burst of yellow coreopsis, orange gerberas, and red spray roses — pure sunshine.", price: 39 },
  { img: "berry-bloom@1x.png", title: "Celeste", desc: "Pale blue delphiniums, silver artemisia, and white cosmos — celestial, calm, and quietly glowing.", price: 50 },
  { img: "sweet-whisper@1x.png", title: "Wild Iris", desc: "Deep violet irises and yellow-centered blooms with reed-like stems — architectural and bold.", price: 37 },
  { img: "field-joy@1x.png", title: "Peach Fuzz", desc: "Fuzzy soft peach dahlias and cream roses with pastel ranunculus — tender and touchably soft.", price: 45 },
  { img: "soft-bloom@1x.png", title: "Roman Holiday", desc: "Terracotta-toned roses, olive branches, and dried citrus slices — Mediterranean and timeless.", price: 52 },
  { img: "peach-meadow@1x.png", title: "Glass Slipper", desc: "Delicate pale pink roses and white stephanotis with pearl pins — fairytale elegance.", price: 56 },
  { img: "blush-romance@1x.png", title: "Amber Glow", desc: "Warm amber chrysanthemums, honey-colored roses, and golden rod — glowing from within.", price: 41 },
  { img: "pastel-garden@1x.png", title: "Frozen Lake", desc: "Icy white and silver-blue blooms with crystalline berries — still, beautiful, and pristine.", price: 48 },
  { img: "tulip-charm@1x.png", title: "Confetti", desc: "A cheerful riot of mixed colors — red, yellow, pink, orange, purple — tied with multicolored ribbon.", price: 32 },
  { img: "berry-bloom@1x.png", title: "Magnolia", desc: "Large creamy magnolia blooms and waxy dark leaves — sculptural, serene, and deeply Southern.", price: 59 },
  { img: "sweet-whisper@1x.png", title: "Thistle Down", desc: "Purple Scottish thistles, white yarrow, and heather sprigs — wild, rugged, and romantically northern.", price: 34 },
  { img: "field-joy@1x.png", title: "Boudoir", desc: "Velvety red roses, champagne satin ribbon, and scattered rose petals — intimate and deeply luxurious.", price: 60 },
  { img: "soft-bloom@1x.png", title: "Tropical Sunset", desc: "Heliconia, bird-of-paradise, and fiery anthuriums — as vivid as the tropics at dusk.", price: 54 },
  { img: "peach-meadow@1x.png", title: "Meadowsweet", desc: "Frothy white meadowsweet, blush sweet peas, and pale yellow primrose — soft as a summer breeze.", price: 31 },
  { img: "blush-romance@1x.png", title: "Gilded Lily", desc: "Gold-dusted white lilies and champagne roses with bronze foliage — opulent and celebration-ready.", price: 57 },
  { img: "pastel-garden@1x.png", title: "Nimbus", desc: "Cloudlike white hydrangeas and soft grey lavender with silver ribbon — dreamy and weightless.", price: 46 },
  { img: "tulip-charm@1x.png", title: "Cerise Pop", desc: "Hot cerise gerberas, magenta snapdragons, and bright fuchsia roses — vivid, fun, and irresistible.", price: 38 },
  { img: "berry-bloom@1x.png", title: "Forever Yours", desc: "One hundred hand-selected roses in a gradient from deep red to blush — the ultimate declaration of love.", price: 60 },
];

export async function seedBouquets(prisma) {
  console.log("Uploading bouquet images to Cloudinary...");
  const bouquets = await Promise.all(
    bouquetsData.map(async (b) => ({
      ...b,
      img: await uploadImage(b.img),
    }))
  );

  await prisma.bouquet.createMany({ data: bouquets });
  return bouquets.length;
}