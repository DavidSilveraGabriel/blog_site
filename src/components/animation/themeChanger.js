/* eslint-disable */
import React,{ useRef, useEffect } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { RiveAnimation } from 'rive-js';

const Toggler = () => {
   
  const canvas = useRef(null)
  const container = useRef(null)
  const animation = useRef(null)

  useEffect(() => {
    let sunshine = true;
    
    animation.current = new RiveAnimation({ 
      src: '../switch_butom.riv',
      canvas: canvas.current,
      autoplay: true,
     });

     
    const toggle = () =>{
      animation.current.play(sunshine ? 'switch_day' : 'nigth_idle');
      sunshine = !sunshine;
    };

    resize();
    window.addEventListener('resize',resize);
    canvas.current?.addEventListener('click', toggle);

    return () => {
      animation.current?.stop()
      window.removeEventListener('resize', resize);
    };

   },[]);

  const resize = () => {
    if(container.current && canvas.current) {
      const { width, height } = container.current.getBoundingClientRect();
      canvas.current.width = width;
      canvas.current.height = height;
    }
  };
  
  return (            
      <ThemeToggler>
        {({ theme, toggleTheme }) => (            
            <label>
              <input
                type="checkbox"
                className="theme-changer"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              <div ref={container} className='OuterContainer'>
                <canvas  ref={canvas}/>
              </div>
            </label>
        )}
      </ThemeToggler>
      
  );
}

export default Toggler;
/*

<ThemeToggler>
        {({ theme:any, toggleTheme:any }) => (
          <label>
            <input
              type="checkbox"
              className="theme-changer"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
                <canvas ref={canvas} />
          </label>
        )}
      </ThemeToggler>

      
import { Player } from '@lottiefiles/react-lottie-player';
<Player
  onEvent={theme => {
    if (theme === 'dark') console.log("estamos en dark mode")// check event type and do something
  }}
  //ref={this.player}  //set the ref to your class instance
  autoplay={true}
  loop={true}
  controls={false}
  src="https://assets5.lottiefiles.com/private_files/lf30_kqshlcsx.json"
  style={{ height: '80px', width: '80px' }}
></Player>
*/