'use client'
import styles from './HomePage.module.css'
import { useState } from 'react'

import DATA from '../../../data/resourses.json'

import { Card } from '../../molecules/card/Card'
import { CATEGORIES } from '../../../utils/const'
import { SideBar } from '../../molecules/side-bar/SideBar'
import { MenuButton } from '../../atoms/MenuButton/MenuButton'

const compareTitles = (a, b) => {
  return a.title.localeCompare(b.title)
}

const sortedData = DATA.sort(compareTitles)

export const HomePage = () => {
  const [resources, setResources] = useState(sortedData)
  const [isSideBarOpen, setIsSideBarOpen] = useState()
  const handleShowSideBar = () => setIsSideBarOpen(!isSideBarOpen)

  const filterByCategory = category => {
    if (category) {
      if (category === 'All') {
        setResources(sortedData)
        return
      }
      setResources(
        sortedData.filter(resource => resource.category.includes(category))
      )
    } else {
      setResources(sortedData)
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
      <SideBar
        categories={CATEGORIES}
        isOpen={isSideBarOpen}
        handleCategory={filterByCategory}
        handleShowSideBar={handleShowSideBar}
      />
      {/* MenuButton to mobile */}
      <MenuButton isOpen={isSideBarOpen} onClick={handleShowSideBar} />
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
