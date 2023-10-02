import './index.css'

const SmallImgItem = props => {
  const {imgDetails, onClickImg} = props
  const {thumbnailUrl, id} = imgDetails
  const onClickImgMatch = () => {
    onClickImg(id)
  }
  return (
    <li className="thumbnail-item-img">
      <button type="button" onClick={onClickImgMatch}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default SmallImgItem
