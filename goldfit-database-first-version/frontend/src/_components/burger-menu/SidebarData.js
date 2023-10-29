import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as HiIcons from 'react-icons/hi';
import * as CgIcons from 'react-icons/cg';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/menu',
    icon: <AiIcons.AiOutlineHome/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Avaliar Atleta',
    icon: <FaIcons.FaWpforms />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Antropométrica',
        path: '/evaluateAthlete1',
        icon: <AiIcons.AiOutlineRight/>,
        cName: 'sub-nav'
      },
      {
        title: 'Aeróbica',
        path: '/evaluateAthlete2',
        icon: <AiIcons.AiOutlineRight/>,
        cName: 'sub-nav'
      },
      {
        title: 'Potencial Esportivo',
        path: '/evaluateAthlete3',
        icon: <AiIcons.AiOutlineRight/>,
      },
      {
        title: 'Aspectos Intangíveis',
        path: '/evaluateAthlete4',
        icon: <AiIcons.AiOutlineRight/>,
      }
    ]
  },
  {
    title: 'Relatórios Gerenciais',
    icon: <HiIcons.HiOutlineDocumentReport />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Individual',
        path: '/dados-atleta',
        icon: <AiIcons.AiOutlineRight/>,
      }, 
      {
        title: 'Individual Comparativo',
        path: '/avaliacao-potencial-esportivo',
        icon: <AiIcons.AiOutlineRight/>,
      },
    ]
  },
  {
    title: 'Questionários Atleta',
    icon: <BsIcons.BsClipboardData />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Informação dos Pais',
        path: '/formAthlete1',
        icon: <AiIcons.AiOutlineRight/>,
      }, 
      {
        title: 'Orientação Motivacional',
        path: '/formAthlete2',
        icon: <AiIcons.AiOutlineRight/>,
      },
      {
        title: 'Competência Percebida',
        path: '/formAthlete3',
        icon: <AiIcons.AiOutlineRight/>,
      }, 
      {
        title: 'Habilidades de Coping',
        path: '/formAthlete4',
        icon: <AiIcons.AiOutlineRight/>,
      },
      {
        title: 'Habilidades Táticas',
        path: '/formAthlete5',
        icon: <AiIcons.AiOutlineRight/>,
      }, 
      {
        title: 'Dados Complementares',
        path: '/formAthlete6',
        icon: <AiIcons.AiOutlineRight/>,
      },
    ]
  },
    {
    title: 'Sair',
    path: '/',
    icon: <AiIcons.AiOutlineCloseCircle />
  }
];
