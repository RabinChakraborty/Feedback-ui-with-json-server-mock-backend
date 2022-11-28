function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: 'black',
    color: 'pink',
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

export default Header;
