import React from "react";
import styled from 'styled-components';

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

export default class FormInput extends React.Component {
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