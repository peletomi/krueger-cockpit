module View.ApplicationGroupList where

import App.Domain as D
import View.ApplicationGroup as VAG

import Set as S
import Signal exposing (Address, forwardTo)
import Html exposing (Html, p, div, table, thead, tbody, tr, td, text)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)

import Util.Html exposing (classes)

type alias Model = { applicationGroups : List VAG.Model }

type Action
    = ApplicationGroupInfoChanged (List D.AppGroupInfo)
    | Clicked String VAG.Action


update: Action -> Model -> Model
update action model =
  case action of

    ApplicationGroupInfoChanged applicationGroups -> { model | applicationGroups = applicationGroups }

    Clicked applicationId groupAction ->
        let updateGroup groupModel =
            if applicationId == groupModel.appGroupInfo.applicationId
                then VAG.update groupAction groupModel
                else groupModel
        in
            { model | applicationGroups = List.map updateGroup model.applicationGroups }

view: Address Action -> Model -> Html
view address model =
  let mfn = (\agi -> VAG.view (forwardTo address (Clicked agi.applicationId)) agi model)
   in div [] (List.map mfn model.applicationGroups)
