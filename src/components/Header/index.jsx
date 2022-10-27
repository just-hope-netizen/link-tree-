import img from '../../assets/img/default.png'
import shareBtn from '../../assets/img/share-button.png'
import { ShareIcon } from '../../assets/svg';
export const Header =()=>{
return (
  <header className='d-flex flex-column align-items-center position-relative'>
    <div className='img-wrapper'>
      <img src={img} alt='profile ' className='img' id='profile__img' />
      <p className='img-name' id='twitter'>@hope_imevbore</p>
      <p className='d-none' id='slack'>hope peter</p>
      <img src={shareBtn} alt='share icon' className='share-btn d-none d-md-block' />
      <ShareIcon className='share-btn d-md-none' />
    </div>
  </header>
);
}