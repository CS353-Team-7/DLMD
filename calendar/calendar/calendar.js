//user lets you know if plant is watered, if not watered change next water day and let user know it hasn't been watered

//get user data from firebase 

//will add function to calculate when each plant needs to be watered, need to set up working calendar to do this effectively



//get size of object

const waterCutoff = 4000;
// let waterNeeded = (plantData.data.main_species.growth.minimum_precipitation.mm + plantData.data.main_species.growth.maximum_precipitation.mm) / 2;

var waterFreq = (waterNeeded) => {
  return Math.round(waterCutoff/waterNeeded);
}

Object.size = function (obj) {
  let size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
}

//get size of plantData
//let size = Object.size(plantData);

document.getElementById("search_for_plant").addEventListener("submit", (event) => {
  event.preventDefault();

  $(".result").remove();

  let input = document.getElementById("input_for_plant");
  let value = input.value;
  input.value = "";

  let plantData = {

  };

  /*

  fetch for plant data, to be completed


  fetch(`https://trefle.io/api/v1/plants/search?token=API_TOKEN&q=${value}`)
  .then(response => response.json)
  .then(data => {
      plantData = data;
  })
  .catch(err => console.log(err));

  */


  // When user searches for plants, this is the type of result they would get with the API if there were any results. Not to be used in production
  plantData = {
    "data": [{
        "id": 149582,
        "common_name": "Oxeye daisy",
        "slug": "leucanthemum-vulgare",
        "scientific_name": "Leucanthemum vulgare",
        "year": 1779,
        "bibliography": "Fl. Franç. 2: 137 (1779)",
        "author": "Lam.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 1747,
        "image_url": "https://bs.floristic.org/image/o/cc03c870f80172d0faf20d14ff8291d050afd13f",
        "synonyms": [
          "Leucanthemum praecox var. rhodopaeum",
          "Leucanthemum vulgare subsp. heterophyllum",
          "Pyrethrum leucanthemum",
          "Leucanthemum tubuliflorum",
          "Chrysanthemum lanceolatum",
          "Leucanthemum vulgare subsp. alpicola",
          "Chrysanthemum leucanthemum var. leucanthemum",
          "Tanacetum serotinum",
          "Leucanthemum vulgare var. pinnatifidum",
          "Leucanthemum leucanthemum",
          "Chrysanthemum leucanthemum var. pinnatifidum",
          "Chrysanthemum leucanthemum",
          "Leucanthemum praecox",
          "Tanacetum affine",
          "Chamaemelum leucanthemum",
          "Tanacetum leucanthemum",
          "Matricaria leucanthemum",
          "Chrysanthemum alpicola",
          "Chrysanthemum dentatum",
          "Leucanthemum vulgare subsp. multicaule",
          "Leucanthemum praecox var. autumnale",
          "Bellis major",
          "Chrysanthemum sylvestre",
          "Tanacetum auriculatum",
          "Leucanthemum praecox var. alpicola",
          "Tanacetum coronulatum",
          "Chrysanthemum pratense",
          "Tanacetum alpinum"
        ],
        "genus": "Leucanthemum",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/leucanthemum-vulgare",
          "plant": "/api/v1/plants/leucanthemum-vulgare",
          "genus": "/api/v1/genus/leucanthemum"
        }
      },
      {
        "id": 414901,
        "common_name": "Daisy",
        "slug": "leucanthemum-ircutianum",
        "scientific_name": "Leucanthemum ircutianum",
        "year": 1838,
        "bibliography": "Prodr. 6: 47 (1838)",
        "author": "DC.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 1747,
        "image_url": "https://bs.floristic.org/image/o/97ca7fe45800ee1196018f5927329af61bf0023f",
        "synonyms": [
          "Chrysanthemum leucanthemum var. boecheri",
          "Leucanthemum ircutianum var. laticeps",
          "Leucanthemum ircutianum var. sylvestre",
          "Leucanthemum ircutianum var. amplifolium",
          "Chrysanthemum ircutianum",
          "Leucanthemum vulgare var. silvestre",
          "Leucanthemum vulgare subsp. ircutianum"
        ],
        "genus": "Leucanthemum",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/leucanthemum-ircutianum",
          "plant": "/api/v1/plants/leucanthemum-ircutianum",
          "genus": "/api/v1/genus/leucanthemum"
        }
      },
      {
        "id": 243333,
        "common_name": "African daisy",
        "slug": "senecio-pterophorus",
        "scientific_name": "Senecio pterophorus",
        "year": 1838,
        "bibliography": "Prodr. 6: 389 (1838)",
        "author": "DC.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 669,
        "image_url": "https://bs.floristic.org/image/o/2b82da39f93f0e2a9abb24313dae96913d5151cf",
        "synonyms": [
          "Senecio pterophorus var. apterus"
        ],
        "genus": "Senecio",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/senecio-pterophorus",
          "plant": "/api/v1/plants/senecio-pterophorus",
          "genus": "/api/v1/genus/senecio"
        }
      },
      {
        "id": 241845,
        "common_name": "Southern daisy",
        "slug": "bellis-sylvestris",
        "scientific_name": "Bellis sylvestris",
        "year": 1792,
        "bibliography": "Pl. Rar. Neapol. 2: 12 (1792)",
        "author": "Cirillo",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 780,
        "image_url": "https://bs.floristic.org/image/o/c3f6d1abb7df109c76244fd8b7ffe2976a3271aa",
        "synonyms": [
          "Bellis longifolia",
          "Bellis atlantica",
          "Bellis hirta",
          "Doronicum bellidiastrum",
          "Brachyscome sylvestris"
        ],
        "genus": "Bellis",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/bellis-sylvestris",
          "plant": "/api/v1/plants/bellis-sylvestris",
          "genus": "/api/v1/genus/bellis"
        }
      },
      {
        "id": 132370,
        "common_name": "Engelmann's daisy",
        "slug": "engelmannia-peristenia",
        "scientific_name": "Engelmannia peristenia",
        "year": 1992,
        "bibliography": "Rhodora 94: 381 (1992)",
        "author": "(Raf.) Goodman & C.A.Lawson",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 2744,
        "image_url": null,
        "synonyms": [
          "Silphium peristenium",
          "Angelandra pinnatifida",
          "Engelmannia pinnatifida"
        ],
        "genus": "Engelmannia",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/engelmannia-peristenia",
          "plant": "/api/v1/plants/engelmannia-peristenia",
          "genus": "/api/v1/genus/engelmannia"
        }
      },
      {
        "id": 114815,
        "common_name": "Straggler daisy",
        "slug": "calyptocarpus-vialis",
        "scientific_name": "Calyptocarpus vialis",
        "year": 1832,
        "bibliography": "Syn. Gen. Compos.: 221 (1832)",
        "author": "Less.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 1375,
        "image_url": "https://bs.floristic.org/image/o/c4d54304c95a034d9269445164babc9e9a159cea",
        "synonyms": [
          "Synedrella vialis",
          "Oligogyne tampicana",
          "Zexmenia hispidula",
          "Calyptocarpus tampicanus",
          "Blainvillea tampicana"
        ],
        "genus": "Calyptocarpus",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/calyptocarpus-vialis",
          "plant": "/api/v1/plants/calyptocarpus-vialis",
          "genus": "/api/v1/genus/calyptocarpus"
        }
      },
      {
        "id": 133450,
        "common_name": "Eastern daisy fleabane",
        "slug": "erigeron-annuus",
        "scientific_name": "Erigeron annuus",
        "year": 1807,
        "bibliography": "Syn. Pl. 2(2): 431 (1807)",
        "author": "(L.) Pers.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 1713,
        "image_url": "https://bs.floristic.org/image/o/0ee68a76058cb5011695716349fe92094834c8b6",
        "synonyms": [
          "Erigeron ramosus var. beyrichii",
          "Erigeron strigosus var. beyrichii",
          "Stenactis strigosa",
          "Erigeron annuus fo. discoideus",
          "Aster stenactis",
          "Aster annuus",
          "Erigeron heterophyllus",
          "Erigeron annuus subsp. strigosus",
          "Stenactis beyrichii",
          "Erigeron ramosus",
          "Phalacroloma annuum",
          "Pulicaria annua",
          "Stenactis dubia",
          "Erigeron annuus f. discoideus",
          "Diplopappus annuus",
          "Cineraria corymbosa",
          "Pulicaria bellidiflora",
          "Doronicum bellidiflorum",
          "Phalacroloma obtusifolium",
          "Doronicum ramosum",
          "Diplemium strigosum",
          "Stenactis annua subsp. strigosa",
          "Phalacroloma acutifolium",
          "Diplopappus dubius",
          "Erigeron strigosus",
          "Erigeron annuus var. discoideus",
          "Phalacroloma annuum subsp. strigosum",
          "Erigeron annuus var. annuus",
          "Stenactis annua",
          "Phalacroloma strigosum",
          "Erigeron beyrichii",
          "Stenactis ambigua",
          "Phalacroloma beyrichii",
          "Erigeron strigosus var. eligulatus",
          "Erigeron strigosus var. discoideus"
        ],
        "genus": "Erigeron",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/erigeron-annuus",
          "plant": "/api/v1/plants/erigeron-annuus",
          "genus": "/api/v1/genus/erigeron"
        }
      },
      {
        "id": 239628,
        "common_name": "Annual daisy",
        "slug": "bellis-annua",
        "scientific_name": "Bellis annua",
        "year": 1753,
        "bibliography": "Sp. Pl.: 887 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 780,
        "image_url": "https://bs.floristic.org/image/o/dada9e8f213b182814fddab227fac730a791b171",
        "synonyms": [
          "Bellis dentata",
          "Bellis annua subsp. repens",
          "Bellis repens",
          "Bellis annua subsp. vandasii",
          "Bellium dentatum",
          "Bellis vandasii"
        ],
        "genus": "Bellis",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/bellis-annua",
          "plant": "/api/v1/plants/bellis-annua",
          "genus": "/api/v1/genus/bellis"
        }
      },
      {
        "id": 133520,
        "common_name": "Cutleaf daisy",
        "slug": "erigeron-compositus",
        "scientific_name": "Erigeron compositus",
        "year": 1813,
        "bibliography": "Fl. Amer. Sept. 2: 535 (1813)",
        "author": "Pursh",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 1713,
        "image_url": "https://bs.floristic.org/image/o/6b85c85953dd22f4904576aaed26140964f5a717",
        "synonyms": [
          "Erigeron compositus var. multifidus",
          "Erigeron compositus var. glabratus",
          "Erigeron compositus var. discoideus",
          "Erigeron gormanii",
          "Erigeron pedatus",
          "Erigeron compositus f. discoideus",
          "Cineraria lewisii",
          "Erigeron compositus var. compositus",
          "Erigeron compositus var. typicus"
        ],
        "genus": "Erigeron",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/erigeron-compositus",
          "plant": "/api/v1/plants/erigeron-compositus",
          "genus": "/api/v1/genus/erigeron"
        }
      },
      {
        "id": 254762,
        "common_name": "Medicine daisy",
        "slug": "dichrocephala-integrifolia",
        "scientific_name": "Dichrocephala integrifolia",
        "year": 1891,
        "bibliography": "Revis. Gen. Pl. 1: 333 (1891)",
        "author": "(L.f.) Kuntze",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 8820,
        "image_url": "https://bs.floristic.org/image/o/c7e068e86083430bb84770b7598e9e5aca3f9ba5",
        "synonyms": [
          "Ethulia integrifolia",
          "Absinthium spathulatum",
          "Centipeda capensis",
          "Grangea sonchifolia",
          "Cotula sonchifolia",
          "Spilanthes atriplicifolia",
          "Dichrocephala paniculata",
          "Grangea dissecta",
          "Dichrocephala abyssinica",
          "Dichrocephala minutifolia",
          "Hippia integrifolia",
          "Ethulia paniculata",
          "Dichrocephala latifolia var. latifolia",
          "Cotula latifolia",
          "Dichrocephala latifolia",
          "Grangea bicolor",
          "Ethulia auriculata",
          "Dichrocephala auriculata",
          "Dichrocephala bicolor",
          "Dichrocephala capensis",
          "Hippia bicolor",
          "Cotula bicolor",
          "Grangea latifolia",
          "Dichrocephala sonchifolia",
          "Dichrocephala erecta",
          "Ethulia sinapifolia",
          "Dichrocephala nilagirensis",
          "Ethulia glomerata"
        ],
        "genus": "Dichrocephala",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/dichrocephala-integrifolia",
          "plant": "/api/v1/plants/dichrocephala-integrifolia",
          "genus": "/api/v1/genus/dichrocephala"
        }
      },
      {
        "id": 242889,
        "common_name": "Alpine moon daisy",
        "slug": "leucanthemopsis-alpina",
        "scientific_name": "Leucanthemopsis alpina",
        "year": 1975,
        "bibliography": "Anales Inst. Bot. Cavanilles 32(2): 182 (1975)",
        "author": "(L.) Heywood",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 8788,
        "image_url": "https://bs.floristic.org/image/o/0b1d7e0079638d610ac01e10f3cb77a31e59a942",
        "synonyms": [
          "Chamaemelum alpinum",
          "Matricaria alpina",
          "Matricaria minima",
          "Pontia alpina",
          "Pyrethrum alpinum",
          "Leucanthemum alpinum",
          "Pyrethrum tomentosum"
        ],
        "genus": "Leucanthemopsis",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/leucanthemopsis-alpina",
          "plant": "/api/v1/plants/leucanthemopsis-alpina",
          "genus": "/api/v1/genus/leucanthemopsis"
        }
      },
      {
        "id": 393289,
        "common_name": "Common michaelmas daisy",
        "slug": "symphyotrichum-x-salignum",
        "scientific_name": "Symphyotrichum × salignum",
        "year": 1995,
        "bibliography": "Phytologia 77(3): 295 (1995)",
        "author": "(Willd.) G.L.Nesom",
        "status": "accepted",
        "rank": "hybrid",
        "family_common_name": "Aster family",
        "genus_id": 2935,
        "image_url": "https://bs.floristic.org/image/o/db6b03e3fefc051cb0fd3038a157eb6d04c862e9",
        "synonyms": [
          "Aster cordifolius",
          "Aster × salignus",
          "Aster auriculatus",
          "Aster kayserianus",
          "Leiachenis paniculata",
          "Aster serratifolius",
          "Amellus salignus",
          "Aster × acris",
          "Aster sanguineus",
          "Aster hungaricus",
          "Aster frutetorum",
          "Aster auriculatus f. crenatus",
          "Aster paniculatus",
          "Aster angustus",
          "Aster heterophyllus",
          "Aster salicinus"
        ],
        "genus": "Symphyotrichum",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/symphyotrichum-x-salignum",
          "plant": "/api/v1/plants/symphyotrichum-x-salignum",
          "genus": "/api/v1/genus/symphyotrichum"
        }
      },
      {
        "id": 186915,
        "common_name": "Stemmy four-nerve daisy",
        "slug": "tetraneuris-scaposa",
        "scientific_name": "Tetraneuris scaposa",
        "year": 1898,
        "bibliography": "Pittonia 3(18): 266 (1898)",
        "author": "(DC.) Greene",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 6527,
        "image_url": "https://bs.floristic.org/image/o/3c3811d3054d2b1067aa967f5db3a5e48e20a611",
        "synonyms": [
          "Hymenoxys glabra",
          "Tetraneuris stenophylla",
          "Hymenoxys scaposa var. villosa",
          "Hymenoxys scaposa var. linearis",
          "Hymenoxys scaposa",
          "Tetraneuris glabra",
          "Tetraneuris scaposa var. villosa",
          "Tetraneuris fastigiata",
          "Tetraneuris scaposa var. linearis",
          "Actinella glabra",
          "Tetraneuris angustata",
          "Cephalophora scaposa",
          "Ptilepida scaposa",
          "Actinella scaposa var. glabra",
          "Actinella lanuginosa",
          "Actinella scaposa var. linearis",
          "Actinella scaposa",
          "Tetraneuris linearis",
          "Rydbergia glabrata",
          "Tetraneuris angustifolia",
          "Picradenia scaposa",
          "Actinea scaposa",
          "Gaillardia roemeriana",
          "Actinea scaposa var. linearis",
          "Actinella fastigiata",
          "Actinea angustifolia",
          "Actinella acaulis var. glabra",
          "Actinea linearis",
          "Actinella linearis"
        ],
        "genus": "Tetraneuris",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/tetraneuris-scaposa",
          "plant": "/api/v1/plants/tetraneuris-scaposa",
          "genus": "/api/v1/genus/tetraneuris"
        }
      },
      {
        "id": 423578,
        "common_name": "Satin everlasting daisy",
        "slug": "helichrysum-leucopsideum",
        "scientific_name": "Helichrysum leucopsideum",
        "year": 1838,
        "bibliography": "Prodr. 6: 193 (1838)",
        "author": "DC.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 1109,
        "image_url": "https://bs.floristic.org/image/o/8540b5e02682e28a026a87b1671dd1764ebc47d1",
        "synonyms": [
          "Gnaphalium leucopsideum"
        ],
        "genus": "Helichrysum",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/helichrysum-leucopsideum",
          "plant": "/api/v1/plants/helichrysum-leucopsideum",
          "genus": "/api/v1/genus/helichrysum"
        }
      },
      {
        "id": 149576,
        "common_name": "Daisy",
        "slug": "leucanthemum-x-superbum",
        "scientific_name": "Leucanthemum × superbum",
        "year": null,
        "bibliography": null,
        "author": null,
        "status": "unknown",
        "rank": "hybrid",
        "family_common_name": "Aster family",
        "genus_id": 1747,
        "image_url": "https://bs.floristic.org/image/o/5d7d6a2b838851c15ba5a866b73afad2399dee8c",
        "synonyms": [

        ],
        "genus": "Leucanthemum",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/leucanthemum-x-superbum",
          "plant": "/api/v1/plants/leucanthemum-%C3%97superbum",
          "genus": "/api/v1/genus/leucanthemum"
        }
      },
      {
        "id": 406135,
        "common_name": "Cut-leaf daisy",
        "slug": "brachyscome-multifida",
        "scientific_name": "Brachyscome multifida",
        "year": 1836,
        "bibliography": "Prodr. 5: 306 (1836)",
        "author": "DC.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 8764,
        "image_url": "https://bs.floristic.org/image/o/fe8fc21882255861c3ccfa296fc0f6ee224c84fb",
        "synonyms": [
          "Brachyscome glabra",
          "Brachyscome tenera"
        ],
        "genus": "Brachyscome",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/brachyscome-multifida",
          "plant": "/api/v1/plants/brachyscome-multifida",
          "genus": "/api/v1/genus/brachyscome"
        }
      },
      {
        "id": 186911,
        "common_name": "Fineleaf fournerved daisy",
        "slug": "tetraneuris-linearifolia",
        "scientific_name": "Tetraneuris linearifolia",
        "year": 1898,
        "bibliography": "Pittonia 3(18): 269 (1898)",
        "author": "Greene",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 6527,
        "image_url": "https://bs.floristic.org/image/o/74e4e98c33cab90a9a992ef34d028d845e5014c1",
        "synonyms": [
          "Hymenoxys linearifolia",
          "Tetraneuris oblongifolia",
          "Tetraneuris linearifolia var. latior",
          "Actinea linearifolia var. dodgei",
          "Tetraneuris linearifolia subsp. dodgei",
          "Tetraneuris latior",
          "Actinea linearifolia",
          "Tetraneuris dodgei",
          "Picradenia linearifolia",
          "Actinella linearifolia",
          "Ptilepida linearifolia"
        ],
        "genus": "Tetraneuris",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/tetraneuris-linearifolia",
          "plant": "/api/v1/plants/tetraneuris-linearifolia",
          "genus": "/api/v1/genus/tetraneuris"
        }
      },
      {
        "id": 186873,
        "common_name": "Stemless four-nerve daisy",
        "slug": "tetraneuris-acaulis",
        "scientific_name": "Tetraneuris acaulis",
        "year": 1898,
        "bibliography": "Pittonia 3(18): 265 (1898)",
        "author": "Greene",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 6527,
        "image_url": "https://bs.floristic.org/image/o/8adf760fab7f6abf0ab638faa3c1da9da5d2f9ab",
        "synonyms": [
          "Hymenoxys acaulis",
          "Tetraneuris simplex",
          "Actinella acaulis",
          "Actinea acaulis",
          "Ptilepida acaulis",
          "Actinella simplex",
          "Tetraneuris eradiata",
          "Tetraneuris pygmaea",
          "Leptopoda acaulis",
          "Tetraneuris incana",
          "Tetraneuris septentrionalis",
          "Picradenia acaulis",
          "Cephalophora acaulis",
          "Actinea simplex",
          "Actinella lanata",
          "Hymenoxys acaulis var. acaulis",
          "Gaillardia acaulis",
          "Actinea incana",
          "Actinea depressa var. pygmaea",
          "Actinella depressa var. pygmaea",
          "Actinella eradiata",
          "Actinea formosa",
          "Actinea eradiata",
          "Actinella leptoclada",
          "Actinella incana",
          "Actinea acaulis var. simplex",
          "Actinea acaulis var. lanata",
          "Actinea osterhoutii"
        ],
        "genus": "Tetraneuris",
        "family": "Asteraceae",
        "links": {
          "self": "/api/v1/species/tetraneuris-acaulis",
          "plant": "/api/v1/plants/tetraneuris-acaulis",
          "genus": "/api/v1/genus/tetraneuris"
        }
      },
      {
        "id": 944875,
        "common_name": "Heart-leaved globe daisy",
        "slug": "globularia-cordifolia",
        "scientific_name": "Globularia cordifolia",
        "year": 1753,
        "bibliography": "Sp. pl. 1:96.  1753",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Plantain family",
        "genus_id": 15786,
        "image_url": "https://bs.floristic.org/image/o/a255388a76b9a524c87859d2ee311d7b0ad9a124",
        "synonyms": [
          "Globularia minima"
        ],
        "genus": "Globularia",
        "family": "Plantaginaceae",
        "links": {
          "self": "/api/v1/species/globularia-cordifolia",
          "plant": "/api/v1/plants/globularia-cordifolia",
          "genus": "/api/v1/genus/globularia"
        }
      },
      {
        "id": 942247,
        "common_name": "Alypo globe daisy",
        "slug": "globularia-alypum",
        "scientific_name": "Globularia alypum",
        "year": 1753,
        "bibliography": "Sp. Pl.: 95 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Plantain family",
        "genus_id": 15786,
        "image_url": "https://bs.floristic.org/image/o/51e37f2330284cd7d2f4b85cf027574b5f4a77e5",
        "synonyms": [
          "Alypum salicifolium",
          "Alypum monspeliensium"
        ],
        "genus": "Globularia",
        "family": "Plantaginaceae",
        "links": {
          "self": "/api/v1/species/globularia-alypum",
          "plant": "/api/v1/plants/globularia-alypum",
          "genus": "/api/v1/genus/globularia"
        }
      }
    ],
    "links": {
      "self": "/api/v1/plants/search?q=daisy",
      "first": "/api/v1/plants/search?page=1&q=daisy",
      "next": "/api/v1/plants/search?page=2&q=daisy",
      "last": "/api/v1/plants/search?page=14&q=daisy"
    },
    "meta": {
      "total": 280
    }
  }

  //search function, to be completed when connected to API
  let index = 0;
  for (const property in plantData.data) {
    $(`<div class='result-container-${index} result' id='${plantData.data[property].id}'></div>`).appendTo($(".results-container"));
    $(`<div class='background-img' style='background-image: url(${plantData.data[property].image_url});'></div>`).appendTo($(`.result-container-${index}`));
    $(`<div class='result-content-${index} result-content'></div>`).appendTo($(`.result-container-${index}`));
    $(`<h2>${plantData.data[property].common_name}</h2>`).appendTo($(`.result-content-${index}`));
    $(`<h4>${plantData.data[property].scientific_name}</h4>`).appendTo($(`.result-content-${index}`));
    $('<button class="btn">Add to List <span class="add-to-list"><i class="fa fa-plus" aria-hidden="true"></i></span> </button>').appendTo($(`.result-content-${index}`));
    // $(".results-container")[0].append(`<h1>${property.common_name}</h1>`);
    index++;
  }
});




