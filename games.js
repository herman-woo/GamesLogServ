const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    { 
      name: 'Uncharted: The Nathan Drake Collection',
      id: 'unchartedHD',
      dev: 'Naughty Dog',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '80%',
      rating: '4/5',
      year: '2015',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Nathan_Drake_Collection_cover_art.png'
    },
    { 
      name: 'Uncharted 4: A Thief\'s End',
      id: 'uncharted4',
      dev: 'Naughty Dog',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '80%',
      rating: '4/5',
      year: '2016',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg'
    },
    { 
      name: 'STREET FIGHTER V',
      id: 'SFV',
      dev: 'CAPCOM',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '80%',
      rating: '4/5',
      year: '2016',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/8/80/Street_Fighter_V_box_artwork.png'
    },
    { 
      name: 'Shadow of the Colossus',
      id: 'shadowofthecolossus',
      dev: 'Ubisoft',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '80%',
      rating: '4/5',
      year: '2018',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/a/a4/ShadowOfTheColossus2018.jpg'
    },
    { 
      name: 'NBA 2K20',
      id: 'NBA20',
      dev: '2K Sports',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '80%',
      rating: '4/5',
      year: '2019',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/e/e9/NBA_2K20_cover.png'
    },
    { 
      name: 'Devil May Cry HD Collection',
      id: 'DMCHD',
      dev: 'CAPCOM',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '80%',
      rating: '4/5',
      year: '2015',
      imageURL: 'https://i.redd.it/ireoic1wkj201.jpg'
    },
    { 
      name: 'Devil May Cry 4: Special Edition',
      id: 'dmc4se',
      dev: 'CAPCOM',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '80%',
      rating: '4/5',
      year: '2015',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/1/12/DevilMayCry4SpecialEdCover.jpg'
    },
    { 
      name: 'Deus Ex: Mandkind Divided',
      id: 'mankinddivided',
      dev: 'Eidos Montreal',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '80%',
      rating: '4/5',
      year: '2016',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Deus_Ex%2C_Mankind_Divided_Box_Art.jpeg'
    },
    { 
      name: 'Call of Duty WW2',
      id: 'CODWW2',
      dev: 'Activision',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '0%',
      rating: '3.5/5',
      year: '2017',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/1/18/Call_of_Duty_WWII_Cover_Art.jpg'
    },
    { 
      name: 'Assassin\'s Creed: Unity',
      id: 'Unity',
      dev: 'Ubisoft',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '80%',
      rating: '4/5',
      year: '2014',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/a/ac/Acunity.jpg'
    },
    { 
      name: 'Assassin\'s Creed: Syndicate',
      id: 'Syndicate',
      dev: 'Ubisoft',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '80%',
      rating: '4/5',
      year: '2015',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/0/03/ACSyndicate.jpg'
    },
    { 
      name: 'Titanfall 2',
      id: 'titanfall2',
      dev: 'Respawn Entertainment',
      platform: 'PS4',
      status: 'waitlist',
      time: '00:00hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/1/13/Titanfall_2.jpg'
    },
    { name: 'Death Stranding',
      id: 'deathstranding',
      dev: 'Kojima Productions',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/2/22/Death_Stranding.jpg'
    },
    { 
      name: 'Persona 5',
      id: 'p5',
      dev: 'Atlas Games',
      platform: 'PS4',
      status: 'none',
      time: '00:00hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Persona_5_cover_art.jpg'
    },
    { 
      name: 'Ghosts of Tsushima',
      id: 'ghostsoftsushima',
      dev: 'Sucker Punch Studios',
      platform: 'PS4',
      status: 'waitlist',
      time: '00:00hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg'
    },
    { 
      name: 'Assassin\'s Creed: Valhalla',
      id: 'valhalla',
      dev: 'Ubisoft',
      platform: 'PS4',
      status: 'playing',
      time: '66:37hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/f/f8/ACValhalla.jpg'
    },
    { 
      name: 'God of War',
      id: 'godofwar',
      dev: 'Santa Monica Studios',
      platform: 'PS4',
      status: 'completed',
      time: '55:00hrs',
      score: '100%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg'
    },
    { 
      name: 'Spider-Man',
      id: 'spiderman',
      dev: 'INSOMNIAC Studios',
      platform: 'PS4',
      status: 'playing',
      time: '22:10hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg'
    },
    { 
      name: 'Final Fantasy VII Remake',
      id: 'ffviiremake',
      dev: 'Square Enix',
      platform: 'PS4',
      status: 'completed',
      time: '95:00hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/c/ce/FFVIIRemake.png'
    },
    { 
      name: 'Metal Gear Solid V: The Phantom Pain',
      id: 'mgsv',
      dev: 'Kojima Productions',
      platform: 'PS4',
      status: 'none',
      time: '165:00hrs',
      score: '88%',
      rating: '4.5/5',
      year: '2015',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Metal_Gear_Solid_V_The_Phantom_Pain_cover.png'
    },
    { 
      name: 'Kingdom Hearts III',
      id: 'kingdomhearts3',
      dev: 'Square Enix',
      platform: 'PS4',
      status: 'none',
      time: '0:40hrs',
      score: '88%',
      rating: '4.5/5',
      year: '2018',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Kingdom_Hearts_III_box_art.jpg'
    },
    { name: 'kingdom Hearts 1.5 + 2.5',
      id: 'kingdomhearts1525',
      dev: 'Square Enix',
      platform: 'PS4',
      status: 'none',
      time: '101:00hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://images-na.ssl-images-amazon.com/images/I/61XnoC5N4uL.jpg'
    },
    { 
      name: 'Call of Duty: Modern Warfare',
      id: 'ModernWarfare2019',
      dev: 'Infinity Ward',
      platform: 'PS4',
      status: 'none',
      time: '20:00hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/e/e9/CallofDutyModernWarfare%282019%29.jpg'
    },
    { 
      name: 'Assassins Creed: Origins',
      id: 'acorigins',
      dev: 'Ubisoft',
      platform: 'PS4',
      status: 'completed',
      time: '80:00hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png'
    },
    { 
      name: 'Assassins Creed: Odyssey',
      id: 'acodyssey',
      dev: 'Ubisoft',
      platform: 'PS4',
      status: 'none',
      time: '73:00hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/9/99/ACOdysseyCoverArt.png'
    },
    { 
      name: 'Persona 4 Golden',
      id: 'persona4golden',
      dev: 'Santa Monica Studios',
      platform: 'PS Vita',
      status: 'none',
      time: '85:00hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81QFr0nkQNL._SL1494_.jpg'
    },
    { 
      name: 'Bioshock The Collection',
      id: 'bioshock',
      dev: 'ROCKSTEADY Studios',
      platform: 'PS4',
      status: 'none',
      time: 'not started',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/e/e7/BioShock-_The_Collection.jpg'
    },
    { 
      name: 'Jedi: Fallen Order',
      id: 'jedifallenorder',
      dev: 'Respawn Entertainment',
      platform: 'PS4',
      status: 'waitlist',
      time: '1:00hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/1/13/Cover_art_of_Star_Wars_Jedi_Fallen_Order.jpg'
    },
    { 
      name: 'The Witcher 3: Wild Hunt',
      id: 'witcher3',
      dev: 'CD Projekt Red',
      platform: 'PS4',
      status: 'completed',
      time: '138:37hrs',
      score: '88%',
      rating: '4.5/5',
      imageURL: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg'
    }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
