
const debug = require('debug')('wand')
const isEmpty = require('lodash/isEmpty')
const { scan, getSSIDS, createScales, getColors, applyColorScales, mix  } = require('./utils');
const SSIDS = getSSIDS()
const COLORS = getColors()
const DOMAIN = [ 0, -80 ]
const SCALES = createScales(SSIDS, COLORS, DOMAIN)
const INTERVAL = process.env.INTERVAL || 3000

const wand = async (interval) => {
  try {
    const cover = document.getElementById("cover")

    debug('running')
    const networks = await scan(SSIDS)
    if (isEmpty(networks)) {
      throw Error('Named networks not found')
    }
    debug('networks', networks)
    const colors = applyColorScales(SCALES, networks)
    debug('colors', colors)
    const color = mix(colors)
    debug('color')

    cover.setAttribute("style", "background-color: " + color + ";")
    setTimeout(wand, INTERVAL);
  } catch (err) {
    console.log(err)
    setTimeout(wand, INTERVAL);
  }
}

module.exports = wand
