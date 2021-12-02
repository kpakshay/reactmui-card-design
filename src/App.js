
      import * as React from 'react';
import {Grid, Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { padding } from '@mui/system';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' ,m:'5%'}}
  >
    •
  </Box>
);

export default function BasicCard() {  return (
  <Grid container spacing={2} sx={{bgcolor:'blue', pl:'15%',pt:"5%", m:'20px', width:'100%',height:"100vh"}}>
    <Grid item>
      <Card sx={{ minWidth: 375 , minHeight: 550, borderRadius:'15px' }}>
        <CardContent sx={{alignContent:'center'}}>
          <Typography sx={{ fontSize: 24 }} variant="h1" color="lightgray"  align="center" gutterBottom>
            <b>FREE</b>
          </Typography>
          <Typography sx={{ fontSize: 44 }} color="black"  align="center" gutterBottom>
            $0/month
          </Typography>
          <hr/>
          <Typography variant="h5" component="div" sx={{pl:'10%'}}>
            <div>✓ Single User</div>
            <div>✓ 5GB Storage</div>
            <div>✓ Unlimited Public Project</div>
            <div>✓ Community Access</div>
          </Typography>
          <Typography variant="h6" sx={{pl:'10%'}} color="text.secondary">
          <div>✗ Unlimited Private Project</div>
          <div>✗ Dedicated Phone Support</div>
          <div>✗ Free Subdomain</div>
          <div>✗ Monthly Status Report</div>
          </Typography>
        </CardContent>
        <CardActions sx={{pl:"12%"}}>
          <Button size="large" variant="contained" style={{ padding: "11px 110px" }}>SUBMIT</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item>
      <Card sx={{ minWidth: 375 , minHeight: 550, borderRadius:'15px'}}>
        <CardContent sx={{alignContent:'center'}}>
          <Typography sx={{ fontSize: 24 }} color="lightgray"  align="center" gutterBottom>
            <b>PLUS</b>
          </Typography>
          <Typography sx={{ fontSize: 44 }} color="black"  align="center" gutterBottom>
            $9/month
          </Typography>
          <hr/>
          <Typography variant="h6" component="div" sx={{pl:'10%'}}>
            <div>✓ Single User</div>
            <div>✓ 5GB Storage</div>
            <div>✓ Unlimited Public Project</div>
            <div>✓ Community Access</div>
            <div>✓ Unlimited Private Project</div>
            <div>✓ Dedicated Phone Support</div>
            <div>✓ Free Subdomain</div>
          </Typography>
          <Typography variant="h6" sx={{pl:'10%'}} color="text.secondary">
          
          <div>✗ Monthly Status Report</div>
          </Typography>
        </CardContent>
        <CardActions sx={{pl:"12%"}}>
          <Button size="large" variant="contained" style={{ padding: "11px 110px" }}>SUBMIT</Button>
        </CardActions>
      </Card>
    </Grid>
    <Grid item>
      <Card sx={{ minWidth: 375 , minHeight: 550, borderRadius:'15px'}}>
        <CardContent sx={{alignContent:'center'}}>
          <Typography sx={{ fontSize: 24 }} color="lightgray"  align="center" gutterBottom>
            <b>PREMIUM</b>
          </Typography>
          <Typography sx={{ fontSize: 44 }} color="black"  align="center" gutterBottom>
            $49/month
          </Typography>
          <hr/>
          <Typography variant="h6" component="div" sx={{pl:'10%'}}>
            <div>✓ Single User</div>
            <div>✓ 5GB Storage</div>
            <div>✓ Unlimited Public Project</div>
            <div>✓ Community Access</div>
            <div>✓ Unlimited Private Project</div>
            <div>✓ Dedicated Phone Support</div>
            <div>✓ Free Subdomain</div>
            <div>✓ Monthly Status Report</div>
          </Typography>
        </CardContent>
        <CardActions align="center" sx={{pl:"12%"}}>
          <Button size="large" variant="contained" style={{ padding: "11px 110px" }}>SUBMIT</Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
    
  );
  }

