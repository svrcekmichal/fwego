import merge from 'lodash/merge'
import cloneDeep from 'lodash/cloneDeep'
import defaultTheme from '../src/theme/theme'
import fwThemeDark from '../src/theme/fwDark'

// To get the Story Source to render the jsx markup in stories while iterating
// over theme keys, sometimes we need access to the fwTheme without getting it
// the proper way with useTheme. This is a hack just for storybook documentation.
export default merge(cloneDeep(defaultTheme), fwThemeDark)
