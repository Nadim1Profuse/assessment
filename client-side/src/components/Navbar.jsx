import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>  
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Pokémon GO
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;