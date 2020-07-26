import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(sort: {fields: data___Business_Name}, filter: {data: {Penalty_amount_in_native_currency: {ne: 0}}}) {
        distinct(field: data___Business_Name)
        nodes {
          data {
            amount: Penalty_amount_in_native_currency
            name: Business_Name
            jurisdiction: Jurisdiction_of_Penalty
          }
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName


