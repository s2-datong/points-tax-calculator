import React from 'react'
import { ErrorList, type Errors } from '@/components/error/Error'
import { TaxBracketList, TaxBracketListProps } from '@/components/tax-bracket'

const EmptyState = (): JSX.Element => <div>No data found</div>
const LoadingState = (): JSX.Element => <div>loading ...</div>

interface TaxResultProps {
  loading: boolean
  data: TaxBracketListProps | undefined
  error: Errors | undefined
  salary: string
}

export const TaxResult = ({ loading, data, error, salary }: TaxResultProps): JSX.Element => {
  if (loading) return <LoadingState />
  if (error != null) return <ErrorList errors={error.errors} />
  if ((data == null) || data.tax_brackets.length === 0) return <EmptyState />
  return <TaxBracketList
    tax_brackets={data.tax_brackets}
    salary={salary}
  />
}
