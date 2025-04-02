<script setup>
import { ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  position: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
  }
})

const isVisible = ref(false)
</script>

<template>
  <div class="relative inline-block">
    <!-- Слот для элемента, на который наводим -->
    <div 
      @mouseenter="isVisible = true" 
      @mouseleave="isVisible = false"
    >
      <slot></slot>
    </div>

    <!-- Сам тултип -->
    <div 
      :class="[
        'tooltip-container absolute z-[9999] px-3 py-2 text-sm rounded-lg whitespace-nowrap transition-all duration-300',
        'bg-gradient-to-b from-[#CCDAFB] to-[#9AB7FB] text-[#223052]',
        {
          'opacity-0 invisible': !isVisible,
          'opacity-100 visible': isVisible,
          'bottom-full left-1/2 -translate-x-1/2 mb-4': position === 'top',
          'top-full left-1/2 -translate-x-1/2 mt-4': position === 'bottom',
          'right-full top-1/2 -translate-y-1/2 mr-4': position === 'left',
          'left-full top-1/2 -translate-y-1/2 ml-4': position === 'right'
        }
      ]"
    >
      {{ text }}
    </div>
  </div>
</template>

<style scoped>
.absolute {
  pointer-events: none;
}

.tooltip-container {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.tooltip-container::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

/* Для позиции сверху */
.tooltip-container[class*="bottom-full"]::after {
  border-width: 8px 9px 0 9px;
  border-color: #9AB7FB transparent transparent transparent;
  bottom: -8px;
  left: calc(50% - 9px);
}

/* Для позиции снизу */
.tooltip-container[class*="top-full"]::after {
  border-width: 0 9px 8px 9px;
  border-color: transparent transparent #CCDAFB transparent;
  top: -8px;
  left: calc(50% - 9px);
}

/* Для позиции слева */
.tooltip-container[class*="right-full"]::after {
  border-width: 9px 0 9px 8px;
  border-color: transparent transparent transparent #9AB7FB;
  right: -8px;
  top: calc(50% - 9px);
}

/* Для позиции справа */
.tooltip-container[class*="left-full"]::after {
  border-width: 9px 8px 9px 0;
  border-color: transparent #CCDAFB transparent transparent;
  left: -8px;
  top: calc(50% - 9px);
}
</style> 