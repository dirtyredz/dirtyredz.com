import React from "react";
import styled from 'styled-components';
import FormInput from "./FormInput";
//import EQCSS from "eqcss";

const Form = styled.form`
  position: relative;
  & li{
    float: none;
  }
  & textarea{
    height: 37px;
    resize: none;
    max-height: 250px;
  }
  & textarea,input{
    width: 85%;
    position: absolute;
    font-size: 22px;
    line-height: 1.7;
    padding-left: 24px;
    background: none;
    color: white;
    border-width: 0px 0 2px 0;
    outline-style: none;
    z-index: 5;
    display: block;
    transition: width 1s ease 1s, padding-left 250ms ease 1250ms;
  }
`;
const StyleUL = styled.ul`
  @media (max-width: 960px) {
    padding-top: 40px;
  }
  transition: padding-top 500ms ease-out, max-height 1s 1s linear;
  position: relative;
  height: 60px;
  max-height: 260px;
`;
const ContactButton = styled.button`
  background-color: #8a1315;
  width: 150px;
  margin: 10px;
  border-radius: 4px;
  cursor: pointer;
  -webkit-appearance: none;
  border: none;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  transition: background-color 500ms;
  &[data-validate=true]{
    background-color: #8a1315;
  }
  &[data-validate=false]{
    background-color: #111010;
    pointer-events: none;
  }
  &:hover{
    transform: rotate(1deg);
  }
`;
const ContactButtonDiv = styled.div`
  width: 150px;
  text-align: center;
  margin: 10px;
  border-radius: 4px;
  cursor: pointer;
  float: left;
  transition: background-color 500ms;
  &[data-validate=true]{
    background-color: #8a1315;
  }
  &[data-validate=false]{
    background-color: #111010;
  }
  &:hover{
    transform: rotate(1deg);
  }
`;

