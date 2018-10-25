/*
 * @Author: ChenMi
 * @Date: 2018-07-25 15:39:16
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-07-25 15:56:49
 * @Description: 
 */

<template>
  <div class="demo-upload">
    <div class="demo__header">
      上传组件
    </div>
    <div class="demo__body">
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
        <button>点击上传</button>
      </hd-upload>
    </div>
  </div>
</template>

<script>
import HdUpload from '@/components/upload/src/upload';
import config from '#/config/index';
export default {
  components: {
    HdUpload
  },
  data() {
    return {
      file: null,
      action: `${config.host}/eaf-ui/upload`,
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
      params: null //调用上传接口时传递的参数
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
