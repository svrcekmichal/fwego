import merge from 'lodash/merge'
import cloneDeep from 'lodash/cloneDeep'
import defaultTheme from '../theme/theme'
import fwTheme from '../theme/fw'

export default merge(cloneDeep(defaultTheme), fwTheme)
