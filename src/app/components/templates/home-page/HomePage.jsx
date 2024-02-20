'use client'
import styles from './HomePage.module.css'
import { useState } from 'react'

import DATA from '../../../data/resourses.json'

import { Card } from '../../molecules/card/Card'
import { CATEGORIES } from '../../../utils/const'
import { SideBar } from '../../molecules/side-bar/SideBar'
import { MenuButton } from '../../atoms/MenuButton/MenuButton'
import { SideBarMobile } from '../../molecules/side-bar-mobile/SideBarMobile'

export const HomePage = () => {
  const [resources, setResources] = useState(DATA)
  const [isSideBarOpen, setIsSideBarOpen] = useState()
  const handleShowSideBar = () => setIsSideBarOpen(!isSideBarOpen)

  const filterByCategory = category => {
    if (category) {
      if (category === 'All') {
        setResources(DATA)
        return
      }
      setResources(
        DATA.filter(resource => resource.category.includes(category))
      )
    } else {
      setResources(DATA)
    }
  }

  // const filterByQuery = query => {
  //   if (query) {
  //     setResources(DATA.filter(resource => resource.title.includes(query)))
  //   } else {
  //     setResources(DATA)
  //   }
  // }

  return (
    <div className={styles.container}>
      <SideBar categories={CATEGORIES} handleCategory={filterByCategory} />
      {/* MenuButton to mobile */}
      <MenuButton isOpen={isSideBarOpen} onClick={handleShowSideBar} />
      <SideBarMobile
        categories={CATEGORIES}
        isOpen={isSideBarOpen}
        handleCategory={filterByCategory}
      />
      <div className={styles.cards}>
        {resources.map(({ id, title, description, category, logo, url }) => (
          <div key={id} className={styles['card-wrapper']}>
            <Card
              title={title}
              description={description}
              category={category}
              logo={logo}
              url={url}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
