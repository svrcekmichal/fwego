const addOn: any = {
  inline: true,
  styles: {
    button: {
      base: {
        fontFamily: 'sans-serif',
        fontSize: 12,
        display: 'block',
        position: 'fixed',
        border: 'none',
        background: '#027ac5',
        color: '#fff',
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
      background: 'green',
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
      color: 'black',
      fontWeight: 300,
      lineHeight: 1.45,
      fontSize: '15px',
      padding: '20px 40px 40px',
      borderRadius: '2px',
      backgroundColor: '#fff'
    },
    infoContent: {
      marginBottom: 0
    },
    infoStory: {},
    jsxInfoContent: {
      borderTop: '1px solid #eee',
      margin: '20px 0 0 0'
    },
    header: {
      h1: {
        margin: 0,
        padding: 0,
        fontSize: '35px',
        color: 'pink'
      },
      h2: {
        margin: '0 0 10px 0',
        padding: 0,
        fontWeight: 400,
        fontSize: '22px',
        color: 'pink'
      },
      h3: {
        margin: '0 0 10px 0',
        padding: 0,
        fontWeight: 400,
        fontSize: '18px',
        color: 'pink'
      },
      body: {
        borderBottom: '1px solid red',
        paddingTop: 10,
        marginBottom: 10
      }
    },
    source: {
      h1: {
        margin: '20px 0 0 0',
        padding: '0 0 5px 0',
        fontSize: '25px',
        borderBottom: '1px solid purple'
      }
    },
    propTableHead: {
      margin: '20px 0 0 0'
    }
  }
}

export default addOn
