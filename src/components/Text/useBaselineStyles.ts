import { css } from '../../emotion'
import { useTheme } from '../../hooks'
import type { Size } from '../Box/Box'
import type { Theme } from '../../theme/theme'
import type { FontSize } from '../../theme/fonts'

function isFontSize(
  fontSize: FontSize | Size,
  theme: Theme
): fontSize is FontSize {
  return !!theme.fontSizes[fontSize as FontSize]
}

export default function useBaselineStyles(
  baseline: boolean,
  size: FontSize | Array<FontSize> | Size | Array<Size> = 'medium'
): string | undefined {
  const theme = useTheme()

  if (baseline) {
    if (Array.isArray(size)) {
      // TODO baseline prop not currently supported for responsive font sizes
      return undefined
    } else if (isFontSize(size, theme)) {
      const [typeOffset, heightCorrection] = theme.fontOffsets[size]

      return css`
        line-height: 1;
        transform: translateY(${typeOffset});
        &:before {
          content: '';
          display: block;
          height: 0px;
          margin-top: -${heightCorrection};
        }
      `
    }

    return undefined
  }

  return undefined
}
