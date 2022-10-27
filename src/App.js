import { LogoIcon, SlackIcon } from './assets/svg';
import { CardComponent } from './components/Card';
import { Header } from './components/Header';
import gitIcon from './assets/img/Icon.png'
import icon from './assets/img/I4G.png'

function App() {
  const slackUserName = 'Hope Peter'

  return (

    <div className="container-fluid ">
      <Header />
      <CardComponent link={'https://mobile.twitter.com/hope_imevbore'} id={'twitter'} text={'Twitter Link'} />
      <CardComponent link={'https://training.zuri.team/'} id={'btn__zuri'} text={'Zuri Team'} />
      <CardComponent link={'http://books.zuri.team'} id={'books'} text={'Zuri Books'} />
      <CardComponent link={`https://books.zuri.team/python-for-beginners?ref_id= ${slackUserName} `} id={'book__python'} text={'Python Books'} />
      <CardComponent link={' https://background.zuri.team'} id={'pitch'} text={'Background Check for Coders'} />
      <CardComponent link={' https://books.zuri.team/design-rules '} id={'book__design'} text={'Design Books'} />
      <div className='py-3 text-center mb-5'>
        <SlackIcon className='me-2'/>
        <img src={gitIcon} alt='git icon' className='ms-2' />
      </div>
      <footer>
        <div>

        <LogoIcon />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={icon} alt='ingressive icon' />
        </div>
      </footer>

    </div>
  );
}

export default App;
