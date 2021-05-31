/* eslint-disable */
import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { Player } from '@lottiefiles/react-lottie-player';

class SunMoon extends React.Component {
    
    constructor(props) {
        super(props);
        this.player = React.createRef();
        // Este enlace es necesario para hacer que `this` funcione en el callback
        //this.clickHandler = this.clickHandler.bind(this);
    }
    
    render() {
        const clickHandler = (target) => {
            this.player.current.setPlayerSpeed(2)
            if (target) {
                this.player.current.play();
                setTimeout(() => {
                this.player.current.pause();
                }, 2000);
                
            }else {
                this.player.current.play();
            }
            this.player.current.setPlayerDirection(target ? 1 : -1);
          };
        return (
            <ThemeToggler>
                {({ theme, toggleTheme }) => (            
                    <label>
                        <input
                            type="checkbox"
                            className="theme-changer"
                            onClick={e => clickHandler(e.target.checked)} 
                            onChange={e => toggleTheme(e.target.checked ? 'ligth' : 'dark')}
                            checked={theme === 'ligth'}
                        />{' '}
                        <Player
                            ref={this.player} // set the ref to your class instance
                            autoplay={true}
                            loop={false}
                            controls={false}
                            src="https://assets3.lottiefiles.com/private_files/lf30_kqshlcsx.json"
                            style={{ height: '80px', width: '80px' }}
                        ></Player>
                    </label>
                )}
            </ThemeToggler>
        
        );
    }
}

export default SunMoon;


/*
import React,{ useRef, useEffect, useState, createRef } from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { Player } from '@lottiefiles/react-lottie-player';

function SunMoon() {

    const player = createRef();
    const [isDay, setIsDay] = useState(true);
    useEffect(() => {
        // Update the document title using the browser API
        if(isDay){ 
            this.player.current.setPlayerDirection(-1);
        }else{ 
            this.player.current.setPlayerDirection(1);
        }        
    });
    
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
                    <Player
                        onEvent={() => setIsDay(!isDay)} 
                        ref={player} // set the ref to your class instance
                        autoplay={true}
                        loop={true}
                        controls={true}
                        speed={2}
                        direction={this.player.direction}
                        src="https://assets9.lottiefiles.com/private_files/lf30_kqshlcsx.json"
                        style={{ height: '80px', width: '80px' }}
                    ></Player>
                </label>
            )}
        </ThemeToggler>
    );
    
}

export default SunMoon;

*/
