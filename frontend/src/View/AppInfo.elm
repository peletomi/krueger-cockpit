module View.AppInfo where

import App.Domain as D

import Set as S
import Signal exposing (Address)
import Html exposing (Html, p, div, table, thead, tbody, tr, td, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)

import Util.Html exposing (classes)

type alias Model = { appGroupInfo : List D.AppGroupInfo, openedIds : S.Set String }

type Action =
    Open String
  | Close String

isOpened: D.AppGroupInfo -> Model -> Bool
isOpened agi model =
  S.member agi.applicationId model.openedIds

update: Action -> Model -> Model
update action model =
  case action of
    Open applicationId -> { model | openedIds = S.insert applicationId model.openedIds }
    Close applicationId -> { model | openedIds = S.remove applicationId model.openedIds }

viewAppInfoRow: D.AppInfo -> Html
viewAppInfoRow appInfo = tr [] [ td [] [ text appInfo.applicationId ],
                             td [] [ text appInfo.ip ] ]

viewAppInfoTable: List D.AppInfo -> Html
viewAppInfoTable apps =
  table [ classes "table table-hover"] [
    thead [] [
      tr []
      [ td [] [text "Application id"]
      , td [] [text "Ip"]
      ]],
    tbody [] (List.map viewAppInfoRow apps)]


appGroupText: D.AppGroupInfo -> String
appGroupText agi =
  agi.applicationId ++ " count: " ++ (toString <| List.length agi.appInfo)

viewAppGroupInfoOpened: Address Action -> D.AppGroupInfo -> Model -> Html
viewAppGroupInfoOpened address agi model =
  div [ classes "panel panel-default"
      , onClick address (Close agi.applicationId) ]
  [ div [ class "panel-heading"] [ text <| appGroupText agi ]
  , viewAppInfoTable agi.appInfo]

viewAppGroupInfoClosed: Address Action -> D.AppGroupInfo -> Model -> Html
viewAppGroupInfoClosed address agi model =
  div [ classes "well well-sm"
      , onClick address (Open agi.applicationId) ]
  [ text <| appGroupText agi ]

viewSingleAppGroupInfo: Address Action -> D.AppGroupInfo -> Model -> Html
viewSingleAppGroupInfo address agi model =
  if isOpened agi model then
    viewAppGroupInfoOpened address agi model
  else
    viewAppGroupInfoClosed address agi model

viewAppGroupInfo: Address Action -> Model -> Html
viewAppGroupInfo address model =
  let mfn = (\agi -> viewSingleAppGroupInfo address agi model)
   in div [] (List.map mfn model.appGroupInfo)