export default class ContactForm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        NameTransitioned: false,
        NameInput: 'Whats your name?',
        NameError: false,
        EmailTransitioned: false,
        EmailInput: 'Whats your Email?',
        EmailError: false,
        MessageTransitioned: false,
        MessageInput: 'Whats your Message?',
        MessageError: false,
        CurrentActive: 'Name',
        NextButton: false,
        SubmitButton: false,
      };
    }
    IsNameValid(Value){return Value.length > 2}
    IsEmailValid(Value){
      var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      return emailReg.test(Value)
    }
    IsMessageValid(Value){return Value.length > 20}
    IsAllValid(Name = this.state.NameInput, Email = this.state.EmailInput, Message = this.state.MessageInput){
      return this.IsNameValid(Name) && this.IsEmailValid(Email) && this.IsMessageValid(Message)
    }
    NameLabelClick(){
      this.setState({CurrentActive: 'Name', NextButton: false, SubmitButton: false});
      if(this.IsNameValid(this.state.NameInput)){
        this.setState({NextButton: true})
        if(this.IsAllValid()){
            this.setState({SubmitButton: true});
        }
      }
      this.UL.style.maxHeight = '60px';
    }
    EmailLabelClick(){
      this.setState({CurrentActive: 'Email', NextButton: false, SubmitButton: false});
      if(this.IsEmailValid(this.state.EmailInput)){
        this.setState({NextButton: true})
        if(this.IsAllValid()){
            this.setState({SubmitButton: true});
        }
      }
      this.UL.style.maxHeight = '60px';
    }
    MessageLabelClick(){
      this.setState({CurrentActive: 'Message', NextButton: false, SubmitButton: false});
      if(this.IsMessageValid(this.state.MessageInput)){
        if(this.IsAllValid()){
            this.setState({SubmitButton: true});
        }
      }
      this.UL.style.maxHeight = '260px';
    }
    handleNameChange(e){
      const Value = e.target.value;
      if(Value !== ''){
        this.setState({NameInput: Value, NameTransitioned: true});
        //Validate Name
        if(this.IsNameValid(Value)){//Validated, Set Next Button as clickable
            this.setState({NextButton: true, NameError: false});
            if(this.IsAllValid(Value,this.state.EmailInput,this.state.MessageInput)){
                this.setState({SubmitButton: true});
            }
        }else{//Not Validated
            this.setState({NextButton: false, NameError: true, SubmitButton: false});
        }
      }else{
        //User removed last charecter in input set label to default
        this.setState({NameInput: 'Whats your name?', NameError: false,NameTransitioned: false})
      }
    }
    handleEmailChange(e){
      let Value = e.target.value;
      if(Value !== ''){
        this.setState({EmailInput: Value, EmailTransitioned: true});
        //Validate Email
        if (this.IsEmailValid(Value)) {//Validated, Set Next Button as clickable
            this.setState({NextButton: true, EmailError: false});
            if(this.IsAllValid(this.state.NameInput,Value,this.state.MessageInput)){
                this.setState({SubmitButton: true});
            }
        }else{//Not Validated
            this.setState({NextButton: false, EmailError: true, SubmitButton: false});
        }
      }else{
        //User removed last charecter in input set label to default
        this.setState({EmailInput: 'Whats your email?', EmailError: false,EmailTransitioned: false})
      }
    }
    handleMessageChange(e){
      let Value = e.target.value;
      if(Value !== ''){
        this.setState({MessageInput: Value, MessageTransitioned: true});
        //Validate Email
        if (this.IsMessageValid(Value)) {//Validated, Set Next Button as clickable
            this.setState({MessageError: false});
            if(this.IsAllValid(this.state.NameInput,this.state.EmailInput,Value)){
                this.setState({SubmitButton: true});
            }
        }else{//Not Validated
            this.setState({SubmitButton: false, MessageError: true});
        }
      }else{
        //User removed last charecter in input set label to default
        this.setState({MessageInput: 'Whats your Message?', MessageError: false, MessageTransitioned: false})
      }
    }
    handleNextButton(){
        if(this.state.NextButton){
            if(this.state.CurrentActive === 'Name'){
                this.setState({CurrentActive: 'Email', NextButton: false})
                if(this.IsEmailValid(this.state.EmailInput)){
                    this.setState({NextButton: true})
                    if(this.IsAllValid()){
                        this.setState({SubmitButton: true});
                    }
                }
            }else if(this.state.CurrentActive === 'Email'){
                this.setState({CurrentActive: 'Message', NextButton: false})
                if(this.IsMessageValid(this.state.MessageInput)){
                    if(this.IsAllValid()){
                        this.setState({SubmitButton: true});
                    }
                }
            }
        }
    }
    handleFormKeyUp(e){
      var key = e.charCode || e.keyCode || 0;
      if (key === 9) {
        e.preventDefault();
        this.handleNextButton();
      }
    }
    handleFormKeyDown(e){
      var key = e.charCode || e.keyCode || 0;
      if (this.state.CurrentActive !== 'Message' && key === 13) {
        e.preventDefault();
        this.handleNextButton();
      }
    }
    handleSubmit(event){
      event.preventDefault();
      this.props.handleSubmit("Name="+this.state.NameInput+"&Email="+this.state.EmailInput + "&Message="+this.state.MessageInput);
    }

    render() {
        //EQCSS.process(PreRenderedEqcss)
        return (
            <Form id="ContactForm" onKeyUp={this.handleFormKeyUp.bind(this)} onKeyDown={this.handleFormKeyDown.bind(this)}>
                <StyleUL innerRef={(ul) => { this.UL = ul; }} id="FormGroup">
                    <FormInput id="Name" onClick={this.NameLabelClick.bind(this)} onChange={this.handleNameChange.bind(this)} active={this.state.CurrentActive === 'Name'? true : false} error={this.state.NameError} transitioned={this.state.NameTransitioned} text={this.state.NameInput}/>
                    <FormInput id="Email" onClick={this.EmailLabelClick.bind(this)} onChange={this.handleEmailChange.bind(this)} active={this.state.CurrentActive === 'Email'? true : false} error={this.state.EmailError} transitioned={this.state.EmailTransitioned} text={this.state.EmailInput}/>
                    <FormInput textarea id="Message" onClick={this.MessageLabelClick.bind(this)} onChange={this.handleMessageChange.bind(this)} active={this.state.CurrentActive === 'Message'? true : false} error={this.state.MessageError} transitioned={this.state.MessageTransitioned} text={this.state.MessageInput}/>
                </StyleUL>
                <div>
                    <ContactButtonDiv onClick={this.handleNextButton.bind(this)} data-validate={this.state.NextButton}>Next</ContactButtonDiv>
                    <ContactButton onClick={this.handleSubmit.bind(this)} data-validate={this.state.SubmitButton} type="submit">Submit</ContactButton>
                </div>
            </Form>
        );
    }
}
