export default function Footer() {
  return (
    <footer>
      <div style={{ backgroundColor: '#222', color: '#ccc', padding: '40px 0', fontFamily: 'Arial, sans-serif' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
          }}        >
          <div style={{ width: '25%' }}>
            <h3 style={{ color: '#fff', marginBottom: '20px' }}>Company</h3>
            <p>Our mission is to deliver exceptional services and solutions to our clients, making sure to meet their needs.</p>
          </div>
          <div style={{ width: '25%' }}>
            <h3 style={{ color: '#fff', marginBottom: '20px' }}>Navigation</h3>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>
                  Home
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>
                  Services
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>
                  Blog
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div style={{ width: '25%' }}>
            <h3 style={{ color: '#fff', marginBottom: '20px' }}>Contact Us</h3>
            <p>Email: support@company.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Business Avenue, City, Country</p>
          </div>
          <div style={{ width: '25%' }}>
            <h3 style={{ color: '#fff', marginBottom: '20px' }}>Follow Us</h3>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: '#ccc', fontSize: '24px' }}>
                &#x1F426;   </a>
              <a href="#" style={{ color: '#ccc', fontSize: '24px' }}>
                &#x1F30D;     </a>
              <a href="#" style={{ color: '#ccc', fontSize: '24px' }}>
                &#x1F4F7;
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            textAlign: 'center',
            marginTop: '30px',
            borderTop: '1px solid #444',
            paddingTop: '20px',
            color: '#999',
          }}
        >
          <p>&copy; 2024 Your Company | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
