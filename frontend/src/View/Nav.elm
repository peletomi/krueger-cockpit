module View.Nav where

import Html exposing (..)
import Html.Attributes exposing (..)

import Util.Html exposing (classes)

type alias Menu = (String, String)

spanIconBar = span [ class "icon-bar" ] []

navHeader =
  div [ classes "navbar-header" ] [
    button [ type' "button", classes "navbar-toggle collapsed" ] [
      span [ class "sr-only" ] [],
      spanIconBar,
      spanIconBar,
      spanIconBar
    ],
    a [ class "navbar-brand", href "#" ] [ text "Elmer admin" ]
  ]

menuItem menu =
  li [] [ a [ href (snd menu) ] [ text (fst menu)  ]
  ]

navBar menus =
  div [ id "navbar", classes "collapse navbar-collapse" ] [
    ul [ classes "nav navbar-nav" ]
       (List.map menuItem menus)
  ]

nav' menus =
  nav [ classes "navbar navbar-inverse navbar-fixed-top" ] [
    div [ class "container" ] [
      navHeader,
      navBar menus
    ]
  ]
