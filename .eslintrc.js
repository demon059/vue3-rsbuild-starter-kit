module.exports = {
  root: true,
  env: { node: true },
  extends: ['@antfu'],
  rules: {
    // Приоритет для порядка тегов компонента
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],

    // Правило для порядка блоков в .vue файле
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],

    // Дополнительно: отключаем авто-фикс для setup-синтаксиса
    'vue/script-setup-uses-vars': 'off',
  },
}
