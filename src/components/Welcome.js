import React from 'react';

class Welcome extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  
  render() {

    let welcomeClass = ['welcome'];
    
    if(this.state.addClass) {
      welcomeClass.push('hidden');
      document.body.classList.remove('no-scroll');
    }
    
    return (
      <div className={welcomeClass.join(' ')}>
        <div className="welcome__inner">
          <h1 className="welcome__site-name">Tapsie</h1>
          <p className="welcome__text">find your favorite breweries.</p>
          <button className="welcome__btn" onClick={this.toggle.bind(this)}>Explore</button>
        </div>
      </div>
    )
  }
}

export default Welcome;