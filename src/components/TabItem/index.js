import './index.css'

const TabItem = props => {
  const {tabDetails, getTabId, isActiveTrue} = props
  const {displayText, tabId} = tabDetails
  const tabButton = () => {
    getTabId(tabId)
  }

  const tabClassName = isActiveTrue ? 'active' : ''
  return (
    <li className="tab-item">
      <button type="button" className={`${tabClassName}`} onClick={tabButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
