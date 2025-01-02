import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import defaultImage from '../../../assets/images/default3DModel.png';

function OrderCard({ order }) {
  const {
    _id,
    updatedAt,
    customerName,
    itemsCount,
    productImage,
    productName,
    productDetails,
    price,
    quantity,
    status,
    tracking, // Assuming tracking data is passed as part of the order prop
  } = order;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const [isModalOpen, setModalOpen] = useState(false); // Modal state
  const navigate = useNavigate();

  const handleDropDownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropDownClose = () => {
    setAnchorEl(null);
  };

  const handleAddQuotation = () => {
    handleDropDownClose();
    navigate(`/admin/orders/${_id}/addQuotation`);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  console.log("order tracking : ", order.tracking);

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', p: 2, boxShadow: 3, borderRadius: 2, my: 2 }}>
      {/* Order Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}></Avatar>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              {customerName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Package ({itemsCount} Item)
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary">
            Order Number: <span style={{ fontWeight: 'bold' }}>{_id}</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Update Time: <span style={{ fontWeight: 'bold' }}>{updatedAt}</span>
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Order Details */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          component="img"
          src={productImage || defaultImage}
          alt="Product"
          sx={{ width: 64, height: 64, borderRadius: 1 }}
        />
        <Box sx={{ flex: 3 }}>
          <Typography variant="body1" fontWeight="bold">
            {productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Color Family: {productDetails?.colorFamily || 'Not Specified'}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          {price ? (
            <Typography variant="body1" color="grey">
              Rs. {price}
            </Typography>
          ) : (
            <Typography variant="body2" color="text.secondary"></Typography>
          )}
          <Typography variant="body1" color="error.main" fontWeight="bold">
            X {quantity}
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button variant="outlined" color="primary" size="small" onClick={handleModalOpen}>
              Logistic Status
            </Button>
            <div>
              <Button
                id="basic-button"
                aria-controls={openMenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                onClick={handleDropDownClick}
                variant="outlined"
                color="primary"
                size="small"
                sx={{ width: '100%' }}
              >
                More Actions <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleDropDownClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {status === 'Quotation Pending' && (
                  <MenuItem onClick={handleAddQuotation}>
                    Add Quotation
                  </MenuItem>
                )}
                {status === 'To Pack' && (
                  <MenuItem onClick={() => {
                    handleDropDownClose();
                    console.log('Ready To Ship');
                  }}>
                    Ready To Ship
                  </MenuItem>
                )}
              </Menu>
            </div>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Logistics and Actions */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Status: {status}
        </Typography>
      </Box>

      {/* Modal for Tracking */}
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-12">
          <section>
            <div className="flex items-center mb-4">
              <img
                src="https://image.flaticon.com/icons/svg/970/970514.svg"
                alt="Tracking Icon"
                className="w-16 h-16 rounded-full border-2 border-orange-500 p-2"
              />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800">Tracking Details</h4>
                <h6 className="text-sm text-gray-500">Order Number</h6>
                <h2 className="text-xl font-semibold text-gray-800">{_id}</h2>
              </div>
            </div>
            <div className="border-t border-dashed border-gray-300 pt-4 space-y-6">
              {tracking && tracking.length > 0 ? (
                tracking.map((entry, index) => (
                  <div key={index} className="flex items-start relative">
                    {/* Status Dot */}
                    <div className="flex flex-col items-center z-10">
                      <span className="w-4 h-4 rounded-full bg-orange-500"></span>
                      {/* Connecting Line */}
                      {index < tracking.length - 1 && (
                        <span className="w-0.5 h-full bg-orange-500 absolute top-4"></span>
                      )}
                    </div>
                    {/* Tracking Text */}
                    <div className="ml-6">
                      <p className="text-sm font-medium text-gray-800">{entry.status}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(entry.timestamp).toLocaleString()}
                      </p>
                      {entry.description && (
                        <p className="text-xs text-gray-600">{entry.description}</p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No tracking information available.</p>
              )}
            </div>
          </section>
        </div>
      </Modal>
    </Card>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    customerName: PropTypes.string,
    itemsCount: PropTypes.string,
    updatedAt: PropTypes.string,
    productImage: PropTypes.string,
    productName: PropTypes.string,
    productDetails: PropTypes.shape({
      colorFamily: PropTypes.string,
    }),
    price: PropTypes.number,
    quantity: PropTypes.number,
    status: PropTypes.string,
    tracking: PropTypes.arrayOf(
      PropTypes.shape({
        status: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        description: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default OrderCard;
