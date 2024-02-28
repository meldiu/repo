import DATA from '@/data/resources.json'

const { create } = require('zustand')

export const useResourcesStore = create(set => ({
  resources: DATA,
  search: '',

  setSearch: value => set({ search: value }),
  filterByCategory: category => {
    if (!category) set({ resources: DATA })

    if (category === 'All') {
      set({ resources: DATA })
      return
    }
    set({
      resources: DATA.filter(resource => resource.category.includes(category)),
    })
  },
  filterBySearch: search => {
    if (search) {
      set({
        resources: DATA.filter(
          resource =>
            resource.title
              .toLowerCase()
              .includes(search.toLowerCase().trim()) ||
            resource.category.some(cat =>
              cat.toLowerCase().includes(search.toLowerCase().trim())
            )
        ),
      })
    } else {
      set({ resources: DATA })
    }
  },
}))
