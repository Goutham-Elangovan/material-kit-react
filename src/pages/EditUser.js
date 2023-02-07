import React from 'react';
import { Container, Card, Avatar, Typography, Button, CardContent } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { sentenceCase } from 'change-case';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Label from '../components/label';

const EditUser = () => {
  const leftSideTitle = ['Company', 'Role', 'Verified', 'Status'];
  const { state } = useLocation();
  const { name, role, status, company, avatarUrl, isVerified } = state.userData;
  // ------------------------------------------------------------------------------------------------------------
  const BodyDiv = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  }));

  const ButtonContainerDiv = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }));

  const HeaderDiv = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }));
  // ------------------------------------------------------------------------------------------------------------
  const TitleComponent = ({ title }) => (
    <>
      <Typography sx={{ fontSize: 22 }}>{title}</Typography>
    </>
  );

  const UserDetailsComponent = ({ company, role, isVerified, status }) => (
    <>
      <Typography sx={{ fontSize: 22 }}>{company}</Typography>
      <Typography sx={{ fontSize: 22 }}>{role}</Typography>
      <Typography sx={{ fontSize: 22 }}>{isVerified ? 'Yes' : 'No'}</Typography>
      <Label color={(status === 'banned' && 'error') || 'success'}>{sentenceCase(status)}</Label>
    </>
  );

  // ------------------------------------------------------------------------------------------------------------
  TitleComponent.propTypes = {
    title: PropTypes.string,
  };

  UserDetailsComponent.propTypes = {
    company: PropTypes.string,
    role: PropTypes.string,
    isVerified: PropTypes.string,
    status: PropTypes.string,
  };

  return (
    <Container>
      <Card sx={{ p: 6 }}>
        <HeaderDiv>
          <Avatar alt="Dog" src={avatarUrl} sx={{ width: 120, height: 120, mr: 4 }} />
          <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>{name}</Typography>
        </HeaderDiv>
        <BodyDiv>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {leftSideTitle.map((eachItem) => (
              <TitleComponent key={leftSideTitle.indexOf(eachItem)} title={eachItem} />
            ))}
          </CardContent>
          <CardContent>
            <UserDetailsComponent company={company} role={role} status={status} isVerified={isVerified} />
          </CardContent>
        </BodyDiv>
        <ButtonContainerDiv>
          <Button variant="contained" color="success" size="large" sx={{ color: 'white', mr: 2, px: 6 }}>
            Activate
          </Button>
          <Button variant="outlined" color="error" size="large" sx={{ px: 6 }}>
            Revoke
          </Button>
        </ButtonContainerDiv>
      </Card>
    </Container>
  );
};

export default EditUser;
