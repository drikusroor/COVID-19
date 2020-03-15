import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import DataTableTabs from './components/data-table-tabs'
import { connect } from 'react-redux'
import { fetchTimeSeries } from './store/time-series/actions'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Koko Koding
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

function App({ fetchTimeSeries, timeSeries }) {
  useEffect(() => {
    fetchTimeSeries()
  }, [])

  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          COVID-19 histogram per country
        </Typography>
        <DataTableTabs datasets={timeSeries.data} />
        <Copyright />
      </Box>
    </Container>
  )
}

export default connect(
  state => {
    console.log({ state })
    return { timeSeries: state.timeSeries }
  },
  {
    fetchTimeSeries,
  },
)(App)
