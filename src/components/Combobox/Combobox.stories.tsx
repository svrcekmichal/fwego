import React from 'react'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText
} from './Combobox'
import { Text } from '../Text/Text'
import { FWThemeProvider } from '../../models'
import infoAddOn from '../../../.storybook/infoAddOn'

export default {
  component: Combobox,
  title: 'Combobox',
  parameters: {
    info: infoAddOn
  }
}

// FIXME the reach-portal popover is always visible in the story, but works
// correctly in fwego lib
export const Default: React.FC<{}> = () => {
  return (
    <Combobox aria-label="hashtags">
      <ComboboxInput placeholder="Search Hashtags" />
      <ComboboxPopover>
        <ComboboxList>
          <ComboboxOption value="animals">
            <Text size="small">
              #<ComboboxOptionText />
            </Text>
          </ComboboxOption>
          <ComboboxOption value="comedy">
            <Text size="small">
              #<ComboboxOptionText />
            </Text>
          </ComboboxOption>
          <ComboboxOption value="gaming">
            <Text size="small">
              #<ComboboxOptionText />
            </Text>
          </ComboboxOption>
          <ComboboxOption value="sports">
            <Text size="small">
              #<ComboboxOptionText />
            </Text>
          </ComboboxOption>
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  )
}

export const FWThemeDark: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="dark">
      <Combobox aria-label="hashtags">
        <ComboboxInput placeholder="Search Hashtags" />
        <ComboboxPopover>
          <ComboboxList>
            <ComboboxOption value="animals">
              <Text size="small">
                #<ComboboxOptionText />
              </Text>
            </ComboboxOption>
            <ComboboxOption value="comedy">
              <Text size="small">
                #<ComboboxOptionText />
              </Text>
            </ComboboxOption>
            <ComboboxOption value="gaming">
              <Text size="small">
                #<ComboboxOptionText />
              </Text>
            </ComboboxOption>
            <ComboboxOption value="sports">
              <Text size="small">
                #<ComboboxOptionText />
              </Text>
            </ComboboxOption>
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </FWThemeProvider>
  )
}

export const FWThemeLight: React.FC<{}> = () => {
  return (
    <FWThemeProvider theme="light">
      <Combobox aria-label="hashtags">
        <ComboboxInput placeholder="Search Hashtags" />
        <ComboboxPopover>
          <ComboboxList>
            <ComboboxOption value="animals">
              <Text color="inherit" size="small">
                #<ComboboxOptionText />
              </Text>
            </ComboboxOption>
            <ComboboxOption value="comedy">
              <Text color="inherit" size="small">
                #<ComboboxOptionText />
              </Text>
            </ComboboxOption>
            <ComboboxOption value="gaming">
              <Text color="inherit" size="small">
                #<ComboboxOptionText />
              </Text>
            </ComboboxOption>
            <ComboboxOption value="sports">
              <Text color="inherit" size="small">
                #<ComboboxOptionText />
              </Text>
            </ComboboxOption>
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </FWThemeProvider>
  )
}
