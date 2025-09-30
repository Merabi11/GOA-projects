function Nav({ title, textColor, bgColor }) {
  return (
    <nav>
      <h1 style={{ color: textColor }}>{title}</h1>
      <ul
        style={{
          color: textColor,
          backgroundColor: bgColor,
          padding: '20px',
          display: 'flex',
          gap: '50px',
          listStyle: 'none',
          fontSize: '20px',
          borderRadius: '100px',
          cursor: 'pointer',
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
