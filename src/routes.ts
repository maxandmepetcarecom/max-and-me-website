import { createBrowserRouter } from 'react-router'
import Home from './Home'
import AdventureClub from './AdventureClub'
import PetCareServices from './PetCareServices'
import SpecialCare from './SpecialCare'
import Pricing from './Pricing'
import AdventureJournal from './AdventureJournal'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/adventure-club',
    Component: AdventureClub,
  },
  {
    path: '/services',
    Component: PetCareServices,
  },
  { path: '/special-care', Component: SpecialCare },
  { path: '/pricing', Component: Pricing },
  { path: '/adventure-journal', Component: AdventureJournal },
])
