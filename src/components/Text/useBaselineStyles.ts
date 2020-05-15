import { css } from '../../emotion'
import { useTheme } from '../../hooks'
import type { FontSize } from '../../theme/fonts'

export default function useBaselineStyles(
  baseline: boolean,
  size: FontSize | Array<FontSize> = 'medium'
): string | undefined {
  const theme = useTheme()

  if (baseline) {
    if (Array.isArray(size)) {
      // TODO baseline prop not currently supported for responsive font sizes
      return undefined
    } else {
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
  }

  return undefined
}
