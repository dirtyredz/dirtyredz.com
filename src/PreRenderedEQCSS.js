export default () => `
@element #FormHeader {
  #FormHeader #ChildContainer {
    height: eval('querySelector("ul").offsetHeight')px;
  }
  #FormHeader {
    padding-bottom: calc(35vh + eval('querySelector("textarea").offsetHeight')px);
  }
}
.ContactChild-enter {
  opacity: 0.01;
  top:300px;
}
.ContactChild-enter.ContactChild-enter-active {
  opacity: 1;
  top:0;
  transition: opacity 1s ease-out, top 1s ease-out;
}
.ContactChild-leave {
  opacity: 1;
  top:0;
}
.ContactChild-leave.ContactChild-leave-active {
  opacity: 0.01;
  top:300px;
  transition: opacity 1s ease-in, top 1s ease-in;
}
.ContactChild-appear {
  opacity: 0.01;
  top:300px;
}
.ContactChild-appear.ContactChild-appear-active {
  opacity: 1;
  top:0;
  transition: opacity 1s ease-out, top 1s ease-out;
}
@element .ProjectContainer_EQCSS_1{
    .ProjectContainer_EQCSS_1 {
        font-size: 2.5ew !important;
    }
}
@element .ProjectContainer_EQCSS_2 {
    .ProjectContainer_EQCSS_2 {
        font-size: 7ew !important;
    }
}
@element .LeftTest {
   .LeftTest h1 {
    margin-bottom: -30eh;
  }
}
@element #Message {
  #Message {
    height: eval("style.height='inherit';style.height=scrollHeight+'px';");
  }
}
@element #FormGroup {
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
`