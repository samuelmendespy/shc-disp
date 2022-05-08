import React, { memo } from 'react'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={ getValue(cases).toLocaleString() } label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={ getValue(recovered).toLocaleString() } label="Total de recuperados" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={  todayDeaths === 0 ? "0" : getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={ todayCases === 0 ? "0" : getValue(todayCases)} label="Casos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={ getValue(deaths).toLocaleString()} label="Total de mortos" color="#E95078" />
      </Grid>
      
    </Grid>
  )
}

export default memo(Board)