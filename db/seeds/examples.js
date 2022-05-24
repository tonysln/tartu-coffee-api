/* eslint-disable prefer-arrow-callback */

exports.seed = function (knex) {
  return knex('markers').del()
    .then(function () {
      return knex('markers').insert([
        {
          title: 'Caffeine Küüni', rating: '100%', description: 'BEST coffee in Tartu - favorites are the flat white, lattes, cappuccinos, everything.', latitude: 58.37868760036927, longitude: 26.724243770105716
        },
        {
          title: 'Bepis Coffee', rating: '100%', description: 'Best coffee made by Best Bepis.', latitude: 58.38041446744219, longitude: 26.78308071683126
        },
        {
          title: 'Terminal Kivilinna', rating: '68%', description: 'Quite cheap and OK coffee for a gas station.', latitude: 58.379533977087156, longitude: 26.76621440703426
        },
        {
          title: 'Pagaripoisid', rating: '80%', description: 'Delicious "traditional" lattes and cappuccinos, not expensive. Too many grannies.', latitude: 58.378085589660174, longitude: 26.725213476488513
        },
        {
          title: 'Caffeine Tasku', rating: '92%', description: 'Best coffee in Tartu, yet the place is not as cozy and comfortable as Küüni.', latitude: 58.37780205510689, longitude: 26.73057460866087
        },
        {
          title: 'V Cafe', rating: '89%', description: 'Delicious lattes and cappuccinos, comfy place. A bit too expensive.', latitude: 58.37657884307621, longitude: 26.72885764508991
        },
        {
          title: 'Tehnikainstituut', rating: '5%', description: 'The price is 20 cents, tastes like warm goat milk mixed with molten plastic.', latitude: 58.38857727713425, longitude: 26.694047319978356
        }
      ]);
    });
};
