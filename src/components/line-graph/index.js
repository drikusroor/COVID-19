import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Line } from 'react-chartjs-2'
import _ from 'lodash'

const useStyles = makeStyles(theme => ({}))

export default function LineGraph({ dataset }) {
  const classes = useStyles()

  const labels = dataset[0].slice(3, dataset[0].length - 1)

  const rows = dataset.slice(1, dataset.length - 1)

  const uniqueCountries = rows.reduce((acc, curr) => {
    const exists = acc[curr[1]]

    if (!exists) {
      return {
        ...acc,
        [curr[1]]: curr.map((col, index) => {
          if (index < 4) {
            return col
          } else {
            return parseInt(col)
          }
        }),
      }
    } else {
      const newRow = exists.map((col, index) => {
        if (index < 4) {
          return exists[index]
        } else {
          return parseInt(exists[index]) + parseInt(curr[index])
        }
      })

      return {
        ...acc,
        [curr[1]]: newRow,
      }
    }
  }, {})

  const datasets = Object.keys(uniqueCountries)
    .sort()
    .map(key => {
      const row = uniqueCountries[key]

      return {
        label: key,
        type: 'line',
        data: row.slice(3, row.length - 1).map(value => parseInt(value)),
      }
    })

  const data = { labels, datasets }

  if (!data) return null

  return (
    <div className={classes.root}>
      <Line data={data} height={720} options={{ maintainAspectRatio: false }} />
    </div>
  )
}
