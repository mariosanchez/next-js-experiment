import Link from "next/link";
import styled from "react-emotion";

const HeaderWrapper = styled.div`
a {
  margin-right: 15px;
}
`;

const Header = () => (
  <HeaderWrapper>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/emotion">
      <a>Emotion</a>
    </Link>
    <Link href="/sagas">
      <a>Redux Sagas</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </HeaderWrapper>
);

export default Header;
