module View.MainView where

import Html exposing (Html, div)
import Html.Attributes exposing (..)
import Signal exposing (Address)
import Set as S

import View.Nav exposing (..)
import View.AppInfo exposing (..)
import App.Domain as D


type alias Model = { appGroupInfo : List D.AppGroupInfo, openedIds : S.Set String }


updateMain: View.AppInfo.Action -> Model -> Model
updateMain action model = update action model 


viewMain: Address View.AppInfo.Action -> Model -> Html
viewMain address model = div [ ] [
    nav' [ ("Home", "#home") ],

    div [ class "container" ] [
      div [ class "row" ] [
        viewAppGroupInfo address model
        ]]]
