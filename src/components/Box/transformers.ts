import type { Size } from './Box'
import type {
  FontSize,
  FontSizes,
  FontWeight,
  FontWeights
} from '../../theme/fonts'
import type { Space, Spaces } from '../../theme/spaces'
import type { Theme } from '../../theme/theme'

export function toSizeUnit(propertyValue: Size): string {
  if (
    typeof propertyValue === 'number' &&
    propertyValue >= 0 &&
    propertyValue <= 1
  ) {
    return propertyValue * 100 + '%'
  }
  if (typeof propertyValue === 'string' && isNaN(Number(propertyValue))) {
    return propertyValue
  }
  return propertyValue + 'px'
}

export function sizeTransformer(propertyValue: Size): string {
  return toSizeUnit(propertyValue)
}

function isSpace(space: Space | Size, spaces: Spaces): space is Space {
  return !!spaces[space as Space]
}

export function toSpaceUnit(space: Space | Size, spaces: Spaces): string {
  if (isSpace(space, spaces)) {
    return spaces[space]
  }
  return toSizeUnit(space)
}

export function spaceTransformer(
  propertyValue: Space | Size,
  theme?: Theme
): string {
  return toSpaceUnit(propertyValue, theme?.spaces)
}

export function toFontSizeUnit(
  fontSize: FontSize,
  fontSizes: FontSizes
): string {
  return fontSizes[fontSize]
}

export function fontSizeTransformer(
  propertyValue: FontSize,
  theme?: Theme
): string {
  return toFontSizeUnit(propertyValue, theme?.fontSizes)
}

export function toFontWeightUnit(
  fontWeight: FontWeight,
  fontWeights: FontWeights
): string {
  return fontWeights[fontWeight]
}

export function fontWeightTransformer(
  propertyValue: FontWeight,
  theme?: Theme
): string {
  return toFontWeightUnit(propertyValue, theme?.fontWeights)
}

export function isValidColor(color: string): boolean {
  const s = new Option().style
  s.color = color
  return s.color != ''
}

export function colorTransformer(propertyValue: string, theme?: Theme): string {
  const themeColor = propertyValue && theme?.colors?.[propertyValue]
  return themeColor || (isValidColor(propertyValue) ? propertyValue : undefined)
}
