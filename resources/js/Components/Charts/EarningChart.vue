<script setup>
import { onMounted, ref, computed } from 'vue'
import Chart from 'chart.js/auto'

const chartCanvas = ref(null)
let chart = null
const selectedPoint = ref(2)
const amounts = [300, 200, 500, 800, 400, 600]
const selectedAmount = ref(amounts[selectedPoint.value])
const labels = ['18 дек.', '19 дек.', '20 дек.', '21 дек.', '22 дек.', '23 дек.']

// Добавляем computed для вычисления позиции текста
const textPosition = computed(() => {
  const maxAmount = Math.max(...amounts)
  const currentAmount = selectedAmount.value
  const percentage = (currentAmount / maxAmount) * 100
  const topOffset = 80 - (percentage * 0.4)

  // Добавляем специальную обработку для крайних точек
  if (selectedPoint.value === 0) {
    return {
      left: '10%', // Фиксированное положение для первой точки
      top: `${topOffset}px`,
      transform: 'translateX(-50%)',
      zIndex: 2
    }
  }
  
  if (selectedPoint.value === labels.length - 1) {
    return {
      left: '90%', // Фиксированное положение для последней точки
      top: `${topOffset}px`,
      transform: 'translateX(-50%)',
      zIndex: 2
    }
  }

  // Для остальных точек используем пропорциональный расчет
  const totalPoints = labels.length - 1
  const leftPosition = 10 + (selectedPoint.value / totalPoints) * 80 // 80% для основного графика, 10% отступы по краям

  return {
    left: `${leftPosition}%`,
    top: `${topOffset}px`,
    transform: 'translateX(-50%)',
    zIndex: 2
  }
})

const updatePoint = (index) => {
  selectedPoint.value = index;
  selectedAmount.value = amounts[index];
  
  chart.data.datasets[0].pointRadius = Array(6).fill(0).map((_, i) => i === index ? 8 : 0);
  chart.data.datasets[0].pointBackgroundColor = Array(6).fill('').map((_, i) => i === index ? '#fff' : '');
  chart.data.datasets[0].pointBorderColor = Array(6).fill('').map((_, i) => i === index ? '#326CF5' : '');
  chart.data.datasets[0].pointBorderWidth = Array(6).fill(0).map((_, i) => i === index ? 4 : 0);
  
  chart.update();
}

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')
  
  const gradient = ctx.createLinearGradient(0, 0, 0, 300)
  gradient.addColorStop(0, 'rgba(50, 108, 245, 0.15)')
  gradient.addColorStop(1, 'rgba(50, 108, 245, 0)')    

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: '',
        data: amounts,
        backgroundColor: gradient,
        borderColor: '#326CF5',
        borderWidth: 5,
        tension: 0.5,
        fill: true,
        pointRadius: Array(6).fill(0).map((_, i) => i === selectedPoint.value ? 8 : 0),
        pointBackgroundColor: Array(6).fill('').map((_, i) => i === selectedPoint.value ? '#fff' : ''),
        pointBorderColor: Array(6).fill('').map((_, i) => i === selectedPoint.value ? '#326CF5' : ''),
        pointBorderWidth: Array(6).fill(0).map((_, i) => i === selectedPoint.value ? 4 : 0),
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          grid: {
            display: false
          },
          max: Math.max(...amounts) * 1.2,
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            display: false
          },
          border: {
            display: false
          },
          offset: true,
          padding: {
            left: 0,
            right: 0
          }
        }
      },
      onClick: (event, elements) => {
        if (elements.length > 0) {
          updatePoint(elements[0].index);
        }
      },
      hover: {
        mode: 'index',
        intersect: false
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 80,
          bottom: 30
        }
      }
    }
  })
})
</script>

<template>
  <div class="relative w-full">
    <!-- Сумма над точкой -->
    <div 
      class="absolute text-sm font-bold bg-container px-2 py-1 rounded transition-all duration-300" 
      :style="textPosition"
    >
      ${{ selectedAmount.toFixed(2) }}
    </div>
    <div class="h-[300px] w-full">
      <canvas ref="chartCanvas"></canvas>
    </div>
    <!-- Периоды внизу -->
    <div class="absolute bottom-0 left-0 right-0 flex justify-between ">
      <div 
        v-for="(label, index) in labels" 
        :key="index"
        @click="() => updatePoint(index)"
        :class="[
          'period-label px-3 py-1 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap',
          selectedPoint === index ? 'active-period' : 'text-secondary'
        ]"
      >
        {{ label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.period-label {
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
  position: relative;
  text-align: center;
  width: 100%;
}

.active-period {
  background-color: #326CF5;
  color: white;
  box-shadow: 0 0 15px #326CF5;
  position: relative;
}

.active-period::after {
  content: '';
  position: absolute;
  inset: -2px;
  background: #326CF5;
  filter: blur(8px);
  z-index: -1;
  opacity: 0.5;
  border-radius: inherit;
}

.text-secondary {
  color: #5D6880;
}

.text-sm {
  font-size: 14px;
}

/* Добавляем плавный переход для позиционирования */
.absolute {
  transition: all 0.3s ease;
}
</style>
