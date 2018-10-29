import React from 'react'

import { TEST_START_REQUEST } from '../actions/Index'
import styles from './tableList.less'

class TableList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.valChange = this.valChange.bind(this)
    }

    // valChange = e => {
    //     const { dispatch } = this.props
    //     const currentVal = e.target.value
    //     dispatch({
    //         type: TEST_START,
    //         payload: {
    //             data: currentVal,
    //         },
    //     })
    // }

    valChange(e) {
        const { dispatch } = this.props
        const currentVal = e.target.value
        dispatch({
            type: TEST_START_REQUEST,
            payload: {
                data: currentVal,
            },
        })
    }

    render() {
        const {
            tableList: {
                inputData,
            },
        } = this.props
        console.log('table list props -->', this.props)
        return (
            <div>
                <input className={styles['demo-input']} onChange={this.valChange} />
                <span>{inputData}</span>
            </div>
        )
    }
}

export default TableList
