const commonOpt = {
  title: {
    textStyle: {
      color: '#666',
      fontSize: '14'
    }
  },
  grid: {
    left: '50'
  },
  xAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: ['#eee']
      }
    }
  }
};
export default {
  ...commonOpt,
  smoothType: {
    tooltip: {
      trigger: 'axis'
    },
    series: {
      type: 'line',
      smooth: true,
      showSymbol: false,
      symbol: 'circle',
      color: '#0076FF'
    }
  },
  brokenType: {
    tooltip: {
      trigger: 'item'
    },
    series: {
      type: 'line',
      showSymbol: true,
      showAllSymbol: true,
      symbol: 'emptyCircle',
      symbolSize: 6
    }
  },
  areaType: {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      boundaryGap: false
    },
    series: {
      type: 'line',
      showSymbol: false,
      symbol: 'circle',
      areaStyle: { opacity: 0.25 }
    }
  },
  pointType: {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      boundaryGap: false
    },
    series: {
      type: 'line',
      showSymbol: false,
      symbol: 'circle',
      areaStyle: { opacity: 0.25 },
      lineStyle: { opacity: 0 }
    }
  }
};
