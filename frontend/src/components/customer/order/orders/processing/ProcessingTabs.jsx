import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ToPack from './ToPack';
import ReadyToShip from './ReadyToShip';
import Shipping from './Shipping';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProcessingTabs({ orders }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Filter orders by status
  const toPackOrders = orders.filter(
    (order) => order.status === 'To Pack'
  );
  const ReadyToShipOrders = orders.filter(
    (order) => order.status === 'Ready To Ship'
  );
  const shippingOrders = orders.filter(
    (order) => order.status === 'Shipping'
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="processing tabs example"
          TabIndicatorProps={{
            style: { backgroundColor: '#ff5733' }, // Underline color
          }}
        >
          <Tab
            label="To Pack"
            {...a11yProps(0)}
            sx={{
              color: '#000', // Default text color
              '&.Mui-selected': {
                color: '#C70039', // Selected tab text color
              },
            }}
          />
          <Tab
            label="Ready To Ship"
            {...a11yProps(1)}
            sx={{
              color: '#000',
              '&.Mui-selected': {
                color: '#C70039',
              },
            }}
          />
          <Tab
            label="Shipping"
            {...a11yProps(2)}
            sx={{
              color: '#000',
              '&.Mui-selected': {
                color: '#C70039',
              },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ToPack orders={toPackOrders} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ReadyToShip orders={ReadyToShipOrders} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Shipping orders={shippingOrders} />
      </CustomTabPanel>
    </Box>
  );
}
