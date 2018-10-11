import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
  height:'150px'
  }  
}
export class CartItems extends Component{
 
render() { 
  return(
    
     <div >
      
       {this.props.final.map((order,i)=>
     
        <Paper className="list1" >
      
          <CardMedia
          className="picto"
          image={require('../images/'+order.img)}
          style = {{height:150}}
          />
        
      
          <Typography className="inside">Product Details<br/><br/>
         
            Purchased-product: {order.ProductName}<br/>
            Product-id: {order.productId}<br/>
            Price: {order.price}
            </Typography>
            <Typography className="inside">Delivery Address<br/><br/>
            {order.address}
            </Typography>
            <Typography className="inside">
            {order.giftMessage}
           </Typography >
            {order.giftMessage==="" &&
              <Button variant='text'  size="small" color="primary" onClick = {e=>this.props.toggle_dialog(order.orderId)} >
                gift message
             </Button> 
            }
            {order.giftMessage!==""&&
              <Button variant='text'  size="small" color="primary" onClick = {e=>this.props.toggle_dialog(order.orderId)} >
                edit
              </Button>  
              }
        </Paper>
        )
      }
     
        </div>
      
       
  )
}
}