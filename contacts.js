const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    { 
      name: 'Herman Woo',
      id: 'woop1ang',
      dev: 'Respawn Entertainment',
      platform: 'ps4',
      status: 'playing',
      time: '00:00hrs',
      imageURL: 'https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/71346145_10156764827751094_537192008050016256_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=RdmW61KtNlkAX8CLCvm&_nc_ht=scontent.fybz2-2.fna&oh=5b3024a526441dbc8aa9a7bb49d1ce93&oe=603824E3'
    },
    { 
      name: 'Jesse Pang',
      id: 'jpang',
      dev: 'Respawn Entertainment',
      platform: 'ps4',
      status: 'playing',
      time: '00:00hrs',
      imageURL: 'https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/64297051_10219156482087390_2841409707149623296_o.jpg?_nc_cat=103&ccb=2&_nc_sid=cdbe9c&_nc_ohc=HjmuLs0p1ZYAX9SGpx9&_nc_ht=scontent.fybz2-2.fna&oh=3bc0f6f925207d31d7e4e713b600f20d&oe=6037FDDC'
    },
    { 
      name: 'Vivian Feng',
      id: 'vivfeng',
      dev: 'Respawn Entertainment',
      platform: 'ps4',
      status: 'playing',
      time: '00:00hrs',
      imageURL: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/128192241_10215080324796256_7004658271731479022_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=z61T5e1Y6JUAX8wgSH5&_nc_ht=scontent-ort2-2.xx&oh=ba9b1f175e1d0fd46ea7f175bdb1752f&oe=603872F3'
    },
    { 
      name: 'Tiffany Chung',
      id: 'TiffChung',
      dev: 'Respawn Entertainment',
      platform: 'ps4',
      status: 'playing',
      time: '00:00hrs',
      imageURL: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/18622676_10154451921761791_8977148174072997919_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=jeXsQs22D1EAX-vHEpt&_nc_ht=scontent-ort2-2.xx&oh=d72b8d3be193beee70a130a2c454d44f&oe=603AC675'
    },
    { 
      name: 'Micah Tam',
      id: 'micahtamy',
      dev: 'Respawn Entertainment',
      platform: 'ps4',
      status: 'playing',
      time: '00:00hrs',
      imageURL: 'https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/69137351_2360995693955549_7998927738947764224_o.jpg?_nc_cat=100&ccb=2&_nc_sid=a4a2d7&_nc_ohc=BhY7xYlcVxYAX-f8eOG&_nc_ht=scontent.fybz2-1.fna&oh=c3d140bd96e984de5fee12b0d7e0ebd6&oe=60395D7E'
    },
    { 
      name: 'Aaron Kong',
      id: 'aaron',
      dev: 'Respawn Entertainment',
      platform: 'ps4',
      status: 'playing',
      time: '00:00hrs',
      imageURL: 'https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/116883070_10224045839272272_7061712886278876237_o.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_ohc=U5bAdfMhrh4AX-sRlMO&_nc_ht=scontent.fybz2-1.fna&oh=46d6a64223d6581a477c4fe7380d2d09&oe=603CB4D1'
    },
    { 
      name: 'Aaron Kong',
      id: 'aaaron',
      dev: 'Respawn Entertainment',
      platform: 'ps4',
      status: 'playing',
      time: '00:00hrs',
      imageURL: 'https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/14731288_10210863380039030_3306638792872144649_n.jpg?_nc_cat=103&ccb=2&_nc_sid=174925&_nc_ohc=s2MT93hYx3QAX_D69XO&_nc_ht=scontent.fybz2-2.fna&oh=8df0cb9060966959a061b4fc01176495&oe=603FCB10'
    },
    { 
      name: 'Aaron Kong',
      id: 'aaaaron',
      dev: 'Respawn Entertainment',
      platform: 'ps4',
      status: 'playing',
      time: '00:00hrs',
      imageURL: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/22406100_10214541678674197_7249185613967115292_n.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_ohc=00Pg1f96JPYAX_nzNfU&_nc_ht=scontent-ort2-2.xx&oh=3a99e2096bb9119c7924ccd70df8e232&oe=603F7A16'
    },
    { 
      name: 'Aaron Kong',
      id: 'aaaaaron',
      dev: 'Respawn Entertainment',
      platform: 'ps4',
      status: 'playing',
      time: '00:00hrs',
      imageURL: 'https://scontent.fybz2-1.fna.fbcdn.net/v/t1.0-9/10806487_10205233861944596_823605579182655305_n.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_ohc=GY3TxkJWvQQAX-WCpPp&_nc_ht=scontent.fybz2-1.fna&oh=d7f08226f3efba29c02cfd1bbba4c0a1&oe=603FE8AA'
    },
    { 
      name: 'Aaron Kong',
      id: 'aaaaaaron',
      dev: 'Respawn Entertainment',
      platform: 'ps4',
      status: 'playing',
      time: '00:00hrs',
      imageURL: 'https://scontent.fybz2-2.fna.fbcdn.net/v/t31.0-8/12719256_10204524523353456_4988744349495843799_o.jpg?_nc_cat=104&ccb=2&_nc_sid=cdbe9c&_nc_ohc=90q66WCtv04AX_y9Ifn&_nc_ht=scontent.fybz2-2.fna&oh=457a38064904f79c97f2d38fb70f0bd6&oe=603E709D'
    },
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
  /*if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }
*/
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
