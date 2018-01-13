import React from "react";
// require("./Contact.css");
import styled, {injectGlobal} from 'styled-components';

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
const LabelContainer = styled.div`
  transform-origin: left;
  position: absolute;
  opacity: 1;
  color: #8a1315;
  font-size: 27px;
  padding: 3px 25px 3px 25px;
  transition: transform 250ms, background-color 250ms, opacity 1s ease 1s;
  display: block;
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  border-radius: 4px;
  & label{
    cursor: inherit;
  }
`;
const ListItem = styled.li`
  &[data-active="false"] textarea,&[data-active="false"] input{
    width: 0;
    padding-left: 0;
    z-index: 1;
    transition: width 1s ease 0s, padding-left 250ms ease 1000ms;
  }
  &[data-error="true"] textarea,&[data-error="true"] input{
    color: #864646;
    border-color: #864646;
  }
  &[data-error="true"] div{
    color: #864646;
  }
  &[data-active="false"] div{
    opacity: 0;
  }
  &[data-active="false"][data-transitioned="true"] div{
    opacity: 1;
  }
  &[data-transitioned="true"] div{
    @media (max-width: 960px) {
      transform: translateY(-120px) scale(0.8) translateX(17px);
    }
    transform: translateY(-50px) scale(0.8) translateX(2px);
    background-color: #252525;
  }
`;
injectGlobal`
  @element '#Message' {
    #Message {
      height: eval("style.height='inherit';style.height=scrollHeight+'px';");
    }
  }
  @element '#FormGroup' {
    #FormGroup {
      min-height: 60px;
      height: eval('querySelector("textarea").offsetHeight')px !important;
    }
    #FormGroup [data-transitioned="true"] #EmailLabel{
      transform: translateY(-50px) scale(0.8) translateX( eval('querySelector("#NameLabel").offsetWidth + 10')px )!important;
    }
    #FormGroup [data-transitioned="true"] #MessageLabel{
      transform: translateY(-50px) scale(0.8) translateX( eval('querySelector("#NameLabel").offsetWidth + querySelector("#EmailLabel").offsetWidth + 19')px )!important;
    }
    #FormGroup [data-transitioned="true"] div{
      max-width: 33ew !important;
    }
    @media (max-width: 960px) {
      #FormGroup [data-transitioned="true"] #EmailLabel{
        transform: translateY(-85px) scale(0.8) translateX( 17px )!important;
      }
      #FormGroup [data-transitioned="true"] #MessageLabel{
        transform: translateY(-50px) scale(0.8) translateX( 17px )!important;
      }
      #FormGroup [data-transitioned="true"] div{
        max-width: 100ew !important;
      }
    }
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
    IsNameValid(Value){
      if(Value.length > 2){
        return true;
      }
      return false;
    }
    IsEmailValid(Value){
      var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (emailReg.test(Value)) {
        return true;
      }
      return false;
    }
    IsMessageValid(Value){
      if(Value.length > 20){
        return true;
      }
      return false;
    }
    IsAllValid(Name = this.state.NameInput, Email = this.state.EmailInput, Message = this.state.MessageInput){
      if(this.IsNameValid(Name) && this.IsEmailValid(Email) && this.IsMessageValid(Message)){
        return true;
      }
      return false;
    }
    NameLabelClick(){
      this.setState({CurrentActive: 'Name', NextButton: false, SubmitButton: false});
      if(this.IsNameValid(this.state.NameInput)){
        this.setState({NextButton: true})
      }
      if(this.IsAllValid()){
          this.setState({SubmitButton: true});
      }
      this.UL.style.maxHeight = '60px';
    }
    EmailLabelClick(){
      this.setState({CurrentActive: 'Email', NextButton: false, SubmitButton: false});
      if(this.IsEmailValid(this.state.EmailInput)){
        this.setState({NextButton: true})
      }
      if(this.IsAllValid()){
          this.setState({SubmitButton: true});
      }
      this.UL.style.maxHeight = '60px';
    }
    MessageLabelClick(){
      this.setState({CurrentActive: 'Message', NextButton: false, SubmitButton: false});
      if(this.IsMessageValid(this.state.MessageInput)){
        this.setState({SubmitButton : true})
      }
      if(this.IsAllValid()){
          this.setState({SubmitButton: true});
      }
      this.UL.style.maxHeight = '260px';
    }
    handleNameChange(e){
      let Value = e.target.value;
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
            console.log(this.state.MessageInput);
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
            if(this.IsAllValid(this.state.NameInput,this.state.EmailInput,this.state.MessageInput)){
              this.setState({SubmitButton: true});
            }
          }
      }else if(this.state.CurrentActive === 'Email'){
          this.setState({CurrentActive: 'Message', NextButton: false})
          if(this.IsMessageValid(this.state.MessageInput)){
            if(this.IsAllValid(this.state.NameInput,this.state.EmailInput,this.state.MessageInput)){
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
      var FormData = "Name="+this.state.NameInput+"&Email="+this.state.EmailInput + "&Message="+this.state.MessageInput;
      this.props.handleSubmit(FormData);
    }

    render() {
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


class FormInput extends React.Component {
    componentDidUpdate(prevProps, prevState){
      if(this.props.active === true){
        this.refs.input.focus();
      }
    }
    render() {
      return (
          <ListItem data-active={this.props.active} data-error={this.props.error} data-transitioned={this.props.transitioned}>
              <LabelContainer onClick={this.props.onClick} id={this.props.id + 'Label'}>
                  <label>{this.props.text}</label>
              </LabelContainer>
              {this.props.textarea && <textarea ref="input" rows="1" onChange={this.props.onChange} id={this.props.id} autoComplete="off" name={this.props.id} type="text"></textarea>}
              {!this.props.textarea && <input ref="input" onChange={this.props.onChange} id={this.props.id} autoComplete="off" name={this.props.id} type="text"/>}
          </ListItem>
      );
    }
}
