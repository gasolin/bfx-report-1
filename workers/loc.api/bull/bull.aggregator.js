'use strict'

const { promisify } = require('util')
const fs = require('fs')

const unlink = promisify(fs.unlink)

const { uploadS3, sendMail } = require('./helpers')

let reportService = null

module.exports = async job => {
  try {
    const data = job.data

    const s3Data = await uploadS3(reportService, data.filePath, job.name)
    await sendMail(reportService, data.email, 'email.pug', s3Data)
    await unlink(data.filePath)

    return Promise.resolve()
  } catch (err) {
    if (err.syscall === 'unlink') {
      await job.discard()
    }

    return Promise.reject(err)
  }
}

module.exports.setReportService = (rService) => {
  reportService = rService
}