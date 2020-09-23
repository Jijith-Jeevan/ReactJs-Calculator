import React from 'react';
import Display from './display';
import Keys from './keys';
import './calculator.css';
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            calKeys:[1,2,3,4,5,6,7,8,9,0,'.'],
            sign:'',
            num1:'',
            num2:'',
            result:0,
            dispVal:''
        };
    }
    setNum=(val)=>{
        let y=String(val);
        this.setState({dispVal:this.state.dispVal+y});
        this.setState({num1:this.state.num1+y});
    }
   setSign=(s)=>{
       this.setState({
           num2: (this.state.num1),
           num1:'',
           sign:s,
           dispVal:this.state.dispVal+s
       })
    }
   equalSign=()=>{
      if(this.state.sign==='+'){
           this.setState({
            dispVal:parseFloat(this.state.num1)+parseFloat(this.state.num2),
            num1:parseFloat(this.state.num1)+parseFloat(this.state.num2)
          })
        }
        else if(this.state.sign==='-'){
           this.setState({
            dispVal:parseFloat(this.state.num2)-parseFloat(this.state.num1),
            num1:parseFloat(this.state.num2)-parseFloat(this.state.num1)
         }) 
       }
       else if(this.state.sign==='*'){
        this.setState({
         dispVal:parseFloat(this.state.num2)*parseFloat(this.state.num1),
         num1:parseFloat(this.state.num2)*parseFloat(this.state.num1)
        }) 
       }
       else if(this.state.sign==='/'){
        this.setState({
         dispVal:parseFloat(this.state.num2)/parseFloat(this.state.num1),
         num1:parseFloat(this.state.num2)/parseFloat(this.state.num1)
        }) 
      }
       this.setState({sign:''})
   }
   clearDisp=()=>{
       this.setState({num1:'',dispVal:'',num2:''})
   }

    render(){
        return(
            <div id="calPosition">
                <Display val={this.state.dispVal}/>
                <Keys setnumber={this.setNum}
                      keys={this.state.calKeys}
                      setSign={this.setSign}
                      equalSign={this.equalSign}
                      clear={this.clearDisp} />
                </div>
        )
    }
}


export default Calculator;
