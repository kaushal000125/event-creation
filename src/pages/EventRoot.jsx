import React from 'react'
import EventNavigation from '../components/EventsNavigation';
import { Outlet } from 'react-router-dom';

const EventRootLayout = () => {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  )
}

export default EventRootLayout
