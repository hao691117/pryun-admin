<template>
  <div class="backdrop-filter navbar">
    <div class="menu-btn" @click="change_sider_full">
      <div class="menu-icon icon-list" :class="[{ 'icon-list-active': sider_full }]"></div>
    </div>
    <div class="content"></div>
    <div class="menu-btn">
      <div class="menu-icon icon-list"></div>
    </div>
    <div class="menu-btn">
      <div class="menu-icon icon-list"></div>
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
}
.content {
  width: 0;
  flex: 1;
}

.menu-btn {
  padding: 12px;
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
.icon-list {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAO0EbHoAAAAGdFJOUwB/KVjSpiYKTnMAAAJ0SURBVHja7ZvLTsMwEEVD2nrdgsQ6Eo91igTr0qqsS4VYE1Ln/z8BEFRtnIfdeO4g0D0/cBSPx5OZxElCCCGEEEL+IVcvlSjri6ZjVImzcR3pk7ykyhyJATiqN0eCeJDK1h1nFYS8JplgJAt8SNygPGAkZU1yiZEUNcmtxpPcasRkrLG7QHkyVcj4nXOsQILyjj/pG6uVJDfyjvNm1ZoLV8bHO75tEEIIIYT8GvcD3rl3z/v+dhLkuI5r2MwqwDG4QVnu2+epXzK4M7V7ic18jjR26mDcLrSFSWxfaNpGTw7j2HbqS7LL+yUR3Vx5mJsU/ZKIsUdxNJxZYjbXvsU1HV0i4EncMRoiJp+s0LvLt2AiefIdogya8a0zLuGzq3vmLHgKH/Z0DqsnnUNBwcpoWp5OHNM/HkJIrIakWmlIMAvmSnaZgsRf8SUk3oovIqlyDUmhIZFPfOP/2gSSWA2J9D42YXN0gGSpsFxWY3flCpKFQjIWCmcX4qw3CodwQ4IoJ67EZgoSzDuRCUv1dD47mYusVdKZ6qNh30y3bZLOVH8d2JbmTclWvGksG5LuVB/8gfkns01Aqkd8+p06ko1C91ueWj0H9PF9qR4xLKhNJHpTPWLsYY8lywQvsah51/Fy5QNem04N/FZhPOir6hLJ6K/qAseKv1DFH5AhXXXsUR9U1WOLVlhVjyu/Kb8NEUIIIYSEcjUTpe134VT4n+S2740p4CKCFeyCQi8IgG5UlGKdVh/1dgJ0k2aDD4kbFNDVkHd83N3IP2Akhf5yqdykUdnCqUYyYraXO9GZ4EOC2cRFYxIifzVznf1O+SWEEEIIIX+fD/YTZKOLiyl8AAAAAElFTkSuQmCC');
}
.icon-list-active {
  transform: rotateZ(180deg);
}
.icon-search {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAO0EbHoAAAAGdFJOUwB/KVjSpiYKTnMAAAJ0SURBVHja7ZvLTsMwEEVD2nrdgsQ6Eo91igTr0qqsS4VYE1Ln/z8BEFRtnIfdeO4g0D0/cBSPx5OZxElCCCGEEEL+IVcvlSjri6ZjVImzcR3pk7ykyhyJATiqN0eCeJDK1h1nFYS8JplgJAt8SNygPGAkZU1yiZEUNcmtxpPcasRkrLG7QHkyVcj4nXOsQILyjj/pG6uVJDfyjvNm1ZoLV8bHO75tEEIIIYT8GvcD3rl3z/v+dhLkuI5r2MwqwDG4QVnu2+epXzK4M7V7ic18jjR26mDcLrSFSWxfaNpGTw7j2HbqS7LL+yUR3Vx5mJsU/ZKIsUdxNJxZYjbXvsU1HV0i4EncMRoiJp+s0LvLt2AiefIdogya8a0zLuGzq3vmLHgKH/Z0DqsnnUNBwcpoWp5OHNM/HkJIrIakWmlIMAvmSnaZgsRf8SUk3oovIqlyDUmhIZFPfOP/2gSSWA2J9D42YXN0gGSpsFxWY3flCpKFQjIWCmcX4qw3CodwQ4IoJ67EZgoSzDuRCUv1dD47mYusVdKZ6qNh30y3bZLOVH8d2JbmTclWvGksG5LuVB/8gfkns01Aqkd8+p06ko1C91ueWj0H9PF9qR4xLKhNJHpTPWLsYY8lywQvsah51/Fy5QNem04N/FZhPOir6hLJ6K/qAseKv1DFH5AhXXXsUR9U1WOLVlhVjyu/Kb8NEUIIIYSEcjUTpe134VT4n+S2740p4CKCFeyCQi8IgG5UlGKdVh/1dgJ0k2aDD4kbFNDVkHd83N3IP2Akhf5yqdykUdnCqUYyYraXO9GZ4EOC2cRFYxIifzVznf1O+SWEEEIIIX+fD/YTZKOLiyl8AAAAAElFTkSuQmCC');
}
.icon-user {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAO0EbHoAAAAGdFJOUwB/KVjSpiYKTnMAAAJ0SURBVHja7ZvLTsMwEEVD2nrdgsQ6Eo91igTr0qqsS4VYE1Ln/z8BEFRtnIfdeO4g0D0/cBSPx5OZxElCCCGEEEL+IVcvlSjri6ZjVImzcR3pk7ykyhyJATiqN0eCeJDK1h1nFYS8JplgJAt8SNygPGAkZU1yiZEUNcmtxpPcasRkrLG7QHkyVcj4nXOsQILyjj/pG6uVJDfyjvNm1ZoLV8bHO75tEEIIIYT8GvcD3rl3z/v+dhLkuI5r2MwqwDG4QVnu2+epXzK4M7V7ic18jjR26mDcLrSFSWxfaNpGTw7j2HbqS7LL+yUR3Vx5mJsU/ZKIsUdxNJxZYjbXvsU1HV0i4EncMRoiJp+s0LvLt2AiefIdogya8a0zLuGzq3vmLHgKH/Z0DqsnnUNBwcpoWp5OHNM/HkJIrIakWmlIMAvmSnaZgsRf8SUk3oovIqlyDUmhIZFPfOP/2gSSWA2J9D42YXN0gGSpsFxWY3flCpKFQjIWCmcX4qw3CodwQ4IoJ67EZgoSzDuRCUv1dD47mYusVdKZ6qNh30y3bZLOVH8d2JbmTclWvGksG5LuVB/8gfkns01Aqkd8+p06ko1C91ueWj0H9PF9qR4xLKhNJHpTPWLsYY8lywQvsah51/Fy5QNem04N/FZhPOir6hLJ6K/qAseKv1DFH5AhXXXsUR9U1WOLVlhVjyu/Kb8NEUIIIYSEcjUTpe134VT4n+S2740p4CKCFeyCQi8IgG5UlGKdVh/1dgJ0k2aDD4kbFNDVkHd83N3IP2Akhf5yqdykUdnCqUYyYraXO9GZ4EOC2cRFYxIifzVznf1O+SWEEEIIIX+fD/YTZKOLiyl8AAAAAElFTkSuQmCC');
}
</style>
