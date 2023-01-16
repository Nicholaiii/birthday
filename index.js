import core from '@actions/core'
import github from '@actions/github'

import { calculateVersion } from './calculate-version.js'

try {
  const version = calculateVersion(new Date())
  core.setOutput('version', version)
  core.setOutput('tag', `v${version}`)
  console.log('Congrats, you are version', version)
} catch (error) {
  core.setFailed(error.message);
}
