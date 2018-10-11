import React, { Component } from 'react';
import '../App.css';
import {Presenting} from './Presentation';
import {CartItems} from './CartItems';
import { connect } from 'react-redux';
import {celebrations} from '../ceremony';
import {giveMessage} from '../Actions/action.js'


const mapStateToProps=(state)=>{
  return{final:state}
}
const mapDispatchToProps = (dispatch) =>{
  return{
  finder:(payload,id) => dispatch(giveMessage(payload,id))
  }
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
                    name: 'hai',
                    radioButtonValue:'msg-req',
                    totalCharacters : 200,
                    productMessages:[],
                    showSuggestions:false,
                    message:"",
                    open:false,
                    itemShown:0
                  
                };
    this.handleChange = this.handleChange.bind(this);
    this.handleRadio = this.handleRadio.bind(this); 
    this.manual_gift_message = this.manual_gift_message.bind(this);
    this.generated_gift_message = this.generated_gift_message.bind(this);
    this.updateStore = this.updateStore.bind(this);
    this.toggle_dialog = this.toggle_dialog.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
 generated_gift_message(msg){
            let messageLength = msg.length;
            let remainingLength = 200-messageLength;
            this.setState({ totalCharacters :remainingLength,
            showSuggestions:false,
            message:msg});
            //this.props.finder(msg,this.state.itemShown) ; 
    }
  
  
    manual_gift_message(event){
            let messageLength = event.target.value.length;
            let remainingLength = 200-messageLength;
            this.setState({ totalCharacters:remainingLength,
              showSuggestions:false,
              message:event.target.value});
            // this.props.finder(event.target.value,this.state.itemShown) ;           
    }
  
    handleChange(event) {
            let msg =[];
              let value = event.target.value;
              msg = celebrations.filter(options => options.name===value);
              console.log(msg[0].messages);
              let filteredMessages =msg[0].messages;
              this.setState({ name : value ,
                productMessages:filteredMessages,
                              showSuggestions:true});
            }
  
  
    handleRadio(event){
              this.setState({ radioButtonValue: event.target.value });
              if(event.target.value==="no-msg"){
               
                this.setState({name: 'hai',
                message:' ',
                totalCharacters  : 200,
                showSuggestions:false
              })
              
              }
    }
   
   updateStore(){
                this.props.finder(this.state.message,this.state.itemShown);
                this.handleClose();
              }
    toggle_dialog(orderid){
                this.setState({open:true,
                              itemShown:orderid,
                               message:"",
                               totalCharacters : 200
                          })
    }
    handleClose(){
      this.setState({open:false})
    }
    render() {
     
        
      return (
                  <div>
                  <CartItems  toggle_dialog = {this.toggle_dialog}
                  { ... this.props }
                  />
                  <Presenting 
                    
                      handleRadio = {this.handleRadio} 
                      handleChange= {this.handleChange}  
                      updateStore = {this.updateStore} 
                      manual_gift_message = {this.manual_gift_message} 
                      generated_gift_message = {this.generated_gift_message}
                      handleClose = {this.handleClose}
                    
                      { ... this.props }
                      { ... this.state }
                  />
                  <div>
                  
                  </div>
            </div>
            
            
        );
      }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(App) ;

//export default App;
