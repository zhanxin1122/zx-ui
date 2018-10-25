/*
 * @Author: ChenMi
 * @Date: 2018-08-13 11:01:25
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-08-13 11:01:25
 * @Description: 
 */

<template>
  <div class="demo">
    <rdm-title title="Upload/文件上传" />
    <rdm-content title="流程步骤"
                 :code="code">
      <hd-upload v-model="fileList"
                 :action="action"
                 :params="params"
                 :progressHandler="onProgress"
                 :successHandler="onSuccess"
                 :errorHandler="onError"
                 :exceedHandler="onExceed"
                 :previewHandler="onPreview"
                 :removeHandler="onRemove"
                 :downloadHandler="onDownload"
                 @file-change="onFileChange">
        <button class="upload-btn">上传附件</button>
      </hd-upload>
    </rdm-content>
    <rdm-param title="Attributes"
               type="attr"
               :list="attrList"></rdm-param>
    <rdm-param title="Table Events"
               type="method"
               :list="eventList"></rdm-param>
  </div>
</template>

<script>
import HdUpload from '@/components/upload/src/upload';
export default {
  components: {
    HdUpload
  },
  data() {
    return {
      file: null,
      action: `${this.$config.host}/eaf-ui/upload`,
      params: null, //调用上传接口时传递的参数
      fileList: [
        {
          name: '文件1.xml',
          size: 1024,
          type: 'csv'
        },
        {
          name: '文件2.zip',
          size: 65536,
          type: 'zip'
        }
      ],
      code: `<hd-upload v-model="fileList"
          :action="action"
          :params="params"
          :progressHandler="onProgress"
          :successHandler="onSuccess"
          :errorHandler="onError"
          :exceedHandler="onExceed"
          :previewHandler="onPreview"
          :removeHandler="onRemove"
          :downloadHandler="onDownload"
          @file-change="onFileChange">
  <button class="upload-btn">上传附件</button>
</hd-upload>
<script>
export default {
  methods: {
    onFileChange(rawfile) {
      this.params = {
        file: rawfile,
        filename: rawfile.name
      };
    },
    onProgress(rawfile) {
      console.log('页面端 onProgress');
      console.log(rawfile);
    },
    onSuccess(rawfile, res) {
      console.log('页面端 onSuccess');
      console.log(rawfile);
      console.log(res);
    },
    onError(rawfile) {
      console.log('页面端 onError');
      console.log(rawfile);
    },
    onExceed(rawfile) {
      console.log('页面端 onExceed');
      console.log(rawfile);
      window.alert('已超过个数上限');
    },
    onRemove(rawfile) {
      console.log('页面端 onRemove');
      console.log(rawfile);
    },
    onPreview(rawfile) {
      console.log('页面端 onPreview');
      console.log(rawfile);
      window.alert('预览');
    },
    onDownload(rawfile) {
      console.log('页面端 onDownload');
      console.log(rawfile);
      window.alert('下载');
    }
  }
}
</\script>`,
      attrList: [
        {
          param: 'value',
          explain: '文件列表的值',
          type: 'Array',
          values: '--',
          default: '[]'
        },
        {
          param: 'action',
          explain: '上传地址',
          type: 'String',
          values: '',
          default: ''
        },
        {
          param: 'header',
          explain: '上传请求的header',
          type: 'Object',
          values: '',
          default: '{}'
        },
        {
          param: 'params',
          explain: '上传请求的参数',
          type: 'Object',
          values: '',
          default: '{}'
        },
        {
          param: 'params',
          explain: '上传请求的参数',
          type: 'Object',
          values: '',
          default: '{}'
        },
        {
          param: 'name',
          explain: '统一的文件名',
          type: 'String',
          values: '',
          default: ''
        },
        {
          param: 'progressHandler',
          explain: '文件上传过程中progress的处理函数',
          type: 'Function',
          values: '',
          default: ''
        },
        {
          param: 'successHandler',
          explain: '文件上传成功的处理函数',
          type: 'Function',
          values: '',
          default: ''
        },
        {
          param: 'errorHandler',
          explain: '文件上传失败的处理函数',
          type: 'Function',
          values: '',
          default: ''
        },
        {
          param: 'exceedHandler',
          explain: '文件个数超过限制的处理函数',
          type: 'Function',
          values: '',
          default: ''
        },
        {
          param: 'previewHandler',
          explain: '点击预览文件时的处理函数',
          type: 'Function',
          values: '',
          default: ''
        },
        {
          param: 'removeHandler',
          explain: '点击删除文件时的处理函数',
          type: 'Function',
          values: '',
          default: ''
        },
        {
          param: 'downloadHandler',
          explain: '点击下载文件时的处理函数',
          type: 'Function',
          values: '',
          default: ''
        },
        {
          param: 'limit',
          explain: '文件上传的个数限制',
          type: 'Number',
          values: '',
          default: '8'
        },
        {
          param: 'disabled',
          explain: '设置上传按钮点击无效',
          type: 'Boolean',
          values: 'true/false',
          default: 'false'
        },
        {
          param: 'autoUpload',
          explain: '是否添加文件后自动上传',
          type: 'Boolean',
          values: 'true/false',
          default: 'true'
        },
        // {
        //   param: 'multiple',
        //   explain: '是否支持多选',
        //   type: 'Boolean',
        //   values: 'true/false',
        //   default: 'false'
        // },
        {
          param: 'accept',
          explain: '设置上传控件的accept属性，用法同input',
          type: 'String',
          values: '',
          default: ''
        }
      ],
      eventList: [
        {
          eventName: 'file-change',
          explain: '添加文件时触发',
          params: '文件信息'
        }
      ]
    };
  },
  methods: {
    onFileChange(rawfile) {
      this.params = {
        file: rawfile,
        filename: rawfile.name
      };
    },
    onProgress(rawfile) {
      console.log('页面端 onProgress');
      console.log(rawfile);
    },
    onSuccess(rawfile, res) {
      console.log('页面端 onSuccess');
      console.log(rawfile);
      console.log(res);
    },
    onError(rawfile) {
      console.log('页面端 onError');
      console.log(rawfile);
    },
    onExceed(rawfile) {
      console.log('页面端 onExceed');
      console.log(rawfile);
      window.alert('已超过个数上限');
    },
    onRemove(rawfile) {
      console.log('页面端 onRemove');
      console.log(rawfile);
    },
    onPreview(rawfile) {
      console.log('页面端 onPreview');
      console.log(rawfile);
      window.alert('预览');
    },
    onDownload(rawfile) {
      console.log('页面端 onDownload');
      console.log(rawfile);
      window.alert('下载');
    }
  }
};
</script>

<style lang="less">
.upload-btn {
  width: 95px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: #d7000f;
  border: 1px solid #d7000f;
  border-radius: 20px;
}
</style>
