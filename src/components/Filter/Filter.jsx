import React from 'react'
import { connect } from 'react-redux';
import actions from '../../redux/phonebook/contacts-actions';
import './Filter.css'

const Filter = ({valueState, filterByName}) => {
  return (
    <label className="label" >
			<input type="text"
				value={valueState}
				onChange={filterByName} />
      
    </label>
  )
}

const mapStateToProps = (state) => ({ valueState: state.contacts.filterContact });

const mapDispatchToProps = dispatch => ({ filterByName: event => dispatch(actions.filterContact(event.target.value))});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);