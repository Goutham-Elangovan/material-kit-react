import React from 'react';
import { Container, Card, Avatar, Typography, Button, CardContent } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { sentenceCase } from 'change-case';
import Label from '../components/label';


const EditUser = () => {
  const { state } = useLocation();

  const { userData } = state;
  const { name, role, status, company, avatarUrl, isVerified } = userData;
  return (
    <Container>
      <Card sx={{ p: 6 }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Avatar alt="Dog" src={avatarUrl} sx={{ width: 120, height: 120, mr: 4 }} />
          <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>{name}</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography sx={{ fontSize: 22 }}>Company</Typography>
            <Typography sx={{ fontSize: 22 }}>Role</Typography>
            <Typography sx={{ fontSize: 22 }}>Verified</Typography>
            <Typography sx={{ fontSize: 22 }}>Status</Typography>
          </CardContent>
          <CardContent>
            <Typography sx={{ fontSize: 22 }}>{company}</Typography>
            <Typography sx={{ fontSize: 22 }}>{role}</Typography>
            <Typography sx={{ fontSize: 22 }}>{isVerified ? 'Yes' : 'No'}</Typography>
            <Label color={(status === 'banned' && 'error') || 'success'}>{sentenceCase(status)}</Label>
          </CardContent>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" color="success" size="large" sx={{ color: 'white', mr: 2, px: 6 }}>
            Activate
          </Button>
          <Button variant="outlined" color="error" size="large" sx={{ px: 6 }}>
            Revoke
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default EditUser;
