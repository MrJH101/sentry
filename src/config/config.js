import path from 'path'
import fs from 'fs'

require('dotenv').load({ silent: true })

const env = process.env

export const NODE_ENV = env.NODE_ENV || 'development'
export const PORT = env.PORT || 5555
export const APP_URL = env.APP_URL || `http://localhost:${PORT}`
export const COOKIE_SECRET = env.COOKIE_SECRET || 'super duper sekret!'

// Authentication
export const ADMIN_USERNAME = env.ADMIN_USERNAME || 'admin'
export const ADMIN_PASSWORD = env.ADMIN_PASSWORD || 'password'

// Paths
export const ROOT_PATH = path.join(__dirname, '..', '..')
export const SOURCE_PATH = path.join(__dirname, '..')
export const VIEWS_PATH = path.join(SOURCE_PATH, 'views')
export const MODELS_PATH = path.join(SOURCE_PATH, 'models')
export const ASSETS_PATH = path.join(SOURCE_PATH, 'assets')
export const PUBLIC_PATH = path.join(ROOT_PATH, 'public')
export const FIRMWARE_DIR = 'firmware'
export const FIRMWARE_PATH = path.join(ROOT_PATH, FIRMWARE_DIR)
export const FIRMWARE_FILE_PATHS = fs.readFileSync(
  path.join(FIRMWARE_PATH, 'particle.include'),
  { encoding: 'utf8' }
)
  .split('\n')
  .reduce((lines, line) => {
    if (Boolean(line)) {
      lines.push(`./${FIRMWARE_DIR}/${line}`)
    }

    return lines
  }, [])

// Cobot
export const COBOT_SUBDOMAIN = env.COBOT_SUBDOMAIN
export const COBOT_CLIENT_ID = env.COBOT_CLIENT_ID
export const COBOT_CLIENT_SECRET = env.COBOT_CLIENT_SECRET
export const COBOT_STAFF_PLANS = env.COBOT_STAFF_PLANS || ['Staff Member']
export const COBOT_UNLIMITED_PLANS = env.COBOT_UNLIMITED_PLANS || [
  'Basic Member',
  'Friend of Chimera',
  'Board Member',
  'Professional',
  'Professional - Early Bird',
  'Professional - Yearly',
]

// Mongo
export const MONGO_URI = env.MONGO_URI || env.MONGOLAB_URI || 'mongodb://localhost/sentry'
