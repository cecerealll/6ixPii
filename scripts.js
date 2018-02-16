const pos = {};

const getLocation = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            pos.lat = position.coords.latitude;
            pos.lng = position.coords.longitude;
        });
        cafe();
    }
}



const cafe = function () {
    const cafeReq = $.ajax({
        url: 'https://proxy.hackeryou.com',
        method: 'GET',
        dataType: 'json',
        data: {
            reqUrl: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
            params: {
                key: 'AIzaSyANaLsqMb-Vp4_WS06TGn6F2Whc_XB8Lbc',
                location: `${pos.lat},${pos.lng}`,
                radius: 300,
                opennnow: true,
                type: 'cafe'
            }
        }
    });
    console.log();
}

// const 
// async function getLoc() {
//     // returns promise the 1 goes in to the id 
//     const firstPokemon = await getPokemon(6);
//     console.log(firstPokemon);

//     const typeOfPokemon = await getType(firstPokemon.types[0].type.name);
//     console.log(typeOfPokemon);
// };
// .then(res2 => console.log(res2.results));



// const gasStation =
//     $.ajax({
//         url: 'https://proxy.hackeryou.com',
//         method: 'GET',
//         dataType: 'json',
//         data: {
//             reqUrl: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
//             params: {
//                 key: 'AIzaSyANaLsqMb-Vp4_WS06TGn6F2Whc_XB8Lbc',
//                 location: `${pos.lat},${pos.lng}`,
//                 radius: 30000,
//                 opennnow: true,
//                 type: `gas_station`
//             },
//         },
//     })
// .then(res2 => console.log(res2.results));

const combine = function () {
    $.when(cafe).then((res) => {
        console.log(res);
    });
}


$(function () {
    $('button').on('click', function () {
        getLocation();
        combine();
    });
});