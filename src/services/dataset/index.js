import http from '../http'

export const getConfirmed = async () =>
  http(
    '/archived_data/archived_time_series/time_series_2019-ncov-Confirmed.csv',
  )

export const getDeaths = async () =>
  http('/archived_data/archived_time_series/time_series_2019-ncov-Deaths.csv')

export const getRecovered = async () =>
  http(
    '/archived_data/archived_time_series/time_series_2019-ncov-Recovered.csv',
  )

export default async function() {
  return Promise.all([getConfirmed(), getDeaths(), getRecovered()])
}
