<template>
  <div class="backdrop-filter navbar">
    <div class="menu-btn" @click="change_sider_full">
      <div class="menu-icon icon-list" :class="[{ 'icon-list-active': sider_full }]"></div>
    </div>
    <div class="content"></div>
    <div class="menu-btn">
      <div class="menu-icon icon-search"></div>
    </div>
    <div class="menu-btn">
      <div class="menu-icon icon-user">
        <img class="menu-icon-img" src="https://pryun.oss-cn-chengdu.aliyuncs.com/pryun/avatars/1680485639112_11BB.jpg" alt="" />
      </div>
      <div class="menu-text">Breathe</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { sider_full } from './com-data'
const change_sider_full = () => {
  sider_full.value = !sider_full.value
}
</script>
<style scoped>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  height: 72px;
  flex-shrink: 0;
  padding: 0 16px;
  box-sizing: border-box;
  z-index: 9;
  border-radius: inherit inherit 0 0;
  transition: inherit;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  gap: 8px;
}
.content {
  width: 0;
  flex: 1;
}

.menu-btn {
  padding: 12px;
  min-width: 44px;
  min-height: 44px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 6px;
  transition: all 230ms ease-out;
  cursor: pointer;
}
.menu-btn:hover {
  background-color: #d6d6d6;
}
.menu-icon {
  width: 20px;
  height: 20px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.menu-icon-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.menu-icon + .menu-text {
  margin-left: 8px;
}
.icon-list {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAO0EbHoAAAAGdFJOUwB/KVjSpiYKTnMAAAJ0SURBVHja7ZvLTsMwEEVD2nrdgsQ6Eo91igTr0qqsS4VYE1Ln/z8BEFRtnIfdeO4g0D0/cBSPx5OZxElCCCGEEEL+IVcvlSjri6ZjVImzcR3pk7ykyhyJATiqN0eCeJDK1h1nFYS8JplgJAt8SNygPGAkZU1yiZEUNcmtxpPcasRkrLG7QHkyVcj4nXOsQILyjj/pG6uVJDfyjvNm1ZoLV8bHO75tEEIIIYT8GvcD3rl3z/v+dhLkuI5r2MwqwDG4QVnu2+epXzK4M7V7ic18jjR26mDcLrSFSWxfaNpGTw7j2HbqS7LL+yUR3Vx5mJsU/ZKIsUdxNJxZYjbXvsU1HV0i4EncMRoiJp+s0LvLt2AiefIdogya8a0zLuGzq3vmLHgKH/Z0DqsnnUNBwcpoWp5OHNM/HkJIrIakWmlIMAvmSnaZgsRf8SUk3oovIqlyDUmhIZFPfOP/2gSSWA2J9D42YXN0gGSpsFxWY3flCpKFQjIWCmcX4qw3CodwQ4IoJ67EZgoSzDuRCUv1dD47mYusVdKZ6qNh30y3bZLOVH8d2JbmTclWvGksG5LuVB/8gfkns01Aqkd8+p06ko1C91ueWj0H9PF9qR4xLKhNJHpTPWLsYY8lywQvsah51/Fy5QNem04N/FZhPOir6hLJ6K/qAseKv1DFH5AhXXXsUR9U1WOLVlhVjyu/Kb8NEUIIIYSEcjUTpe134VT4n+S2740p4CKCFeyCQi8IgG5UlGKdVh/1dgJ0k2aDD4kbFNDVkHd83N3IP2Akhf5yqdykUdnCqUYyYraXO9GZ4EOC2cRFYxIifzVznf1O+SWEEEIIIX+fD/YTZKOLiyl8AAAAAElFTkSuQmCC');
}
.icon-list-active {
  transform: rotateZ(180deg);
}
.icon-search {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGnhwewAAAAIdFJOUwCuQR7Hjmrkg+NPwQAABP5JREFUeNrtW0tX00AUzqMNLFN5mGVRwS4rVmAJKtpl5VjNUkCxSxFUlrS0zfxsRTh0kubx3XuTHOXkrpPzzXffM3PHMCqppJJK7qvYj076y41Gv//hcVEQGw/VTM5Xjgog8aWrIjI8zhljaw7iWvZz1dqaSpDV/FT1XiXKj3Y+GJanUmTYLB5DqfFx8RhKBZ+Kx5BrzPYVIBOZ9Z8qSH5KMOoKlAcCg3RREIHxBwqWCRfjmSLIS6ayLmLUcv6nmiy/zU9h88raP46tLQKFRT0rWA3F3OZc1nQZIF5WidqI+N6QjlGLFI6YoLYPpVTCVj9AitmYirGAYERRdiUWOUj+bl1ApQ4npjU+FT1GpumffuXGikUoSaGyRilfLe2/zHThaI54RaiHF6TE12GZ3tSU1aa5Yo9jdpe4qCnD7OA/PsGE82kL9BZn9seZQV3XJd0dJ2RttRkaxshv330/4qQIl6gtQtl2aL5i8Urd3dKCNsnpX1FATFI8tljZTmugRpQcMTVIMiBo2eIWU5OgAZOnLT1193CTELWl6esMNwm5izLh5VlcbWm/ZlauuqB/9tFMUWPkrTlzuuiHPTpIHV2gxzaJZpQMy9uiLY2PWd4RmETTdRuzO2fbNPs73b12GPUqRg+7WGpgnZbYWLfq8/d/um+mu1eXmx3DikhfI7VFS2h0AiicXB6IiZjUETmXlliayEqYB34Wssi7jTX3NBFR9yJ32x89YvgGBDz7iMwDorElC5NZMI8AkCsuCLLKAXXzw9H3ALCbGMSXgiwSQHa5IAsAiCdLXbPaOAQyPRvEBEA8ftMVzpD3B2RcJAhiE78M7xLHSe1fCUZxWqGAXEpzVympfgrUnBEXZACA7EjL7wBY5YKs355F8whw84AL0gWMaoq2J1rD7kp7WaSD7CENNzNDOsgiLSXLK5i6lSxQdqBe2itjOzeQtfXYGnfy2WKP8jhTkB0W1EU7UxOLACufA5wmptWhxO4B+J3oUG0CejrHKCaq64U8Djqz+pBcjmxdNJ4Eh8/Zv/KP0Wu4Z/IvBHzcnDXFTF+UixeHO7xhEi71Znct3OumMeXjoM3T1pREm1Tot0m/WbwJkS7tntXnmN4k3rNucyZEfOKFvEMfE9CvysF/PPpdeYt8K90ijy9oRL5Tmw44IAcMDVOHN+qccbUabQTJ1oZj8DShDycuZX/+RJ++OqMnO2S+0QnPxMFU9BmyrGmi6EQxTsXD53SjE8U4FRMcuYsYhDi/wRrso1KpcUYUyVS69GFLKRX1JubH6NiomErMAOxW4jQ8L1b+RuVK6I2G/TllDBqn0pr79/Tg+S3C+nL60wSYih03ix7s9d+9/pU50Y1TgafqJVQoI+/jLpeKcwEP7/c6bCov8GcINptK8mOg+QcVfCqhaeDkByjtGGdcwkGQByjjm+IpoJL9lOYWQ0LFsD5iGCIq6VlKjZuJKYJCxTAOkzFO9Ua2E+MPuGwkPKkJDlKzHfFMNl5l+9F+vCN8YuHMvTjZO8pM3PTj5c3Di8xnhlIq1wvd6Pcbjb2V/slRE6tBzJPyDMmBCr2cuhWVikquco+s4pVBJfJGcVoGlaBZCEqtjDQZeUJ4ZZRglWKMEqFSFIhZQtCHqRQGYpagrhCVkVEClSujBCquUTyVwDCKpzIqEsSUjqQRzgHOCsW4ecQ/MQoWe71x1DYqqaSSSv5n+Q2ofmQ/EDLIZQAAAABJRU5ErkJggg==');
}
.icon-user {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url('data:image/png;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/wAALCACEAIQBAREA/8QAGwABAAIDAQEAAAAAAAAAAAAAAAMFAgQGAQj/xAAuEAEAAgECAggGAgMAAAAAAAAAAQIDBBEFIRIVMUFRZKLhEyJhcYHBFFIjkdH/2gAIAQEAAD8A+gQAAACIAIgAAAAAiACIAAAAAAAAAAAAQ6vVU0mH4l+c90eMqDPrtRqLb2vaI8I5QhrkvjtvS9on6WWnD+KWm8YtRbfflF/+rcAAABz/ABbPOXXTXux/JH7aIOl4dnnPoqWtzmOU/lsgAAA5jWxMa7NE/wB5QAvuDRMaKZ8bz+lgAAACk4zpZrmjUV7L8p+ysGVa2yXila7zPKHTaXDGn01MX9Y5/dMAAADHLirmxTjvXekuXzY/g5r4+3ozMf7Rrjgunr0Z1E8532p9FsAAAA09ZxLFp6zWtunk8I7vu5+1pyXm9uczO8sW/wAO4h/EmaXrvjnn9pXmLLjzU6eO1bx9WYAACHUavFpadLJbn3R3ypdXxTNqN60/x08I7Z/DRASYc+TBfp4rWpK40nGKZdq5/knx7vdY9vOHoAA5TLlvmyTkvbeYYAALrguW9seTHa29a7bfndaAACptwKs3ma59o8Ojv+3nUXmPR7nUXmPR7nUXmPR7nUXmPR7nUXmPR7nUXmPR7nUXmPR7t3Q6KuipeIv05t2z2djaAAAAAAAAAAAAAAAAAAAAAAAB/9k=');
}
</style>
