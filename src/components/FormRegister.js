import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import VpnKeySharpIcon from '@material-ui/icons/VpnKeySharp';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import StoreIcon from '@material-ui/icons/Store';
import RoomIcon from '@material-ui/icons/Room';
import { Grid, Input, InputLabel, Link, Typography } from '@material-ui/core/';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root2: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    top: '50%',
    left: '50%',
    textAlign: 'center',
  },
  paper: {
    maxWidth: 350,
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(2),
    height: '650px',
    top: '50%',
    left: '50%',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    color: '#FFF',
    margin: '10px'
  },
  form: {
    margin: '10px',
  },
  letter: {
    color: 'grey',
    size: '5px'
  },
  tab: {
    backgroundColor: '#fff',
    color: '#000',
  }
}));

export default function TabSelect(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root2}><Paper className={classes.paper}>
      <AppBar position="static" className={classes.tab}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          width="60"
          indicatorColor="primary"
        >
          <LinkTab label="Tienda" {...a11yProps(0)} />
          <LinkTab label="Cliente" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} height="100">
        <div className={classes.root2}>
          <Grid>
            <h2 margin='5px'>Crear cuenta</h2>
            <FormControl className={classes.form} >
              <InputLabel htmlFor="user">Nombre de la tienda</InputLabel>
              <Input
                id="user"
                startAdornment={
                  <InputAdornment position="start">
                    <StoreIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className={classes.form}>
              <InputLabel htmlFor="mail" >Email de contacto</InputLabel>
              <Input
                id="mail"
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                } />
            </FormControl>
            <FormControl className={classes.form} >
              <InputLabel htmlFor="addr">Direccion de la tienda</InputLabel>
              <Input
                id="addr"
                startAdornment={
                  <InputAdornment position="start">
                    <RoomIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className={classes.form}>
              <InputLabel htmlFor="pwd" >Contraseña</InputLabel>
              <Input
                id="pwd"
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <VpnKeySharpIcon />
                  </InputAdornment>
                } />
            </FormControl>
            <FormControl className={classes.form}>
              <InputLabel htmlFor="pwd" >Repita la contraseña</InputLabel>
              <Input
                id="pwd2"
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <VpnKeySharpIcon />
                  </InputAdornment>
                } />
            </FormControl>
            <FormControl className={classes.form}>
              <InputLabel htmlFor="tel" >Telefono de contacto</InputLabel>
              <Input
                id="tel"
                startAdornment={
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                } />
            </FormControl>
            <div>
              <Button variant="contained" className={classes.button} disableElevation>
                Registrarme
                      </Button>
            </div>
            <div>
              <Typography className={classes.letter}>
                ¿Ya tienes cuenta en Rey Canino?
                          </Typography>
              <Link
                component="button"
                variant="body2"
                onClick={() => { props.history.push('/login') }}
              > Ingresar
                      </Link>
            </div>
          </Grid>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}  >
        <div className={classes.root2}>
          <Grid>
            <h2 margin='5px'>Crear cuenta</h2>
            <FormControl className={classes.form} >
              <InputLabel htmlFor="user">Nombre de usuario</InputLabel>
              <Input
                id="user"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl className={classes.form}>
              <InputLabel htmlFor="mail" >Email de contacto</InputLabel>
              <Input
                id="mail"
                startAdornment={
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                } />
            </FormControl>
            <FormControl className={classes.form}>
              <InputLabel htmlFor="pwd" >Contraseña</InputLabel>
              <Input
                id="pwd"
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <VpnKeySharpIcon />
                  </InputAdornment>
                } />
            </FormControl>
            <FormControl className={classes.form}>
              <InputLabel htmlFor="pwd" >Repita la contraseña</InputLabel>
              <Input
                id="pwd2"
                type="password"
                startAdornment={
                  <InputAdornment position="start">
                    <VpnKeySharpIcon />
                  </InputAdornment>
                } />
            </FormControl>
            <FormControl className={classes.form}>
              <InputLabel htmlFor="tel" >Telefono de contacto</InputLabel>
              <Input
                id="tel"
                startAdornment={
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                } />
            </FormControl>
            <div>
              <Button variant="contained" className={classes.button} disableElevation>
                Registrarme
                      </Button>
            </div>
            <div>
              <Typography className={classes.letter} size='5px'>
                ¿Ya tienes cuenta en Rey Canino?
                          </Typography>
              <Link
                component="button"
                variant="body2"
                onClick={() => { props.history.push('/login') }}
              > Ingresar
                      </Link>
            </div>
          </Grid>
        </div>
      </TabPanel>
    </Paper>
    </div>
  );
}