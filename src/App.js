import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import getData from './services/dataset'
import DataTableTabs from './components/data-table-tabs'

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

export default function App() {
  const [datasets, setDatasets] = useState([])

  useEffect(() => {
    async function fetchData() {
      const datasets = await getData()
      setDatasets(datasets)
    }
    fetchData()
  }, [])

  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          COVID-19 histogram per country
        </Typography>
        <DataTableTabs datasets={datasets} />
        <Copyright />
      </Box>
    </Container>
  )
}
