'use client';
import { useAppDispatch, useAppSelector } from '@/GlobalRedux/hooks';
import {
  dropDown,
  setCurrentWidth,
  togglerLoginModal,
  togglerRegisterModal,
  togglerSideBar,
} from '@/GlobalRedux/store/reducers/home';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const NavBar = () => {
  const dispatch = useAppDispatch();
  const isDropDownMenuOpen = useAppSelector((state) => state.home.dropDown);
  const isSideBarOpen = useAppSelector((state) => state.home.sideBar);
  const navBarWidth = useAppSelector((state) => state.home.currentWidth);
  const isLoginModalOpen = useAppSelector((state) => state.home.loginModal);
  const isRegisterModalOpen = useAppSelector(
    (state) => state.home.registerModal
  );

  function toggleDropdown() {
    dispatch(dropDown(!isDropDownMenuOpen));
  }

  function toggleSideBar() {
    dispatch(togglerSideBar(!isSideBarOpen));
    dispatch(setCurrentWidth(isSideBarOpen ? '100%' : 'calc(100% - 256px)'));
  }

  function toggleLoginModal() {
    dispatch(togglerLoginModal(!isLoginModalOpen));
  }

  function toggleRegisterModal() {
    dispatch(togglerRegisterModal(!isRegisterModalOpen));
  }

  return (
    <header className="Header flex justify-end">
      <nav
        className={`navbar bg-base-100 z-[1] bg-transparent flex items-center justify-between`}
        style={{ width: navBarWidth }}
      >
        <div className="flex mx-4">
          <button className="btn btn-square btn-ghost" onClick={toggleSideBar}>
            <img src="/ufo-svgrepo-com.svg" alt="ovni-icon" />
          </button>
        </div>
        <div className="flex-auto">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered input-primary input-sm w-full max-w-sm"
          />
          <button className="mx-4 btn btn-outline btn-primary btn-sm">
            OK
          </button>
        </div>
        <div className="flex justify-center w-full">
          <p className="alien-font shadow-neon text-[22px] tracking-[0.5em]">
            texte anime extraterrestre
          </p>
        </div>
        <div className="flex-none">
          <div className="avatar m-2">
            <div
              className="w-10 rounded-full ring ring-primary cursor-pointer"
              onClick={() => {
                toggleDropdown();
              }}
            >
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="profil-picture"
              />
            </div>
            {isDropDownMenuOpen && (
              <div className="absolute right-0 w-48 mt-16 py-2 bg-neutral rounded-lg shadow-xl">
                <button
                  className="block px-4 py-2 text-primary hover:bg-indigo-500 hover:text-white"
                  onClick={toggleLoginModal}
                >
                  Login
                </button>
                <LoginModal />
                <button
                  className="block px-4 py-2 text-primary hover:bg-indigo-500 hover:text-white"
                  onClick={toggleRegisterModal}
                >
                  Register
                </button>
                <RegisterModal />

                <a
                  href="#"
                  className="block px-4 py-2 text-primary hover:bg-indigo-500 hover:text-white"
                >
                  Option 3
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
