<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: () => `toggle-${Math.random().toString(36).substring(2, 9)}`
  },
  size: {
    type: String,
    default: 'medium', // small, medium, large
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  color: {
    type: String,
    default: 'primary' // primary, success, danger, warning
  }
});

const emit = defineEmits(['update:modelValue', 'change']);

const isChecked = computed(() => props.modelValue);

const toggleClasses = computed(() => ({
  'toggle-wrapper': true,
  'is-disabled': props.disabled,
  'is-checked': isChecked.value,
  [`toggle-${props.size}`]: true,
  [`toggle-${props.color}`]: true
}));

const handleChange = (event) => {
  if (props.disabled) return;
  
  const checked = event.target.checked;
  emit('update:modelValue', checked);
  emit('change', checked);
};
</script>

<template>
  <div :class="toggleClasses">
    <label :for="id" class="toggle-label">
      <input
        type="checkbox"
        :id="id"
        :name="name"
        :checked="isChecked"
        :disabled="disabled"
        class="toggle-input"
        @change="handleChange"
      />
      <span class="toggle-track">
        <span class="toggle-thumb"></span>
      </span>
      <div class="flex ml-2  flex-col ">
        <span v-if="label" class="toggle-text font-semibold text-lg leading-normal">{{ label }}</span>
        <span v-if="description" class="text-secondary leading-normal">{{ description }}</span>
      </div>
    </label>
  </div>
</template>

<style scoped>
.toggle-wrapper {
  display: inline-flex;
  align-items: center;
  margin: 8px 0;
}

.toggle-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.toggle-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-track {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background-color: #1E293B;
  border-radius: 34px;
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.toggle-text {
  color: #E6EBF5;
}

/* Размеры */
.toggle-small .toggle-track {
  width: 36px;
  height: 20px;
}

.toggle-small .toggle-thumb {
  width: 16px;
  height: 16px;
}

.toggle-large .toggle-track {
  width: 52px;
  height: 28px;
}

.toggle-large .toggle-thumb {
  width: 24px;
  height: 24px;
}

/* Состояния */
.is-checked .toggle-track {
  background-color: #4D7BF3;
}

.is-checked .toggle-thumb {
  transform: translateX(20px);
}

.toggle-small.is-checked .toggle-thumb {
  transform: translateX(16px);
}

.toggle-large.is-checked .toggle-thumb {
  transform: translateX(24px);
}

.is-disabled {
  opacity: 0.5;
}

.is-disabled .toggle-label {
  cursor: not-allowed;
}

/* Цвета */
.toggle-primary.is-checked .toggle-track {
  background-color: #326CF5;
}

.toggle-success.is-checked .toggle-track {
  background-color: #10B981;
}

.toggle-danger.is-checked .toggle-track {
  background-color: #EF4444;
}

.toggle-warning.is-checked .toggle-track {
  background-color: #F59E0B;
}

/* Состояние при наведении */
.toggle-label:hover .toggle-track:not(.is-checked) {
  opacity: 0.9;
}

/* Состояние фокуса для доступности */
.toggle-input:focus + .toggle-track {
  box-shadow: 0 0 0 3px rgba(50, 108, 245, 0.25);
}
</style>