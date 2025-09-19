// 代码生成时间: 2025-09-19 22:05:57
"use strict";

// 定义一个名为DataAnalyzer的类
class DataAnalyzer {
  // 构造器，接收数据作为参数
  constructor(data) {
    this.data = data;
  }

  // 计算数据的平均值
  calculateMean() {
    let sum = 0;
    if (!this.data || this.data.length === 0) {
      throw new Error("数据为空，无法计算平均值");
    }
    for (const value of this.data) {
      sum += value;
    }
    return sum / this.data.length;
  }

  // 计算数据的标准差
  calculateStandardDeviation() {
    let mean = this.calculateMean();
    let variance = 0;
    if (!this.data || this.data.length === 0) {
      throw new Error("数据为空，无法计算标准差");
    }
    for (const value of this.data) {
      variance += (value - mean) ** 2;
    }
    return Math.sqrt(variance / this.data.length);
  }

  // 打印统计结果
  printStatistics() {
    try {
      const mean = this.calculateMean();
      const standardDeviation = this.calculateStandardDeviation();
      console.log("平均值: " + mean);
      console.log("标准差: " + standardDeviation);
    } catch (error) {
      console.error(error.message);
    }
  }
}

// 使用示例
$(document).ready(function() {
  // 假设有一个名为#dataInput的输入框和一个名为#analyzeButton的按钮
  // 当按钮被点击时，获取输入框的数据并进行分析
  $('#analyzeButton').click(function() {
    const rawData = $('#dataInput').val();
    const data = rawData.split(',').map(Number);

    try {
      const analyzer = new DataAnalyzer(data);
      analyzer.printStatistics();
    } catch (error) {
      console.error("分析失败: " + error.message);
    }
  });
});