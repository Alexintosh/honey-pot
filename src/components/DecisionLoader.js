import React from 'react'
import useProposalLogic from '../logic/proposal-logic'
import { useAppState } from '../providers/AppState'

import DecisionDetail from '../screens/DecisionDetail'
import Loader from './Loader'

function DecisionLoader({ match }) {
  const {
    actions: { dandelionActions },
    proposal,
    isLoading: proposalLoading,
  } = useProposalLogic(match)
  const { isLoading } = useAppState()

  if (isLoading || !proposal || proposalLoading) {
    return <Loader />
  }

  return <DecisionDetail proposal={proposal} actions={dandelionActions} />
}

export default DecisionLoader