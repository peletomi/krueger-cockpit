module View.ApplicationGroup where

import App.Domain as D

import Set as S
import Signal exposing (Address)
import Html exposing (Html, p, div, table, thead, tbody, tr, td, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)

import Util.Html exposing (classes)

type alias Model = { applicationGroup : D.ApplicationGroup, panelState : PanelState }

type PanelState = Opened
                | Closed

type Action = ApplicationGroupChanged D.ApplicationGroup
            | ChangePanelState


changeState: PanelState -> PanelState
changeState panelState =
    case panelState of
        Opened -> Closed
        Closed -> Opened

update: Action -> Model -> Model
update action model =
  case action of
    ApplicationGroupChanged applicationGroup -> { model | applicationGroup = applicationGroup }
    ChangePanelState -> { model | panelState = changeState model.panelState }


viewApplication: D.Application -> Html
viewApplication appInfo = tr [] [ td [] [ text appInfo.applicationId ],
                             td [] [ text appInfo.ip ] ]


viewApplicationTable: List D.AppInfo -> Html
viewApplicationTable apps =
  table [ classes "table table-hover"] [
    thead [] [
      tr []
      [ td [] [text "Application id"]
      , td [] [text "Ip"]
      ]],
    tbody [] (List.map viewApplication apps)]


appGroupText: D.ApplicationGroup -> String
appGroupText agi =
  agi.applicationId ++ " count: " ++ (toString <| List.length agi.appInfo)


viewApplicationGroupOpened: Address Action -> D.ApplicationGroup -> Model -> Html
viewApplicationGroupOpened address agi model =
  div [ classes "panel panel-default"
      , onClick address ChangePanelState ]
  [ div [ class "panel-heading"] [ text <| appGroupText agi ]
  , viewApplicationTable agi.appInfo]


viewApplicationGroupClosed: Address Action -> D.ApplicationGroup -> Model -> Html
viewApplicationGroupClosed address agi model =
  div [ classes "well well-sm"
      , onClick address ChangePanelState ]
  [ text <| appGroupText agi ]


view: Address Action -> D.ApplicationGroup -> Model -> Html
view address agi model =
  case model.panelState of
    Opened -> viewApplicationGroupOpened address agi model
    Closed -> viewApplicationGroupClosed address agi model