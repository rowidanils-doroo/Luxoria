import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCategoryStore = defineStore('category', () => {
  const selectedCategory = ref('All')

  function setCategory(category) {
    selectedCategory.value = category
  }

  return { selectedCategory, setCategory }
})
```

---

## 2️⃣ كمبوننت الفلتر الأفقي للهوم
```
// src/components/CategoryFilterHome.vue
```

## 3️⃣ كمبوننت الفلتر الجانبي لصفحة المنتجات
```
// src/components/CategorySidebar.vue