import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import TableList from '../components/TableList'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <TableList {...this.props} />
    }
}

const getDetailState = state => {
    return {
        detail: {
            ...state.detail,
        }
    }
}

const getTableList = state => {
    return {
        tableList: {
            ...state.tableList,
        }
    }
}

// const selector = createSelector(
//     [getDetailState, getTableList],
//     (detali, tableList) => {
//         return {
//             ...detali,
//             ...tableList,
//         }
//     }
// )

const selector = state => {
    return Object.assign({}, getDetailState(state), getTableList(state))
}

export default connect(selector)(App)
