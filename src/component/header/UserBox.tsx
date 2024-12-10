import React, { Fragment, useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { Box, Avatar, IconButton, Tooltip, Menu, MenuItem, Divider, ListItemIcon, Button } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import LogoutIcon from '@mui/icons-material/Logout';
import LockResetIcon from '@mui/icons-material/LockReset';
import SettingsIcon from '@mui/icons-material/Settings';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import moment from 'moment';
// import { toast, Bounce } from 'react-toastify';

// import { clear, getItem, removeItem } from 'utils/storage';
// import { requestPayload } from 'utils/requestPayload';
import upsc from 'app/assets/images/blank-profile-picture.jpeg';

import userImg from "@/images/Vector.svg"

const UserBox = () => {
  const [userPhoto, setUserPhoto] = useState('');
  const [anchorElUser, setAnchorElUser] = useState(null);
  // const history = useHistory();

  // const arrayBufferToBase64 = () => {
  //   let binary = '';
  //   const bytes = [].slice.call(new Uint8Array(buffer));
  //   bytes.forEach((b) => (binary += String.fromCharCode(b)));
  //   return `data:${userPhoto?.type?.ext};base64,${window.btoa(binary)}`;
  // };

  // useEffect(() => {
  //   const fetchUserPhoto = async () => {
  //     const payload = {
  //       action: 'get',
  //       path: 'formio',
  //       section: 'candidate/candidate_file_view',
  //       data: {
  //         formid: 'candidate_daf',
  //         module: 'candidate',
  //         fieldValue: getItem('token')?.user?.profilephoto,
  //         field: 'profilephoto',
  //       },
  //       formId: 'candidate_daf',
  //       initData: {},
  //     };

  //     const res = await requestPayload(payload, '/api/service');
  //     setUserPhoto(res);
  //   };

  //   fetchUserPhoto();
  // }, []);

  const handleOpenUserMenu = (event:any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUpdateChange = () => {
    // history.push('/dashboards/change_update');
  };

  const handleChangePasswordClick = () => {
    // history.push('/dashboards/change_password');
  };

  const handleOnLogOutClick = (e:any) => {
    // e.preventDefault();

    // if (getItem('token')?.user?.type === 'NA') {
    //   window.location.href = '/admin-login';
    // } else {
    //   window.location.href = '/candidate/login';
    // }
  };

  // const userInfo = !isEmpty(getItem('token')) ? getItem('token') : {};
  // const activeTime = get(
  //   userInfo,
  //   'loginDetails[0].updated_at',
  //   get(userInfo, 'loginDetails[0].created_at')
  // );

  return (
    <Fragment>
      <Tooltip title="Open settings">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            {/* {!isEmpty(toString(userPhoto?.file?.data)) ? (
              <Avatar
                alt="U.P.S.C"
                src={arrayBufferToBase64(userPhoto?.file?.data)}
                sx={{ width: '30px', height: '30px', marginLeft: '10px' }}
              />
            ) : ( */}
              <Avatar
                alt="U.P.S.C"
                src={userImg}
                sx={{ width: '30px', height: '30px', marginLeft: '10px' }}
              />
            {/* )} */}
          </IconButton>
        </Box>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 10,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem onClick={handleCloseUserMenu} sx={{ fontWeight: 500 }}>
          <IconButton sx={{ p: 0 }}>
            {/* {!isEmpty(toString(userPhoto?.file?.data)) ? (
              <Avatar
                alt="U.P.S.C"
                src={arrayBufferToBase64(userPhoto?.file?.data)}
              />
            ) : ( */}
              <Avatar alt="U.P.S.C" src={userImg} />
            {/* )} */}
          </IconButton>
          &nbsp; Welcome,{' '}
          {/* {get(userInfo, 'user.candidate_name', get(userInfo, 'user.name', ''))} */}
        </MenuItem>
        <Divider sx={{ marginTop: '0 !important', marginBottom: '0 !important' }} />
        {true && (
          <>
            <MenuItem sx={{ fontSize: '14px' }}>
              <ListItemIcon>
                <AppRegistrationIcon />
              </ListItemIcon>
              OTR ID : 
            </MenuItem>

            <MenuItem sx={{ fontSize: '14px' }}>
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              Last Login:
              <strong>
                {/* {moment.utc(activeTime, 'YYYY-MM-DDThh:mm:ss.000Z').format('DD-MM-YYYY hh:mm a')} */}
              </strong>
            </MenuItem>

            <MenuItem onClick={handleUpdateChange} sx={{ fontSize: '14px' }}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              Update Email-ID/Moblie No.
            </MenuItem>

            <MenuItem onClick={handleChangePasswordClick} sx={{ fontSize: '14px' }}>
              <ListItemIcon>
                <LockResetIcon />
              </ListItemIcon>
              Change Password
            </MenuItem>
          </>
        )}

        <MenuItem>
          <Button
            // className="btn-pill btn-shadow btn-shine w-100 btn-sm"
            // color="focus"
            onClick={handleOnLogOutClick}
            aria-label="Logout"
          >
            <LogoutIcon />
            &nbsp;Logout
          </Button>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default UserBox;
