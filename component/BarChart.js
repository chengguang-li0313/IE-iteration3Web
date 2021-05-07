import styles from "../styles/Animals.module.css";
import React, { Component } from "react";
import dynamic from 'next/dynamic'


export const BarChart = (props) => {
  const Chart = dynamic(() => import('react-apexcharts'), {ssr:false})
    const { data } = props;
    var name = ''; 
    var store = [];
    var i = 0;
    {data.map(num => (
        store[i] = num.number,
        i++,
        name = num.name
        
      ))}
      // console.log(name);
      name =  "Changes over time in Population of " +  name ;     
    const options = {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [2016,2017,2018,2019,2020],
          title: {
            text: "Year",
            style: {
              color: "#888",
              fontSize: "12px",
              fontWeight:  'Italic'
            }
          }        
        }, 
        yaxis: {         
          title: {
            text: "Million",
            style: {
              color: "#888",
              fontSize: "15px",
              fontWeight:  'Italic'
            }
          }        
        },
        title : {
          text: name , 
          align: 'center',
          
          style:{
            fontSzie: '5px'
          }
       },
       fill: {
        colors: ["#c1a17c"]
       }
      };
    const series = [
        {
          name: "number",
          data: store
        }
      ];
  




    return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={options}
                series={series}
                type="bar"
                width="500"
                
              />
            </div>
          </div>
        </div>
      );
  };




// class BarChart extends Component  {
//     constructor(props) {
//       super(props);
      
//       this.state = {
//         options: {
//           chart: {
//             id: "basic-bar"
//           },
//           xaxis: {
//             categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
//           }
//         },
//         series: [
//           {
//             name: "series-1",
//             data: [30, 40, 45, 50, 49, 60, 70, 91]
//           }
//         ]
//       };
//     }
  
//     render() {
//       return (
//         <div className="app">
//           <div className="row">
//             <div className="mixed-chart">
//               <Chart
//                 options={this.state.options}
//                 series={this.state.series}
//                 type="bar"
//                 width="500"
//               />
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   export default BarChart;


  