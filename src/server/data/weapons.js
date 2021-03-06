// FIXME: need to add exotic ranged weapons
// FIXME: need to add weapon accessories
// FIXME: need to add weapon accessory slots to weapons
// FIXME: deal with bow rating
module.exports =[
  {
    type: 'Melee Weapon',
    name: 'Combat Axe',
    skill: 'Blade',
    accuracy: '4',
    reach: '2',
    damage: '(STR + 5)P',
    ap: '-4',
    avail: 12,
    illegality: 'R',
    cost: 4000,
    conceal: '+6'
  },
  {
    type: 'Melee Weapon',
    name: 'Combat Knife',
    skill: 'Blade',
    accuracy: '6',
    reach: '0',
    damage: '(STR + 2)P',
    ap: '-3',
    avail: 4,
    cost: 300,
    conceal: '0'
  },
  {
    type: 'Melee Weapon',
    name: 'Forearm snap-blades',
    skill: 'Blade',
    accuracy: '4',
    reach: '0',
    damage: '(STR + 2)P',
    ap: '-2',
    avail: 7,
    illegality: 'R',
    cost: 200,
    conceal: '-4'
  },
  {
    type: 'Melee Weapon',
    name: 'Katana',
    skill: 'Blade',
    accuracy: '7',
    reach: '1',
    damage: '(STR + 3)P',
    ap: '-3',
    avail: 9,
    illegality: 'R',
    cost: 1000,
    conceal: '+6'
  },
  {
    type: 'Melee Weapon',
    name: 'Knife',
    skill: 'Blade',
    accuracy: '5',
    reach: '0',
    damage: '(STR + 1)P',
    ap: '-1',
    avail: 0,
    cost: 10,
    conceal: '-2'
  },
  {
    type: 'Melee Weapon',
    name: 'Pole Arm',
    skill: 'Blade',
    accuracy: '5',
    reach: '3',
    damage: '(STR + 3)P',
    ap: '-2',
    avail: 6,
    illegality: 'R',
    cost: 1000,
    conceal: '+10'
  },
  {
    type: 'Melee Weapon',
    name: 'Survival Knife',
    skill: 'Blade',
    accuracy: '5',
    reach: '0',
    damage: '(STR + 2)P',
    ap: '-2',
    avail: 0,
    cost: 100,
    conceal: '-2'
  },
  {
    type: 'Melee Weapon',
    name: 'Sword',
    skill: 'Blade',
    accuracy: '6',
    reach: '1',
    damage: '(STR + 3)P',
    ap: '-2',
    avail: 5,
    illegality: 'R',
    cost: 500,
    conceal: '+6'
  },
  {
    type: 'Melee Weapon',
    name: 'Club',
    skill: 'Clubs',
    accuracy: '4',
    reach: '1',
    damage: '(STR + 3)P',
    ap: '0',
    avail: 0,
    cost: 30,
    conceal: '+2'
  },
  {
    type: 'Melee Weapon',
    name: 'Extendable baton',
    skill: 'Clubs',
    accuracy: '5',
    reach: '1',
    damage: '(STR + 2)P',
    ap: '0',
    avail: 4,
    cost: 100,
    conceal: '+2'
  },
  {
    type: 'Melee Weapon',
    name: 'Sap',
    skill: 'Clubs',
    accuracy: '5',
    reach: '0',
    damage: '(STR + 2)P',
    ap: '0',
    avail: 2,
    cost: 30,
    conceal: '-2'
  },
  {
    type: 'Melee Weapon',
    name: 'Staff',
    skill: 'Clubs',
    accuracy: '6',
    reach: '2',
    damage: '(STR + 3)P',
    ap: '0',
    avail: 3,
    cost: 100,
    conceal: '+10'
  },
  {
    type: 'Melee Weapon',
    name: 'Stun baton',
    skill: 'Clubs',
    accuracy: '4',
    reach: '1',
    damage: '9S',
    ap: '-5',
    avail: 6,
    illegality: 'R',
    cost: 750,
    conceal: '+2'
  },
  {
    type: 'Melee Weapon',
    name: 'Telescoping staff',
    skill: 'Clubs',
    accuracy: '4',
    reach: '2',
    damage: '(STR + 2)P',
    ap: '0',
    avail: 4,
    cost: 350,
    conceal: '+10'
  },
  {
    type: 'Melee Weapon',
    name: 'Knucks',
    skill: 'Unarmed Combat',
    accuracy: 'Physical',
    reach: '0',
    damage: '(STR + 1)P',
    ap: '0',
    avail: 2,
    illegality: 'R',
    cost: 100,
    conceal: '-2'
  },
  {
    type: 'Melee Weapon',
    name: 'Monofilament Whip',
    skill: 'Exotic Melee Weapon',
    accuracy: '5(7)',
    reach: '2',
    damage: '12P',
    ap: '-8',
    avail: 12,
    illegality: 'F',
    cost: 10000,
    conceal: '-4'
  },
  {
    type: 'Melee Weapon',
    name: 'Knucks',
    skill: 'Unarmed Combat',
    accuracy: 'Physical',
    reach: '0',
    damage: '8S',
    ap: '-5',
    avail: 6,
    illegality: 'R',
    cost: 550,
    conceal: '0'
  },
  // {
  //   type: 'Projectile Weapon',
  //   name: 'Bow',
  //   skill: 'Archery',
  //   accuracy: '6',
  //   range: 'Rating',
  //   damage: '(Rating+2)P',
  //   ap: '-(Rating/4)',
  //   avail: 'Rating',
  //   cost: 'Rating*100',
  //   conceal: '+8'
  // },
  // {
  //   type: 'Projectile Weapon',
  //   name: 'Arrow',
  //   skill: 'Archery',
  //   accuracy: '-',
  //   range: ['0-STR','STR-STR*10','STR*10-STR*30','STR*30-STR*60'],
  //   damage: '-',
  //   ap: '-',
  //   avail: 'Rating',
  //   cost: 'Rating*2',
  //   conceal: '+8'
  // },
  // {
  //   type: 'Projectile Weapon',
  //   name: 'Injection Arrow',
  //   skill: 'Archery',
  //   accuracy: '-',
  //   range: ['-'],
  //   damage: '-',
  //   ap: '-',
  //   avail: '(Rating+2)R',
  //   cost: 'Rating*20',
  //   conceal: '+8'
  // },
  {
    type: 'Projectile Weapon',
    name: 'Light Crossbow',
    skill: 'Archery',
    accuracy: '7',
    range: ['0-6','7-24','25-60','61-120'],
    damage: '5P',
    ap: '-1',
    avail: 2,
    cost: 300,
    conceal: '+6'
  },
  {
    type: 'Projectile Weapon',
    name: 'Medium Crossbow',
    skill: 'Archery',
    accuracy: '6',
    range: ['0-9','10-36','37-90','91-150'],
    damage: '7P',
    ap: '-2',
    avail: 4,
    illegality: 'R',
    cost: 500,
    conceal: '+8'
  },
  {
    type: 'Projectile Weapon',
    name: 'Heavy Crossbow',
    skill: 'Archery',
    accuracy: '5',
    range: ['0-15','16-45','46-120','121-180'],
    damage: '10P',
    ap: '-3',
    avail: 8,
    illegality: 'R',
    cost: 1000,
    conceal: '+8'
  },
  {
    type: 'Projectile Weapon',
    name: 'Bolt',
    skill: 'Archery',
    accuracy: '-',
    range: ['-'],
    damage: '-',
    ap: '-',
    avail: 2,
    cost: 5,
    conceal: '0'
  },
  {
    type: 'Projectile Weapon',
    name: 'Injection Bolt',
    skill: 'Archery',
    accuracy: '-',
    range: ['-'],
    damage: '-',
    ap: '-',
    avail: 8,
    illegality: 'R',
    cost: 50,
    conceal: '0'
  },
  {
    type: 'Projectile Weapon',
    name: 'Throwing Knife',
    skill: 'Throwing Weapons',
    accuracy: 'Physical',
    range: ['0-STR','to STR*2','to STR*3','to STR*5'],
    damage: '(STR+1)P',
    ap: '-1',
    avail: 4,
    illegality: 'R',
    cost: 25,
    conceal: '-2'
  },
  {
    type: 'Projectile Weapon',
    name: 'Throwing Shuriken',
    skill: 'Throwing Weapons',
    accuracy: 'Physical',
    range: ['0-STR','to STR*2','to STR*5','to STR*7'],
    damage: '(STR+1)P',
    ap: '-1',
    avail: 4,
    illegality: 'R',
    cost: 25,
    conceal: '-2'
  },
  {
    type: 'Tasers',
    name: 'Defiance EX Shocker',
    skill: 'Pistols',
    accuracy: '4',
    range: ['0-5','6-10','11-15','16-20'],
    damage: '9S',
    ap: '-5',
    mode: 'SS',
    rc: '-',
    ammo: '4(m)',
    avail: 0,
    cost: 250,
    conceal: '-2'
  },
  {
    type: 'Tasers',
    name: 'Yamaha Pulsar',
    skill: 'Pistols',
    accuracy: '5',
    range: ['0-5','6-10','11-15','16-20'],
    damage: '7S',
    ap: '-5',
    mode: 'SA',
    rc: '-',
    ammo: '4(m)',
    avail: 0,
    cost: 180,
    conceal: '-2'
  },
  {
    type: 'Hold-Outs',
    name: 'Fichetti Tiffani Needler',
    skill: 'Pistols',
    accuracy: '5',
    range: ['0-5','6-15','16-30','31-50'],
    damage: '8P',
    ap: '+5',
    mode: 'SA',
    rc: '-',
    ammo: '4(c)',
    avail: 5,
    illegality: 'R',
    cost: 1000,
    conceal: '-4'
  },
  {
    type: 'Hold-Outs',
    name: 'Streetline Special',
    skill: 'Pistols',
    accuracy: '4',
    range: ['0-5','6-15','16-30','31-50'],
    damage: '6P',
    ap: '-',
    mode: 'SA',
    rc: '-',
    ammo: '6(c)',
    avail: 4,
    illegality: 'R',
    cost: 120,
    conceal: '-4'
  },
  {
    type: 'Hold-Outs',
    name: 'Walther Palm Pistol',
    skill: 'Pistols',
    accuracy: '4',
    range: ['0-5','6-15','16-30','31-50'],
    damage: '7P',
    ap: '-',
    mode: 'SS/BF',
    rc: '-',
    ammo: '2(b)',
    avail: 4,
    illegality: 'R',
    cost: 180,
    conceal: '-4'
  },
  {
    type: 'Light Pistols',
    name: 'Ares Light Fire 75',
    skill: 'Pistols',
    accuracy: '6(8)',
    range: ['0-5','6-15','16-30','31-50'],
    damage: '6P',
    ap: '0',
    mode: 'SA',
    rc: '-',
    ammo: '16(c)',
    avail: 6,
    illegality: 'F',
    cost: 1250,
    conceal: '-2'
  },
  {
    type: 'Light Pistols',
    name: 'Ares Light Fire 70',
    skill: 'Pistols',
    accuracy: '7',
    range: ['0-5','6-15','16-30','31-50'],
    damage: '6P',
    ap: '0',
    mode: 'SA',
    rc: '-',
    ammo: '16(c)',
    avail: 3,
    illegality: 'R',
    cost: 200,
    conceal: '-2'
  },
  {
    type: 'Light Pistols',
    name: 'Beretta 201T',
    skill: 'Pistols',
    accuracy: '6',
    range: ['0-5','6-15','16-30','31-50'],
    damage: '6P',
    ap: '0',
    mode: 'SA/BF',
    rc: '(1)',
    ammo: '21(c)',
    avail: 7,
    illegality: 'R',
    cost: 210,
    conceal: '-2'
  },
  {
    type: 'Light Pistols',
    name: 'Colt America L36',
    skill: 'Pistols',
    accuracy: '7',
    range: ['0-5','6-15','16-30','31-50'],
    damage: '7P',
    ap: '0',
    mode: 'SA',
    rc: '-',
    ammo: '11(c)',
    avail: 4,
    illegality: 'R',
    cost: 320,
    conceal: '-2'
  },
  {
    type: 'Light Pistols',
    name: 'Fichetti Security 600',
    skill: 'Pistols',
    accuracy: '6(7)',
    range: ['0-5','6-15','16-30','31-50'],
    damage: '7P',
    ap: '0',
    mode: 'SA',
    rc: '(1)',
    ammo: '30(c)',
    avail: 6,
    illegality: 'R',
    cost: 350,
    conceal: '-2'
  },
  {
    type: 'Light Pistols',
    name: 'Taurus Omni-6',
    skill: 'Pistols',
    accuracy: '5(6)',
    range: ['0-5','6-15','16-30','31-50'],
    damage: '6P/7P',
    ap: '0/-1',
    mode: 'SA/SS',
    rc: '-',
    ammo: '6(cy)',
    avail: 3,
    illegality: 'R',
    cost: 300,
    conceal: '-2'
  },
  {
    type: 'Heavy Pistols',
    name: 'Ares Predator V',
    skill: 'Pistols',
    accuracy: '5(7)',
    range: ['0-5','6-20','21-40','41-60'],
    damage: '8P',
    ap: '-1',
    mode: 'SA',
    rc: '-',
    ammo: '15(c)',
    avail: 5,
    illegality: 'R',
    cost: 725,
    conceal: '0'
  },
  {
    type: 'Heavy Pistols',
    name: 'Ares Viper Silvergun',
    skill: 'Pistols',
    accuracy: '4',
    range: ['0-5','6-20','21-40','41-60'],
    damage: '9P(f)',
    ap: '+4',
    mode: 'SA/BF',
    rc: '-',
    ammo: '30(c)',
    avail: 8,
    illegality: 'F',
    cost: 380,
    conceal: '0'
  },
  {
    type: 'Heavy Pistols',
    name: 'Browning Ultra-Power',
    skill: 'Pistols',
    accuracy: '5(6)',
    range: ['0-5','6-20','21-40','41-60'],
    damage: '8P',
    ap: '-1',
    mode: 'SA',
    rc: '-',
    ammo: '10(c)',
    avail: 4,
    illegality: 'R',
    cost: 640,
    conceal: '0'
  },
  {
    type: 'Heavy Pistols',
    name: 'Colt Government 2066',
    skill: 'Pistols',
    accuracy: '6',
    range: ['0-5','6-20','21-40','41-60'],
    damage: '7P',
    ap: '-1',
    mode: 'SA',
    rc: '-',
    ammo: '14(c)',
    avail: 7,
    illegality: 'R',
    cost: 425,
    conceal: '0'
  },
  {
    type: 'Heavy Pistols',
    name: 'Remington Roomsweeper',
    skill: 'Pistols',
    accuracy: '4',
    range: ['0-5','6-20','21-40','41-60'],
    damage: '7P',
    ap: '-1',
    mode: 'SA',
    rc: '-',
    ammo: '8(m)',
    avail: 6,
    illegality: 'R',
    cost: 250,
    conceal: '0'
  },
  {
    type: 'Heavy Pistols',
    name: 'Ruger Super Warhawk',
    skill: 'Pistols',
    accuracy: '5',
    range: ['0-5','6-20','21-40','41-60'],
    damage: '9P',
    ap: '-2',
    mode: 'SS',
    rc: '-',
    ammo: '6(cy)',
    avail: 4,
    illegality: 'R',
    cost: 400,
    conceal: '0'
  },
  {
    type: 'Machine Pistols',
    name: 'Ares Crusader II',
    skill: 'Automatics',
    accuracy: '5(7)',
    range: ['0-5','6-15','16-30','31-50'],
    damage: '7P',
    ap: '0',
    mode: 'SA/BF',
    rc: '2',
    ammo: '40(c)',
    avail: 9,
    illegality: 'R',
    cost: 830,
    conceal: '0'
  },
  {
    type: 'Machine Pistols',
    name: 'Ceska Black Scorpion',
    skill: 'Automatics',
    accuracy: '5',
    range: ['0-5','6-15','16-30','31-50'],
    damage: '6P',
    ap: '0',
    mode: 'SA/BF',
    rc: '(1)',
    ammo: '35(c)',
    avail: 6,
    illegality: 'R',
    cost: 270,
    conceal: '0'
  },
  {
    type: 'Machine Pistols',
    name: 'Steyr TMP',
    skill: 'Automatics',
    accuracy: '4',
    range: ['0-5','6-15','16-30','31-50'],
    damage: '7P',
    ap: '0',
    mode: 'SA/BF/FA',
    rc: '-',
    ammo: '30(c)',
    avail: 8,
    illegality: 'R',
    cost: 350,
    conceal: '0'
  },
  {
    type: 'Submachine Guns',
    name: 'Colt Cobra TZ-120',
    skill: 'Automatics',
    accuracy: '4(5)',
    range: ['0-10','11-40','41-80','81-150'],
    damage: '7P',
    ap: '0',
    mode: 'SA/BF/FA',
    rc: '2(3)',
    ammo: '32(c)',
    avail: 5,
    illegality: 'R',
    cost: 660,
    conceal: '+2'
  },
  {
    type: 'Submachine Guns',
    name: 'FN P93 Praetor',
    skill: 'Automatics',
    accuracy: '6',
    range: ['0-10','11-40','41-80','81-150'],
    damage: '8P',
    ap: '0',
    mode: 'SA/BF/FA',
    rc: '1(2)',
    ammo: '50(c)',
    avail: 11,
    illegality: 'F',
    cost: 900,
    conceal: '+2'
  },
  {
    type: 'Submachine Guns',
    name: 'HK-227',
    skill: 'Automatics',
    accuracy: '5(7)',
    range: ['0-10','11-40','41-80','81-150'],
    damage: '7P',
    ap: '0',
    mode: 'SA/BF/FA',
    rc: '(1)',
    ammo: '28(c)',
    avail: 8,
    illegality: 'R',
    cost: 730,
    conceal: '+2'
  },
  {
    type: 'Submachine Guns',
    name: 'Ingram Smartgun X',
    skill: 'Automatics',
    accuracy: '4(6)',
    range: ['0-10','11-40','41-80','81-150'],
    damage: '8P',
    ap: '0',
    mode: 'BF/FA',
    rc: '2',
    ammo: '32(c)',
    avail: 6,
    illegality: 'R',
    cost: 800,
    conceal: '+2'
  },
  {
    type: 'Submachine Guns',
    name: 'SCK Model 100',
    skill: 'Automatics',
    accuracy: '5(7)',
    range: ['0-10','11-40','41-80','81-150'],
    damage: '8P',
    ap: '0',
    mode: 'SA/BF',
    rc: '(1)',
    ammo: '30(c)',
    avail: 6,
    illegality: 'R',
    cost: 875,
    conceal: '+2'
  },
  {
    type: 'Submachine Guns',
    name: 'Uzi IV',
    skill: 'Automatics',
    accuracy: '4(5)',
    range: ['0-10','11-40','41-80','81-150'],
    damage: '7P',
    ap: '0',
    mode: 'BF',
    rc: '(1)',
    ammo: '24(c)',
    avail: 4,
    illegality: 'R',
    cost: 450,
    conceal: '+2'
  },
  {
    type: 'Assault Rifles',
    name: 'AK-97',
    skill: 'Automatics',
    accuracy: '5',
    range: ['0-25','26-150','151-350','351-550'],
    damage: '10P',
    ap: '-2',
    mode: 'SA/BF/FA',
    rc: '-',
    ammo: '38(c)',
    avail: 4,
    illegality: 'R',
    cost: 950,
    conceal: '+6'
  },
  {
    type: 'Assault Rifles',
    name: 'Ares Alpha',
    skill: 'Automatics',
    accuracy: '5(7)',
    range: ['0-25','26-150','151-350','351-550'],
    damage: '11P',
    ap: '-2',
    mode: 'SA/BF/FA',
    rc: '2',
    ammo: '42(c)',
    avail: 11,
    illegality: 'F',
    cost: 2650,
    conceal: '+6'
  },
  {
    type: 'Assault Rifles',
    name: 'Colt M23',
    skill: 'Automatics',
    accuracy: '4',
    range: ['0-25','26-150','151-350','351-550'],
    damage: '9P',
    ap: '-2',
    mode: 'SA/BF/FA',
    rc: '-',
    ammo: '40(c)',
    avail: 4,
    illegality: 'R',
    cost: 550,
    conceal: '+6'
  },
  {
    type: 'Assault Rifles',
    name: 'FN HAR',
    skill: 'Automatics',
    accuracy: '5(6)',
    range: ['0-25','26-150','151-350','351-550'],
    damage: '10P',
    ap: '-2',
    mode: 'SA/BF/FA',
    rc: '2',
    ammo: '35(c)',
    avail: 8,
    illegality: 'R',
    cost: 1500,
    conceal: '+6'
  },
  {
    type: 'Assault Rifles',
    name: 'Yamaha Raiden',
    skill: 'Automatics',
    accuracy: '6(8)',
    range: ['0-25','26-150','151-350','351-550'],
    damage: '11P',
    ap: '-2',
    mode: 'BF/FA',
    rc: '1',
    ammo: '60(c)',
    avail: 14,
    illegality: 'F',
    cost: 2600,
    conceal: '+6'
  },
  {
    type: 'Sniper Rifles',
    name: 'Ares Desert Strike',
    skill: 'Longarms',
    accuracy: '7',
    range: ['0-50','51-350','351-800','801-1500'],
    damage: '13P',
    ap: '-4',
    mode: 'SA',
    rc: '(1)',
    ammo: '14(c)',
    avail: 10,
    illegality: 'F',
    cost: 17500,
    conceal: '+8'
  },
  {
    type: 'Sniper Rifles',
    name: 'Cavalier Arms Crockett EBR',
    skill: 'Longarms',
    accuracy: '6',
    range: ['0-50','51-350','351-800','801-1500'],
    damage: '12P',
    ap: '-3',
    mode: 'SA/BF',
    rc: '(1)',
    ammo: '20(c)',
    avail: 12,
    illegality: 'F',
    cost: 10300,
    conceal: '+8'
  },
  {
    type: 'Sniper Rifles',
    name: 'Ranger Arms SM-5',
    skill: 'Longarms',
    accuracy: '8',
    range: ['0-50','51-350','351-800','801-1500'],
    damage: '14P',
    ap: '-5',
    mode: 'SA',
    rc: '(1)',
    ammo: '15(c)',
    avail: 16,
    illegality: 'F',
    cost: 28000,
    conceal: '+8'
  },
  {
    type: 'Sniper Rifles',
    name: 'Remington 950',
    skill: 'Longarms',
    accuracy: '7',
    range: ['0-50','51-350','351-800','801-1500'],
    damage: '12P',
    ap: '-4',
    mode: 'SS',
    rc: '-',
    ammo: '5(m)',
    avail: 4,
    illegality: 'R',
    cost: 2100,
    conceal: '+8'
  },
  {
    type: 'Sniper Rifles',
    name: 'Ruger 100',
    skill: 'Longarms',
    accuracy: '6',
    range: ['0-50','51-350','351-800','801-1500'],
    damage: '11P',
    ap: '-3',
    mode: 'SA',
    rc: '(1)',
    ammo: '8(m)',
    avail: 4,
    illegality: 'R',
    cost: 1300,
    conceal: '+8'
  },
  {
    type: 'Shotguns',
    name: 'Defiance T-250',
    skill: 'Longarms',
    accuracy: '4',
    range: ['0-10','11-40','41-80','81-150'],
    damage: '10P',
    ap: '-1',
    mode: 'SS/BF',
    rc: '-',
    ammo: '5(m)',
    avail: 4,
    illegality: 'R',
    cost: 450,
    conceal: '+6'
  },
  {
    type: 'Shotguns',
    name: 'Enfield AS-7',
    skill: 'Longarms',
    accuracy: '4(5)',
    range: ['0-10','11-40','41-80','81-150'],
    damage: '13P',
    ap: '-1',
    mode: 'SA/BF',
    rc: '-',
    ammo: '10(c) or 24(d)',
    avail: 12,
    illegality: 'F',
    cost: 1100,
    conceal: '+6'
  },
  {
    type: 'Shotguns',
    name: 'PJSS Model 55',
    skill: 'Longarms',
    accuracy: '6',
    range: ['0-10','11-40','41-80','81-150'],
    damage: '11P',
    ap: '-1',
    mode: 'SS',
    rc: '(1)',
    ammo: '2(b)',
    avail: 9,
    illegality: 'R',
    cost: 1000,
    conceal: '+6'
  },
  {
    type: 'Machine Guns',
    name: 'Ingram Valiant',
    skill: 'Heavy Weapons',
    accuracy: '5(6)',
    range: ['0-25','26-200','201-400','401-800'],
    damage: '9P',
    ap: '-2',
    mode: 'BF/FA',
    rc: '2(3)',
    ammo: '50(c) or 100(belt)',
    avail: 12,
    illegality: 'F',
    cost: 5800,
    conceal: '+10'
  },
  {
    type: 'Machine Guns',
    name: 'Stoner-Ares M202',
    skill: 'Heavy Weapons',
    accuracy: '5',
    range: ['0-40','41-250','251-750','751-1200'],
    damage: '10P',
    ap: '-3',
    mode: 'FA',
    rc: '-',
    ammo: '50(c) or 100(belt)',
    avail: 12,
    illegality: 'F',
    cost: 7000,
    conceal: '+10'
  },
  {
    type: 'Machine Guns',
    name: 'RPK HMG',
    skill: 'Heavy Weapons',
    accuracy: '5',
    range: ['0-40','41-250','251-750','751-1200'],
    damage: '12P',
    ap: '-4',
    mode: 'FA',
    rc: '(6)',
    ammo: '50(c) or 100(belt)',
    avail: 16,
    illegality: 'F',
    cost: 16300,
    conceal: '+10'
  },
  {
    type: 'Ammunition',
    name: 'APDS',
    damage: '-',
    ap: '-4',
    avail: 12,
    illegality: 'F',
    cost: 120
  },
  {
    type: 'Ammunition',
    name: 'Assault cannon',
    damage: '-',
    ap: '-',
    avail: 12,
    illegality: 'F',
    cost: 400
  },
  {
    type: 'Ammunition',
    name: 'Explosive rounds',
    damage: '+1',
    ap: '-1',
    avail: 9,
    illegality: 'F',
    cost: 80
  },
  {
    type: 'Ammunition',
    name: 'Flechette rounds',
    damage: '+2',
    ap: '+5',
    avail: 6,
    illegality: 'R',
    cost: 65
  },
  {
    type: 'Ammunition',
    name: 'Gel rounds',
    damage: '+0S',
    ap: '+1',
    avail: 2,
    illegality: 'R',
    cost: 25
  },
  {
    type: 'Ammunition',
    name: 'Hollow points',
    damage: '+1',
    ap: '+2',
    avail: 4,
    illegality: 'F',
    cost: 70
  },
  {
    type: 'Ammunition',
    name: 'Injection darts',
    damage: '-',
    ap: '-',
    avail: 4,
    illegality: 'F',
    cost: 75
  },
  {
    type: 'Ammunition',
    name: 'Regular ammo',
    damage: '-',
    ap: '-',
    avail: 2,
    illegality: 'R',
    cost: 20
  },
  {
    type: 'Ammunition',
    name: 'Stick-n-Shock',
    damage: '-2S',
    ap: '-5',
    avail: 6,
    illegality: 'R',
    cost: 80
  },
  {
    type: 'Ammunition',
    name: 'Tracer',
    damage: '-',
    ap: '-',
    avail: 6,
    illegality: 'R',
    cost: 60
  },
  {
    type: 'Ammunition',
    name: 'Taser dart',
    damage: '-',
    ap: '-',
    avail: 3,
    cost: 50
  },
  {
    type: 'Grenades',
    name: 'Flash-bang',
    damage: '10S',
    ap: '-4',
    blast: '10m Radius',
    avail: 6,
    illegality: 'R',
    cost: 100
  },
  {
    type: 'Grenades',
    name: 'Flash-pak',
    damage: 'Special',
    ap: '-',
    blast: 'Special',
    avail: 4,
    cost: 125
  },
  {
    type: 'Grenades',
    name: 'Fragmentation',
    damage: '18P',
    ap: '+5',
    blast: '-1/m',
    avail: 11,
    illegality: 'F',
    cost: 100
  },
  {
    type: 'Grenades',
    name: 'High explosive',
    damage: '16P',
    ap: '-2',
    blast: '-2/m',
    avail: 11,
    illegality: 'F',
    cost: 100
  },
  {
    type: 'Grenades',
    name: 'Gas',
    damage: 'as Chemical',
    ap: '-',
    blast: '10m Radius',
    // FIXME: still string
    avail: '2+Chemical Availability',
    cost: '40 + Chem cost'
  },
  {
    type: 'Grenades',
    name: 'Smoke',
    damage: '-',
    ap: '-',
    blast: '10m Radius',
    avail: 4,
    illegality: 'R',
    cost: 40
  },
  {
    type: 'Grenades',
    name: 'Thermal smoke',
    damage: '-',
    ap: '-',
    blast: '10m Radius',
    avail: 6,
    illegality: 'R',
    cost: 60
  }
];
