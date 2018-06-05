'use strict'

const { RESTv2: RESTv2Base } = require('bitfinex-api-node')
const Ledgers = require('../models/ledgers')
const Movements = require('../models/movements')

class RESTv2 extends RESTv2Base {
  /**
   * @param {string|null} symbol
   * @param {Method} cb
   * @return {Promise}
   * @see https://docs.bitfinex.com/v2/reference#ledgers
   */
  ledgers (symbol, cb) {
    const path = symbol ? `/auth/r/ledgers/${symbol}/hist` : '/auth/r/ledgers/hist'

    return this._makeAuthRequest(path, {}, cb, Ledgers)
  }

  /**
   * @param {string} symbol
   * @param {Method} cb
   * @return {Promise}
   * @see https://docs.bitfinex.com/v2/reference#movements
   */
  movements (symbol = 'BTC', cb) {
    return this._makeAuthRequest(`/auth/r/movements/${symbol}/hist`, {}, cb, Movements)
  }
}

module.exports = RESTv2
