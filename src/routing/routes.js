import {  Redirect } from 'react-router-dom'
import React from 'react'
import SetsCmp from '../pages/sets/SetsCmp';
import EpisodeCmp from '../pages/episode/EpisodeCmp';

export const routes = [
                        { path: '/',
                          exact: true,
                          main: () => <Redirect to="/sets"/>,
                        },
                        { path: '/sets',
                          exact:true,
                          main: SetsCmp,
                        },
                        { path: '/sets/:id',
                          exact:true,
                          main: EpisodeCmp,
                        }
                      ]
