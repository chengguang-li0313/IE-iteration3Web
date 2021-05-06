import styles from "../styles/Animals.module.css";
import React, { Component } from "react";
import Chart from "react-apexcharts";


export const BarChart = (props) => {
    const { data } = props;
    var store = [];
    var i = 0;
    {data.map(num => (
        store[i] = num.number,
        i++
      ))}

    const options = {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [2016,2017,2018,2019,2020]
        }
      };
    const series = [
        {
          name: "million",
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


  