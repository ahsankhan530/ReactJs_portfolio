import React, { Component } from 'react'
import {Grid,Cell,ProgressBar} from 'react-mdl'
class skills extends Component {
    render() {
        return (
           <Grid>
               {/* <Cell col={12}>
               <div style={{display:'flex'}}>
               {this.props.skills}
               <ProgressBar style={{margin:'auto',width:'75%' ,lineHeight:'0.1cm'}} progress={this.props.progress} />

               </div>
               
               
               </Cell> */}
               <Cell col={2}>
                {this.props.skills}
               </Cell>
               <Cell col={10}>
               <ProgressBar style={{margin:'auto',width:'75%' ,lineHeight:'0.1cm'}} progress={this.props.progress} />

               </Cell>
           </Grid>
        )
    }
}
export default skills;