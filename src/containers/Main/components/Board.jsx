import React, { memo } from 'react'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  
  return (
    <Grid container spacing={4} >
      <Grid item xs={12} md={4} >
        <Card value={ getValue(cases).toLocaleString() } vunit="ascard1" label="Casos" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={ getValue(recovered).toLocaleString() } vunit="ascard2" label="Recuperados" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={ getValue(deaths).toLocaleString()} vunit="ascard3" label="Total de mortes" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={ todayDeaths === 0 ? "0" : getValue(todayDeaths)} vunit="ascard4" label="Mortes hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={ todayCases === 0 ? "0" : getValue(todayCases)} vunit="ascard5" label="Casos hoje" color="#F7B829" />
      </Grid>
      
    </Grid>
  )
}

export default memo(Board)