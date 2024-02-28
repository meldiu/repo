'use client'
import styles from './HomePage.module.css'
import { useState } from 'react'

import { CATEGORIES } from '@/utils/const'

import { useResourcesStore } from '@/stores/resources/resources.store.js'
import { SideBar } from '@/components/molecules/side-bar/SideBar'
import { MenuButton } from '@/components/atoms/menu-button/MenuButton'
import { Cards } from '@/components/organisms/ui/cards/Cards'

export const HomePage = () => {
  const resources = useResourcesStore(state => state.resources)
  const filterByCategory = useResourcesStore(state => state.filterByCategory)

  const [isSideBarOpen, setIsSideBarOpen] = useState()
  const handleShowSideBar = () => setIsSideBarOpen(!isSideBarOpen)

  return (
    <div className={styles.container}>
      <SideBar
        categories={CATEGORIES}
        isOpen={isSideBarOpen}
        handleCategory={filterByCategory}
        handleShowSideBar={handleShowSideBar}
      />
      {/* MenuButton to mobile */}
      <MenuButton isOpen={isSideBarOpen} onClick={handleShowSideBar} />
      <Cards resources={resources} />
    </div>
  )
}
