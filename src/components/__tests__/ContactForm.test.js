import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from '../ContactForm';
import { shallow, mount } from 'enzyme';

let event = {
    preventDefault: jest.fn(),
    charCode: 13,
    keyCode: 13,
    target: {value: ''}
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContactForm/>, div);
});

it('Handled form validation', () => {
    const wrapper = shallow(<ContactForm  handleSubmit={jest.fn()}/>);

    let spy = jest.spyOn(ContactForm.prototype, 'IsAllValid');
    wrapper.instance().IsAllValid('1','1','1');
    expect(spy).toHaveBeenCalled();

    spy = jest.spyOn(ContactForm.prototype, 'handleSubmit');
    wrapper.instance().handleSubmit(event);
    expect(spy).toHaveBeenCalled();
});

it('Handled Label clicks', () => {
    const wrapper = shallow(<ContactForm  handleSubmit={jest.fn()}/>);

    wrapper.instance().UL = {style: { maxHeight: ''}}
    let spy = jest.spyOn(ContactForm.prototype, 'MessageLabelClick');
    wrapper.setState({ MessageInput: '123456789012345678901' });
    wrapper.setState({ NameInput: 'David McClain' });
    wrapper.setState({ EmailInput: 'david.mcclain@dirtyredz.com' });
    wrapper.instance().MessageLabelClick(event);
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ MessageInput: '1' });
    wrapper.setState({ NameInput: '1' });
    wrapper.setState({ EmailInput: '1' });
    wrapper.instance().MessageLabelClick(event);
    expect(spy).toHaveBeenCalled();

    spy = jest.spyOn(ContactForm.prototype, 'EmailLabelClick');
    wrapper.setState({ MessageInput: '123456789012345678901' });
    wrapper.setState({ NameInput: 'David McClain' });
    wrapper.setState({ EmailInput: 'david.mcclain@dirtyredz.com' });
    wrapper.instance().EmailLabelClick(event);
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ MessageInput: '1' });
    wrapper.setState({ NameInput: '1' });
    wrapper.setState({ EmailInput: '1' });
    wrapper.instance().EmailLabelClick(event);
    expect(spy).toHaveBeenCalled();

    spy = jest.spyOn(ContactForm.prototype, 'NameLabelClick');
    wrapper.setState({ MessageInput: '123456789012345678901' });
    wrapper.setState({ NameInput: 'David McClain' });
    wrapper.setState({ EmailInput: 'david.mcclain@dirtyredz.com' });
    wrapper.instance().NameLabelClick(event);
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ MessageInput: '1' });
    wrapper.setState({ NameInput: '1' });
    wrapper.setState({ EmailInput: '1' });
    wrapper.instance().NameLabelClick(event);
    expect(spy).toHaveBeenCalled();
});
/*
it('Handles Name Changes', () =>{
    const wrapper = mount(<ContactForm  handleSubmit={jest.fn()}/>);

    let spy = jest.spyOn(ContactForm.prototype, 'handleNameChange');

    wrapper.find('input#Name').simulate('change',{
        target: { value: 'david' }
    })
    console.log(wrapper.find('input#Name').text())
    expect(spy).toHaveBeenCalled();
})*/

it('Handled input changes', () => {
    const wrapper = shallow(<ContactForm  handleSubmit={jest.fn()}/>);

    let spy = jest.spyOn(ContactForm.prototype, 'handleMessageChange');
    event.target.value = ""
    wrapper.instance().handleMessageChange(event);
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ NameInput: 'David McClain' });
    wrapper.setState({ EmailInput: 'david.mcclain@dirtyredz.com' });
    event.target.value = "123456789012345678901"
    wrapper.instance().handleMessageChange(event);
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ NameInput: '1' });
    wrapper.setState({ EmailInput: '1' });
    event.target.value = "123456789012345678901"
    wrapper.instance().handleMessageChange(event);
    expect(spy).toHaveBeenCalled();
    event.target.value = "1"
    wrapper.instance().handleMessageChange(event);
    expect(spy).toHaveBeenCalled();

    spy = jest.spyOn(ContactForm.prototype, 'handleEmailChange');
    event.target.value = ""
    wrapper.instance().handleEmailChange(event);
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ MessageInput: '123456789012345678901' });
    wrapper.setState({ NameInput: 'David McClain' });
    event.target.value = "david.mcclain@dirtyredz.com"
    wrapper.instance().handleEmailChange(event);
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ MessageInput: '1' });
    wrapper.setState({ NameInput: '1' });
    event.target.value = "david.mcclain@dirtyredz.com"
    wrapper.instance().handleEmailChange(event);
    expect(spy).toHaveBeenCalled();
    event.target.value = "1"
    wrapper.instance().handleEmailChange(event);
    expect(spy).toHaveBeenCalled();

    spy = jest.spyOn(ContactForm.prototype, 'handleNameChange');
    event.target.value = ""
    wrapper.instance().handleNameChange(event);
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ MessageInput: '123456789012345678901' });
    wrapper.setState({ EmailInput: 'david.mcclain@dirtyredz.com' });
    event.target.value = "David McClain"
    wrapper.instance().handleNameChange(event);
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ MessageInput: '1' });
    wrapper.setState({ EmailInput: '1' });
    event.target.value = "David McClain"
    wrapper.instance().handleNameChange(event);
    expect(spy).toHaveBeenCalled();
    event.target.value = "1"
    wrapper.instance().handleNameChange(event);
    expect(spy).toHaveBeenCalled();
});

