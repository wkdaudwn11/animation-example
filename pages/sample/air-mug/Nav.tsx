import Link from "next/link";

import * as S from "./style";

const Nav = () => {
  return (
    <>
      <S.GlobalNav>
        <S.GlobalNavLinks>
          <Link href="#" className="global-nav-item">
            Rooms
          </Link>
          <Link href="#" className="global-nav-item">
            Ideas
          </Link>
          <Link href="#" className="global-nav-item">
            Stores
          </Link>
          <Link href="#" className="global-nav-item">
            Contact
          </Link>
        </S.GlobalNavLinks>
      </S.GlobalNav>
      <S.LocalNav>
        <S.LocalNavLinks>
          <Link href="#" className="product-name">
            AirMug Pro
          </Link>
          <Link href="#">개요</Link>
          <Link href="#">제품사양</Link>
          <Link href="#">구입하기</Link>
        </S.LocalNavLinks>
      </S.LocalNav>
    </>
  );
};

export default Nav;
