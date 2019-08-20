import React, { Fragment } from 'react'
import { Category } from '../Category'
import { useScroll } from '../../hooks/useScroll'
import { List, Item } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed] = useScroll()

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
