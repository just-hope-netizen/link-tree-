import img from '../../assets/img/default.png'
import shareBtn from '../../assets/img/share-button.png'
export const Header =()=>{
return (
  <header className='d-flex flex-column align-items-center position-relative'>
    <div className='img-wrapper'>
      <img src={img} alt='owner' className='img' id='profile__img' />
      <p className='img-name'>Annette Black</p>
      <img src={shareBtn} alt=""  className='share-btn'/>
    </div>
  </header>
);
}