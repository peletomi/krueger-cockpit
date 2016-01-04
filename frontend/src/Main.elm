module Main where

import Html exposing (Html, div)
import Html.Attributes exposing (..)
import Signal exposing (Address)
import StartApp.Simple exposing (start)
import Set as S

import App.Domain as D
import App.ApiReading as Api
import View.Nav exposing (..)
import View.ApplicationGroupList as VAGL

type alias Model = { applicationGroupList : VAGL.Model }

type Action = ApplicationGroupInfoChanged (List D.AppGroupInfo)

update: Action -> Model -> Model
update action model =
    case action of
        ApplicationGroupInfoChanged appGroupInfo -> VAGL.update (VAGL.ApplicationGroupInfoChanged appGroupInfo) model

init = { appGroupInfo = [], openedIds = S.empty }

view: Address Action -> Model -> Html
view address model = div [ ] [
    nav' [ ("Home", "#home") ],

    div [ class "container" ] [
      div [ class "row" ] [
        VAGL.view address model
        ]]]

main =
  StartApp.Simple.start
    { model = init
    , update = update
    , view = view
    }