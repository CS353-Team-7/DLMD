const fetch = require('node-fetch');
const fs = require('fs');


//Get's a sample set of plants from Trefle API and stores it in a JSON file, which I then manually import to Firebase.
(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=HvOR4eZJvpcIu72KtQXoqB1_ypHEVnJ2_TkR78zWouY&filter[common_name]=Robert%20geranium,Woodland%20strawberry,Cloudberry,Alpine%20rose,'
  +'Cobweb%20house-leek,Devil\'s-ivy,Rattlesnake%20plant,Heartleaf%20philodendron,Black-gold%20philodendron,Shortstem%20philodendron,Red%20spider-flower,American%20evergreen,Chinese%20missionary%20plant,'
  +'Red%20treasure,Jadevine,Japanese%20iris,Asparagus-pea,Easter%20lily,French%20rose,Formosa%20lily');
  const json = await response.json();
  fs.writeFileSync('newPlants.json', JSON.stringify(json));
})();
  
/*
    while(page<1)
    {
        const response2 = await fetch('https://trefle.io/api/v1/plants?token=HvOR4eZJvpcIu72KtQXoqB1_ypHEVnJ2_TkR78zWouY&filter[family_common_name]=Rose%20family,Buttercup%20family,Geranium%20family,Olive%20family,Aster%20family&page='+page);
        const json2 = await response2.json();
        let data2 = JSON.stringify(json2.data);
        fs.appendFileSync('plantData.json',data2);
        page++;
    }
})();

*/

/*
(async () => {
  const response = await fetch('https://trefle.io/api/v1/species?range%5Bmaximum_height_cm%5D=5%2C20&token=HvOR4eZJvpcIu72KtQXoqB1_ypHEVnJ2_TkR78zWouY');
  const json = await response.json();
  fs.writeFileSync('newPlants.json',JSON.stringify(json));
})();
*/