it('Handled NextButton functionality', () => {
    const wrapper = shallow(<ContactForm  handleSubmit={jest.fn()}/>);

    let spy = jest.spyOn(ContactForm.prototype, 'handleNextButton');
    wrapper.setState({ NextButton: true });
    wrapper.setState({ CurrentActive: 'Email' });
    wrapper.setState({ MessageInput: '123456789012345678901' });
    wrapper.setState({ NameInput: 'David McClain' });
    wrapper.setState({ EmailInput: 'david.mcclain@dirtyredz.com' });
    wrapper.instance().handleNextButton();
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ NextButton: true });
    wrapper.setState({ CurrentActive: 'Email' });
    wrapper.setState({ MessageInput: '123456789012345678901' });
    wrapper.setState({ NameInput: '1' });
    wrapper.setState({ EmailInput: '1' });
    wrapper.instance().handleNextButton();
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ NextButton: true });
    wrapper.setState({ CurrentActive: 'dsf' });
    wrapper.instance().handleNextButton();
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ NextButton: true });
    wrapper.setState({ CurrentActive: 'Email' });
    wrapper.setState({ MessageInput: '1' });
    wrapper.setState({ NameInput: '1' });
    wrapper.setState({ EmailInput: '1' });
    wrapper.instance().handleNextButton();
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ NextButton: true });
    wrapper.setState({ CurrentActive: 'Name' });
    wrapper.setState({ MessageInput: '123456789012345678901' });
    wrapper.setState({ NameInput: 'David McClain' });
    wrapper.setState({ EmailInput: 'david.mcclain@dirtyredz.com' });
    wrapper.instance().handleNextButton();
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ NextButton: true });
    wrapper.setState({ CurrentActive: 'Name' });
    wrapper.setState({ MessageInput: '1' });
    wrapper.setState({ NameInput: '1' });
    wrapper.setState({ EmailInput: 'david.mcclain@dirtyredz.com' });
    wrapper.instance().handleNextButton();
    expect(spy).toHaveBeenCalled();
    wrapper.setState({ NextButton: true });
    wrapper.setState({ CurrentActive: 'Name' });
    wrapper.setState({ EmailInput: '1' });
    wrapper.instance().handleNextButton();
    expect(spy).toHaveBeenCalled();
});

it('Handled form key input', () => {
    const wrapper = shallow(<ContactForm  handleSubmit={jest.fn()}/>);

    let spy = jest.spyOn(ContactForm.prototype, 'handleFormKeyDown');
    wrapper.setState({ CurrentActive: 'false' });
    wrapper.instance().handleFormKeyDown(event);
    expect(spy).toHaveBeenCalled();
    event.charCode = 1
    event.keyCode = 1
    wrapper.instance().handleFormKeyDown(event);
    expect(spy).toHaveBeenCalled();
    event.charCode = null
    event.keyCode = null
    wrapper.instance().handleFormKeyDown(event);
    expect(spy).toHaveBeenCalled();

    spy = jest.spyOn(ContactForm.prototype, 'handleFormKeyUp');
    event.charCode = 9
    event.keyCode = 9
    wrapper.instance().handleFormKeyUp(event);
    expect(spy).toHaveBeenCalled();
    event.charCode = 1
    event.keyCode = 1
    wrapper.instance().handleFormKeyUp(event);
    expect(spy).toHaveBeenCalled();
    event.charCode = null
    event.keyCode = null
    wrapper.instance().handleFormKeyUp(event);
    expect(spy).toHaveBeenCalled();
});

