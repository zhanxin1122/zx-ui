/*
 * @Author: ChenMi
 * @Date: 2018-07-25 15:18:21
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-07-25 17:00:31
 * @Description: 
 */

 <template>
  <div class="hd-upload">
    <div @click="onBtnClick">
      <slot></slot>
      <input class="hd-upload__input"
             type="file"
             style="margin-bottom: 10px;"
             ref="input"
             @change="onFileChange"
             :multiple="multiple"
             :accept="accept">
    </div>
    <div class="hd-upload__main"
         v-if="uploadList.length > 0">
      <div class="hd-upload__label">
        <span>* </span>
        <span>附件: （{{value.length}}个）</span>
      </div>
      <div class="hd-upload__list">
        <hd-upload-item v-for="item in uploadList"
                        :key="item.uid"
                        :pFile="item"
                        :type="item.type"
                        :name="item.name"
                        :action="action"
                        :headers="headers"
                        :params="params"
                        @upload-success="onSuccess"
                        @upload-error="onError"
                        @upload-progress="onProgress"
                        @upload-remove="onRemove"
                        @upload-delete="onDelete"
                        @upload-preview="onPreview"
                        @upload-download="onDownload" />
      </div>
    </div>
  </div>
</template>
 
<script>
import HdUploadItem from './upload-item';
import fileType from './filetype.json';

function noop() {}
export default {
  name: 'HdUpload',
  components: {
    HdUploadItem
  },
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    action: {
      // 上传地址
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default() {
        return {};
      }
    },
    params: {
      // 上传时的参数
      type: Object,
      default() {
        return {};
      }
    },
    name: String, // 文件名
    progressHandler: {
      type: Function,
      default: noop
    },
    successHandler: {
      type: Function,
      default: noop
    },
    errorHandler: {
      type: Function,
      default: noop
    },
    exceedHandler: {
      type: Function,
      default: noop
    },
    previewHandler: {
      type: Function,
      default: noop
    },
    removeHandler: {
      type: Function,
      default: noop
    },
    downloadHandler: {
      type: Function,
      default: noop
    },
    limit: {
      type: Number,
      default: 8
    }, // 文件上限
    disabled: {
      type: Boolean,
      default: false
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    accept: String
  },
  data() {
    return {
      uploadList: []
    };
  },
  created() {
    this.value.forEach(file => {
      const obj = Object.assign({ state: 'resolve' }, file);
      this.uploadList.push(obj);
    });
  },
  methods: {
    getFileType(file, type) {
      if (type.indexOf('image') !== -1) {
        return 'image';
      }
      let result = 'attachment';
      let ext = file.slice(file.lastIndexOf('.') + 1).toLowerCase();
      Object.keys(fileType).forEach(key => {
        const value = fileType[key];
        const findIndex = value.indexOf(ext);
        if (findIndex !== -1) {
          result = key;
        }
      });
      return result;
    },
    onFileChange(event) {
      const files = event.target.files;
      if (!files) return;
      const postFiles = Array.prototype.slice.call(files);
      // TODO 判断是否超过个数限制
      if (this.value.length + 1 > this.limit) {
        this.exceedHandler();
        return;
      }
      // TODO 是否支持多选 multiple
      postFiles.forEach((rawFile, i) => {
        if (this.autoUpload) {
          this.$emit('file-change', rawFile);
          rawFile.uid = Date.now() + i;
          rawFile.currentTime = Date.now();
          this.addUploadList(rawFile);
        }
      });
    },
    addUploadList(rawFile) {
      const fileSize = Math.round(rawFile.size / 1024);
      const fileType = this.getFileType(rawFile.name, rawFile.type);
      // TODO 判断文档类型和大小是否满足情况
      this.$refs.input.value = null;
      this.uploadList.push({
        uid: rawFile.uid,
        name: this.name || rawFile.name,
        type: fileType,
        uploadPercentage: 0,
        size: fileSize,
        speed: 0,
        loaded: 0,
        excessTime: '00:00:00',
        status: true,
        state: 'pending',
        file: rawFile
      });
    },
    onBtnClick() {
      if (!this.disabled) {
        this.$refs.input.value = null;
        this.$refs.input.click();
      }
    },
    onSuccess({ rawFile, res }) {
      this.successHandler(rawFile, res);
      const newArr = [].concat(this.value);
      newArr.push(rawFile);
      this.$emit('input', newArr);
    },
    onError(rawFile) {
      this.errorHandler(rawFile);
    },
    onProgress(rawFile) {
      this.progressHandler(rawFile);
    },
    onRemove(rawFile) {
      this.removeHandler(rawFile);
      const newArr = [].concat(this.value);
      let findIndex = -1;
      newArr.forEach((item, index) => {
        if (item.uid === rawFile.uid) {
          findIndex = index;
        }
      });
      if (findIndex !== -1) {
        newArr.splice(findIndex, 1);
        this.$emit('input', newArr);
      }
      this.onDelete(rawFile);
    },
    onDelete(rawFile) {
      let findIndex = -1;
      this.uploadList.forEach((item, index) => {
        if (item.uid === rawFile.uid) {
          findIndex = index;
        }
      });
      if (findIndex !== -1) {
        this.uploadList.splice(findIndex, 1);
      }
    },
    onDownload(rawFile) {
      this.downloadHandler(rawFile);
    },
    onPreview(rawFile) {
      this.previewHandler(rawFile);
    }
  }
};
</script>

<style lang="less">
.hd-upload {
  font-size: 12px;
  &__list {
    margin-left: 16px;
    display: flex;
    flex-wrap: wrap;
  }
  &__input {
    display: none;
  }
  &__main {
    display: flex;
    padding: 10px;
  }
  &__label {
    flex-shrink: 0;
  }
}
</style>
