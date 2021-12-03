import ReactEchars from 'echarts-for-react'
import React,{ useMemo } from 'react'
// import * as echarts from 'echarts'

export default function Line({type,data,xData}:{type:string,data:any,xData:any}) {
  const option = useMemo(() => {
    const optionDefault = {
      backgroundColor: '#fff',
      grid: {
        top: '15%',
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: xData,
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.3)'
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(0, 0, 0, 0.3)'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.3)'
          }
        }
      },
      series: [
        {
          data: data,
          type: type|| 'line',
          itemStyle: {
            normal: {
              lineStyle: {
                width: 5,
              }
            }
          }
        }
      ],
      color: ['#42B6D6']
    }
    return optionDefault
    
  },[data,xData,type])


  return (
    <ReactEchars option={option} notMerge={true} />
  )
}