/*

Will add functionality to add plants to plantlist when database is set up with users.

*/




// Check for Leap Year
const isLeap = (year) => {
  if (year % 4 == 0){
    return 29;
  }
  else {
    return 28;
  }
}

// Declare arrays
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// This array gives the index for months with only 30 days. September = 9
const thirty = [9, 4, 6, 11];

let d = new Date();

let currentMonth = d.getMonth();
let currentDate = d.getDate();
let currentDay = d.getDay();
let currentYear = d.getFullYear();

// Use this variable to easily scale the calendar to display how many months you want.
let maxMonths = 60;

// Create text based upon the selected date.
$("#selectedDate").text(`${currentDate} ${months[currentMonth]} ${currentYear}`);
$("#month h3").text(`${months[currentMonth]} ${currentYear}`);


/*

To get the days from other months I created a loop that would loop for over 12 months.

*/
  for (let j = 1; j <= maxMonths; j++){
    currentMonth++;
        
    // If month goes past December, reset month and add a year.
    if (currentMonth == 13) {
      currentMonth = 1;
      currentYear = currentYear + 1;
    }
    
    // Get first of Month and Day.
    let firstOfMonth = new Date(`${currentMonth}/1/${currentYear}`);
    let lastDay;
    // Check for Days in Month
    if ($.inArray(currentMonth, thirty) > -1) {
      lastDay = 30;
    }
    else if (currentMonth == 2) {
      lastDay = isLeap(currentYear);
    }
    else {
      lastDay = 31;
    }
    
    // Loop through the amount of days in the month to create the date tiles
    for (let i = 1; i <= lastDay; i++) {
      let date = new Date(`${currentMonth}/${i}/${currentYear}`);
      let day = date.getDay();
      
      /*
      To correctly display the first date on the correct day, I will need to do a check and add empty blocks.
      */
      if(firstOfMonth.getDate() == i && j == 1) {
        for(let k = 0; k < day; k++){
          $("#dates").append("<p></p>");
        }
      }
      
      // Add tile to div
      $("#dates").append(`<p class="dates" id="${i}_${currentMonth}_${currentYear}">${i}</>`)
      
      // If its the last day of the month and last month of the loop - check to add empty tiles.
      if(i == lastDay && j == maxMonths) {
        for(let l = 0; l < (6 - day); l++){
          $("#dates").append("<p></p>");
        }
      }
      
      // When a day reaches Saturday, break
      if(days[day] == days[6]) {
        $("#dates").append("<br/>");
      }
    }
  }

