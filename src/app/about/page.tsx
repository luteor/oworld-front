'use client';

// Reducer Actions
import { setLoading } from '@/GlobalRedux/store/reducers/home';
// Redux Hooks
import { useAppDispatch, useAppSelector } from '@/GlobalRedux/hooks';
// React Hooks
import { useState } from 'react';
// Redux Hooks
import { useAppSelector } from '@/GlobalRedux/hooks';
// Component
import AnimatedText from '@/utils/motion';
import CardProfil from '@/components/CardProfil';
import { useMediaQuery } from 'react-responsive';

export default function Page() {
  const aboutWidth = useAppSelector((state) => state.home.currentWidth);
  const isSideBarOpen = useAppSelector((state) => state.home.sideBar);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const [active, setActive] = useState('1');
  const infos = [
    {
      id: 1,
      imgUrl: '/paul-avatar.png',
      activeImgUrl:
        'https://ca.slack-edge.com/T04F6TNDUEL-U04FTNQRNAF-2aaf24566a07-512',
      title: 'Benjamin',
      role: 'Product OWNER / Scrum Master',
      gitUrl: 'https://github.com/OSAKA-BEN',
    },
    {
      id: 2,
      imgUrl: '/paul-avatar.png',
      activeImgUrl:
        'https://ca.slack-edge.com/T04F6TNDUEL-U04G62YH909-3419cf2da36e-512',
      title: 'Can',
      role: 'Lead Dev Front',
      gitUrl: 'https://github.com/Canoral',
    },
    {
      id: 3,
      imgUrl: '/paul-avatar.png',
      activeImgUrl:
        'https://ca.slack-edge.com/T04F6TNDUEL-U04H9P6RYQN-425f0318824d-512',
      title: 'Léo',
      role: 'Git master / Référent technique',
      gitUrl: 'https://github.com/leo-turco',
    },
    {
      id: 4,
      imgUrl: '/paul-avatar.png',
      activeImgUrl:
        'https://ca.slack-edge.com/T04F6TNDUEL-U04GK9G2T3J-888ff9ac7478-512',
      title: 'Loïc',
      role: 'Lead Dev Back',
      gitUrl: 'https://github.com/Loic-Dubrion',
    },
  ];

  return (
    <>
      {loading ? (
        <FullPageLoader />
      ) : (
        <>
          <section
            className={`p-4 flex flex-col items-center justify-center  
          ${isSideBarOpen ? 'float-right' : ''}`}
            style={isSideBarOpen ? { width: aboutWidth } : {}}
          >
            <div className="container px-4 mx-auto w-full">
              <div className="xl:max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl text-white font-bold tracking-tighter leading-tight">
                  TEAM
                </h1>
                <AnimatedText text="TEAM" />
                <p className="text-lg md:text-xl text-white font-medium">
                  Meet the aliens who made this possible
                </p>
              </div>
              <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                {infos.map((info, index) => (
                  <CardProfil
                    key={info.id}
                    {...info}
                    index={index}
                    active={active}
                    handleClick={setActive}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
    <section
      className="p-4 flex flex-col items-center justify-center orbitron-font"
      style={
        isSideBarOpen
            ? isLargeScreen
                ? { width: aboutWidth, float: 'right' }
                : { width: '100%', float: 'none' }
            : {}
      }
    >
      <div className="container px-4 mx-auto w-full">
        <div className="xl:max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl text-white font-bold tracking-tighter leading-tight">
            TEAM
          </h1>
          <AnimatedText text="TEAM" />
          <p className="text-lg md:text-xl text-white font-medium">
            Meet the aliens who made this possible
          </p>
        </div>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {infos.map((info, index) => (
            <CardProfil
              key={info.id}
              {...info}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
