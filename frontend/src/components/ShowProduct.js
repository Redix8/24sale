import React, { Component } from 'react'
import { Card, CardMedia, CardContent, Typography, Grid } from '@material-ui/core';

  

export default class ShowProduct extends Component {
    static defaultProps = {
        url:'http://gs25appimg.gsretail.com/imgsvr/item/GD_8993083938594_001.jpg',
        price:0
    }
  render() {
    return (
      <Grid item>
        <Card 
            className="card" 
            style={{maxWidth:200}}
        >
            <CardMedia 
                component="img"
                className="media"
                height ="140"
                image={this.props.url}              
            />
            <CardContent>
                <Typography variant='subtitle1'>
                    {this.props.name}
                </Typography>
                <Typography variant='body1'>
                    가격 : {this.props.price}원
                </Typography>
            </CardContent>
        </Card>
      </Grid>
    )
  }
}

