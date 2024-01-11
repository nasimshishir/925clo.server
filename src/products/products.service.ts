import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductParams } from './utils/types';
import { Sizes } from './entities/size.entity';
import { Colors } from './entities/color.entity';
import { ProductBrands } from './entities/product-brand.entity';
import { Occasions } from './entities/occasion.entity';
import { Seasons } from './entities/season.entity';
import { ProductTypes } from './entities/type.entity';



@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Products) private productRepository: Repository<Products>,
    @InjectRepository(Sizes) private sizesRepository: Repository<Sizes>,
    @InjectRepository(Colors) private colorsRepository: Repository<Colors>,
    @InjectRepository(ProductBrands) private brandsRepository: Repository<ProductBrands>,
    @InjectRepository(Occasions) private occasionsRepository: Repository<Occasions>,
    @InjectRepository(Seasons) private seasonsRepository: Repository<Seasons>,
    @InjectRepository(ProductTypes) private typesRepository: Repository<ProductTypes>,
  ) { }

  async createProduct(productDetails: CreateProductParams[]) {
    const allProducts = [
      {
        "brand": "FEAR OF GOD ESSENTIALS",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Ffear-of-god-essentials%2Fshoes%2Fhigh-top-sneakers%2Fsuede-mesh-and-neoprene-sneakers%2F23471478576564328",
        "price": "117.5",
        "product_category": "Shoes > Suede Shoes > Suede Sneakers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/23471478576564328/pr/w1000.jpg",
        "description": "Fear of God Essentials' considered neutral palette and fabrications ensures longevity. Designed for a snug, flexible fit, these sneakers are made from a combination of suede, mesh and neoprene and have comfortable sock-like uppers. Wear them with: Fear of God for Ermenegildo Zegna T-shirt, Fear of God Essentials Sweatpants, Fear of God Hoodie, 1017 ALYX 9SM Bracelet.",
        "product_title": "FEAR OF GOD ESSENTIALS - Suede, Mesh and Neoprene Sneakers - Men - Neutrals - EU 41",
        "color": "Neutrals",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Nicholas Daley",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fnicholas-daley%2Fclothing%2Fsweatshirts%2Ftie-dyed-loopback-cotton-jersey-sweatshirt%2F25458910981651068",
        "price": "117.0",
        "product_category": "Clothing > Sweats > Sweatshirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/25458910981651068/pr/w1000.jpg",
        "description": "Nicholas Daley places a great significance on craftsmanship, choosing to make even simple pieces like this sweatshirt from premium materials in Japan. It feels really comfortable thanks to the soft and naturally breathable cotton-jersey, and has a tie-dyed finish.",
        "product_title": "Nicholas Daley - Tie-Dyed Loopback Cotton-Jersey Sweatshirt - Men - Green - UK/US 38",
        "color": "Green",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Nicholas Daley",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fnicholas-daley%2Fclothing%2Fcasual-shorts%2Fwide-leg-striped-waxed-linen-drawstring-shorts%2F25458910981651098",
        "price": "152.0",
        "product_category": "Clothing > Shorts > Casual Shorts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/25458910981651098/pr/w1000.jpg",
        "description": "For Nicholas Daley's SS21 lineup, British world karate champion Mr Jordan Thomas is photographed in a series of stances, signalling the collection's main inspiration and proving you can do just about anything while wearing it. Showcased in a wide pose to mirror the shape of the leg, these waxed-linen shorts have drawstrings at the hems and waist so you can fully customise the fit. Large to size. See Size & Fit notes.",
        "product_title": "Nicholas Daley - Wide-Leg Striped Waxed-Linen Drawstring Shorts - Men - Green - UK/US 30",
        "color": "Green",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mastermind World",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmastermind-world%2Fclothing%2Fbomber-jackets%2Flogo-embroidered-leopard-print-shell-bomber-jacket%2F23471478576504088",
        "price": "549.0",
        "product_category": "Clothing > Coats And Jackets > Bomber Jackets",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/23471478576504088/pr/w1000.jpg",
        "description": "MASTERMIND WORLD's detail-oriented Mr Masaaki Homma drafted and redrafted his skull-and crossbones-motif more than 1, 000 times. This bomber has been made in Japan from leopard-print shell and lined in mesh for breathability. It's embroidered with the emblem on the back and has logo-print drawstrings to the right of the hem.",
        "product_title": "Mastermind World - Logo-Embroidered Leopard-Print Shell Bomber Jacket - Men - Multi - M",
        "color": "Multi",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "FRAME",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fframe%2Fclothing%2Fslim-jeans%2Fl-homme-slim-fit-stretch-denim-jeans%2F25458910981921810",
        "price": "143.5",
        "product_category": "Clothing > Jeans > Slim Jeans",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/25458910981921810/pr/w1000.jpg",
        "description": "The perfect pair of slim-fit jeans is a holy grail, and we think FRAME's 'L'Homme' style is a strong contender. They're made from cotton blended with a hint of stretch for manoeuvrability and are cut narrow through the hips for an overall tidy shape. This product was made from Considered Materials. Find out more about our Craftsmanship Code here.",
        "product_title": "FRAME - L'Homme Slim-Fit Stretch-Denim Jeans - Men - White - UK/US 32",
        "color": "White",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "TOM FORD",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Ftom-ford%2Fclothing%2Fsweatpants%2Ftapered-cotton-blend-sweatpants%2F23471478576375855",
        "price": "656.0",
        "product_category": "Clothing > Sweats > Sweatpants",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/23471478576375855/pr/w1000.jpg",
        "description": "TOM FORD's sweatpants are knitted from a soft cotton-blend with a generous amount of cashmere that elevates them to something quite luxurious. They're tapered through the leg for a tidy fit and have a flexible drawstring waistband.",
        "product_title": "TOM FORD - Tapered Cotton-Blend Sweatpants - Men - Blue - IT 54",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Séfr",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fsefr%2Fclothing%2Fchecked-shirts%2Frami-checked-cotton-and-wool-blend-shirt%2F23471478576484963",
        "price": "96.0",
        "product_category": "Clothing > Casual Shirts > Checked Shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/23471478576484963/pr/w1000.jpg",
        "description": "Each piece in Séfr's collection has a vintage influence, the checks and earth tones on this 'Rami' shirt are reminiscent of '70s styles. It's tailored for a regular fit from a cotton and wool-blend and fastens with a row of mother-of-pearl buttons.",
        "product_title": "Séfr - Rami Checked Cotton and Wool-Blend Shirt - Men - Neutrals - S",
        "color": "Neutrals",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "FEAR OF GOD ESSENTIALS",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Ffear-of-god-essentials%2Fshoes%2Fhigh-top-sneakers%2Fleather-trimmed-suede-and-mesh-sneakers%2F23471478576564329",
        "price": "117.5",
        "product_category": "Shoes > Suede Shoes > Suede Sneakers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/23471478576564329/pr/w1000.jpg",
        "description": "Fear of God Essentials' sneakers are panelled from soft suede and breathable mesh and articulated with contrasting leather. A signature silhouette from the core line, they feature the distinctive outsized rubber soles, sock liners and drawstring laces.",
        "product_title": "FEAR OF GOD ESSENTIALS - Leather-Trimmed Suede and Mesh Sneakers - Men - Gray - EU 39",
        "color": "Gray",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Howlin'",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fhowlin-%2Fclothing%2Fshort-sleeve-polo-shirts%2Fmr-fantasy-cotton-blend-terry-polo-shirt%2F25458910981976366",
        "price": "70.0",
        "product_category": "Clothing > Polo Shirts > Short Sleeve Polo-Shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/25458910981976366/pr/w1000.jpg",
        "description": "Howlin' is known for its high-quality knitwear, but it also incorporates lighter, seasonal fabrics into its collections for the warmer months. Made in Belgium, this 'Mr Fantasy' polo shirt is cut from the brand's signature cotton-blend terry and named after the 1967 Traffic album.",
        "product_title": "Howlin' - Mr Fantasy Cotton-Blend Terry Polo Shirt - Men - Blue - S",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Marant",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fisabel-marant%2Fclothing%2Fhoodies%2Fmiley-tie-dyed-fleece-back-cotton-blend-jersey-hoodie%2F23471478576571965",
        "price": "183.0",
        "product_category": "Clothing > Sweats > Hoodies",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/23471478576571965/pr/w1000.jpg",
        "description": "Isabel Marant has the laid-back fit of its 'Miley' hoodie down and produces several new iterations each season. This version is made from soft fleece-back cotton-blend jersey that's tie-dyed in a medley of purple shades to match the flocked dégradé logo.",
        "product_title": "Marant - Miley Tie-Dyed Fleece-Back Cotton-Blend Jersey Hoodie - Men - Purple - L",
        "color": "Purple",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Acne Studios",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Facne-studios%2Fclothing%2Fcasual-shorts%2Frowland-wide-leg-belted-denim-shorts%2F23471478576604931",
        "price": "133.0",
        "product_category": "Clothing > Shorts > Casual Shorts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/23471478576604931/pr/w1000.jpg",
        "description": "Acne Studios' 'Rowland' shorts are cut wide through the leg from pure cotton-denim that's faded and whiskered to give them a vintage appearance. They're equipped with a slim D-ring belt made from the same fabric.",
        "product_title": "Acne Studios - Rowland Wide-Leg Belted Denim Shorts - Men - Black - UK/US 30",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Howlin'",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fhowlin-%2Fclothing%2Fstriped-shirts%2Fcocktail-camp-collar-checked-cotton-blend-ripstop-shirt%2F25458910981976413",
        "price": "51.0",
        "product_category": "Clothing > Casual Shirts > Striped Shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/25458910981976413/pr/w1000.jpg",
        "description": "The 'Cocktail' shirt is one of Howlin's repeat designs, and this one comes in a classic check. It's cut from airy Italian cotton-blend ripstop and fitted with a summery camp collar. We have the coordinating shorts, too.",
        "product_title": "Howlin' - Cocktail Camp-Collar Checked Cotton-Blend Ripstop Shirt - Men - Blue - XS",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "OrSlow",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Forslow%2Faccessories%2Fbucket-hats%2Fcotton-ripstop-bucket-hat%2F46128359902945008",
        "price": "72.0",
        "product_category": "Accessories > Hats > Bucket Hats",
        "gender": "unisex",
        "image": "https://www.mrporter.com/variants/images/46128359902945008/pr/w1000.jpg",
        "description": "OrSlow's bucket hat is modelled after vintage 'Boonie' styles from the US Army. Made in Japan from lightweight cotton-ripstop, it has ventilating metal eyelets and durable webbing utility loops.",
        "product_title": "OrSlow - Cotton-Ripstop Bucket Hat - Men - Green - 0",
        "color": "Green",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "adidas Consortium",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fadidas-consortium%2Fshoes%2Flow-top-sneakers%2Fplus-human-made-country-free-hiker-hm-neoprene-suede-and-faux-leather-sneakers%2F46353151654357506",
        "price": "48.0",
        "product_category": "Shoes > Sneakers > Low Top Sneakers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/46353151654357506/pr/w1000.jpg",
        "description": "For their latest collaboration, adidas Consortium and Human Made combine elements from the iconic 'Country' sneakers with Boost cushioning technology. Set on Continental rubber outsoles, this pair has neoprene uppers with supportive suede toecaps and the slogan \"Gears for Futuristic Teenagers\" printed on the faux leather '3-Stripes'.",
        "product_title": "adidas Consortium - Human Made Country Free Hiker HM Neoprene, Suede and Faux Leather Sneakers - Men - Gray - UK 5.5",
        "color": "Gray",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Fear of God",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Ffear-of-god%2Fshoes%2Flace-up-boots%2Fpanelled-nubuck-duck-boots%2F46353151654231653",
        "price": "238.5",
        "product_category": "Shoes > Boots > Lace-Up Boots",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/46353151654231653/pr/w1000.jpg",
        "description": "Fear of God's duck boots have panelled nubuck uppers and are set on thick rubber soles just like the brand's '101' sneakers. They're embossed with its emblem and have traditional pinched seams on the toecaps.",
        "product_title": "Fear of God - Panelled Nubuck Duck Boots - Men - Brown - EU 39",
        "color": "Brown",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Fplain-t-shirts%2Fcotton-and-silk-blend-jersey-t-shirt%2F46353151654570405",
        "price": "66.0",
        "product_category": "Clothing > T-shirts > Plain T-shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/46353151654570405/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. Mr P.'s T-shirt is made from cotton and silk-blend jersey that has a really smooth hand feel. It has a classic crew-neck profile.",
        "product_title": "Mr P. - Cotton and Silk-Blend Jersey T-Shirt - Men - Blue - XS",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Gucci Eyewear",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fgucci-eyewear%2Faccessories%2Fd-frame%2Fd-frame-gold-tone-sunglasses%2F46353151655369422",
        "price": "248.5",
        "product_category": "Accessories > Sunglasses > D-Frame",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/46353151655369422/pr/w1000.jpg",
        "description": "Gucci's sunglasses have a bold and retro D-shaped frame that's reflective of Mr Alessandro Michele's eclectic vision for the house. They've been made in Italy from lightweight gold-tone metal and fitted with contrasting green tinted lenses.",
        "product_title": "Gucci Eyewear - D-Frame Gold-Tone Sunglasses - Men - Gold",
        "color": "Gold",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Fear of God",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Ffear-of-god%2Fshoes%2Flow-top-sneakers%2Fcordovan-leather-loafers%2F46353151654231656",
        "price": "284.0",
        "product_category": "Shoes > Sneakers > Luxury Sneakers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/46353151654231656/pr/w1000.jpg",
        "description": "Fear of God's loafers are made from Italian Cordovan leather that's been washed to give them a comfortable worn-in feel. The heels can be folded down so it's easy to slip them on and off, while the flexible rubber soles will prevent you from slipping.",
        "product_title": "Fear of God - Cordovan Leather Loafers - Men - Brown - EU 40",
        "color": "Brown",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Fcasual-trousers%2Fcotton-and-linen-blend-chinos%2F46353151654598211",
        "price": "101.5",
        "product_category": "Clothing > Trousers > Chinos",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/46353151654598211/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. Mr P.'s chinos are made from a breathable cotton and linen-blend that'll keep you cool in summer. They're cut straight and fitted with a partially elasticated waistband for comfort.",
        "product_title": "Mr P. - Cotton and Linen-Blend Chinos - Men - Neutrals - 28",
        "color": "Neutrals",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Brioni",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fbrioni%2Fclothing%2Fsuit-jackets%2Funstructured-silk-twill-suit-jacket%2F46353151655128825",
        "price": "1128.0",
        "product_category": "Clothing > Blazers > Single Breasted Blazers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/46353151655128825/pr/w1000.jpg",
        "description": "EXCLUSIVE AT MR PORTER. Ambassadors of that languid Italian fit, the tailors at Brioni have left this suit jacket unlined and unstructured. It's cut from silk-twill with a felted undercollar and double vent to enhance the easy drape. Wear it with: Brioni Trousers, Paul Smith Shoes, Brioni Glasses, NOMOS Glashütte Watch.",
        "product_title": "Brioni - Unstructured Silk-Twill Suit Jacket - Men - Blue - IT 48",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Canali",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fcanali%2Fclothing%2Fsuit-jackets%2Fkei-slim-fit-unstructured-wool-flannel-suit-jacket%2F46353151655453811",
        "price": "486.0",
        "product_category": "Clothing > Blazers > Single Breasted Blazers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/46353151655453811/pr/w1000.jpg",
        "description": "Canali's best-selling 'Kei' suit comes in so many different colours and fabrics that work for a variety of occasions, this Italian-made jacket is tailored from wool-flannel, so it's ideal for cooler weather. The front darts accentuate the slim fit, while the versatile anthracite hue pairs well with just about any shirt or tie.",
        "product_title": "Canali - Kei Slim-Fit Unstructured Wool-Flannel Suit Jacket - Men - Gray - IT 56",
        "color": "Gray",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Canali",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fcanali%2Fclothing%2Fsuit-jackets%2Fkei-slim-fit-unstructured-wool-suit-jacket%2F46353151655501640",
        "price": "454.0",
        "product_category": "Clothing > Blazers > Single Breasted Blazers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/46353151655501640/pr/w1000.jpg",
        "description": "Canali's suit jacket was made on its signature 'Kei' block for a slim, yet comfortable fit. It's been expertly tailored in Italy from lightweight wool with a partial lining. The double vent adds breathability and keeps the fabric from creasing.",
        "product_title": "Canali - Kei Slim-Fit Unstructured Wool Suit Jacket - Men - Gray - IT 54",
        "color": "Gray",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Zegna",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fzegna%2Fclothing%2Fcasual-trousers%2Fcity-slim-fit-wool-and-silk-blend-trousers%2F46353151655736066",
        "price": "392.0",
        "product_category": "Clothing > Trousers > Slim-Fit Trousers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/46353151655736066/pr/w1000.jpg",
        "description": "The merino wool in Ermenegildo Zegna's 'City' trousers has been sourced from its own farm in Australia and blended with silk for a subtle sheen. They're tailored for a slim fit with front pleats and pressed creases, while the hems are left unfinished so you can have them adjusted to your height.",
        "product_title": "Zegna - City Slim-Fit Wool and Silk-Blend Trousers - Men - Blue - IT 48",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "AMIRI",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Famiri%2Fclothing%2Fprinted-shirts%2Fcamp-collar-patchwork-tie-dyed-silk-shirt%2F2009602915428",
        "price": "231.0",
        "product_category": "Clothing > Casual Shirts > Printed Shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/2009602915428/pr/w1000.jpg",
        "description": "AMIRI's shirt reflects the laid-back style of the brand's native California. Tailored from fluid silk in a relaxed camp-collar profile, it's tie-dyed in glorious shades of blue, green, purple and yellow.",
        "product_title": "AMIRI - Camp-Collar Patchwork Tie-Dyed Silk Shirt - Men - Multi - XS",
        "color": "Multi",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Balmain",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fbalmain%2Fclothing%2Fchecked-shirts%2Fgrandad-collar-checked-cotton-poplin-shirt%2F2009602961202",
        "price": "238.0",
        "product_category": "Clothing > Casual Shirts > Checked Shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/2009602961202/pr/w1000.jpg",
        "description": "Whether you wear it solo or as an overshirt, a checked shirt like Balmain's is always a good option. It's tailored for a loose fit from smooth cotton-poplin with a relaxed grandad collar and two utility-style flap pockets at the chest.",
        "product_title": "Balmain - Grandad-Collar Checked Cotton-Poplin Shirt - Men - Blue - EU 41",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Brunello Cucinelli",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fbrunello-cucinelli%2Fclothing%2Fcasual-shorts%2Flinen-shorts%2F2009602785554",
        "price": "276.0",
        "product_category": "Clothing > Shorts > Casual Shorts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/2009602785554/pr/w1000.jpg",
        "description": "Mr Brunello Cucinelli is a master of picking the right fabrics, you can see it particularly well in his linen pieces, like these shorts. They're intended to drape softly and be comfortable enough to wear on even the hottest days of the year. Large to size. See Size & Fit notes.",
        "product_title": "Brunello Cucinelli - Linen Shorts - Men - Brown - IT 46",
        "color": "Brown",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Balenciaga",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fbalenciaga%2Fclothing%2Fhoodies%2Foversized-printed-fleece-back-cotton-jersey-hoodie%2F343549805718330",
        "price": "556.5",
        "product_category": "Clothing > Sweats > Hoodies",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/343549805718330/pr/w1000.jpg",
        "description": "You can always count on Mr Demna Gvasalia to create a cool new Balenciaga print, for the one on this hoodie, he kits out ancient Greek marathon runners in the label's 'Triple S' sneakers. It's cut from fleece-back cotton-jersey in an oversized fit.",
        "product_title": "Balenciaga - Oversized Printed Fleece-Back Cotton-Jersey Hoodie - Men - Blue - XS",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Fplain-t-shirts%2Fmelange-cotton-and-linen-blend-t-shirt%2F560971903961318",
        "price": "32.0",
        "product_category": "Clothing > T-shirts > Plain T-shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971903961318/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. Mr P.'s T-shirt is knitted from a combination of cotton and linen threads for a mélange finish. It has a classic crew-neck profile and chest pocket.",
        "product_title": "Mr P. - Mélange Cotton and Linen-Blend T-Shirt - Men - Burgundy - XS",
        "color": "Burgundy",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Outerknown",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fouterknown%2Fclothing%2Fplain-t-shirts%2Fgroovy-organic-cotton-jersey-t-shirt%2F343549805590025",
        "price": "49.0",
        "product_category": "Clothing > T-shirts > Plain T-shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/343549805590025/pr/w1000.jpg",
        "description": "Outerknown's 'Groovy' T-shirt is cut from organic cotton-jersey that's garment-dyed for softness and depth of colour. The fabric is loosely woven to enhance the relaxed feel.",
        "product_title": "Outerknown - Groovy Organic Cotton-Jersey T-Shirt - Men - Pink - S",
        "color": "Pink",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Flightweight-waterproof-jackets%2Fresist-dyed-cotton-and-linen-blend-blouson-jacket%2F560971904221691",
        "price": "98.0",
        "product_category": "Clothing > Coats And Jackets > Lightweight and Waterproof Jackets",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904221691/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. To distinguish Mr P.'s blouson jacket, the Italian-sourced cotton and linen-blend cloth is resist dyed. This traditional technique involves coating the top layer to lock in a solid, uniform colour and leaves the reverse untreated, resulting in a handsome tonality to the fabric. It's unlined both to keep it light and so you can appreciate the subtle complexities achieved by the process. This product unlocks access to tailor-made digital content including detailed care information, origin story and styling advice. When you receive your purchase, scan the QR code on the care label to discover how to make the most of your item.",
        "product_title": "Mr P. - Resist-Dyed Cotton and Linen-Blend Blouson Jacket - Men - Orange - L",
        "color": "Orange",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Fcasual-trousers%2Frelaxed-cotton-elasticated-trousers%2F560971904221683",
        "price": "138.0",
        "product_category": "Clothing > Trousers > Casual Trousers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904221683/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. Mr P. works closely with its makers to ensure the quality of its line. Tailored in Italy, these trousers are cut from cotton in a wide, relaxed fit with a partially elasticated waistband.",
        "product_title": "Mr P. - Relaxed Cotton Elasticated Trousers - Men - Blue - UK/US 34",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Flong-sleeve-polo-shirts%2Fcashmere-polo-shirt%2F560971904277710",
        "price": "178.0",
        "product_category": "Clothing > Cashmere > Cashmere Knitwear",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904277710/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. Mr P.'s polo shirt has been knitted in the UK from pure cashmere, so it has a really soft handle. As it buttons all the way through, it can also be layered like a cardigan.",
        "product_title": "Mr P. - Cashmere Polo Shirt - Men - Blue - S",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Fformal-trousers%2Ftapered-puppytooth-stretch-cotton-golf-trousers%2F560971904274309",
        "price": "70.0",
        "product_category": "Clothing > Trousers > Formal Trousers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904274309/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. Mr P.'s latest capsule is created specially for golfing. These flat-front trousers are cut for a tapered fit from stretch-cotton for full range of motion. Complement one of the colours in the puppytooth with your polo shirt.",
        "product_title": "Mr P. - Tapered Puppytooth Stretch-Cotton Golf Trousers - Men - Pink - UK/US 30",
        "color": "Pink",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Fstriped-shirts%2Fstriped-cotton-shirt%2F560971904274337",
        "price": "118.0",
        "product_category": "Clothing > Casual Shirts > Striped Shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904274337/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. This shirt embodies Mr P.'s aim to create easy, smart and enduring pieces. It's tailored from a 100% cotton cloth spun and woven in Switzerland and has slim light-blue and black stripes.",
        "product_title": "Mr P. - Striped Cotton Shirt - Men - Blue - XXL",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Fsweatshirts%2Fnatural-dyed-cotton-jersey-mock-neck-sweatshirt%2F560971904269328",
        "price": "50.0",
        "product_category": "Clothing > Sweats > Sweatshirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904269328/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. There's a subtle patina at the seams and edges of Mr P.'s cotton-jersey sweatshirt, which is a result of the natural dye, it's made from plants and minerals, leaving out the harmful chemicals used in synthetic processes. The mock neck and fleece backing add comfort and warmth.",
        "product_title": "Mr P. - Natural-Dyed Cotton-Jersey Mock-Neck Sweatshirt - Men - Pink - XS",
        "color": "Pink",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Fsuit-jackets%2Funstructured-double-breasted-linen-and-cotton-blend-suit-jacket%2F560971904277716",
        "price": "150.0",
        "product_category": "Clothing > Blazers > Double Breasted Blazers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904277716/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. Mr P.'s suit jacket is unstructured, so it looks a little more relaxed than canvassed styles. It's made from black linen and cotton-blend that's lightly washed and has a butterfly lining for lightness. The double-breasted close and position of the front patch pockets help to broaden your frame.",
        "product_title": "Mr P. - Unstructured Double-Breasted Linen and Cotton-Blend Suit Jacket - Men - Black - UK/US 42",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Fshort-sleeve-polo-shirts%2Fslim-fit-contrast-tipped-knitted-cotton-polo-shirt%2F560971904277718",
        "price": "150.0",
        "product_category": "Clothing > Polo Shirts > Short Sleeve Polo-Shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904277718/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. Mr P.'s polo shirt is knitted from cotton for a lightweight handle. It has a relaxed open collar and fresh white tipping for a little contrast.",
        "product_title": "Mr P. - Slim-Fit Contrast-Tipped Knitted Cotton Polo Shirt - Men - Blue - XS",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Fcasual-shorts%2Fpleated-cotton-twill-shorts%2F560971904269802",
        "price": "50.0",
        "product_category": "Clothing > Shorts > Casual Shorts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904269802/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. Craftsmanship, timelessness and versatility are the cornerstones of each Mr P. collection. Combining comfort and style, these shorts are cut for a wide, relaxed fit and have single pleats at the front which give them a sharper, more tailored appearance. They're made from Italian cotton-twill that's durable and holds the structure through the leg. This product unlocks access to tailor-made digital content including detailed care information, origin story and styling advice. When you receive your purchase, scan the QR code on the care label to discover how to make the most of your item.",
        "product_title": "Mr P. - Pleated Cotton-Twill Shorts - Men - Green - UK/US 28",
        "color": "Green",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "TOM FORD",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Ftom-ford%2Fclothing%2Fsweatpants%2Fslim-fit-tapered-jersey-sweatpants%2F560971904330214",
        "price": "376.0",
        "product_category": "Clothing > Sweats > Sweatpants",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904330214/pr/w1000.jpg",
        "description": "TOM FORD's sweatpants are a fine option for lounging because they feel soft and comfortable while still looking smart enough to nip outside in. They're made from jersey blended with cotton and have stitched creases and an elasticated drawstring waistband.",
        "product_title": "TOM FORD - Slim-Fit Tapered Jersey Sweatpants - Men - Black - IT 58",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "John Elliott",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fjohn-elliott%2Fclothing%2Fhoodies%2Fbeach-tie-dyed-loopback-cotton-jersey-hoodie%2F560971904688966",
        "price": "144.0",
        "product_category": "Clothing > Sweats > Hoodies",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904688966/pr/w1000.jpg",
        "description": "John Elliott uses a new 'Marble Mix' process to give some of its most popular designs, like this 'Beach' hoodie, a cool tie-dyed effect. It's cut from loopback cotton-jersey, carefully folded and then dipped into various colours to create the unique 'Fossil' finish.",
        "product_title": "John Elliott - Beach Tie-Dyed Loopback Cotton-Jersey Hoodie - Men - Neutrals - S",
        "color": "Neutrals",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "John Elliott",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fjohn-elliott%2Fclothing%2Fhoodies%2Fbeach-tie-dyed-loopback-cotton-jersey-hoodie%2F560971904691949",
        "price": "288.0",
        "product_category": "Clothing > Sweats > Hoodies",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904691949/pr/w1000.jpg",
        "description": "John Elliott uses a new 'Marble Mix' process to give some of its most popular designs, like this 'Beach' hoodie, a cool tie-dyed effect. It's cut from loopback cotton-jersey, carefully folded and then dipped into various colours to create the unique 'Super Bloom' finish.",
        "product_title": "John Elliott - Beach Tie-Dyed Loopback Cotton-Jersey Hoodie - Men - Pink - XL",
        "color": "Pink",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Berluti",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fberluti%2Faccessories%2Fbelt-bags%2Fleather-trimmed-logo-print-canvas-belt-bag%2F560971904680598",
        "price": "658.0",
        "product_category": "Accessories > Bags > Messenger and Crossbody Bags",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904680598/pr/w1000.jpg",
        "description": "Berluti's belt bag has been made in Italy from signature Virée canvas stamped with the house's 19th century crest. Reinforced with patinated Venezia leather, it has enough room for your wallet, keys and sunglasses.",
        "product_title": "Berluti - Leather-Trimmed Logo-Print Canvas Belt Bag - Men - Black",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "John Elliott",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fjohn-elliott%2Fclothing%2Fcasual-shorts%2Fexposure-loopback-cotton-jersey-drawstring-shorts%2F560971904691969",
        "price": "90.0",
        "product_category": "Clothing > Shorts > Casual Shorts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904691969/pr/w1000.jpg",
        "description": "John Elliot's loopback cotton-jersey shorts are brushed for softness and lightly faded to resemble sun-bleaching. They look great styled with the matching hoodie or tee.",
        "product_title": "John Elliott - Exposure Loopback Cotton-Jersey Drawstring Shorts - Men - Blue - S",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Café Kitsuné",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fcafe-kitsune%2Faccessories%2Ftotes%2Flogo-print-cotton-canvas-tote-bag%2F560971904709184",
        "price": "21.0",
        "product_category": "Accessories > Bags > Totes",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904709184/pr/w1000.jpg",
        "description": "You can use Café Kitsuné's cotton-canvas tote bag to carry your laptop and a book, or pack it full of groceries. Issued to coincide with the opening of its New York City coffee shop, it's printed with its moniker and founding location.",
        "product_title": "Café Kitsuné - Logo-Print Cotton-Canvas Tote Bag - Men - Neutrals",
        "color": "Neutrals",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Café Kitsuné",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fcafe-kitsune%2Fclothing%2Fhoodies%2Flogo-print-cotton-jersey-hoodie%2F560971904709007",
        "price": "90.0",
        "product_category": "Clothing > Sweats > Hoodies",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904709007/pr/w1000.jpg",
        "description": "Café Kitsuné is the lifestyle division of Parisian brand Maison Kitsuné, which started off as a record label, then expanded into ready-to-wear, accessories and homeware. Printed with the coffee shop's emblem at the chest, this hoodie is cut from loopback cotton-jersey for a comfortable fit.",
        "product_title": "Café Kitsuné - Logo-Print Cotton-Jersey Hoodie - Men - Neutrals - XS",
        "color": "Neutrals",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Theory",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Ftheory%2Fclothing%2Fsweatshirts%2Fmasten-slim-fit-tie-dyed-cotton-blend-sweater%2F560971904771082",
        "price": "82.0",
        "product_category": "Clothing > Sweats > Sweatshirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904771082/pr/w1000.jpg",
        "description": "Theory's cotton-blend 'Masten' sweater is tie-dyed in warm shades of sepia. Even though it's patterned, the neutral tone makes it easy to style with most jackets and trousers.",
        "product_title": "Theory - Masten Slim-Fit Tie-Dyed Cotton-Blend Sweater - Men - Brown - S",
        "color": "Brown",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Balenciaga",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fbalenciaga%2Fclothing%2Fprinted-t-shirts%2Foversized-printed-cotton-jersey-t-shirt%2F560971904876865",
        "price": "346.5",
        "product_category": "Clothing > T-shirts > Printed T-shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904876865/pr/w1000.jpg",
        "description": "Balenciaga's cotton-jersey T-shirt is printed with a 'Love Earth' graphic and designed with a trompe-l'œil neckline for a layered effect. It's cut in the brand's typical oversized fit.",
        "product_title": "Balenciaga - Oversized Printed Cotton-Jersey T-Shirt - Men - White - S",
        "color": "White",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Café Kitsuné",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fcafe-kitsune%2Faccessories%2Fcaps%2Flogo-embroidered-cotton-blend-twill-baseball-cap%2F560971904709205",
        "price": "45.5",
        "product_category": "Accessories > Hats > Caps",
        "gender": "unisex",
        "image": "https://www.mrporter.com/variants/images/560971904709205/pr/w1000.jpg",
        "description": "This baseball cap mirrors the coolness of Café Kitsuné's intimate coffee bars. Crafted from five panels of structured cotton-blend twill, it has a flat brim, tonal topstitching and cursive signature embroidered in cream contrast.",
        "product_title": "Café Kitsuné - Logo-Embroidered Cotton-Blend Twill Baseball Cap - Men - Black",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "A.P.C.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fapc%2Fclothing%2Fcardigans%2Fsamuel-slim-fit-merino-wool-cardigan%2F560971904815927",
        "price": "159.0",
        "product_category": "Clothing > Knitwear > Cardigans",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904815927/pr/w1000.jpg",
        "description": "Committed to the classics, A.P.C. really could have designed this 'Samuel' cardigan virtually any decade since it launched back in '87. It's knitted from Italian merino wool in a slim profile trimmed with ribbing.",
        "product_title": "A.P.C. - Samuel Slim-Fit Merino Wool Cardigan - Men - Gray - M",
        "color": "Gray",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "A.P.C.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fapc%2Fclothing%2Fprinted-shirts%2Fjoey-camouflage-print-cotton-twill-shirt%2F560971904815897",
        "price": "68.0",
        "product_category": "Clothing > Casual Shirts > Printed Shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904815897/pr/w1000.jpg",
        "description": "The intended effect of camouflage was originally to blend in, but you're more likely to stand out in A.P.C.'s 'Joey' shirt, in urban environments, at least. It's cut from crisp cotton-twill and fitted with a couple of utility-style pockets on the chest. We have the matching shorts, too, if you want to go for the total look.",
        "product_title": "A.P.C. - Joey Camouflage-Print Cotton-Twill Shirt - Men - Brown - S",
        "color": "Brown",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Manolo Blahnik",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmanolo-blahnik%2Fshoes%2Fboat-shoes%2Fsidmouth-suede-boat-shoes%2F560971904928413",
        "price": "345.0",
        "product_category": "Shoes > Boat Shoes",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904928413/pr/w1000.jpg",
        "description": "Manolo Blahnik's 'Sidmouth' boat shoes are made for smart-casual dressing in the warmer months, they're more polished than sneakers and feel more relaxed than loafers. They've been crafted in Italy from navy suede, lined in leather and set on rubber soles for grip.",
        "product_title": "Manolo Blahnik - Sidmouth Suede Boat Shoes - Men - Blue - UK 7",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "A-COLD-WALL*",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fa-cold-wall%2Fclothing%2Fcasual-shorts%2Foverdyed-loopback-cotton-jersey-shorts%2F560971904770312",
        "price": "76.5",
        "product_category": "Clothing > Shorts > Casual Shorts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904770312/pr/w1000.jpg",
        "description": "A-COLD-WALL*'s shorts are overdyed for an abraded appearance. They're cut from thick loopback cotton-jersey in a relaxed Bermuda style and elasticated at the waist so you can determine the rise.",
        "product_title": "A-COLD-WALL* - Overdyed Loopback Cotton-Jersey Shorts - Men - Green - S",
        "color": "Green",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Manolo Blahnik",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmanolo-blahnik%2Fshoes%2Floafers%2Ftruro-leather-trimmed-suede-loafers%2F560971904928403",
        "price": "387.0",
        "product_category": "Shoes > Formal Shoes",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904928403/pr/w1000.jpg",
        "description": "Manolo Blahnik's 'Truro' loafers are at once minimal and noticeably smart. Made in Italy, they have supple suede uppers and smooth leather linings.",
        "product_title": "Manolo Blahnik - Truro Leather-Trimmed Suede Loafers - Men - Pink - UK 7",
        "color": "Pink",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Dunhill",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fdunhill%2Fshoes%2Floafers%2Flink-chain-embellished-brushed-leather-loafers%2F560971904927885",
        "price": "507.5",
        "product_category": "Shoes > Formal Shoes",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904927885/pr/w1000.jpg",
        "description": "Dunhill's 'Link' loafers have a slim, pointed silhouette that references 1970s dress shoes. They've been crafted in Italy from supple brushed-leather and have collapsible heels and hand-assembled chain-link hardware inspired by watch straps. Small to size. See Size & Fit notes. This item is small to size. See Size & Fit notes.",
        "product_title": "Dunhill - Link Chain-Embellished Brushed-Leather Loafers - Men - Black - EU 41",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Manolo Blahnik",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmanolo-blahnik%2Fshoes%2Fslippers%2Fcrawford-suede-slippers%2F560971904928402",
        "price": "267.0",
        "product_category": "Shoes > Slippers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904928402/pr/w1000.jpg",
        "description": "Manolo Blahnik's craftspeople create hand-whittled wooden lasts and precisely cut patterns to ensure the quality and comfort of the final product. These Italian-made 'Crawford' slippers are made from supple suede and have durable cross-stitched vamps.",
        "product_title": "Manolo Blahnik - Crawford Suede Slippers - Men - Neutrals - UK 8.5",
        "color": "Neutrals",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Manolo Blahnik",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmanolo-blahnik%2Fshoes%2Fbrogues%2Fwitney-suede-oxford-brogues%2F560971904928412",
        "price": "399.0",
        "product_category": "Shoes > Formal Shoes",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904928412/pr/w1000.jpg",
        "description": "Manolo Blahnik's atelier has been perfecting its 'Witney' Oxford shoes for decades, they're modelled after traditional English styles and named after the town in Oxfordshire. Crafted in Italy from pink suede, this cap-toe pair has classic broguing and comfortable leather linings and soles.",
        "product_title": "Manolo Blahnik - Witney Suede Oxford Brogues - Men - Pink - UK 9",
        "color": "Pink",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Manolo Blahnik",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmanolo-blahnik%2Fshoes%2Fslippers%2Fmayfair-leather-and-suede-slippers%2F560971904928407",
        "price": "297.0",
        "product_category": "Shoes > Slippers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/560971904928407/pr/w1000.jpg",
        "description": "Mr Manolo Blahnik really understands the anatomy of a shoe, and oversees the production of every single pair that bears the name of his eponymous label. These 'Mayfair' slippers are constructed from panels of leather and suede and grounded on smooth soles.",
        "product_title": "Manolo Blahnik - Mayfair Leather and Suede Slippers - Men - Gray - UK 7",
        "color": "Gray",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Balenciaga",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fbalenciaga%2Fshoes%2Fhigh-top-sneakers%2Ftrack-high-nylon-mesh-and-rubber-high-top-sneakers%2F4394988608708080",
        "price": "525.0",
        "product_category": "Shoes > Sneakers > High Top Sneakers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/4394988608708080/pr/w1000.jpg",
        "description": "Balenciaga's 'Track Hike' sneakers are heavily influenced by hiking styles but we'd recommend you reserve them for the city streets or strolling in the park. They've been made in Italy from overlapping panels of rubber, nylon and mesh for a distinctive high-top profile and have exaggerated treaded soles.",
        "product_title": "Balenciaga - Track High Nylon, Mesh and Rubber High-Top Sneakers - Men - Black - EU 43",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Le Gramme",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fle-gramme%2Faccessories%2Fbracelets%2Ftriple-turn-le-11g-brushed-sterling-silver-cable-bracelet%2F2204324140431764",
        "price": "269.5",
        "product_category": "Accessories > Jewellery > Bracelets",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/2204324140431764/pr/w1000.jpg",
        "description": "Each piece of Le Gramme jewellery is named after its precise weight in grams. The wrap version of its best-selling cable style, this 'Triple Turn Le 11G' bracelet has been crafted in France from brushed sterling silver and features a logo-engraved screw fastening.",
        "product_title": "Le Gramme - Triple Turn Le 11G Brushed Sterling Silver Cable Bracelet - Men - Silver - 20",
        "color": "Silver",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Nike",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fnike%2Fshoes%2Flow-top-sneakers%2Fplus-matthew-m-williams-zoom-mmw-4-rubber-trimmed-mesh-sneakers%2F4394988609178245",
        "price": "156.0",
        "product_category": "Shoes > Sneakers > Low Top Sneakers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/4394988609178245/pr/w1000.jpg",
        "description": "Nike has enlisted Givenchy's Creative Director and founder of 1017 ALYX 9SM, Mr Matthew M. Williams for this latest collaboration. This 'Zoom MMW 4' mesh model is inspired by brutalist architecture and set on futuristic tank-like gripped soles, with Zoom Air cushioning for a bouncy step.",
        "product_title": "Nike - Matthew M. Williams Zoom MMW 4 Rubber-Trimmed Mesh Sneakers - Men - Red - US 7",
        "color": "Red",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "John Elliott",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fjohn-elliott%2Fclothing%2Fplain-t-shirts%2Fcotton-jersey-tank-top%2F6630340699353376",
        "price": "39.0",
        "product_category": "Clothing > T-shirts > Plain T-shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/6630340699353376/pr/w1000.jpg",
        "description": "John Elliott's tank top is made from smooth cotton-jersey that's comfortable as both a main and base layer. It's designed with a wide crew neckline and cut slightly long through the body.",
        "product_title": "John Elliott - Cotton-Jersey Tank Top - Men - White - S",
        "color": "White",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Officine Creative",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fofficine-creative%2Fshoes%2Flow-top-sneakers%2Fkombo-leather-trimmed-suede-sneakers%2F6630340696615487",
        "price": "237.0",
        "product_category": "Shoes > Suede Shoes > Suede Sneakers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/6630340696615487/pr/w1000.jpg",
        "description": "Officine Creative's 'Kombo' sneakers have a minimal silhouette that'll work nicely with tailoring or casual outfits. Handmade by artisans in Italy from textural suede and contrasting leather, they have the label's signature stamped discreetly on the heels.",
        "product_title": "Officine Creative - Kombo Leather-Trimmed Suede Sneakers - Men - Gray - EU 42",
        "color": "Gray",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Nike",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fnike%2Fclothing%2Fsweatshirts%2Fnrg-logo-embroidered-cotton-blend-jersey-sweatshirt%2F6630340699330652",
        "price": "45.5",
        "product_category": "Clothing > Sweats > Sweatshirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/6630340699330652/pr/w1000.jpg",
        "description": "Nike' sweatshirt is a comfortable choice for down days. It's cut from cotton-blend jersey backed in fleece for extra softness and is simply embroidered with the brand's emblem at the chest.",
        "product_title": "Nike - NRG Logo-Embroidered Cotton-Blend Jersey Sweatshirt - Men - Gray - XXL",
        "color": "Gray",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fshoes%2Fderby-shoes%2Fandrew-split-toe-suede-derby-shoes%2F6630340696275091",
        "price": "90.0",
        "product_category": "Shoes > Formal Shoes",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/6630340696275091/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. Mr P.'s 'Andrew' Derbies have Vibram® Eton EcoLite rubber soles, which are super lightweight while providing traction and insulation. They're built from suede in split-toe construction and fitted with moisture-resistant stitched-down welts that have been cut by hand.",
        "product_title": "Mr P. - Andrew Split-Toe Suede Derby Shoes - Men - Neutrals - UK 7",
        "color": "Neutrals",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Folk",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Ffolk%2Fclothing%2Fcasual-trousers%2Ftapered-cotton-twill-drawstring-trousers%2F9649229528576347",
        "price": "80.5",
        "product_category": "Clothing > Trousers > Drawstring Trousers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/9649229528576347/pr/w1000.jpg",
        "description": "Folk's tapered trousers are a little tidier than jeans without sacrificing comfort. They're tailored from army-green cotton-twill that's a touch finer and softer than denim, and have a silver-tipped drawstring waistband.",
        "product_title": "Folk - Tapered Cotton-Twill Drawstring Trousers - Men - Green - 2",
        "color": "Green",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Officine Creative",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fofficine-creative%2Fshoes%2Flow-top-sneakers%2Fkarma-leather-sneakers%2F6630340696620956",
        "price": "192.5",
        "product_category": "Shoes > Sneakers > Low Top Sneakers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/6630340696620956/pr/w1000.jpg",
        "description": "Officine Creative's low-top 'Karma' sneakers have been expertly handmade in Italy using time-honoured techniques. The uppers are crafted from supple leather in an off-white hue that the brand calls 'tofu' and are set on gummed rubber soles – a sign of durability. Use the pull tabs to comfortably slip yours on without damaging the backs.",
        "product_title": "Officine Creative - Karma Leather Sneakers - Men - Neutrals - EU 45",
        "color": "Neutrals",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Canali",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fcanali%2Fclothing%2Fsuit-jackets%2Fslim-fit-cotton-blend-twill-suit-jacket%2F10163292708778952",
        "price": "366.0",
        "product_category": "Clothing > Blazers > Single Breasted Blazers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/10163292708778952/pr/w1000.jpg",
        "description": "Canali carries on the Italian tailoring tradition with design details like high-gorge notch lapels and barchetta , curved like a boat, welt pockets. This light-beige jacket is cut slim from cotton-blend twill and partially lined for an easy fit.",
        "product_title": "Canali - Slim-Fit Cotton-Blend Twill Suit Jacket - Men - Neutrals - IT 56",
        "color": "Neutrals",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Manolo Blahnik",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmanolo-blahnik%2Fshoes%2Fsummer-shoes%2Fotawi-leather-trimmed-suede-sandals%2F10163292707056928",
        "price": "297.0",
        "product_category": "Shoes > Sandals",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/10163292707056928/pr/w1000.jpg",
        "description": "Mr Manolo Blahnik continues to sketch every single shoe that bears his name, he's known to keep a Faber-Castell 3B pencil and pad on his bedside in the event that inspiration strikes in the middle of the night. These 'Otawi' sandals have suede crisscross straps and supple leather footbeds for comfort.",
        "product_title": "Manolo Blahnik - Otawi Leather-Trimmed Suede Sandals - Men - Black - UK 7",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Neighborhood",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fneighborhood%2Fclothing%2Fprinted-shirts%2Fplus-one-of-these-days-camp-collar-printed-woven-shirt%2F11452292644867411",
        "price": "210.0",
        "product_category": "Clothing > Casual Shirts > Printed Shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292644867411/pr/w1000.jpg",
        "description": "Neighbourhood has enlisted LA-based artist Mr Matt McCormick of One of These Days for its Spring '21 Americana-inspired collection. This camp-collar shirt features a depiction of Monument Valley from the Into The Distance series and is cut for a comfortable fit.",
        "product_title": "Neighborhood - One Of These Days Camp-Collar Printed Woven Shirt - Men - Blue - M",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Manolo Blahnik",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmanolo-blahnik%2Fshoes%2Fboat-shoes%2Fsidmouth-suede-boat-shoes%2F10163292707052366",
        "price": "345.0",
        "product_category": "Shoes > Boat Shoes",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/10163292707052366/pr/w1000.jpg",
        "description": "Manolo Blahnik's 'Sidmouth' boat shoes are made for smart-casual dressing in the warmer months, they're more polished than sneakers and feel more relaxed than loafers. They've been crafted in Italy from light-grey suede, lined in leather and set on rubber soles for grip.",
        "product_title": "Manolo Blahnik - Sidmouth Suede Boat Shoes - Men - Gray - UK 8.5",
        "color": "Gray",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Flong-sleeve-polo-shirts%2Fcashmere-and-silk-blend-polo-shirt%2F10163292706941239",
        "price": "178.0",
        "product_category": "Clothing > Knitwear > Knitted Polo Shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/10163292706941239/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. Quality knitwear is one of the key components of our new Mr P. collection. This polo shirt is spun from a blend of cashmere and silk using a circular machine for a seam-free finish.",
        "product_title": "Mr P. - Cashmere and Silk-Blend Polo Shirt - Men - Blue - XXL",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "FRAME",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fframe%2Fclothing%2Fskinny-jeans%2Fl-homme-skinny-fit-stretch-denim-jeans%2F10163292708421487",
        "price": "114.0",
        "product_category": "Clothing > Jeans > Skinny Jeans",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/10163292708421487/pr/w1000.jpg",
        "description": "FRAME is focused on creating really great jeans, like this skinny-fit 'L'Homme' style. One of the label's best sellers, they're cut from faded light-blue denim that has a hint of stretch to feel comfortable throughout the day. Small to size. See Size & Fit notes.",
        "product_title": "FRAME - L'Homme Skinny-Fit Stretch-Denim Jeans - Men - Blue - UK/US 30",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Mr P.",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmr-p%2Fclothing%2Fcasual-shorts%2Fcotton-jersey-drawstring-shorts%2F10163292707440566",
        "price": "51.0",
        "product_category": "Clothing > Shorts > Casual Shorts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/10163292707440566/pr/w1000.jpg",
        "description": "DESIGNED BY MR PORTER. Every guy needs a decent set of sweats for weekends, work from home situations and post-gym lunches. This comfortable grey pair is made from unblended loopback cotton-jersey that stands up to regular washing and wearing.",
        "product_title": "Mr P. - Cotton-Jersey Drawstring Shorts - Men - Gray - XXL",
        "color": "Gray",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Balenciaga",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fbalenciaga%2Fshoes%2Fsummer-shoes%2Fmallorca-croc-effect-leather-sandals%2F11452292646805269",
        "price": "357.0",
        "product_category": "Shoes > Sandals",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292646805269/pr/w1000.jpg",
        "description": "Balenciaga's croc-effect leather sandals are cool and easy to wear often. They're set on gripped soles and have utility-inspired straps that are comfortably wide.",
        "product_title": "Balenciaga - Mallorca Croc-Effect Leather Sandals - Men - Black - EU 39",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "TOM FORD",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Ftom-ford%2Fclothing%2Fplain-shirts%2Fwoven-shirt%2F11452292645317353",
        "price": "327.0",
        "product_category": "Clothing > Casual Shirts > Long Sleeved Shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292645317353/pr/w1000.jpg",
        "description": "Mr Tom Ford believes that dressing well is a form of good manners and that doing so requires that the foundations of your wardrobe are strong. Speaking to that, this shirt has been expertly tailored in Italy and blended with silk for a smooth drape.",
        "product_title": "TOM FORD - Woven Shirt - Men - White - EU 40",
        "color": "White",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Balenciaga",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fbalenciaga%2Fshoes%2Flow-top-sneakers%2Fspeed-20-logo-print-stretch-knit-slip-on-sneakers%2F11452292646805274",
        "price": "514.5",
        "product_category": "Shoes > Sneakers > Slip-On Sneakers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292646805274/pr/w1000.jpg",
        "description": "If you were a big fan of Balenciaga's original 'Speed' sneakers that debuted in 2016, then you'll definitely want to get your hands on the '2.0' version, Mr Demna Gvasalia has split the signature chunky soles into five individual segments so they feel more flexible and even more comfortable than before. Made from stretch-knit for a sock-like fit, they have shock-absorbing memory foam cushioning and are stamped with the brand's moniker all-over.",
        "product_title": "Balenciaga - Speed 2.0 Logo-Print Stretch-Knit Slip-On Sneakers - Men - Black - EU 42",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Balenciaga",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fbalenciaga%2Fshoes%2Fslides%2Flogo-detailed-rubber-slides%2F11452292646805184",
        "price": "175.0",
        "product_category": "Shoes > Sandals",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292646805184/pr/w1000.jpg",
        "description": "Wearing pool slides with relaxed tailoring is just as acceptable as wearing them to, well, the pool. Embossed with contrasting Balenciaga logos, this mismatched pair has been made in Italy from lightweight rubber and has contoured footbeds for comfort.",
        "product_title": "Balenciaga - Logo-Detailed Rubber Slides - Men - White - EU 42",
        "color": "White",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "JW Anderson",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fjw-anderson%2Fclothing%2Fcasual-shorts%2Flogo-embroidered-printed-linen-drawstring-shorts%2F11452292646886323",
        "price": "254.0",
        "product_category": "Clothing > Shorts > Casual Shorts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292646886323/pr/w1000.jpg",
        "description": "EXCLUSIVE AT MR PORTER. If you're dreaming up outfits for a future holiday, snap up JW Anderson's linen shorts. Part of our exclusive capsule, they're printed with a painterly surf scene in washed watercolour-like tones. We have a coordinating shirt so you can go for the full look.",
        "product_title": "JW Anderson - Logo-Embroidered Printed Linen Drawstring Shorts - Men - Blue - IT 52",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Rubinacci",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Frubinacci%2Fclothing%2Fplain-shirts%2Fspread-collar-linen-shirt%2F11452292646838452",
        "price": "78.0",
        "product_category": "Clothing > Casual Shirts > Long Sleeved Shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292646838452/pr/w1000.jpg",
        "description": "Rubinacci's shirt is cut from breathable linen, so it's a great option for warm summer days. You'll be able to wear it to the office and to laid-back lunches, since the comfortable fit, spread collar and mother-of-pearl fastenings make it really versatile.",
        "product_title": "Rubinacci - Spread-Collar Linen Shirt - Men - Blue - XXXXL",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Le Gramme",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fle-gramme%2Ffine-jewellery%2Frings%2F8g-polished-18-karat-white-red-and-yellow-gold-ring%2F11452292647003484",
        "price": "1680.0",
        "product_category": "Fine Jewellery > Rings",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647003484/pr/w1000.jpg",
        "description": "Le Gramme has gained a following for its minimal yet refined jewellery that works with nearly any outfit. Stamped with the weight and the brand's emblem, this ring is crafted from a combination of 18-karat white, red and yellow gold, so you can stack it with any other pieces.",
        "product_title": "Le Gramme - 8g Polished 18-Karat White, Red and Yellow Gold Ring - Men - Gold - 60",
        "color": "Gold",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "JW Anderson",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fjw-anderson%2Fclothing%2Fcasual-shorts%2Flogo-embroidered-cotton-twill-shorts%2F11452292646886326",
        "price": "152.0",
        "product_category": "Clothing > Shorts > Casual Shorts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292646886326/pr/w1000.jpg",
        "description": "EXCLUSIVE AT MR PORTER. Designed exclusively for us, JW Anderson's shorts are close to chinos, they're cut from cotton-twill in a straight-leg fit that hits below the knee. The brand's anchor emblem is embroidered in the same orange threads as the topstitching.",
        "product_title": "JW Anderson - Logo-Embroidered Cotton-Twill Shorts - Men - Green - IT 48",
        "color": "Green",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Le Gramme",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fle-gramme%2Ffine-jewellery%2Fbracelets%2F27g-sterling-silver-and-18-karat-gold-cable-bracelet%2F11452292647003488",
        "price": "1675.0",
        "product_category": "Fine Jewellery > Bracelets",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647003488/pr/w1000.jpg",
        "description": "The small inscriptions on Le Gramme's pieces denote the weight of the precious materials used, and at 27g, this bracelet is one of the brand's most prized creations. It's been meticulously crafted in France in polished sterling silver and brushed 18-karat gold so you can easily wear it with other jewellery.",
        "product_title": "Le Gramme - 27g Sterling Silver and 18-Karat Gold Cable Bracelet - Men - Silver - M",
        "color": "Silver",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Le Gramme",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fle-gramme%2Ffine-jewellery%2Frings%2F9g-18-karat-gold-ring%2F11452292647003486",
        "price": "1200.0",
        "product_category": "Fine Jewellery > Rings",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647003486/pr/w1000.jpg",
        "description": "As its name declares, Le Gramme's '9g' ring is virtually weightless. It's been crafted from 18-karat gold that's polished to a subtle shine and is threaded with three rings.",
        "product_title": "Le Gramme - 9g 18-Karat Gold Ring - Men - Gold - 60",
        "color": "Gold",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Séfr",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fsefr%2Fclothing%2Fformal-trousers%2Fharvey-slim-fit-tapered-woven-trousers%2F11452292647111368",
        "price": "91.0",
        "product_category": "Clothing > Trousers > Slim-Fit Trousers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647111368/pr/w1000.jpg",
        "description": "Séfr's 'Harvey' trousers work well with smart-casual outfits. They're woven with a good amount of virgin wool for a mid-weight, lightly textured handle and cut in a slim, tapered profile that breaks at the ankles.",
        "product_title": "Séfr - Harvey Slim-Fit Tapered Woven Trousers - Men - Blue - XL",
        "color": "Blue",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Wacko Maria",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fwacko-maria%2Fclothing%2Flong-sleeve-t-shirts%2Flogo-print-cotton-jersey-t-shirt%2F11452292647300206",
        "price": "60.0",
        "product_category": "Clothing > T-shirts > Printed T-shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647300206/pr/w1000.jpg",
        "description": "Wacko Maria's collections are filled with tongue-in-cheek designs like the spiritual print of this T-shirt. It's made from soft cotton-jersey and detailed with the brand's signature 'Guilty Parties' slogan at the front and back.",
        "product_title": "Wacko Maria - Logo-Print Cotton-Jersey T-Shirt - Men - Burgundy - S",
        "color": "Burgundy",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Kiton",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fkiton%2Fclothing%2Fhoodies%2Fwool-blend-hoodie%2F11452292647034759",
        "price": "1304.0",
        "product_category": "Clothing > Sweats > Zip Throughs",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647034759/pr/w1000.jpg",
        "description": "Kiton's wool-blend hoodie feels soft, warm and lightweight, so it's ideal for lounging on the sofa or running errands. It's detailed with the house's red emblem at each end of the two-way zip.",
        "product_title": "Kiton - Wool-Blend Hoodie - Men - Gray - M",
        "color": "Gray",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Givenchy",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fgivenchy%2Fclothing%2Fcrew-necks%2F4g-logo-intarsia-cotton-sweater%2F11452292647287028",
        "price": "570.5",
        "product_category": "Clothing > Knitwear > Sweaters",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647287028/pr/w1000.jpg",
        "description": "'4G' is the appropriate name for Givenchy's monogram in more ways than one when it comes to this sweater, the zoomed-in logos are undeniably high-def. It's knitted from cotton and bears the large-scale intarsia branding front and back.",
        "product_title": "Givenchy - 4G Logo-Intarsia Cotton Sweater - Men - Black - S",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Norse Projects",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fnorse-projects%2Fclothing%2Flong-sleeve-t-shirts%2Fniels-organic-cotton-jersey-t-shirt%2F11452292647324195",
        "price": "42.0",
        "product_category": "Clothing > T-shirts > Plain T-shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647324195/pr/w1000.jpg",
        "description": "This 'Niels' tee is cut from organic cotton-jersey that has a really substantial handle, so it won't misshape through the regular wear it'll undoubtedly be getting. It's detailed with Norse Projects' emblem at the hem and topped with a ribbed crew neck.",
        "product_title": "Norse Projects - Niels Organic Cotton-Jersey T-Shirt - Men - Black - S",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Givenchy",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fgivenchy%2Fclothing%2Fprinted-t-shirts%2Flogo-embroidered-cotton-jersey-t-shirt%2F11452292647287049",
        "price": "364.0",
        "product_category": "Clothing > T-shirts > Printed T-shirts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647287049/pr/w1000.jpg",
        "description": "Givenchy's T-shirt is embroidered with a double helping of house emblems, a sans serif logo across the front and a stacked '4G' monogram at the reverse. It's made from cotton-jersey in a comfortable loose fit.",
        "product_title": "Givenchy - Logo-Embroidered Cotton-Jersey T-Shirt - Men - Black - S",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Manolo Blahnik",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmanolo-blahnik%2Fshoes%2Fslippers%2Fmontague-shearling-slippers%2F11452292647422183",
        "price": "262.5",
        "product_category": "Shoes > Slippers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647422183/pr/w1000.jpg",
        "description": "Manolo Blahnik's 'Montague' shearling slippers guarantee warmth and comfort from the moment they're put on. The ribbed texture makes them feel extra plush.",
        "product_title": "Manolo Blahnik - Montague Shearling Slippers - Men - Black - UK 6",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Manolo Blahnik",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fmanolo-blahnik%2Fshoes%2Fslippers%2Fmontague-suede-slippers%2F11452292647422184",
        "price": "237.0",
        "product_category": "Shoes > Slippers",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647422184/pr/w1000.jpg",
        "description": "Manolo Blahnik's 'Montague' slippers are intended to elevate your morning and evening routines. They have cushioned leather footbeds and soft suede soles.",
        "product_title": "Manolo Blahnik - Montague Suede Slippers - Men - Brown - UK 6",
        "color": "Brown",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Acne Studios",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Facne-studios%2Fclothing%2Flightweight-waterproof-jackets%2Fossi-tie-dyed-nylon-hooded-jacket%2F11452292647317147",
        "price": "135.0",
        "product_category": "Clothing > Coats And Jackets > Lightweight and Waterproof Jackets",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647317147/pr/w1000.jpg",
        "description": "Acne Studios has specially tie dyed this weatherproof 'Ossi' jacket so the colour won't run. It's cut from lightweight nylon and threaded with drawstrings through the hood and hem to keep the elements out.",
        "product_title": "Acne Studios - Ossi Tie-Dyed Nylon Hooded Jacket - Men - Brown - XS",
        "color": "Brown",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      },
      {
        "brand": "Wacko Maria",
        "product_url": "https://MrPorter.prf.hn/click/camref:1011lzrF9/creativeref:1011l32698/destination:https%3A%2F%2Fwww.mrporter.com%2Fen-gb%2Fmens%2Fproduct%2Fwacko-maria%2Fclothing%2Fcasual-shorts%2Fprinted-woven-shorts%2F11452292647299039",
        "price": "134.0",
        "product_category": "Clothing > Shorts > Casual Shorts",
        "gender": "male",
        "image": "https://www.mrporter.com/variants/images/11452292647299039/pr/w1000.jpg",
        "description": "Wacko Maria's 'Guilty Parties' slogan features on so many pieces in its collection, including these shorts. They also feature a white rose motif that'll coordinate nicely with box-fresh sneakers.",
        "product_title": "Wacko Maria - Printed Woven Shorts - Men - Black - M",
        "color": "Black",
        "season": [],
        "occasion": [],
        "type": "",
        "sizes": []
      }
    ]

    console.log(allProducts.length);

    await Promise.all(
      productDetails.map(async (product) => {

        const singleProduct = {
          product_title: product.product_title.toLowerCase(),
          description: product.description.toLowerCase(),
          image: product.image,
          price: product.price,
          currency: "GBP",
          type: null,
          gender: product.gender.toLowerCase(),
          product_url: product.product_url,
          season: [],
          color: null,
          sizes: [],
          brand: null,
          occasion: [],
        }
        const newProduct = this.productRepository.create(singleProduct);

        for (let i = 0; i < product.sizes.length; i++) {
          let size = product.sizes[i];
          if (size.stock) {
            const sizeDB = await this.sizesRepository.findOne({ where: { size: size.size.toLowerCase() } })
            newProduct.sizes.push(sizeDB)
          }
        }

        for (let i = 0; i < product.occasion.length; i++) {
          let occasion = product.occasion[i];
          const occasionDB = await this.occasionsRepository.findOne({ where: { occasion: occasion.toLowerCase() } })
          newProduct.occasion.push(occasionDB)
        }

        for (let i = 0; i < product.season.length; i++) {
          let season = product.season[i];
          const seasonDB = await this.seasonsRepository.findOne({ where: { season: season.toLowerCase() } })
          newProduct.season.push(seasonDB)
        }

        const productBrand = async (product: CreateProductParams): Promise<ProductBrands> => {
          if (product.brand) {
            const brandDB = await this.brandsRepository.findOne({ where: { brand: product.brand.toLowerCase() } })
            if (!brandDB) {
              const productBrand = this.brandsRepository.create({ brand: product.brand.toLowerCase() })
              return await this.brandsRepository.save(productBrand);
            } else {
              return brandDB;
            }
          } else {
            return null
          }
        }

        const productType = async (product: CreateProductParams): Promise<ProductTypes> => {
          if (product.type) {
            const typeDB = await this.typesRepository.findOne({ where: { type: product.brand.toLowerCase() } })
            if (!typeDB) {
              const productBrand = this.typesRepository.create({ type: product.brand.toLowerCase() })
              return await this.typesRepository.save(productBrand);
            } else {
              return typeDB;
            }
          } else {
            return null
          }
        }
        const productColor = async (product: CreateProductParams): Promise<Colors> => {
          if (product.color) {
            const colorDB = await this.colorsRepository.findOne({ where: { color: product.color.toLowerCase() } })
            if (!colorDB) {
              const productColor = this.colorsRepository.create({ color: product.color.toLowerCase() })
              return await this.colorsRepository.save(productColor);
            } else {
              return colorDB;
            }
          } else {
            return null
          }
        }
        newProduct.brand = await productBrand(product)
        newProduct.type = await productType(product)
        newProduct.color = await productColor(product)


        await this.productRepository.save(newProduct);
      })
    );
  }

  async findAll(): Promise<Products[]> {
    // size?: string[], color?: string[], brand?: string[]
    // let products: Products[]
    // if (size.length === 0) {
    //   products = await this.productRepository.find()
    // } else if (size.length === 1) {
    //   products = await this.productRepository.find({ relations: {} })
    // }

    return await this.productRepository.find();
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