// Add selected style to selected date by accessing its id.
$(`#${currentDate}_${d.getMonth()+1}_${d.getFullYear()}`).addClass("selected");


// When user clicks on a new date, selectedDate will be updated
$(".dates").click(function(e) {
  let newDate = e.target.id;
  let newDateArr = newDate.split("_");
  
  $(".selected").removeClass("selected");
  $(this).addClass("selected");
  
  $("#selectedDate").text(`${newDateArr[0]} ${months[newDateArr[1]-1]} ${newDateArr[2]}`);
});


/* -*-*- Calendar Navigation -*-*- */ 

let getMonth = d.getMonth();
let updatedMonth = getMonth + 1;

let getYear = d.getFullYear();
let updatedYear = getYear;

// Add opacity to next or previous month to add more clarity.
$(".dates").not(`[id*=${updatedMonth}_${updatedYear}]`).addClass("opacity");

$("#angle_down").click(() => {
  // If user reaches end of calender, disable event
  if (updatedMonth == getMonth + 1 && updatedYear == getYear + (maxMonths / 12)) {
    $("#angle_down").addClass("opacity");
    return false;
  } else {
    $(".opacity").removeClass("opacity");
  
    updatedMonth++;
    
    // If month goes past December, reset month and add a year.
    if (updatedMonth == 13) {
      updatedMonth = 1;
      updatedYear = updatedYear + 1;
    }
    
    let link = `#1_${updatedMonth}_${updatedYear}`;
    $("#angle_down").attr("href", link);
    $("h3").text(months[updatedMonth-1] + " " + updatedYear);
    
    // Add opacity to next or previous month to add more clarity.
    $(".dates").not(`[id*=${updatedMonth}_${updatedYear}]`).addClass("opacity");
  }
});

$("#angle_up").click(() => {
  // If user reaches beginning of calender, disable event
  if (updatedMonth == getMonth + 1 && updatedYear == getYear) {
    $("#angle_up").addClass("opacity");
    return false;
  }
  
  updatedMonth--;
  
  // If a months value is before January, reset month to December and remove a year.
  if (updatedMonth == 0) {
    updatedMonth = 12;
    updatedYear = updatedYear - 1;
  }
  
  let link = `#1_${updatedMonth}_${updatedYear}`;
  $("#angle_up").attr("href", link);
  $("h3").text(months[updatedMonth-1] + " " + updatedYear);
  
  $(".opacity").removeClass("opacity");
  // Add opacity to any day not in the selected month.
  $(".dates").not(`[id*=${updatedMonth}_${updatedYear}]`).addClass("opacity");
});

/* -*-*- /Calendar Navigation -*-*- */ 
