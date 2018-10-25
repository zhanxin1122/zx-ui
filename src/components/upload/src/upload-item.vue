/*
 * @Author: ChenMi
 * @Date: 2018-07-25 15:18:25
 * @LastEditors: ChenMi
 * @LastEditTime: 2018-07-25 15:55:49
 * @Description: 
 */

<template>
  <div class="hd-upload-item"
       v-if="pFile">
    <div class="file-icon">
      <img :src="require(`@/assets/images/fileicons/icons_doctype_${type}.svg`)"
           alt="">
      <!-- <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#hd-icon-icons_doctype_word"></use>
      </svg> -->
    </div>
    <div class="file-main">
      <div class="file-main__header"
           :style="{'color': file.state === 'resolve' ? '#000' : '#A8AAB7'}">
        <span class="file-main__name">{{file.name}}</span>
        <span class="file-main__size"> ({{file.size}}k)</span>
      </div>
      <div class="file-main__status file-main__status--resolve"
           v-if="file.state === 'resolve'">
        <div class="file-main__actions">
          <div class="file-main__actions-item file-main__preview"
               @click="onPreviewClicked">
            <span class="action__icon"></span>预览
          </div>
          <div class="file-main__actions-item file-main__remove"
               @click="onRemoveClicked">
            <span class="action__icon"></span>删除
          </div>
          <div class="file-main__actions-item file-main__download"
               @click="onDownloadClicked">
            <span class="action__icon"></span>下载
          </div>
        </div>
      </div>
      <div class="file-main__status file-main__status--pending"
           v-if="file.state === 'pending'">
        <div class="file-main__progress">
          <el-progress class="file-main__progress-bar"
                       color="#37AAFF"
                       :stroke-width="5"
                       :show-text="false"
                       :percentage="file.uploadPercentage" />
          <div class="file-main__progress-speed">{{file.speed}}K/s</div>
          <div class="file-main__progress-time">{{file.excessTime}}</div>
        </div>
        <div class="file-main__actions">
          <div class="file-main__actions-item file-main__remove"
               @click="onDeleteClicked">
            <span class="action__icon"></span>删除
          </div>
        </div>
      </div>
      <div class="file-main__status file-main__status--reject"
           v-if="file.state === 'reject'">
        <div class="file-main__text--error">上传失败，请重新上传！</div>
        <div class="file-main__actions">
          <div class="file-main__actions-item file-main__giveup"
               @click="onGiveupClicked">
            <span class="action__icon"></span>
            放弃
          </div>
          <div class="file-main__actions-item file-main__again"
               @click="onAgainClicked">
            <span class="action__icon"></span>
            重新上传
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/style/base/variable.less';
import ajax from './ajax';
import { formatTime } from '@/utils';
export default {
  name: 'HdUploadItem',
  props: {
    action: String,
    pFile: Object,
    name: String,
    type: String,
    headers: Object,
    params: Object,
    withCredentials: Boolean,
    multiple: Boolean,
    onProgress: Function,
    onSuccess: Function,
    onError: Function,
    beforeUpload: Function,
    onPreview: {
      type: Function,
      default: function() {}
    },
    onRemove: {
      type: Function,
      default: function() {}
    },
    httpRequest: {
      type: Function,
      default: ajax
    }
  },
  data() {
    return {
      file: null,
      delta: 0 // 上传时，速度和剩余时间的更新间隔
    };
  },
  created() {
    this.file = this.pFile;
    this.file.speed = 0;
    this.file.excessTime = '00:00:00';
    this.file.currentTime = Date.now();
    if (this.file.state === 'pending') {
      this.uploadFile(this.file);
    }
  },
  methods: {
    uploadFile(rawFile) {
      if (!this.beforeUpload) {
        this.post(rawFile);
      } else {
        const before = this.beforeUpload(rawFile);
        if (before !== false) {
          this.post(rawFile);
        }
      }
    },
    post(rawFile) {
      console.log('run post()');
      const options = {
        headers: this.headers,
        action: this.action,
        params: this.params,
        onProgress: e => {
          this.handleProgress(e, rawFile);
          this.$emit('onProgress', rawFile);
        },
        onSuccess: res => {
          console.log('onSuccess: ');
          console.log(res);
          this.file.state = 'resolve';
          this.$emit('upload-success', {
            rawFile: this.file,
            res: res
          });
        },
        onError: err => {
          console.log('onError: ');
          console.log(err);
          this.file.state = 'reject';
          this.$emit('upload-error', rawFile);
        }
      };

      const req = this.httpRequest(options);
      if (req && req.then) {
        req.then(options.onSuccess).catch(options.onError);
      }
    },
    handleProgress(e, rawFile) {
      if (e.total === 0) {
        this.file.speed = 0;
        this.file.excessTime = '00:00:00';
        return;
      }
      this.delta++;
      if (this.delta >= 3) {
        this.delta = 0;
        let uploadPercentage = Math.round((e.loaded / e.total) * 100);
        let s = (e.loaded - this.file.loaded) / 1024 / ((Date.now() - rawFile.currentTime) / 1000);
        this.file.loaded = e.loaded;
        rawFile.currentTime = Date.now();
        this.file.speed = Math.round(s);
        this.file.uploadPercentage = uploadPercentage;
        let excessTime = (this.file.size * (100 - uploadPercentage)) / this.file.speed / 100;
        this.file.excessTime = formatTime(excessTime);
        console.log(this.file.speed);
        console.log(this.file.excessTime);
        if (uploadPercentage === 100) {
          this.file.speed = 0;
          this.file.excessTime = '00:00:00';
        }
      }
    },
    onPreviewClicked() {
      this.$emit('upload-preview', this.file);
    },
    onDownloadClicked() {
      this.$emit('upload-download', this.file);
    },
    onRemoveClicked() {
      this.$emit('upload-remove', this.file);
    },
    onDeleteClicked() {
      // 上传过程中的删除操作
      this.$emit('upload-delete', this.file);
    },
    onGiveupClicked() {
      console.log('onGiveupClicked');
      this.$emit('upload-delete', this.file);
    },
    onAgainClicked() {
      console.log('onAgainClicked');
      this.file.state = 'pending';
      this.uploadFile(this.file);
    }
  }
};
</script>

<style lang="less">
.hd-upload-item {
  flex-shrink: 0;
  display: flex;
  font-size: 12px;
  margin-bottom: 28px;
  &:not(:last-child) {
    margin-right: 80px;
  }
  .file-icon img {
    width: 44px;
    height: 50px;
  }

  .file-main {
    margin-left: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 18px;
    &__status {
      display: flex;
      color: #0763cd;
      &--resolve {
        color: #000;
      }
      &--pending {
        color: #a8aab7;
      }
      &--reject {
        color: #a8aab7;
      }
    }
    .status__icon {
      width: 12px;
      height: 12px;
      background-color: #eee;
    }
    &__actions {
      display: flex;
      flex-wrap: nowrap;
      color: #0763cd;
      &-item {
        &:nth-child(n + 2) {
          margin-left: 18px;
        }
      }
    }
    &__text--error {
      color: #ff0009;
      margin-right: 18px;
    }
    &__progress {
      display: flex;
      margin-right: 18px;
    }
    &__progress-bar {
      width: 110px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__progress-speed {
      margin-left: 10px;
    }
    &__progress-time {
      margin-left: 8px;
    }
  }
}
</style>
