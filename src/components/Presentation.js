import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export class Presenting extends Component{
    
    render(){
      //console.log(this.props.name)
       return(
          <div className="App">
            

        <Dialog open={this.props.open}
        fullScreen 
        onClose={this.props.handleClose}
        className="dialogue"
        >
           
            <form className="dialogue">
            <FormControl>
                <Select
                    value={this.props.name}
                    onChange={this.props.handleChange}            
                    input={<Input name="name" />}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value="birthday" >Birthday</MenuItem>
                        <MenuItem value="anniversary">Anniversary</MenuItem>
                        <MenuItem value="congratulations">Congratulations</MenuItem>
                </Select>
                { this.props.showSuggestions&&this.props.radioButtonValue=="msg-req"&&
                    this.props.productMessages.map((b,i) =>
                    <List key = {i} className="listo">
                      <ListItem button onClick ={e=>this.props.generated_gift_message(b)}>
                      <ListItemText primary={b} />
                      </ListItem>
                    </List>
                  )
                }       
                <RadioGroup
                  aria-label="Gender"
                  name="gender"
                  value={this.props.radioButtonValue}
                  onChange={this.props.handleRadio}
                >
                  <FormControlLabel value="msg-req" control={<Radio color="primary"/>} label="Complimentary Gift Message" />
                  <FormControlLabel value="no-msg" control={<Radio color="primary"/>} label="No Gift Message" />
                  {
                    this.props. radioButtonValue==="msg-req"?(
                    <div id ="gift-message" >
                      <TextField
                      autoFocus
                      id="texta"
                      multiline
                      rows="2"
                      margin="normal"
                      variant="inherit"
                      value = {this.props.message}
                    onChange = {this.props.manual_gift_message}
                    />
                    <div className= "buttonspace">Remaining Characters:{this.props.totalCharacters }</div>
                    </div>):""
                  }
                </RadioGroup>
              
              </FormControl>
            </form>
     
                <div >
                <Button variant="contained"  size="small" color="primary" onClick = {this.props.updateStore} >
                Save
                </Button>{"  "}
                <Button variant="contained"  size="small" color="secondary" onClick ={this.props.handleClose} >
                close
                </Button> 
                </div>
              </Dialog>
        </div>);  
      }
    }
    //e=>this.props.finder(e.target.value)