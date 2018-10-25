/*
 * @Author: ChenMi
 * @Date: 2018-08-01 14:56:32
 * @LastEditors: Sephiroth·D·Kid
 * @LastEditTime: 2018-08-09 10:06:24
 * @Description:
 */

<script>
import Line from '@/components/line/src/line';

export default {
  components: {
    [Line.name]: Line
  },
  data() {
    return {
      line1: {
        type: 'smoothType',
        width: '1080',
        height: '288',
        title: '折线图1',
        xAxis: [27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datas: [80, 85, 175, 150, 200, 300, 300, 212, 220, 130, 40, 42, 440, 450, 290, 58, 66, 240, 300, 120, 96, 150],
        values: ['状态'],
        colors: ['#0076FF']
      },
      line2: {
        type: 'brokenType',
        width: '1080',
        height: '288',
        title: '折线图2',
        xAxis: [27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        datas: [
          [80, 85, 175, 150, 200, 300, 300, 212, 220, 130, 40, 42, 440, 450, 290, 58, 66, 240, 300, 120, 96, 150],
          [35, 50, 100, 80, 200, 400, 420, 300, 320, 180, 200, 100, 136, 100, 220, 100, 80, 120, 280, 320, 300, 380]
        ],
        values: ['状态1', '状态2'],
        colors: ['#0076FF', '#09BB07']
      },
      line3: {
        type: 'areaType',
        width: '1080',
        height: '288',
        title: '堆叠区域图',
        xAxis: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        datas: [
          [460, 300, 375, 280, 200, 380, 300],
          [380, 180, 200, 180, 100, 220, 220],
          [220, 120, 180, 100, 40, 180, 160]
        ],
        values: ['状态1', '状态2', '状态3'],
        colors: ['#FFBE00', '#F43530', '#0076FF']
      }
    };
  },
  render() {
    return (
      <div class="demo-echars-line">
        <div class="demo__header">折线图</div>
        <div class="demo__body">
          <hd-line
            type={this.line1.type}
            width={this.line1.width}
            height={this.line1.height}
            title={this.line1.title}
            xAxis={this.line1.xAxis}
            datas={this.line1.datas}
            isSmooth={this.line1.isSmooth}
            values={this.line1.values}
            colors={this.line1.colors}
            symbols={this.line1.symbols}
          />
          <hd-line
            type={this.line2.type}
            width={this.line2.width}
            height={this.line2.height}
            title={this.line2.title}
            xAxis={this.line2.xAxis}
            datas={this.line2.datas}
            values={this.line2.values}
            colors={this.line2.colors}
            symbols={this.line2.symbols}
            options={this.line2.options}
          />
          <hd-line
            type={this.line3.type}
            width={this.line3.width}
            height={this.line3.height}
            title={this.line3.title}
            xAxis={this.line3.xAxis}
            datas={this.line3.datas}
            values={this.line3.values}
            colors={this.line3.colors}
            symbols={this.line3.symbols}
            options={this.line3.options}
          />
        </div>
      </div>
    );
  }
};
</script>
