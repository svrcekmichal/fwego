import React from 'react'

const tableStyles = {
  borderCollapse: 'collapse',
  marginTop: '0.25rem'
}

const cellStyles = {
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: 'rgba(255, 255, 255, 0.8)',
  fontWeight: '400',
  padding: '0.25rem',
  textAlign: 'left',
  verticalAlign: 'top'
}

const Th = ({ children }) => {
  return <td style={cellStyles}>{children}</td>
}

const Td = ({ children }) => {
  return <td style={cellStyles}>{children}</td>
}

const TableComponent = ({ propDefinitions }) => {
  return (
    <table style={tableStyles}>
      <thead>
        <tr>
          <Th>Property</Th>
          <Th>PropType</Th>
          <Th>Default</Th>
          <Th>Description</Th>
        </tr>
      </thead>
      <tbody>
        {propDefinitions.map(
          ({ property, propType, description, defaultValue }) => {
            return (
              <tr key={property}>
                <Td>{property}</Td>
                <Td>{propType.name}</Td>
                <Td>{defaultValue}</Td>
                <Td>{description}</Td>
              </tr>
            )
          }
        )}
      </tbody>
    </table>
  )
}

export default {
  TableComponent: TableComponent,
  inline: true,
  styles: {
    // styles shape:
    // https://github.com/storybookjs/storybook/blob/master/addons/info/src/components/Story.js#L19
    button: {
      base: {
        fontFamily: 'sans-serif',
        fontSize: 12,
        display: 'block',
        position: 'fixed',
        border: 'none',
        background: '#027ac5',
        color: 'white',
        padding: '5px 15px',
        cursor: 'pointer'
      },
      topRight: {
        top: 0,
        right: 0,
        borderRadius: '0 0 0 5px'
      }
    },
    info: {
      position: 'fixed',
      background: 'white',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      overflow: 'auto',
      zIndex: 99999
    },
    children: {
      position: 'relative',
      zIndex: 0
    },
    infoBody: {
      fontFamily:
        'Helvetica Neue, Helvetica, Segoe UI, Arial, freesans, sans-serif',
      color: 'white',
      fontWeight: 300,
      lineHeight: 1.45,
      fontSize: '15px',
      padding: '20px 40px 40px',
      borderRadius: '2px',
      backgroundColor: '#2f2f2f'
    },
    infoContent: {
      marginBottom: 0
    },
    infoStory: {
      marginTop: '20px',
      marginBottom: '20px'
    },
    jsxInfoContent: {
      borderTop: '1px solid rgba(255,255,255,0.2)',
      margin: '20px 0 0 0'
    },
    header: {
      h1: {
        margin: 0,
        padding: 0,
        fontSize: '35px'
      },
      h2: {
        margin: '0 0 10px 0',
        padding: 0,
        fontWeight: 400,
        fontSize: '22px'
      },
      h3: {
        margin: '0 0 10px 0',
        padding: 0,
        fontWeight: 400,
        fontSize: '18px'
      },
      body: {
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        paddingTop: 10,
        marginBottom: 10
      }
    },
    source: {
      h1: {
        margin: '20px 0 0 0',
        padding: '0 0 5px 0',
        fontSize: '25px',
        borderBottom: '1px solid rgba(255,255,255,0.2)'
      }
    },
    propTableHead: {
      margin: '20px 0 0 0'
    }
  }
}
