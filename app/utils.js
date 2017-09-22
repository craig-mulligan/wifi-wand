const iwlist = require('wireless-tools/iwlist')
// const iwlist = require('node-wifi-scanner')
const includes = require('lodash/includes')
const _ = require('lodash')
const chroma = require('chroma-js')

const getSSIDS = () => {
  try {
    return process.env.SSIDS.trim().split(',')
  } catch (err) {
    return [ 'resin', 'The Cube', 'Spark' ]
  }
}

const getColors = () => {
  try {
    return process.env.COLORS.trim().split(',')
  } catch (err) {
    return [ 'red', 'blue', 'green' ]
  }
}

const createScales = (ssids, colors, domain) => {
  return ssids.reduce((acc, ssid, i) => {
    // reverse the order of colors because scale is neg
    acc[ssid] = chroma.scale([ colors[i], 'black' ]).domain(domain)
    return acc
  }, {})
}

const scan = async (ssids) => {
  return new Promise(function(resolve, reject) {
    iwlist.scan(process.env.INTERFACE || 'wlan0', (err, networks) => {
      if (err) {
        reject(err);
      }
      resolve(
        _.uniqBy(
          networks.filter(network => {
            return _.includes(ssids, network.ssid)
          })
        , 'ssid')
      )
    });
  });
}

const applyColorScales = (scales, networks) => {
  return networks.map(network => {
    return scales[network.ssid](network.signal).hex()
  })
}

const mix = (colors) => {
  return chroma.average(colors, 'rgb').css()
}

module.exports = {
  getSSIDS,
  createScales,
  applyColorScales,
  scan,
  getColors,
  mix
}
