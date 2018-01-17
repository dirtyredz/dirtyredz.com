it('renders without crashing', () => {
    document.body.innerHTML = '<div id="root"></div>';
    global.SVGElement = {prototype: { getElementsByClassName : ()=>{return null}}}
    let index = require('./index.js')
});
