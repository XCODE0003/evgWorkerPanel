<script setup>
import { onMounted, ref, computed } from 'vue'
import Chart from 'chart.js/auto'

const chartCanvas = ref(null)
let chart = null
const selectedPoint = ref(2)
// Более пропорциональные данные для 4 дней
const deposits = [2800, 3200, 4010, 2900] // в долларах
const users = [4, 22, 30, 18] // количество пользователей
const selectedDeposit = ref(deposits[selectedPoint.value])
const selectedUser = ref(users[selectedPoint.value])
const labels = ['20 дек.', '21 дек.', '22 дек.', '23 дек.']

const textPosition = computed(() => {
  const totalBars = labels.length
  const barWidth = 100 / totalBars
  let leftPosition

  if (selectedPoint.value === 0) {
    // Для первого столбца
    leftPosition = barWidth / 2 + 2
  } else if (selectedPoint.value === totalBars - 1) {
    // Для последнего столбца
    leftPosition = 100 - (barWidth / 2) - 4
  } else {
    // Для остальных столбцов
    leftPosition = (barWidth * selectedPoint.value) + (barWidth / 2)
  }

  return {
    left: `${leftPosition}%`,
    transform: 'translateX(-50%)',
    top: '20%',
    zIndex: 2
  }
})

const updatePoint = (index) => {
  selectedPoint.value = index
  selectedDeposit.value = deposits[index]
  selectedUser.value = users[index]
  
  chart.data.datasets[0].backgroundColor = deposits.map((_, i) => 
    i === index ? 'rgba(50, 108, 245, 0.3)' : 'rgba(50, 108, 245, 0.05)'
  )
  chart.data.datasets[1].backgroundColor = users.map((_, i) => 
    i === index ? 'rgba(147, 51, 234, 0.3)' : 'rgba(147, 51, 234, 0.05)'
  )
  
  chart.data.datasets[0].borderColor = deposits.map((_, i) => 
    i === index ? 'rgba(50, 108, 245, 1)' : 'rgba(50, 108, 245, 0.3)'
  )
  chart.data.datasets[1].borderColor = users.map((_, i) => 
    i === index ? 'rgba(147, 51, 234, 1)' : 'rgba(147, 51, 234, 0.3)'
  )
  
  chart.update()
}

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Депозиты',
          data: deposits,
          backgroundColor: deposits.map((_, i) => 
            i === selectedPoint.value ? 'rgba(50, 108, 245, 0.3)' : 'rgba(50, 108, 245, 0.05)'
          ),
          borderColor: deposits.map((_, i) => 
            i === selectedPoint.value ? 'rgba(50, 108, 245, 1)' : 'rgba(50, 108, 245, 0.3)'
          ),
          borderWidth: {
            top: 3,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderRadius: 0,
          borderSkipped: false,
          yAxisID: 'y-deposits',
        },
        {
          label: 'Пользователи',
          data: users.map(value => value * (Math.max(...deposits) / Math.max(...users) / 2)),
          backgroundColor: users.map((_, i) => 
            i === selectedPoint.value ? 'rgba(147, 51, 234, 0.3)' : 'rgba(147, 51, 234, 0.05)'
          ),
          borderColor: users.map((_, i) => 
            i === selectedPoint.value ? 'rgba(147, 51, 234, 1)' : 'rgba(147, 51, 234, 0.3)'
          ),
          borderWidth: {
            top: 3,
            right: 0,
            bottom: 0,
            left: 0
          },
          borderRadius: 0,
          borderSkipped: false,
          yAxisID: 'y-users',
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      layout: {
        padding: {
          left: 20,
          right: 20
        }
      },
      scales: {
        'y-deposits': {
          display: false,
          grid: {
            display: false
          },
          beginAtZero: true,
          max: Math.max(...deposits) * 1.2,
        },
        'y-users': {
          display: false,
          grid: {
            display: false
          },
          beginAtZero: true,
          max: Math.max(...deposits) * 1.2,
        },
        x: {
          display: false,
          grid: {
            display: false
          },
          border: {
            display: false
          },
          offset: true,
          padding: {
            left: 20,
            right: 20
          }
        }
      },
      barPercentage: 1,
      categoryPercentage: 0.95,
      onClick: (event, elements) => {
        if (elements.length > 0) {
          updatePoint(elements[0].index)
        }
      }
    }
  })
})
</script>

<template>
  <div class="relative w-full">
    <div class="h-[300px] w-full mb-12">
      <canvas ref="chartCanvas"></canvas>
    </div>
    
    <!-- Значения над выбранным баром -->
    <div 
      v-if="selectedPoint !== null" 
      class="selected-values absolute flex flex-col gap-0 items-start w-max"
      :style="textPosition"
    >
      <div class="flex items-center gap-2 justify-center w-full">
        <div class="w-2 h-2 rounded-full bg-[#326CF5]"></div>
        <span class="text-white font-medium">${{ (selectedDeposit/1000).toFixed(2) }}K</span>
      </div>
      <div class="flex items-center gap-2 justify-center w-full">
        <div class="w-2 h-2 rounded-full bg-[#9333EA]"></div>
        <span class="text-white font-medium">${{ selectedUser.toFixed(2) }}</span>
      </div>
    </div>

    <!-- Даты внизу -->
    <div class="absolute -bottom-12 left-[20px] right-[20px] flex justify-between">
      <div 
        v-for="(label, index) in labels" 
        :key="index"
        @click="() => updatePoint(index)"
        :class="[
          'date-label px-3 py-2 text-nowrap rounded cursor-pointer text-sm transition-all',
          selectedPoint === index ? 'active-period' : 'text-[#5D6880]'
        ]"
      >
        {{ label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.selected-values {
  transition: all 0.3s ease;
  pointer-events: none;
}

.selected-values > div {
  white-space: nowrap;
}

.date-label {
  transition: all 0.3s ease;
}

.active-period {
  background-color: #326CF5;
  color: white;
  box-shadow: 0 0 15px rgba(50, 108, 245, 0.5);
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
</style>  