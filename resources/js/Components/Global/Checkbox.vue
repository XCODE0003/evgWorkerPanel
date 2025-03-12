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
    default: () => `checkbox-${Math.random().toString(36).substring(2, 9)}`
  },
  required: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'change']);

const isChecked = computed(() => props.modelValue);

const handleChange = (event) => {
  if (props.disabled) return;
  
  const checked = event.target.checked;
  emit('update:modelValue', checked);
  emit('change', checked);
};
</script>

<template>
  <div class="checkbox-wrapper" :class="{ 'is-disabled': disabled }">
    <label :for="id" class="checkbox-label">
      <input
        type="checkbox"
        :id="id"
        :name="name"
        :checked="isChecked"
        :disabled="disabled"
        :required="required"
        class="checkbox-input"
        @change="handleChange"
        ref="checkboxRef"
      />
      <span class="checkbox-custom" :class="{
        'is-checked': isChecked,
        'is-indeterminate': indeterminate && !isChecked
      }"></span>
      <span v-if="label" class="checkbox-text">{{ label }}</span>
    </label>
  </div>
</template>

<style scoped>
.checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  margin: 8px 0;
}

.checkbox-wrapper.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-custom {
  position: relative;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: 2px solid #326CF5;
  border-radius: 4px;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.checkbox-custom::after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 1px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-custom.is-checked {
  background-color: #326CF5;
  border-color: #326CF5;
}

.checkbox-custom.is-checked::after {
  display: block;
}

.checkbox-custom.is-indeterminate::after {
  display: block;
  transform: rotate(0);
  left: 3px;
  top: 7px;
  width: 10px;
  height: 0;
  border-width: 0 0 2px 0;
  border-color: white;
}

.checkbox-text {
  margin-left: 8px;
  font-size: 14px;
  line-height: 1.4;
  color: #333;
}

.is-disabled .checkbox-label {
  cursor: not-allowed;
}

/* Состояние при наведении */
.checkbox-label:hover .checkbox-custom:not(.is-checked) {
  border-color: #1e4fd0;
  background-color: rgba(50, 108, 245, 0.05);
}

/* Состояние фокуса для доступности */
.checkbox-input:focus + .checkbox-custom {
  box-shadow: 0 0 0 3px rgba(50, 108, 245, 0.25);
}
</style>