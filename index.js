import React, {Component} from 'react'
import _ from "lodash"

class FancySelect extends Component {
	render() {
		let {items, showItemsOptions, currentItem, onSelectItemHandler, onClickDefaultItemHandler} = this.props

		_.remove(items, (i) => i.id === currentItem.id)

		return (
			<div className="doc-border-rad-10" style={{border: showItemsOptions ? '2px solid #4689cf' : '2px solid #eee'}}>
				<div
					onClick={() => onClickDefaultItemHandler(items)}
					className="d-flex align-items-center justify-content-between p-2 doc-border-rad-10"
					style={{cursor: items.length === 0 ? 'initial' : 'pointer'}}
				>
					<div className="d-flex align-items-center">
						<span className="icon-container icon-place mr-3 ml-2"/>
						<p className="doc-bold m-0 doc-accent-text-color doc-h6 ">{currentItem.name}</p>
					</div>
					{items.length === 0 ? null : <Chevron iconUp={showItemsOptions} />}
				</div>
				{showItemsOptions ? <FancySelectOption onSelect={onSelectItemHandler} options={items} showOptions={showItemsOptions} /> : null}
			</div>
		)
	}
}

const FancySelectOption = ({showOptions, onSelect, options}) => {
	let optionsView = _.map(options, (option) => {
		return (
			<li
				key={option.id}
				className="d-flex align-items-center p-2 doc-list-item"
				onClick={() => onSelect(option.id)}
				style={{borderTop: '1px solid #eee'}}
			>
				<span className="icon-container icon-place mr-3 ml-2"/>
				<div className="d-flex flex-column">
					<p className="doc-bold m-0 doc-accent-text-color doc-h6 ">{option.name}</p>
				</div>
			</li>
		)
	})

	return (
		<ul className={showOptions ? 'doc-active p-0 m-0' : 'doc-inactive'} style={{borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
			{optionsView}
		</ul>
	)
}

const Chevron = ({iconUp}) => <span className={ `icon-container mr-3 ml-2  ${iconUp ? 'icon-chev-up' : 'icon-chev-down'}` }/>

export default FancySelect

